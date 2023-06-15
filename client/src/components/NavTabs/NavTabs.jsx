import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
  
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#barbers"
            onClick={() => handlePageChange('Barbers')}

            className={currentPage === 'Barbers' ? 'nav-link active' : 'nav-link'}
          >
            Our Barbers
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#services"
            onClick={() => handlePageChange('Services')}
            //  TODO: Add a comment explaining what this logic is doing
  
            className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
          >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
  


export default NavTabs