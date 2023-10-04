import React from 'react';
import PropTypes from 'prop-types';
import Img from '../../models/Img';
import "./PrintImg.css";

function PrintImg( {  picture } ) {
  return (
    <div className='Image'>
      <a href={picture.url}>
        <img className='pic' src={picture.img} alt={picture.tags}/>
      </a>
      <div className='row overlay'>
        <div className='col-4 likes'>
          <i class="bi bi-bookmark-heart-fill"></i>
          <span>{picture.likes}</span>
        </div>
        <div className='col-6 downloads'>
          <i class="bi bi-download"></i>
          <span>{picture.downloads}</span>
        </div>
      </div>
    </div>
  )
}

PrintImg.propTypes = {
  picture:PropTypes.instanceOf(Img),
}

export default PrintImg

