import React from 'react';
import { Text } from 'react-native';

import { Container, Logo } from './styles';

import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <Container>
            <Logo style={{ resizeMode: 'contain' }} source={logo} />
        </Container>
    );
};