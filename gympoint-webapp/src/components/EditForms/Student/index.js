import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { 
    Container,
    Subheader,
    FormContainer,
} from './styles';

import { Form, Input } from '@rocketseat/unform';

import { FaCheck, FaAngleLeft } from 'react-icons/fa';

import history from '../../../services/history';

const schema = Yup.object().shape({
    name: Yup.string()
        .required('O nome é obrigatório.'),
    email: Yup.string()
        .email('Insira um email válido.')
        .required('O e-mail é obrigatório.'),
    age: Yup.number()
        .required('A idade é obrigatória'),
    weight: Yup.number(),
    heigth: Yup.number(),
});

export default function StudentForm({
    maxSize,
    actionType,
    initialData,
    handleSubmit,
}){

    function handleBack() {
        history.goBack();
    };

    return (
        <Container maxSize={maxSize}>
            <Subheader>
                <div>
                    <h1>{actionType} de aluno</h1>
                </div>
                    <div>
                        <button type='button' onClick={handleBack}>
                            <FaAngleLeft color='#FFF' size={20} />
                            VOLTAR
                        </button>
                        <button type='submit' form='form'>
                            <FaCheck color='#FFF' size={14} />
                            SALVAR
                        </button>                
                    </div>
            </Subheader>
            <FormContainer>
                <Form
                    schema={schema}
                    onSubmit={handleSubmit}
                    id='form'
                    initialData={initialData}
                >
                    <label>NOME COMPLETO</label>
                    <Input
                        name='name'
                        type='text'
                        placeholder='John Doe' 
                    />
                    <label>ENDEREÇO DE E-MAIL</label>
                    <Input
                        name='email'
                        type='email'
                        placeholder='exemplo@email.com'
                    />
                    <div>
                        <div>
                            <label>IDADE</label>
                            <Input name='age' type='text' />
                        </div>
                        <div>
                            <label>PESO (em kg)</label>
                            <Input name='weight' type='text' />
                        </div>
                        <div>
                            <label>ALTURA</label>
                            <Input
                                name='heigth'
                                type='text'
                            />
                        </div>
                    </div>
                </Form>
            </FormContainer>
        </Container>
    );
};

StudentForm.propTypes = {
    maxSize: PropTypes.string,
    actionType: PropTypes.string.isRequired,
    initialData: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
};