import React from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import StudentForm from '../../../components/EditForms/Student/';

import api from '../../../services/api';

export default function StudentEdit() {

    const { formData } = useLocation().state;

    async function handleSubmit(data, { resetForm }) {

        try {
            const res = await api.put(`/students/${formData.id}` , data);
            toast.success(`Dados do aluno ${res.data.name} alterados!`);

        } catch (err) {
            toast.error(`Erro ao processar a requisição`);
        };
    };

    return (
        <StudentForm
            actionType={'Edição'}
            initialData={formData}
            handleSubmit={handleSubmit}
        />
    );
};