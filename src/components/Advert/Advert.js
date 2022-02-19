import React from 'react';

import { Link } from 'react-router-dom'

import './Advert.css'

function Advert({ id, name, price, description, photo }) {
  return (
    <Link to={`/adverts/${id}`} className='link'>
      <article className='home__adverts--list-item-content'>
        <img className='advert__img' src={photo} alt={name} />
        <h1 className='advert__price'><strong>{price} €</strong></h1>
        <h2 className='advert__name'>{name}</h2>
        <p className='advert__description'>{description}</p>
      </article>
    </Link>
  )
}

export default Advert