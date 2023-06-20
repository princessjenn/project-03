import CheckoutForm from "./CheckoutForm";

function PaymentPage({ cartItems }) {
  // Other code...

  return (
    <div>
      <h1>Payment Page</h1>
      {/* Display cart items */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* Render the checkout form */}
      <CheckoutForm />
    </div>
  );
}