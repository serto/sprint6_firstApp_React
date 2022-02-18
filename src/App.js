
import React from 'react';
import Escena from './components/escena/Escena';
import Messages from './Messages';
import {useState} from 'react';
import {Wrapper, TitleBig, Description, GlobalStyle} from './styles/styles';

function App() {

    const [frase, setFrase] = useState(0); 
    const [firstScreen, setFirstScreen] = useState(true);

    const prev = () => { (frase === 0) ? setFrase(3) : setFrase(frase - 1) ;}
    const next = () => { (frase === 3) ? setFrase(0) : setFrase(frase + 1) ;}

    const secondScreen = () => setFirstScreen(false);


    const escenas = Messages.map( 
      ( message, id) => 
        <Escena textEscena={message} key={id} fraseNum={frase} identify={id}/>
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

          <>

            <button onClick={prev}>Anterior</button>

            <button onClick={next}>Següent</button>

            {escenas}
          
          </>

        }

      </div>
    );
}

export default App;