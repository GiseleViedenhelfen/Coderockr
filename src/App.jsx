import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/404" element={<NotFound />} />
          <Route exact path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
