import React from 'react';

import RegistryForm from '../../../components/EditForms/Registry';
import api from '../../../services/api';

export default function RegistryRegister() {
 
    async function handleApiCall(data) {
        const res = await api.post('registries', data);
    };

    return (
        <RegistryForm
            actionType={'Cadastro'}
            handleApiCall={handleApiCall}
        />
    );
};