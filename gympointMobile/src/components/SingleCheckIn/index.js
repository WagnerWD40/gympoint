import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { CheckIn, Left, Right } from './styles';

export default function SingleCheckIn({ data }) {
    const dateParsed = useMemo(() => {
        return formatRelative(parseISO(data.createdAt), new Date, {
            locale: ptBR,
            addSuffix: true,
        });
    }, [data.createdAt]);

    return (
        <CheckIn>           
            <Left>Check-In #{String(data.id)}</Left>
            <Right>{dateParsed}</Right>
        </CheckIn>
    );
};