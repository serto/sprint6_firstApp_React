import styled from 'styled-components';

export const EscenaStyles = styled.div`
    background-color:  ${({ backColor}) => backColor ? 'red' : 'white'};
    color:  ${({ backColor}) => backColor ? 'white' : 'black'};
    border: 2px solid #000;
    border-radius: 26px;
    text-align: center; 
    padding: 12px;
    margin-bottom: 18px;

    p {
        margin: 0;
    }
`;