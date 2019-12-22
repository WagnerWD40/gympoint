import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    padding: 20px;
    background: #eee;
`;

export const Container = styled.View`
    background: #FFF;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
`;

export const QuestionHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: center;
`;

export const Left = styled.Text`
    color: #333;
    font-weight: bold;
    font-size: 16px;
`;

export const Right = styled.Text`
    width: 100px;
    text-align: center;
`;

export const TextBox = styled.Text`
    margin-bottom: 16px;
    font-size: 16px;
    color: #333;
`;

export const AnswerHeader = styled.View`
    margin-bottom: 16px;
`;
