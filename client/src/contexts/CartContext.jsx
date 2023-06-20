import React, { useState } from 'react';

export const CartContext = React.createContext();
{auth.loggedIn ? (
  <button onClick={addToCart}>Add to Cart</button>
) : (
  <Link to="/login">Login to Add to Cart</Link>
)}

export const CartProvider = ({ children }) => {
  const [specialties, setSpecialties] = useState([]);

  const addToCart = (specialty) => {
    setSpecialties([...specialties, specialty]);
  };

  const removeFromCart = (specialtyId) => {
    setSpecialties(specialties.filter((item) => item.id !== specialtyId));
  };

  const getTotalCost = () => {
    const total = specialties.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2);
  };

  const cartData = {
    items: specialties,
    addToCart,
    removeFromCart,
    getTotalCost,
  };

  return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
};