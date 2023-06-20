import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import specialtySeeds from '../../../../server/seeders/specialtySeeds.json';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAccordionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse the accordion if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked accordion item
    }
  };

  const handleAddToCart = (service) => {
    addToCart(service);
  };

  return (
    <div>
      {specialtySeeds.map((specialty, index) => (
        <div key={index} className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            checked={expandedIndex === index}
            onChange={() => handleAccordionClick(index)}
          />
          <div className="collapse-title text-xl font-medium">
            <span className="text-error font-bold">{specialty.name}</span>
          </div>
          <div className="collapse-content">
            <p className="text-primary">{specialty.description}</p>
            <p className= "text-success">Price: ${specialty.price.toFixed(2)}</p>
            <Link to="/cart" onClick={() => handleAddToCart(specialty)}>Add to Cart</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;