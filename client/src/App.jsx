import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavTabs from "./components/NavTabs/NavTabs.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Barbers from "./pages/Barbers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartContext";
import { AuthContextProvider } from "./contexts/AuthContext";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState("HomePage");
  const [showCart, setShowCart] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <CartProvider>
          <Router>
            <div className="flex justify-center">
              <NavTabs
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </div>
            <div className="divider lg:divider-vertical via-primary"></div>
            <div className="flex flex-wrap justify-center">
              <div className="container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/barbers" element={<Barbers />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default App;
