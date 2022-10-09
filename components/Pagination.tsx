import React from 'react';

const Pagination = ({ handleClick, isNext }) => {
  return (
    <button
      className="bg-slate-700 hover:bg-slate-600 text-white font-semi-bold py-2 p px-4 rounded mb-3 ml-3 mt-3"
      onClick={() => handleClick()}
    >
      {isNext ? 'Next' : 'Prev'}
    </button>
  );
};

export default Pagination;
