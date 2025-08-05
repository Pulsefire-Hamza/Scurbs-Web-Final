import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';  // ✅ Vercel Analytics import

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppIcon from './components/WhatsAppIcon';
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext';
import CheackoutPage from './pages/CheackoutPage';
import Hero from './components/Hero';
import MarqueeBar from './components/MarqueeBar';
import Category from './components/Category';
import HeroSection from './components/HeroSection';
import GiftBox from './pages/GiftBox';
import LipScurbs from './pages/LipScurbs';
import BodyScurb from './pages/BodyScurb';
import Shop from './pages/Shop';
import ScentsSection from './components/ScentsSection';
import WholeSale from './pages/WholeSale';

const App = () => {
  useEffect(() => {
    const toastId = toast.success('Welcome to scurbs bakrey! Browse our amazing products!', {
      transition: Slide,
      style: {
        backgroundColor: '#F1A7C3',
        color: '#232323',
        borderRadius: '8px',
        padding: '10px 20px',
      },
    });

    setTimeout(() => {
      toast.dismiss(toastId);
    }, 3000);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<><Hero /> <MarqueeBar /> <Category /><HeroSection /><ScentsSection /></>} />
              <Route path="/home" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheackoutPage />} />
              <Route path="/gift-box" element={<GiftBox />} />
              <Route path="/lip-scurb" element={<LipScurbs />} />
              <Route path="/body-scurb" element={<BodyScurb />} />
              <Route path="/shop" element={<Shop />} />
               <Route path="/wholesale" element={<WholeSale />} />
             
            </Routes>
          </main>

          <WhatsAppIcon />
          <Footer />
          <Analytics /> {/* ✅ Vercel Analytics Added */}
        </div>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          transition={Slide}
          style={{ marginTop: '90px' }} 
        />
      </Router>
    </CartProvider>
  );
};

export default App;
