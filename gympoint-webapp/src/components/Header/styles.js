import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background: #FFF;
    padding: 0 30px;
    border-bottom: 1px solid #ccc;
`;

export const Content = styled.div`
    margin: auto;
    height: 64px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    nav {
        display: flex;
        align-items: center;

        img {
            width: 80px;
            height: 40px;
            margin-right: 20px;
            padding-right: 20px;
    }

    a   {
            margin-left: 20px;
            font-weight: bold;
        }
    }

    a:nth-of-type(1) {
        border-right: 1px solid #ccc;
    }


    div {
        display: flex;
        flex-direction: column;
        text-align: end;
    }
`;

export const NavLink = styled(Link)`
    color: ${props => props.highlighted ? '#333' : '#ccc'};
`;

export const Profile = styled.div`
    
    div {
        
        strong {
            color: #555;
        }
        
        button {
            background: none;
            border: none;
            color: #ee4d64;
            margin-top: 5px;
        }
    }
`;
