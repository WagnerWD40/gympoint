import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 30px;
    max-width: ${props => props.maxSize ? props.maxSize : '1200px'};
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
        background: #ee4d64;
        border: none;
        border-radius: 4px;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        width: 140px;
        justify-content: space-evenly;
        align-items: center;
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

export const Table = styled.table`
    background: #FFF;
    padding: 30px;
    border-radius: 4px;
    color: #333;
    
    thead {
        padding-bottom: 20px;

        tr {
            box-shadow: none;
        }
    }

    tr {
        box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.09);
    }

    tr:nth-last-of-type(1) {
        box-shadow: none;
    }

    th {
        text-align: left;
        height: 40px;
    }

    th:nth-of-type(2) {
        text-align: left;
    }

    th + th {
        text-align: center;
    }

    button {
            border: none;
            background: none;
            padding-left: 20px;
            color: #ee4d64;
        }

    a {
        button {
            border: none;
            background: none;
            padding-left: 20px;
            color: #6f99f0;
        }
    }
`;

export const TableRow = styled.tr`

    td {
        height: 50px;
    }

    td + td {
        text-align: center;
    }

    td:nth-of-type(2) {
        text-align: left;
    }

    td:nth-last-of-type(1) {
        text-align: right;
    }


`;
