import React from "react";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import Home from '../Pages/Home'
import Checkout from '../Pages/Checkout'
import Information from '../Pages/Information'
import Payment from '../Pages/Payment'
import Success from '../Pages/Success'
import NotFound from '../Pages/NotFound'
import Layout from "../components/Layout"
export default function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Layout>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/checkout' element={<Checkout />} />
<Route path='/checkout/information' element={<Information />} />
<Route path='/checkout/payment' element={<Payment />} />
<Route path='/checkout/success' element={<Success />} />
<Route path='*' element={<NotFound />} />
</Routes>
</Layout>
      </BrowserRouter>
    </div>
  );
}
