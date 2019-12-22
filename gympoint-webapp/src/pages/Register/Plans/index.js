import React from 'react';
import { toast } from 'react-toastify';

import PlanForm from '../../../components/EditForms/Plan/';

import api from '../../../services/api';

export default function PlanRegister() {
    async function handleSubmit(data, { resetForm }) {

        try {
            const res = await api.post('/plans', data);
            toast.success(`Plano ${res.data.title} cadastrado!`);
        } catch (error) {
            toast.error(`Erro ao processar a requisição.`);
        };

        resetForm();
    };

    return (
        <PlanForm
            actionType={'Cadastro'}
            handleSubmit={handleSubmit}
        />
    );
};