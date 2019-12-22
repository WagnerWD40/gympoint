import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../store/UserContext';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Container,
    ButtonView,
    List,
} from './styles';

import Button from '../../components/Button';
import SingleCheckIn from '../../components/SingleCheckIn';

import api from '../../services/api';

export default function CheckIn() {
    const [ checkIns, setCheckIns ] = useState([]);

    const { id } = useContext(UserContext);

    useEffect(() => {
        async function loadCheckIns() {
            const res = await api.get(`students/${id}/checkins`);

            setCheckIns(res.data);
        };

        loadCheckIns();

    }, [id]);

    async function handleCheckIn() {
        try {
            const res = await api.post(`students/${id}/checkins`);


            setCheckIns([
                ...checkIns,
                res.data,
            ]);

        } catch (err) {
            console.log(err);
        };     
    };

    return (
        <Container>
            <ButtonView>
                <Button onPress={handleCheckIn}>
                    Novo check-in
                </Button>
            </ButtonView>

            <List
                data={checkIns.reverse()}
                renderItem={({ item }) => (
                    <SingleCheckIn data={item} />           
                )}
                keyExtractor={item => String(item.id)}
                extraData={checkIns}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
};

CheckIn.navigationOptions = {
    tabBarLabel: 'Check-ins',
    tabBarIcon: ({ tintColor }) => (
        <Icon name='edit-location' size={24} color={tintColor} />
    ),
};