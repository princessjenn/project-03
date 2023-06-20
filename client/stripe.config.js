import { loadStripe } from '@stripe/stripe-js';

// Replace 'YOUR_STRIPE_API_KEY' with your actual API key
const stripePromise = loadStripe('pk_test_51NKqHZAHNHXMcTQv8vrbReMQp8JjlrnjTsRFoux6lxQSYlNlUkZAMrZMqJnU21fO9xcAmJmfBj3AKBqywqR8ou9z00jajaT6LF');

export default stripePromise;