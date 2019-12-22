import React, { useState, useEffect } from 'react';

import InfoTable from '../../../components/InfoTable';

import api from '../../../services/api';
import history from '../../../services/history';

export default function StudentManagement() {
    const [ students, setStudent ] = useState([]);

    useEffect(() => {
        async function loadStudents() {
            const res = await api.get('students');

            setStudent(res.data);
        };

        loadStudents();

    }, []);

    function handleRegistry() {
        history.push('/register/students');
    };

    function handleDelete(item) {
        if (window.confirm(`Deseja deletar ${item.name}?`)) {
            api.delete(`students/${item.id}`);

            const updatedStudents = students.filter(student => student.id !== item.id);
            console.tron.log(updatedStudents);
            setStudent(updatedStudents);

        };
    };

    async function handleSearch(search) {

        const res = await api.get(`students?name=%${search}%`);

        console.log(res.data);

        if (!res.data) { return };

        setStudent(res.data);
    };

    return (
        <InfoTable
            dataType='alunos'
            data={students}
            editRoute={'students'}
            dataInfo={['id', 'name', 'email', 'age']}
            tableHeader={['NOME', 'E-MAIL', 'IDADE']}
            registryButton={true}
            search={true}
            editButton={true}
            deleteButton={true}
            handleRegistry={handleRegistry}
            handleSearch={handleSearch}
            handleDelete={handleDelete}
        />
    );
};
