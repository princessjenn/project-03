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
    const stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY'); // Replace with your own Stripe public key
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
                <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none">Back</p>
                </div>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Services Added: <br></br><br></br></p>
                {items.length > 0 ? (
                  items.map((item) => {
                    const specialtySeed = specialtySeeds.find((seed) => seed.id === item.id);
                    return (
                        <div className="md:pl-3 md:w-3/4">
                          <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-base font-black leading-none text-gray-800">{specialtySeed.name}</p>
                            <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                            </select>
                          </div>
                          <p className="text-xs leading-3 text-gray-600 pt-2">{item.height}</p>
                          <p className="text-xs leading-3 text-gray-600 py-4">{item.color}</p>
                          <p className="w-96 text-xs leading-3 text-gray-600">{item.composition}</p>
                          <div className="flex items-center justify-between pt-5 pr-6">
                            <div className="flex items-center">
                              <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                                Remove
                              </p>
                            </div>
                            <p className="text-base font-black leading-none text-gray-800">
                              ${specialtySeed.price}
                            </p>
                          </div>
                        </div>
                    );
                  })
                ) : (
                  <p className="text-gray-500">Your cart is empty.</p>
                )}
              </div>
              <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">Total</p>
                      <p className="text-base leading-none text-gray-800">${calculateTotal()}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">Total</p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">${calculateTotal()}</p>
                    </div>
                    <button
                      onClick={() => setShow(!show)}
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