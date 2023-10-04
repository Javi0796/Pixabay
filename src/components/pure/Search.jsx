import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import "./Search.css";

const Search = ( {datos} ) => {
    const busquedaRef = useRef('')

    const obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor del input
        const termino = busquedaRef.current.value;

        //Lo enviamos al componente principal a través de props
        datos(termino);
    }
        return (
            <form className="search-form" onSubmit={obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-10'>
                        <input ref={busquedaRef}
                        type='text' 
                        className='form-control form-control-lg item-1' 
                        placeholder='Busca tu imagen'/>
                    </div>
                    <div className='form-group col-md-2'>
                        <input type='submit' 
                        className='btn btn-lg btn-block item-2' 
                        value='Buscar'/>
                    </div>
                </div>
            </form>
        );

}


Search.propTypes = {
    datos: PropTypes.func.isRequired,
};


export default Search;
