import React, {useEffect, useState} from 'react'
import Img from '../../models/img';
import PrintImg from '../pure/PrintImg';
import styled from 'styled-components';

function ImgList( {obj} ) {
  const [list, setList] = useState([new Img()]);

  const DivEst = styled.div`
    text-align: center;
    padding: 1.5rem 3rem;
    width: 95vw;
    height: 100vh;
    max-height: 50vh;
    min-height: 50vh;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-gap: 1rem;
    padding: 2%;
    margin: 2%;
  `;

  useEffect(() => {
    let aux = obj?.map((o, i) => {
      let imgAux = new Img(o.downloads, o.likes, o.webformatURL, o.pageURL);
      return imgAux;
    }) ?? [];
    setList(aux);
  }, [obj]);

  return (
    <DivEst className='container'>
      {list.map((item,i) => (
        <PrintImg key={i} picture={item}></PrintImg>
      ))}
    </DivEst>
  )
}

export default ImgList

