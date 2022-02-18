import styled from 'styled-components';

export const EscenaStyles = styled.div`
    background-color:  ${({ backColor}) => backColor ? 'red' : 'rgba(255,255,255,0.6)'};
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


export const BackImage = styled.div`
    width: 100%;
    height: 100vh;
    padding: 1%;
    box-sizing: border-box;
    background-size: cover;
    background-image: ${(props) => `url(${props.imageBack})`};
`;