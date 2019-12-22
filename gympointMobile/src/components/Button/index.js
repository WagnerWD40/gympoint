import React from 'react';
import { Container, ButtonText } from './styles';

export default function Button({ children, onPress, onSubmit }) {
    return (
            <Container 
                onPress={onPress}
                onSubmitEditing={onSubmit}
            >
                <ButtonText>
                    {children}
                </ButtonText>
            </Container>
    );
};