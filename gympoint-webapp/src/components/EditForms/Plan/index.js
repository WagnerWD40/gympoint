import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { 
    Container,
    Subheader,
    FormContainer,
} from './styles';

import { Form, Input } from '@rocketseat/unform';

import { FaCheck, FaAngleLeft } from 'react-icons/fa';

import history from '../../../services/history';

const schema = Yup.object().shape({
    title: Yup.string().required(),
    duration: Yup.number().required(),
    price: Yup.number().required(),
});

export default function PlanForm({
    maxSize,
    actionType,
    initialData,
    handleSubmit,
}){
    const [ durationShown, setDurationShown ] = useState('');
    const [ priceShown, setPriceShown ] = useState('');
    const [ totalPrice, setTotalPrice ] = useState('');
    
    useMemo(() => {
        if (priceShown && durationShown) {
            setTotalPrice(`R$${priceShown * durationShown}`);
        };
    }, [priceShown, durationShown]);

    function handleBack() {
        history.goBack();
    };

    function handleDurationChange(e) {
        setPriceShown(e.target.value);
    };
    
    function handlePriceChange(e) {
        setDurationShown(e.target.value);
    };

    return (
        <Container maxSize={maxSize}>
            <Subheader>
                <div>
                    <h1>{actionType} de plano</h1>
                </div>
                    <div>
                        <button onClick={handleBack}>
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
                    id='form'
                    initialData={initialData}
                    onSubmit={handleSubmit}

                >
                    <label>TÍTULO DO PLANO</label>
                    <Input name='title' type='text' />
                    <div>
                        <div>
                            <label>DURAÇÃO (em meses)</label>
                            <Input
                                name='duration'
                                type='text'
                                onChange={handleDurationChange}
                            />
                        </div>
                        <div>
                            <label>PREÇO MENSAL</label>
                            <Input
                                name='price'
                                type='text'
                                onChange={handlePriceChange}
                            />
                        </div>
                        <div>
                            <label>PREÇO TOTAL</label>
                            <Input
                                name='totalprice'
                                type='text'
                                value={totalPrice}
                                disabled 
                            />
                        </div>
                    </div>
                </Form> 
            </FormContainer>
        </Container>
    );
};

PlanForm.propTypes = {
    maxSize: PropTypes.string,
    actionType: PropTypes.string.isRequired,
    initialData: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
};