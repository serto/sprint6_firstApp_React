
import React from 'react';
import Escena from './components/escena/Escena';
import Messages from './Messages';

function App() {

    const escenas = Messages.map( (message, id) => <Escena textEscena={message} key={id} />);

    return ( 
      <div className = "App">
        {escenas}
      </div>
    );
}

export default App;