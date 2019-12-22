import React from 'react';
import { useLocation } from 'react-router-dom';

import RegistryForm from '../../../components/EditForms/Registry';
import api from '../../../services/api';

export default function RegistryEdit() {

    const { formData } = useLocation().state;
    
    async function handleApiCall(data) {
        const res = await api.put('registries', data);
    };

    return (
        <RegistryForm
            actionType={'Edição'}
            initialData={formData}
            handleApiCall={handleApiCall}
        />
    );
};