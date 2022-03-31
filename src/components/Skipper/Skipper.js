import React from 'react';

function Skipper({ handlePagination, pagination, total, count }) {
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
        disabled={total - pagination.skip < 10}
      >
        Next
      </button>
    </div>
  );
}

export default Skipper;
