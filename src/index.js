import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import  Dashboard from './components/dashboard/Dashboard'
import Borrower from './components/Borrower/Borrower';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Logn';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="borrower" element={<Borrower />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();