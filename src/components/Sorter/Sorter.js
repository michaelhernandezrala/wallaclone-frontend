import React from 'react';
import './Sorter.css';

function Sorter({ sorter, setSorter }) {
  const handleChangeSort = (e) => {
    setSorter(e.target.value);
  };
  return (
    <div className='sorter'>
      <select value={sorter} onChange={handleChangeSort}>
        <option value='none'>--</option>
        <option value='a-z'>Ordenar alfabeticamente [A-Z]</option>
        <option value='z-a'>Ordenar alfabeticamente [Z-A]</option>
        <option value='cheap'>Ordenar de mas barato a mas caro</option>
        <option value='expensive'>Ordenar de mas caro a mas barato</option>
      </select>
    </div>
  );
}

export default Sorter;
