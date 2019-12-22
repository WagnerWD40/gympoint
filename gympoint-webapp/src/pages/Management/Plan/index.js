import React, { useState, useEffect } from 'react';

import InfoTable from '../../../components/InfoTable';

import api from '../../../services/api';
import history from '../../../services/history';

export default function PlanManagement() {
    const [ plans, setPlan ] = useState([]);

    useEffect(() => {
        async function loadPlans() {
            const res = await api.get('plans');

            const formattedData = res.data.map(plan => (
                {
                    ...plan,
                    formattedMonth: formatMonth(plan.duration),
                    formattedPrice: formatPrice(plan.price),
                }
            ));
                
            setPlan(formattedData);
        };

        loadPlans();

    }, []);  

    function formatMonth(duration) {
        return `${duration} ${duration === 1 ? 'mês' : 'meses'}`
    }

    function formatPrice(price) {
        return `R$ ${price}`
    }

    function handleRegistry() {
        history.push('/register/plans');
    };
    
    function handleDelete(item) {
        if (window.confirm(`Deseja deletar ${item.title}?`)) {
            api.delete(`plans/${item.id}`);

            const updatedPlans = plans.filter(plan => plan.id !== item.id);

            setPlan(updatedPlans);
        };
    };

    return (
        <InfoTable 
            maxSize={'900px'}
            dataType='planos'
            data={plans}
            dataInfo={['id', 'title', 'formattedMonth', 'formattedPrice']}
            tableHeader={['NOME', 'DURAÇÃO', 'VALOR p/MÊS']}
            registryButton={true}
            search={false}
            editButton={true}
            editRoute={'plans'}
            deleteButton={true}
            handleRegistry={handleRegistry}
            handleSearch={() => {}}
            handleEdit={() => {}}
            handleDelete={handleDelete}
        />

    );
};
