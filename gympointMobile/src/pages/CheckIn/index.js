import React, { useEffect, useState, useContext } from 'react';
import { Alert } from 'react-native';

import { UserContext } from '../../store/UserContext';

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

            const formattedCheckins = res.data.map(checkIn => ({
                ...checkIn,
                index: res.data.indexOf(checkIn) + 1,
            }));

            setCheckIns(formattedCheckins.reverse());
        };

        loadCheckIns();

    }, [checkIns]);

    async function handleCheckIn() {
        try {
            const res = await api.post(`students/${id}/checkins`);

            setCheckIns([
                ...checkIns,
                res.data,
            ]);

        } catch (err) {
            console.log(err);
            Alert.alert(
                'Erro',
                'Você só pode realizar 5 check-ins a cada 7 dias!',
                [
                  {text: 'OK'},
                ],
              );
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
                data={checkIns}
                renderItem={({ item }) => (
                    <SingleCheckIn data={item}  />           
                )}
                keyExtractor={item => String(item.id)}
                extraData={checkIns}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
};
