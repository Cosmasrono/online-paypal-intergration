import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutForm from "./Components/SignOutPage";
import "./index.css";
import "./App.css";
 import Login from './pages/Login';
import Success from './pages/Success'

function App() {
  return (
   
      <>
        <nav className="flex mt-3 pt-2 pl-2">
          <img src="https://img.icons8.com/?size=1x&id=zCkt2fdFgcSM&format=png" alt="" />
        </nav>
        <div className="App items-center justify-center flex-col flex mt-4">
          <h1 className="text-slate-900 text-3xl font-extrabold">Online PayPal Payment Gateway Integration</h1>
          <p className="italic text-blue-700 font-bold">Move your money around the world with online PayPal</p>
        </div>

        <Routes>
         
           
            <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
         <Route path="/" element={<CheckoutForm />} />
        
        </Routes>
        <footer>
          <div className="flex items-center justify-center flex-col">
            <p className="text-gray-500 text-sm">©cossi PayPal. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Privacy Legal Policy updates</p>
          </div>
        </footer>
      </>
     
  );
}

export default App;
