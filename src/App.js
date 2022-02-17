
import React from 'react';
import Escena from './components/escena/Escena';
import Messages from './Messages';
import {useState} from 'react';

function App() {

    const [frase, setFrase] = useState(1); 

    const prev = () => { (frase === 1) ? setFrase(4) : setFrase(frase - 1) ;}
    const next = () => { (frase === 4) ? setFrase(1) : setFrase(frase + 1) ;}


    const escenas = Messages.map( 
      ( message, frase, id) => 
        <Escena textEscena={message} key={id} fraseNum={frase}/>
      );

    return ( 
      <div className = "App">

        <button onClick={prev}>Anterior</button>

        <button onClick={next}>Siguiente</button>

        {escenas}

        <p>contador : {frase}</p>

      </div>
    );
}

export default App;