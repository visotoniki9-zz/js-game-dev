import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SpriteAnimations from './routes/SpriteAnimations';
import Parallax from './routes/Parallax';
import NPCMovements from './routes/NPCMovements';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="SpriteAnimations" element={<SpriteAnimations />} />
          <Route path="Parallax" element={<Parallax />} />
          <Route path="NPCMovements" element={<NPCMovements />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
