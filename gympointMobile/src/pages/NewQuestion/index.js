import React, { useState } from 'react';

import { Container, TextArea } from './styles';

import Button from '../../components/Button';

import api from '../../services/api';

export default function NewQuestion({ navigation }) {
    const [ question, setQuestion ] = useState('');

    const id = navigation.getParam('id')

    async function handleSubmit() {
        const res = await api.post(`students/${id}/help-orders`, { question });

        setQuestion('');
        navigation.state.params.onSubmit();
        navigation.goBack();
    };

    return (
        <Container>
            <TextArea
                multiline={true}
                numberOfLines={16}
                placeholder='Inclua seu pedido de auxílio'
                onChangeText={setQuestion}
                value={question}
                style={{ textAlignVertical: 'top' }}
            />

            <Button onPress={handleSubmit}>
                Enviar pedido
            </Button>
        </Container>
    )
};