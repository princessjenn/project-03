import React, { useState, useContext } from 'react';
import specialtySeeds from '../../../../server/seeders/specialtySeeds.json';

import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const [show, setShow] = useState(false);
  const { items } = useContext(CartContext);

  // Calculate the total price dynamically
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      const specialtySeed = specialtySeeds.find((seed) => seed.id === item.id);
      if (specialtySeed) {
        total += specialtySeed.price;
      }
    });
    return total;
  };

  const handleCheckout = async () => {
    const stripe = await loadStripe("pk_test_51NKqHZAHNHXMcTQv8vrbReMQp8JjlrnjTsRFoux6lxQSYlNlUkZAMrZMqJnU21fO9xcAmJmfBj3AKBqywqR8ou9z00jajaT6LF"); // Replace with your own Stripe public key
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });
    const session = await response.json();
    // Redirect the user to the Stripe payment page
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };


    return (
        <>
          <div className="flex items-center justify-center py-8">
            <button
              onClick={() => setShow(!show)}
              className="py-2 px-10 rounded bg-primary hover:bg-warning text-black"
            >
              View your Cart
            </button>
          </div>
          {show && (
            <div
              className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
              id="chec-div"
            >
              <div
                className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
                id="checkout"
              >
                <div className="flex md:flex-row flex-col justify-end" id="cart">
                  <div
                    className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                    id="scroll"
                  >
                    {/* ... */}
                  </div>
                  <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                      {/* ... */}
                      <div>
                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                          <p className="text-2xl leading-normal text-gray-800">Total</p>
                          <p className="text-2xl font-bold leading-normal text-right text-gray-800">${calculateTotal()}</p>
                        </div>
                        <button
                          onClick={handleCheckout} // Call handleCheckout when the button is clicked
                          className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };
    
    export default Cart;