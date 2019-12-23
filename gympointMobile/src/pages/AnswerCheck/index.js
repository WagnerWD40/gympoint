import React, { useMemo } from 'react';

import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { 
    Background,
    Container,
    QuestionHeader,
    Left,
    Right,
    TextBox,
    AnswerHeader,
} from './styles';

export default function AnswerCheck({ navigation }) {
    const { question, answer, createdAt } = navigation.getParam('item');

    const dateParsed = useMemo(() => {
        return formatRelative(parseISO(createdAt), new Date, {
            locale: ptBR,
            addSuffix: true,
        });
    }, [createdAt]);
    
    return (
        <Background>
            <Container>
                <QuestionHeader>
                    <Left>PERGUNTA</Left>
                    <Right>{dateParsed}</Right>
                </QuestionHeader>
                <TextBox>{question}</TextBox>
                <AnswerHeader>
                    <Left>RESPOSTA</Left>
                </AnswerHeader>
                <TextBox>{answer}</TextBox>
            </Container>
        </Background>
    )
};