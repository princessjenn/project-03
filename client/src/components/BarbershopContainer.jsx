import React, { useState } from 'react';
import NavTabs from './NavTabs';
import HomePage from './pages/HomePage';
import Barbers from './pages/Barbers';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function BarbershopContainer() {
  const [currentPage, setCurrentPage] = useState('HomePage');

  const renderPage = () => {
    if (currentPage === 'HomePage') {
      return <HomePage />;
    }
    if (currentPage === 'Barbers') {
      return <Barbers/>;
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}