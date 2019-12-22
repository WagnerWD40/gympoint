import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../store/UserContext';

import { Container, OrderList, ButtonView } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../components/Button';
import HelpOrder from '../../components/HelpOrder';

import api from '../../services/api';

export default function AskForHelp({ navigation }) {
    const [ helpOrders, setHelpOrder ] = useState([]);

    const { id } = useContext(UserContext);

    useEffect(() => {

        loadHelpOrders();

    }, []);

    async function loadHelpOrders() {
        const res = await api.get(`students/${id}/help-orders`);

        setHelpOrder(res.data);
    };

    function handleNewQuestion() {
        navigation.navigate('QuestionScreen', { id, onSubmit: () => loadHelpOrders()});
    };

    function handlePressOrder(item) {
        navigation.navigate('AnswerScreen', { item });
    };

    return (
        <Container>
            <ButtonView>
                <Button onPress={handleNewQuestion}>
                    Novo pedido de auxílio
                </Button>
            </ButtonView>

            <OrderList
                data={helpOrders}
                windowSize={5}
                initialListSize={5}
                initialNumToRender={5}
                maxToRenderPerBatch={6}
                removeClippedSubviews  // optional
                renderItem={({ item })  => (
                    <TouchableOpacity onPress={() => handlePressOrder(item)}>
                        <HelpOrder data={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                extraData={helpOrders}
            />
        </Container>
    );
};

AskForHelp.navigationOptions = {
    tabBarLabel: 'Pedir ajuda',
    tabBarIcon: ({ tintColor }) => (
        <Icon name='live-help' size={24} color={tintColor} />
    ),
};