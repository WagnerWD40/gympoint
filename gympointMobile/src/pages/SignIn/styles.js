import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 30px;
    background: #FFF;
`;

export const Logo = styled.Image`
    align-self: center;
    margin-bottom: 20px;
    
`;

export const Input = styled.TextInput`
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;