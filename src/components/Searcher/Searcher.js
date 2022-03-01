import React from 'react';

// Components
import './Searcher.css';
import Slider, { Range } from 'rc-slider';



function Searcher() {
  return (
    <div className='search'>
      <h2 className='search__title'>
        What are you looking for?
      </h2>
      <form className='search__form'>
        <div class="form-group">
          <input type="text" class="form-control" id="name" placeholder="Search product" />
        </div>
        <Slider />
        <Range />
        <div className='form-group'>
          <div class="form-group-check form-check form-check-inline">
            <label class="form-check-label" for="compra">Buy</label>
            <input class="form-check-input" type="radio" name="gridRadios" id="compra" value="compra" />
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gridRadios" id="venta" value="venta" />
            <label class="form-check-label" for="venta">Sell</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gridRadios" id="todos" value="todos" checked />
            <label class="form-check-label" for="todos">All</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Searcher