import React from 'react';

import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nophoto from '../../images/nophoto.jpg';

import './Advert.css';

function Advert({ id, name, price, description, photo }) {
  const handleClick = (e) => {
    console.log('se guarda el anuncio como favorito');

    //TODO Añadir el código
  };
  const isPhoto = photo ? photo : nophoto;
  console.log(isPhoto);
  return (
    <Link to={`/adverts/${id}`} className='link'>
      <article className='home__adverts--list-item-content'>
        <img className='advert__img' src={isPhoto} alt={name} />
        <div className='advert__info'>
          <h1 className='advert__price'>
            <strong>{price} EUR</strong>
          </h1>
          <h2 className='advert__name'>{name}</h2>
          <p className='advert__description'>{description}</p>
          <FontAwesomeIcon
            onClick={handleClick}
            className='advert__icon'
            icon={faHeart}
          />
        </div>
      </article>
    </Link>
  );
}

export default Advert;
