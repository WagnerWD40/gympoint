import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.png'

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido.')
        .required('O e-mail é obrigatório.'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SingIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    };

    return (
        <Container>
            <img src={logo} alt='Gympoint' />

            <Form schema={schema} onSubmit={handleSubmit}>
                <label>SEU E-MAIL</label>
                <Input 
                    name='email'
                    type='email'
                    placeholder='exemplo@email.com'
                />
                <label>SUA SENHA</label>
                <Input 
                    name='password'
                    type='password'
                    placeholder='*************'
                />

                <button type='submit'>
                    {loading ? 'Carregando...' : 'Entrar no Sistema'}
                </button>
            </Form>
        </Container>
    );
};