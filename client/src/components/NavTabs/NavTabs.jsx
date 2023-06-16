import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <a
          onClick={() => handlePageChange('HomePage')}
          className={currentPage === 'HomePage' ? 'active' : ''}
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={() => handlePageChange('Barbers')}
          className={currentPage === 'Barbers' ? 'active' : ''}
        >
          Our Barbers
        </a>
      </li>
      <li>
        <a
          onClick={() => handlePageChange('Services')}
          className={currentPage === 'Services' ? 'active' : ''}
        >
          Services
        </a>
      </li>
      <li>
        <a
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active' : ''}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}


export default NavTabs;