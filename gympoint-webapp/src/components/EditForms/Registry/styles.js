import styled from 'styled-components';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 30px;
    max-width: 900px;
`;

export const Subheader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;

    h1 {
        font-size: 20px;
        color: #333;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: row;
    }

    button {
        display: flex;
        padding: 10px 10px;
        background: #cccccc;
        border: none;
        border-radius: 4px;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        width: 110px;
        justify-content: space-evenly;
        align-items: center;
        
        &:nth-last-of-type(1) {
            margin-left: 16px;
            background: #ee4d64;
        }
    }

    span {
        position: absolute;
        right: 190px;
        top: 9px;
    }

    input {
        padding: 6px;
        padding-left: 25px;
        border-radius: 4px;
        border: 1px solid #ccc;
        color: #333;
        margin-left: 12px;

        &::placeholder {
            color: #ccc;
        }
    }
`;

export const FormContainer = styled.div`
    background: #FFF;
    border-radius: 4px;
    padding: 30px;

    form {

        label {
            font-weight: bold;
            color: #333;
        }

        .StudentSelectorContainer {
            margin: 10px 0;
        }
        
        .PlanSelectorContainer {

        }

        .SubWrapper {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            flex-grow: 1;

            .LowInput {
                display: flex;
                flex-direction: column;
            }

            .Plan {
                width: 150px;

                label {
                    margin-bottom: 10px;
                }
            }

            .Input {
                border-radius: 4px;
                border: 1px solid #ccc;
                margin: 10px 0 15px 0;
                padding: 10px;
            }
        }
    }
`;

export const SelectStudent = styled(AsyncSelect)`

`;

export const SelectPlan = styled(AsyncSelect)`

`;

export const DatePickerComp = styled(DatePicker)`

`;



