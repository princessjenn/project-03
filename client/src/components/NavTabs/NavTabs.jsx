import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavTabs({ currentPage }) {
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    navigate(page);
  };

  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <button
          onClick={() => handlePageChange('/')}
          className={currentPage === 'HomePage' ? 'active' : ''}
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => handlePageChange('/barbers')}
          className={currentPage === 'Barbers' ? 'active' : ''}
        >
          Our Barbers
        </button>
      </li>
      <li>
        <button
          onClick={() => handlePageChange('/services')}
          className={currentPage === 'Services' ? 'active' : ''}
        >
          Services
        </button>
      </li>
      <li>
        <button
          onClick={() => handlePageChange('/contact')}
          className={currentPage === 'Contact' ? 'active' : ''}
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

export default NavTabs;