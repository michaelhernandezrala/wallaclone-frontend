import React from 'react';

import { Link } from 'react-router-dom';
import nophoto from '../../images/nophoto.jpg';

import './Advert.css';

function Advert({ advertId, name, price, description, photo }) {
  const isPhoto = photo ? photo : nophoto;
  return (
    <Link to={`/adverts/${advertId}`} className='link'>
      <article className='home__adverts--list-item-content'>
        <img className='advert__img' src={isPhoto} alt={name} />
        <div className='advert__info'>
          <h1 className='advert__price'>
            <strong>{price} EUR</strong>
          </h1>
          <h2 className='advert__name'>{name}</h2>
          <p className='advert__description'>{description}</p>
        </div>
      </article>
    </Link>
  );
}

export default Advert;
