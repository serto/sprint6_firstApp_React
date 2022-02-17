
import React from 'react';
import { EscenaStyles } from './Escena.styles';

export default (props) => {

    const backColor = (props.identify === props.fraseNum) ? true : false;

    return (<EscenaStyles backColor={backColor}><p>{props.textEscena}</p></EscenaStyles>);
}