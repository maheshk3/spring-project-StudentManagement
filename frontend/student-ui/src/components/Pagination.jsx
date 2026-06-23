import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination-dock">
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
        className="nav-page-btn"
      >
        ◀ Prev
      </button>
      
      <div className="page-indicator">
        Page <span className="active-num">{currentPage}</span> of <span>{totalPages}</span>
      </div>

      <button 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
        className="nav-page-btn"
      >
        Next ▶
      </button>
    </div>
  );
}

export default Pagination;