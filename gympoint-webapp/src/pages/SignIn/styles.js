import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    width: 350px;
    border-radius: 4px;
    justify-content: center;
    padding: 30px;

    img {
        margin: 10px auto;
        width: calc(198px * 0.8);
        height: calc(122px * 0.8);
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        label {
            color: #333;
            font-weight: bold;
            font-size: 12px;
            padding: 5px 0;
        }

        input {
            border: 1px solid #ccc;
            border-radius: 4px;
            height: 40px;
            padding: 10px;
            margin-bottom: 10px;
            color: #333;

            &::placeholder {
                color: #ccc;
            }
        }

        span {
            color: #ee4d64;
            align-self: center;
        }

        button {
            background: #ee4d64;
            border: none;
            height: 40px;
            border-radius: 4px;
            color: #FFF;
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 20px;
        }
    }
`;