import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as Yup from 'yup';

import { UserContext } from '../../store/UserContext';

import { Container, Input, Logo} from './styles';

import Button from '../../components/Button';

import logo from '../../assets/logo.png'

export default function SignIn({ navigation }) {
    const [ input, setInput ] = useState('');
    
    const { setId } = useContext(UserContext);

    async function handleSubmit() {
        try {
            await AsyncStorage.setItem('@gympoint', input);

            setId(input)

            navigation.navigate('CheckIn');
        } catch (err) {
            console.log(err);
        };      
    };

    return (
        <Container>
            <Logo source={logo} />
            <Input
                placeholder='Informe seu ID de cadastro'
                keyboardType='numeric'
                onChangeText={setInput}
                value={input}
            />
            <Button onPress={handleSubmit}>
                Entrar
            </Button>
        </Container>
    );
};