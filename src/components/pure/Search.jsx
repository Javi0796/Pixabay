import React, {useRef} from 'react';
import PropTypes from 'prop-types';


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
            <form onSubmit={obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input ref={busquedaRef}
                        type='text' 
                        className='form-control form-control-lg' 
                        placeholder='Busca tu imagen. Ejemplo: Football'/>
                    </div>
                    <div className='form-group col-md-4'>
                        <input type='submit' 
                        className='btn btn-lg btn-danger btn-block' 
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
