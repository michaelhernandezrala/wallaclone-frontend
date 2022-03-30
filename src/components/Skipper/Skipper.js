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
        disabled={pagination.skip + count >= total}
      >
        Next
      </button>
    </div>
  );
}

export default Skipper;
