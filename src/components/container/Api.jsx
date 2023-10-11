import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImgList from './ImgList';

const Api = ( {id} ) => {
    const [api,setApi] = useState();

    // Utilizamos el prop para acceder a la palabra clave para buscar, utilizamos el url proporcionado por la api para la consulta
    const url = `https://pixabay.com/api/?key=35576022-f902b94ec48c0bf0f4660f4c9&q=${id}&per_page=30`; 

    // Hook useEffect para hacer la consulta a la api y recibir la respuesta
    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch(url);
            const responseJSON = await result.json();
            setApi(responseJSON.hits);
        };
        fetchData();
      }, [url]);

    // Se envía como prop al componente ImgList la respuesta de la api
    return (
        <ImgList obj={api}></ImgList>
    );
};

Api.propTypes = {
    id:PropTypes.string.isRequired,
};

export default Api;