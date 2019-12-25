import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { UserContext } from '../../store/UserContext';

import {
    Container,
    OrderList,
    ButtonView
} from './styles';

import Button from '../../components/Button';
import HelpOrder from '../../components/HelpOrder';

import api from '../../services/api';

export default function AskForHelp({ navigation }) {
    const [ helpOrders, setHelpOrder ] = useState([]);

    const { id } = useContext(UserContext);

    useEffect(() => {

        loadHelpOrders();

    }, [helpOrders]);

    async function loadHelpOrders() {
        const res = await api.get(`students/${id}/help-orders`);

        setHelpOrder(res.data);
    };

    function handleNewQuestion() {
        navigation.navigate('QuestionScreen',
            { id, onSubmit: () => loadHelpOrders()}
        );
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
                extraData={helpOrders}
                removeClippedSubviews
                renderItem={({ item })  => (
                    <TouchableOpacity
                        onPress={() => handlePressOrder(item)}
                        style={{height: 150}}
                    >
                        <HelpOrder data={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}              
            />
        </Container>
    );
};
