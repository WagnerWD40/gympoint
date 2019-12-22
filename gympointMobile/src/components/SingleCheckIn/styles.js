import styled from 'styled-components/native';

export const CheckIn = styled.View`
    flex: 1;
    flex-direction: row;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 60px;
    margin-bottom: 16px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background: #FFF;

`;

export const Left = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;

export const Right = styled.Text`
    width: 120px;
    font-size: 16px;
    color: #333;
    text-align: center;
`;