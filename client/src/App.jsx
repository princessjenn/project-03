import React from "react";
import Payment from "./Payment";
import Completion from "./Completion";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavTabs from "./components/NavTabs/NavTabs.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Barbers from "./pages/Barbers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

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
  const [currentPage, setCurrentPage] = React.useState("HomePage");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="justify-center min-100-vh">
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          <div className="container flex justify-center">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/barbers" element={<Barbers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;