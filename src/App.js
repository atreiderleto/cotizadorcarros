import React from 'react';
import Header from './componets/Header';
import styled from '@emotion/styled';
import Formulario from './componets/Formulario';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
   background-color: #FFF;
   padding: 3rem;
`;



function App() {
  return (
    <div className="App">
      <Contenedor >
      <Header
        titulo= 'Cotizador de Seguro'
      />

      <ContenedorFormulario>

          <Formulario />

          
        

      </ContenedorFormulario>

      </Contenedor>
    </div>
  );
}

export default App;
