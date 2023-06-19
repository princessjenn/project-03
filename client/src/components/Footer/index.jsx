import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="footer footer-center p-4 bg-transparent text-base-content">
      <div className="container text-center text-secondary mb-5">
        {location.pathname !== '/' && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Fade Brigade Web Dev Team: 
        </h4>
        <div>Jennifer Eckenrode | Thomas Johnson | Benjamin Richardson</div>
        <div>
          <p>
            Copyright © 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;