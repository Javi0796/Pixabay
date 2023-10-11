import React, {useEffect, useState} from 'react'
import Img from '../../models/Img';
import PrintImg from '../pure/PrintImg';
import "./ImgList.css";

function ImgList( {obj} ) {
  const [list, setList] = useState([new Img()]);

  // Con el hook, creamos el objeto a partir de la respuesta recibida
  useEffect(() => {
    let aux = obj?.map((o, i) => {
      let imgAux = new Img(o.tags, o.downloads, o.likes, o.webformatURL, o.pageURL);
      return imgAux;
    }) ?? [];
    setList(aux);
  }, [obj]);

  return (
    <div className='img-container'>
      {list.map((item,i) => (
        <PrintImg key={i} picture={item}></PrintImg>
      ))}
    </div>
  )
}

export default ImgList

