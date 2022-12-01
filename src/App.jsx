import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import GlobalProvider from './context/Provider';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/404" element={<NotFound />} />
            <Route exact path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </div>
  );
}

export default App;
