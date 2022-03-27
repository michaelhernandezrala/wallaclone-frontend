import React from 'react';
import { useState } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Searcher.css';

function Searcher({ setfilter }) {
  const [nameFilter, setnameFilter] = useState('');
  const [priceFilter, setpriceFilter] = useState([0, 10000]);
  const [tagsFilter, settagsFilter] = useState([]);
  const [saleFilter, setsaleFilter] = useState('Ambos');
  const handleChangeName = (e) => {
    setnameFilter(e.target.value);
  };

  const handleChangePrice = (e) => {
    setpriceFilter(e);
  };

  const handleChangeRadio = (e) => {
    const name = e.target.name;
    let value = '';
    if (e.target.value === 'Venta') {
      value = true;
    } else if (e.target.value === 'Compra') {
      value = false;
    } else {
      value = e.target.value;
    }

    setsaleFilter({
      [name]: value,
    });
  };

  const handleChangeTags = (e) => {
    if (!tagsFilter.includes(e.target.value)) {
      settagsFilter([...tagsFilter, e.target.value]);
    }
  };

  const resetFilters = () => {
    setnameFilter('');
    setpriceFilter([0, 10000]);
    setsaleFilter('Ambos');
    settagsFilter([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setfilter({
      name: nameFilter,
      price: priceFilter,
      sale: saleFilter,
      tags: tagsFilter,
    });
  };

  return (
    <div className='searcher'>
      <form onSubmit={handleSubmit}>
        <div className='searcher__layout'>
          <div className='searcher__left'>
            <div className='searcher__form--data'>
              <label>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder="Product's name"
                value={nameFilter}
                onChange={handleChangeName}
              />
            </div>
            <div className='searcher__form--data'>
              <label>Price</label>
              <Range min={0} max={10000} onChange={handleChangePrice} />
              <div className='range-prices'>
                <p>{priceFilter[0]} €</p>
                <p>{priceFilter[1]} €</p>
              </div>
            </div>
          </div>
          <div className='searcher__right'>
            <div className='searcher__form--data radius-inputs'>
              <div>
                <input
                  type='radio'
                  value='Compra'
                  name='sale'
                  onChange={handleChangeRadio}
                />
                Buy
              </div>
              <div>
                <input
                  type='radio'
                  value='Venta'
                  name='sale'
                  onChange={handleChangeRadio}
                />
                Sell
              </div>
              <div>
                <input
                  type='radio'
                  value='Ambos'
                  name='sale'
                  onChange={handleChangeRadio}
                />
                Both
              </div>
            </div>
            <div className='searcher__form--data'>
              <select
                multiple={true}
                value={tagsFilter}
                onChange={handleChangeTags}
                className='searcher__input--select'
              >
                <option value='lifestyle'>Lifestyle</option>
                <option value='mobile'>Mobile</option>
                <option value='motor'>Motor</option>
                <option value='work'>Work</option>
              </select>
            </div>
          </div>
        </div>
        <div className='searcher__buttons'>
          <button type='submit'>Apply filters</button>
          <button onClick={resetFilters} variant='variant'>
            Reset filters
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searcher;
