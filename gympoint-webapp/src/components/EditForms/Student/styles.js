import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 30px;
    max-width: 800px;
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
        display: flex;
        flex-direction: column;
        font-weight: bold;
        color: #333;

        input {
            height: 40px;
            border-radius: 4px;
            border: 1px solid #ccc;
            margin: 10px 0 15px 0;
            padding: 10px;
        }

        span {
            font-size: 50px;
        }

        div {
            display: flex;
            flex-grow: 1;

            div {
                display: flex;
                flex-direction: column;
                
                & + div {
                    margin-left: 15px;
                }
            }
        }
    }
`;
