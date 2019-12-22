import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container, Subheader, HelpTable, HelpData, Modal } from './styles';

import api from '../../../services/api';

export default function HelpManagement() {
    const [ helpOrders, setHelpOrders ] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
    const [ modalQuestion, setModalQuestion ] = useState('');
    const [ answer, setAnswer ] = useState('');
    const [ answerId, setAnswerId ] = useState('');

    useEffect(() => {
        async function loadHelpOrders() {
            const res = await api.get('/help-orders');

            const nonAnswered = res.data.filter(helpOrder => helpOrder.answer === null)

            setHelpOrders(nonAnswered);
        };

        loadHelpOrders();
    }, []);

    function handleShowModal(question, id) {
        setShowModal(!showModal);
        setModalQuestion(question);
        setAnswerId(id);
    };

    function handleHideModal() {
        setModalQuestion('');
        setAnswer('')
        setShowModal(!showModal);
    };

    function handleTextArea(e) {
        setAnswer(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setShowModal(!showModal);

        try {
            api.put(`help-orders/${answerId}/answer`, { answer });
            toast.success('Resposta enviada ao aluno!')

            const updatedHelpOrders = helpOrders.filter(
                order => order.id !== answerId
            );

            setHelpOrders(updatedHelpOrders);

        } catch (err) {
            toast.error('Erro ao processar a resposta');
        };
    };

    return (
        <>
            <Container>
                <Subheader>
                    <div>
                        <h1>Pedidos de auxílio</h1>
                    </div>
                </Subheader>
                <HelpTable>
                    <thead>
                        <tr>
                            <th>ALUNO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {helpOrders.map(order => (
                            <HelpData key={order.id}>
                                <td>{order.student.name}</td>
                                <td>
                                    <button 
                                        onClick={() => 
                                            handleShowModal(order.question, order.id)
                                    }>
                                        responder
                                    </button>
                                </td>
                            </HelpData>
                    ))} 
                    </tbody>              
                </HelpTable>

            </Container>
            <Modal shown={showModal}>
                <form onSubmit={handleSubmit}>
                    <h1>PERGUNTA DO ALUNO</h1>
                    <p>
                        {modalQuestion}
                    </p>
                    <h1>SUA RESPOSTA</h1>
                    <textarea value={answer} onChange={handleTextArea}/>
                    <button type='submit'>
                        Responder aluno
                    </button>
                    <button type='button' onClick={handleHideModal}>
                        Voltar
                    </button>
                </form>    
            </Modal>
        </>
    );
};