import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AuthContextProvider } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavTabs({ currentPage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handlePageChange = (page) => {
    navigate(page);
  };

  const handleLogout = () => {
    Auth.logout();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const specialtyCount = cart.items.reduce(
    (sum, specialty) => sum + (specialty.quantity || 0), // Ensure a valid quantity is used
    0
  );

  return (
    <AuthContextProvider>
      <div className="flex">
        <header className="flex flex-wrap justify-center items-center text-light p-0.5 mx-auto">
          <div>
            <ul className="flex flex-wrap menu menu-horizontal p-3">
              <li>
                <button
                  onClick={() => handlePageChange("/")}
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageChange("/barbers")}
                  className={location.pathname === "/barbers" ? "active" : ""}
                >
                  Our Barbers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageChange("/services")}
                  className={location.pathname === "/services" ? "active" : ""}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageChange("/contact")}
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          {/* <div className="divider lg:divider-horizontal"></div> */}
          {Auth.loggedIn() ? (
            <h1 className="flex text-primary mx-auto p-2.5">
              <AiOutlineShoppingCart
                size="1.50em"
                color="primary"
              ></AiOutlineShoppingCart>{" "}
              Cart ({specialtyCount} Items){" "}
              {/* <div className="divider lg:divider-horizontal"></div> */}
            </h1>
          ) : (
            <span></span>
          )}
          <div className="flex mx-auto items-end">
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-sm btn-primary m-2" to="/profile">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button
                  className="btn btn-sm btn-secondary m-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-sm btn-primary m-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-sm btn-primary m-2" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
        </header>
      </div>
    </AuthContextProvider>
  );
}
