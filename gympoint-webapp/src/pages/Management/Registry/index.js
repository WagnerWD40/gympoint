import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO, addHours } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Container, Subheader, RegistryTable, RegistryData } from './styles';

import { FaPlus, FaCheckCircle } from 'react-icons/fa';

import api from '../../../services/api';
import history from '../../../services/history';

export default function RegistryManagement() {
    const [ registries, setRegistry ] = useState([]);

    useEffect(() => {
        async function loadRegistries() {
            const res = await api.get('registries');

            const formattedData = res.data.map(registry => (
                {
                    ...registry,
                    formattedStartDate: formatDate(registry.start_date),
                    formattedEndDate: formatDate(registry.end_date),
                    planTitle: registry.plan === null ? null : registry.plan.title,
                    studentName: registry.student === null ? null : registry.student.name,
                }
            ));

            setRegistry(formattedData);
        };

        loadRegistries();

    }, []);    

    function formatDate(date) {
        return format(
            addHours(parseISO(date), 3),
            "d 'de' MMMM 'de' yyyy",
            { locale: ptBr },
        )
    };

    function handleRegistry() {
        history.push('/register/registries');
    };

    function handleDelete(item) {
        if (window.confirm(`Deseja deletar matrícula de ${item.student.name}?`)) {
            api.delete(`registries/${item.id}`);

            const updatedRegistries = registries.filter(
                registry => registry.id !== item.id
            );

            setRegistry(updatedRegistries);
        };
    };

    return (
        <Container>
            <Subheader>
                <div>
                    <h1>Gerenciando matrículas</h1>
                </div>
                <div>
                    <button onClick={handleRegistry}>
                        <FaPlus color='#FFF' size={14} />
                        CADASTRAR
                    </button>
                </div>
            </Subheader>
            <RegistryTable>
                <thead>
                    <tr>
                        <th>ALUNO</th>
                        <th>PLANO</th>
                        <th>INÍCIO</th>
                        <th>TÉRMINO</th>
                        <th>ATIVA</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {registries.map(registry => (
                    <RegistryData key={registry.id}>
                        <td>{registry.studentName}</td>
                        <td>{registry.planTitle}</td>
                        <td>{registry.formattedStartDate}</td>
                        <td>{registry.formattedEndDate}</td>
                        <td>{registry.active ? (
                            <FaCheckCircle color='#61cc59' size={20} />
                        ) : (
                            <FaCheckCircle color='#ddd' size={20} />
                        )}</td>
                        <td>
                            <Link
                                to={{ 
                                    pathname: `/edit/registries`,
                                    state: { formData: registry },
                                }}
                            >
                                <button>editar</button>
                            </Link>
                            <button onClick={() => handleDelete(registry)}>
                                apagar
                            </button>
                        </td>
                    </RegistryData>
                ))} 
                </tbody>              
            </RegistryTable>
        </Container>
    );
};