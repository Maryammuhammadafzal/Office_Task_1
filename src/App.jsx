import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home";
import Pricing from "./Pages/PricingPage/PricingPage";
import ResourcesPage from './Pages/ResourcesPage/ResourcesPage';
import HelpPage from './Pages/HelpPage/HelpPage';
import SecurityPage from './Pages/SecurityPage/SecurityPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import PrivacyPolicy from './Pages/PrivacyPolicyPage/PrivacyPolicy';
import Account from './Components/Account/Acoount';



function App() {


  return (
    <>
     
          <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="policy" element={<ResourcesPage/>} />
        <Route path="help" element={<HelpPage/>} />
        <Route path="security" element={<SecurityPage/>} />
        <Route path="blog" element={<BlogPage/>} />
        <Route path="privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="account" element={<Account/>} />
          </Routes>
     
     
     
    </>
  )
}

export default App
