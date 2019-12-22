import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 16px;
    border: 1px solid #ccc;
    margin-bottom: 8px;
    height: 150px;
    border-radius: 4px;
    background: #fff;
`;

export const Header = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const AnswerStatus = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const AnswerStatusText = styled.Text`
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
`

export const DateOfCreation = styled.Text`
    width: 100px;
    text-align: center;
    color: #333;
`;

export const Question = styled.Text`
    height: 80px;
    font-size: 16px;
    color: #333;
`;