import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
    flex: 1;
    flex-direction: row;
    background: #ee4e61;
    height: 52px;
    max-height: 52px;
    border-radius: 4px;

    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;