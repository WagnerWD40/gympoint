import React from 'react';
import { toast } from 'react-toastify';

import StudentForm from '../../../components/EditForms/Student/';

import api from '../../../services/api';

export default function StudentRegister() {
    async function handleSubmit(data, { resetForm }) {

        try {
            const res = await api.post('/students', data);
            toast.success(`Aluno ${res.data.name} cadastrado!`);
        } catch (err) {
            toast.error(`Erro ao processar a requisição`);
        };
 
        resetForm();
    };

    return (
        <StudentForm
            actionType={'Cadastro'}
            handleSubmit={handleSubmit}
        />
    );
};