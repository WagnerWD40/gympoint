import React from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import PlanForm from '../../../components/EditForms/Plan/';

import api from '../../../services/api';

export default function PlanEdit() {

    const { formData } = useLocation().state;

    async function handleSubmit(data) {

        try {
            const res = await api.put(`/plans/${formData.id}` , data);
            toast.success(`Dados do plano ${res.data.title} alterados!`);
        } catch (err) {
            toast.error(`Erro ao processar a requisição`);
        };
    };

    return (
        <PlanForm
        actionType={'Edição'}
        initialData={formData}
        handleSubmit={handleSubmit}
        />
    );
};