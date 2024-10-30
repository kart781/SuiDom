import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHashElement from "./sections/ScrollToHashElement";
import Page from './pages/page';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Navbar />
      <Page />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
