import React from 'react';

function Skipper({ handlePagination, pagination, count }) {
  console.log(pagination.skip);
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
        disabled={pagination.skip >= count}
      >
        Next
      </button>
    </div>
  );
}

export default Skipper;
