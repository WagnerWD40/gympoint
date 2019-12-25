import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
    Container,
    Header,
    AnswerStatus,
    AnswerStatusText,
    DateOfCreation,
    Question
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HelpOrder({ data }) {
    const dateParsed = useMemo(() => {
        return formatRelative(parseISO(data.createdAt), new Date, {
            locale: ptBR,
            addSuffix: true,
        });
    }, [data.createdAt]);

    return (
        <Container>
            <Header>
                <AnswerStatus>
                    {
                        data.answer ? (
                        <>
                            <Icon
                                name='check-circle'
                                size={20}
                                color='#61cc59'
                            />
                            <AnswerStatusText style={{ color: '#61cc59' }}>
                                Respondido
                            </AnswerStatusText>
                        </>
                        ) : (
                        <>
                            <Icon
                                name='check-circle'
                                size={20}
                                color='#ccc'
                            />
                            <AnswerStatusText style={{ color: '#ccc' }}>
                                Sem Resposta
                            </AnswerStatusText>
                        </>
                    )}
                </AnswerStatus>
                <DateOfCreation>{dateParsed}</DateOfCreation>
            </Header>
            <Question>{data.question}</Question>
        </Container>
    );
};