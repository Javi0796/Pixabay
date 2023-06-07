import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImgList from './ImgList';

const Api = ( {id} ) => {
    const [api,setApi] = useState();
    const url = `https://pixabay.com/api/?key=35576022-f902b94ec48c0bf0f4660f4c9&q=${id}&per_page=30`; 

    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch(url);
            const responseJSON = await result.json();
            setApi(responseJSON.hits);
        };
        fetchData();
      }, [url]);

    return (
        <div className='container'>
            <ImgList obj={api}></ImgList>
        </div>
    );
};

Api.propTypes = {
    id:PropTypes.string.isRequired,
};

export default Api;