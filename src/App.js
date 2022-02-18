
import React from 'react';
import Escena from './components/escena/Escena';
import Messages from './Messages';
import {useState} from 'react';
import {Wrapper, TitleBig, Description, GlobalStyle} from './styles/styles';
import {BackImage} from './components/escena/Escena.styles';

function App() {

    const [numMessage, setNumFrase] = useState(0); 
    const [firstScreen, setFirstScreen] = useState(true);

    const prev = () => { (numMessage === 0) ? setNumFrase(3) : setNumFrase(numMessage - 1) ;}
    const next = () => { (numMessage === 3) ? setNumFrase(0) : setNumFrase(numMessage + 1) ;}

    const secondScreen = () => setFirstScreen(false);

    const images = Messages.map( (message) => message.img );

    const escenas = Messages.map( 
      ( message, id) => 
        <Escena textEscena={message.frase} key={id} fraseNum={numMessage} identify={id}/>
      );

    return ( 
      <div className = "App">

        <GlobalStyle />

        {firstScreen ? 
        
          <Wrapper>
            <TitleBig>Welcome !!!</TitleBig>
            <Description>
              Exercici de React pel módul 6 del curs d'IT Academy, on s'utilitzen estats, props, renderitzats condicionals i styled components.
            </Description>
            <button onClick={secondScreen}>Començar</button>
          </Wrapper>

          :

          <BackImage imageBack={images[numMessage]}>

            <button onClick={prev}>Anterior</button>

            <button onClick={next}>Següent</button>

            {escenas}
          
          </BackImage>

        }

      </div>
    );
}

export default App;