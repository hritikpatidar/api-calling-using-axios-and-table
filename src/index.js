import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import App from './routing data rfc/App';
import Home from './routing data rfc/Home';
import App1 from './routing data rcc/App1';
import Home1 from './routing data rcc/Home1';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home/:id" element={<Home />} /> 
        <Route path="/app1" element={<App1 />} />
        <Route path="/home1/:id" element={<Home1 />} /> 
      </Routes>
    </BrowserRouter>
      
  </React.StrictMode>
);
