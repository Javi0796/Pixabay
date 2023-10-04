import React, { useState } from 'react';
import Search from '../pure/Search';
import Api from './Api';
import './Searcher.css';

const Searcher = () => {
    const [termino, setTermino] = useState();
    const [isHidden, setHidden] = useState(false);

    function datosBusqueda(termino) {
      setTermino(termino);
      setHidden(true);
    }
  
    return (
      <div className='container-fluid'>
        <div className="jumbotron row">
          <span className='col-2 tittle'>Api</span>
          <div className='container col-8'>
            <Search
              datos={datosBusqueda}>
            </Search>
          </div>
          <span className='col-2 tittle'>Pixabay</span>
        </div>
        {isHidden && <Api className="row" id={termino}></Api>}
      </div>
    );
};

export default Searcher;
