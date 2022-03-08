import React from 'react';

// Components
import './Searcher.css';

function Searcher() {
  return (
    <div classNameName='search'>
      <h2 classNameName='search__title'>What are you looking hmtlFor?</h2>
      <hmtlForm classNameName='search__hmtlForm'>
        <div className='hmtlForm-group'>
          <input
            type='text'
            className='hmtlForm-control'
            id='name'
            placeholder='Search product'
          />
        </div>
        <div classNameName='hmtlForm-group'>
          <div className='hmtlForm-group-check hmtlForm-check hmtlForm-check-inline'>
            <label className='hmtlForm-check-label' hmtlFor='compra'>
              Buy
            </label>
            <input
              className='hmtlForm-check-input'
              type='radio'
              name='gridRadios'
              id='compra'
              value='compra'
            />
          </div>
          <div className='hmtlForm-check hmtlForm-check-inline'>
            <input
              className='hmtlForm-check-input'
              type='radio'
              name='gridRadios'
              id='venta'
              value='venta'
            />
            <label className='hmtlForm-check-label' hmtlFor='venta'>
              Sell
            </label>
          </div>
          <div className='hmtlForm-check hmtlForm-check-inline'>
            <input
              className='hmtlForm-check-input'
              type='radio'
              name='gridRadios'
              id='todos'
              value='todos'
              checked
            />
            <label className='hmtlForm-check-label' hmtlFor='todos'>
              All
            </label>
          </div>
        </div>
      </hmtlForm>
    </div>
  );
}

export default Searcher;
