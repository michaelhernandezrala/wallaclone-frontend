import React from 'react';
import { Link } from 'react-router-dom';

function Skipper({ handlePagination, pagination, count }) {
  return (
    <div>
      <button
        id='previous'
        onClick={handlePagination}
        disabled={pagination.skip === 0}
      >
        Previous
      </button>
      <button
        id='next'
        onClick={handlePagination}
        disabled={pagination.limit >= count}
      >
        Next
      </button>
    </div>
  );
}

export default Skipper;
