import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Si vous utilisez Bootstrap, laissez cette ligne
// import './index.css'; // Supprimez cette ligne si vous avez supprimé index.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

