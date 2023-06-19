import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function NavTabs({ currentPage }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    navigate(page);
  };

  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <header className=" text-light mb-4 py-3 flex-row align-center">
        <div>
          <ul className="menu menu-horizontal px-1">
            <li>
              <button
                onClick={() => handlePageChange('/')}
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange('/barbers')}
                className={location.pathname === '/barbers' ? 'active' : ''}
              >
                Our Barbers
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange('/services')}
                className={location.pathname === '/services' ? 'active' : ''}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePageChange('/contact')}
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/profile">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-sm btn-accent m-2" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-sm btn-accent m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-sm btn-accent m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
    </header>
  );
}