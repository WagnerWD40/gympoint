import React, { useState, useContext } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../store/UserContext';

import { Container, Input, Logo, AIView } from './styles';

import Button from '../../components/Button';

import logo from '../../assets/logo.png'

import api from '../../services/api';

export default function SignIn({ navigation }) {
    const [ input, setInput ] = useState('');
    const [ loading, setLoading ] = useState(false);
    
    const { setId } = useContext(UserContext);

    async function handleSubmit() {
        setLoading(true);

        try {
            await AsyncStorage.removeItem('@gympoint');
            
            await api.get(`students/${input}/checkins`);

            await AsyncStorage.setItem('@gympoint', input);

            setId(input);

            navigation.navigate('CheckIn');
        } catch (err) {
            console.log(err);
            Alert.alert(
                'Erro',
                'ID não localizada.',
                [
                  {text: 'OK'},
                ],
              );

            setId(null);
        };
        
        setLoading(false);
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
                {loading ? (
                    <AIView>
                        <ActivityIndicator size='small' color='#FFF' />
                    </AIView>
                ) : (
                    'Entrar'
                )}
            </Button>
        </Container>
    );
};