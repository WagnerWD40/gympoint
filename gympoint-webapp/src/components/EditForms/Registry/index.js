import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { format, addMonths, parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import { 
    Container,
    Subheader,
    FormContainer,
    SelectStudent,
    SelectPlan,
    DatePickerComp,
} from './styles';

import { FaCheck, FaAngleLeft } from 'react-icons/fa';

import history from '../../../services/history';
import api from '../../../services/api';

const schema = Yup.object().shape({
    student_id: Yup.number('Nome de aluno inválido.').required(),
    plan_id: Yup.number('Nome de plano inválido').required(),
    start_date: Yup.string('Data inválida.').required(),
});

export default function RegistryForm({
    maxSize,
    actionType,
    handleApiCall,
    initialData,
}){
    const [ selectedPlan, setSelectedPlan ] = useState('');
    const [ selectedStudent, setSelectedStudent ] = useState('');
    const [ totalPrice, setTotalPrice ] = useState('R$ 0');
    const [ startDate, setStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState('');

    useEffect(() => {
        if(initialData) {
            const { plan, student, start_date } = initialData;

            const studentData = {
                ...student,
                value: student.id, 
                label: student.name, 
            };

            const planData = {
                ...plan,
                value: plan.id,
                label: plan.title,
            };

            setSelectedStudent(studentData);
            setSelectedPlan(planData);
            setStartDate(parseISO(start_date));
        };
    }, []);

    useMemo(() => {
        if (selectedPlan) {
            const { duration, price } = selectedPlan;

            const newEndDate = addMonths(startDate, duration);
    
            setEndDate(format(
                newEndDate,
                "dd/MM/yyyy",
            ));
            setTotalPrice(`R$${duration * price}`);
        };
    }, [selectedPlan, startDate]);

    function handleBack() {
        history.goBack();
    };

    async function loadPlans() {
        const res = await api.get('plans');
        return res.data.map(plan => (
            { ...plan, value: plan.id, label: plan.title }
            ));
    };
    
    async function loadStudents() {
        const res = await api.get(`students?name=%${selectedStudent}%`);
        return res.data.map(student => (
            { ...student, value: student.id, label: student.name }
            ));
    };

    function handlePlanChange(selected) {
        if (selected) {
            setSelectedPlan(selected);
        };

        return selected;
    };

    function handleStudentChange(selected) {
        if (selected) {
            setSelectedStudent(selected);
        };

        return selected;
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            plan_id: selectedPlan.value,
            student_id: selectedStudent.value,
            start_date: format(startDate, "yyyy-MM-dd"),
        };

        if (await schema.isValid(data)) {
            try {
                handleApiCall(data);
                if (actionType === 'Cadastro') {
                    toast.success('Matrícula cadastrada com sucesso!');
                } else {
                    toast.success('Matrícula editada com sucesso!');
                };
            } catch (err) {
                toast.error('Falha ao validar matrícula.');
            };
    
            setSelectedPlan('');
            setSelectedStudent('');
            setTotalPrice('R$ 0');
            setStartDate(new Date());
            setEndDate('');
        } else {
            toast.error('Falha ao validar matrícula, verifique os dados');
        };
    };

    return (
        <Container maxSize={maxSize}>
            <Subheader>
                <div>
                    <h1>{actionType} de matrícula</h1>
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

                <form  
                    id='form' 
                    onSubmit={handleSubmit} 
                >
                    <label>ALUNO</label>
                        <SelectStudent
                            cacheOptions
                            defaultValue={selectedStudent && selectedStudent.name}
                            defaultOptions={false}
                            value={selectedStudent}
                            placeholder='Buscar o aluno'
                            loadOptions={loadStudents}
                            onInputChange={handleStudentChange}
                            onChange={handleStudentChange}
                            className='StudentSelectorContainer'
                            classNamePrefix='StudentSelector'
                        />
                    <div className='SubWrapper'>
                        <div className='LowInput Plan'>
                            <label>PLANO</label>
                            <SelectPlan
                                cacheOptions
                                defaultValue={selectedPlan && selectedPlan.title}
                                defaultOptions={true}
                                value={selectedPlan}
                                placeholder='Selecione o plano'
                                loadOptions={loadPlans}
                                onChange={handlePlanChange}
                                className='PlanSelectorContainer'
                                classNamePrefix='PlanSelector'
                            />
                        </div>
                        <div className='LowInput'>
                            <label>DATA DE INÍCIO</label>
                            <DatePickerComp
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className='Input'
                            />
                        </div>
                        <div className='LowInput'>
                            <label>DATA DE TÉRMINO</label>
                            <input 
                                value={endDate ? endDate : ''}
                                type='text'
                                className='Input'
                                disabled 
                            />
                        </div>
                        <div className='LowInput'>
                            <label>VALOR FINAL</label>
                            <input
                                name='total_price'
                                value={totalPrice}
                                type='text'disabled
                                className='Input'
                            />
                        </div>
                    </div>
                </form> 
            </FormContainer>
        </Container>
    );
};

RegistryForm.propTypes = {
    maxSize: PropTypes.string,
    actionType: PropTypes.string.isRequired,
    initialData: PropTypes.object,
    handleApiCall: PropTypes.func.isRequired,
};