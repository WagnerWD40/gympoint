import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 30px;
    max-width: 600px;
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
`;

export const HelpTable = styled.table`
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
`;

export const HelpData = styled.tr`

    td {
        height: 50px;
        
        & + td {
            text-align: center;
        }
    }

    td:nth-last-of-type(1) {
        text-align: right;
    }


    button {
        border: none;
        background: none;
        padding-left: 20px;
        color: #6f99f0;;
    }

`;

export const Modal = styled.section`
    display: ${props => props.shown ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    form {
        display: flex;
        flex-direction: column;
        position:fixed;
        background: white;
        width: 450px;
        max-height: 1000px;
        border-radius: 4px;
        padding: 30px;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);

        h1 {
            color: #333;
            font-size: 16px;
            margin-bottom: 10px;
        }

        p {
            max-height: 50%;
            color: #333;
            font-size: 14px;
            margin-bottom: 20px;
        }

        textarea {
            height: 200px;
            resize: none;
            margin-bottom: 20px;
            border-radius: 4px;
        }

        button {
            height: 40px;
            border-radius: 4px;
            border: none;
            font-weight: bold;
            color: #fff;
            background: #ee4d64;
            margin-bottom: 10px;
        }

        button:nth-of-type(2) {
            background: #ccc;
        }
    }
`;