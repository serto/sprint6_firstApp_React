
import React from 'react';
import Escena from './components/escena/Escena';
import Messages from './Messages';
import {useState} from 'react';
import {GlobalStyle} from './styles/styles';

function App() {

    const [frase, setFrase] = useState(0); 

    const prev = () => { (frase === 0) ? setFrase(3) : setFrase(frase - 1) ;}
    const next = () => { (frase === 3) ? setFrase(0) : setFrase(frase + 1) ;}


    const escenas = Messages.map( 
      ( message, id) => 
        <Escena textEscena={message} key={id} fraseNum={frase} identify={id}/>
      );

    return ( 
      <div className = "App">

        <GlobalStyle />

        <button onClick={prev}>Anterior</button>

        <button onClick={next}>Siguiente</button>

        {escenas}

      </div>
    );
}

export default App;