import React from 'react'
import PropTypes from 'prop-types'
import Img from '../../models/img'

function PrintImg( {  picture } ) {
  console.log(picture.img);
  return (
    <div className="card">
    <img src={picture.img} className="card-img-top" alt="img"/>
      <div className="card-body">
       <h5 className="card-title">Descargas: {picture.downloads}</h5>
        <p className="card-text">Likes: {picture.likes}</p>
        <a href={picture.url} className="btn btn-primary">Website</a>
      </div>
    </div>
  )
}

PrintImg.propTypes = {
  picture:PropTypes.instanceOf(Img),
}

export default PrintImg

