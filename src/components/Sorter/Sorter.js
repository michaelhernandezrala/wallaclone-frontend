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
        <option value='a-z'>Sort alphabetically [A-Z]</option>
        <option value='z-a'>Sort alphabetically [Z-A]</option>
        <option value='cheap'>Sort from cheapest to most expensive</option>
        <option value='expensive'>Sort from most expensive to cheapest</option>
      </select>
    </div>
  );
}

export default Sorter;
