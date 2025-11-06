import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import DomainPage from './domain';
import App from './App';
export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/domains" element={<DomainPage />} />
         <Route path="/login" element={<Login />} />
           <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
