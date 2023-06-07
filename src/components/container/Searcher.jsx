import React, { useState } from 'react';
import Search from '../pure/Search';
import Api from './Api';
import styled from 'styled-components';

const Searcher = () => {
    const [termino, setTermino] = useState('ejemplo');
    const [isHidden, setHidden] = useState(false);

    const DivRoot = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        flex-direction: column;
    `;

    const DivJumb = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px;
    `;
    
    function datosBusqueda(termino) {
      setTermino(termino);
      setHidden(true);
    }
  
    return (
      <DivRoot className="app container">
        <DivJumb className="jumbotron">
          <Search
            datos={datosBusqueda}>
          </Search>
        </DivJumb>
        {isHidden && <Api id={termino}></Api>}
      </DivRoot>
    );
};

export default Searcher;
