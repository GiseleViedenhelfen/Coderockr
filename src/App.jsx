import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import GlobalProvider from './context/Provider';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PostDetails from './pages/PostDetails/Post';

function App() {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/404" element={<NotFound />} />
            <Route exact path="*" element={<Navigate to="/404" replace />} />
            <Route exact path="/post/:id" element={<PostDetails />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </div>
  );
}

export default App;
