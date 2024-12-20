import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principale from './components/Principale';
import Theme from './components/Theme';
import Contact from './components/Contact';





function App() {
  return (
    <Router>
      <div>
      <main>
          <Routes>
            <Route path="/" element={<Principale />} />
            <Route path="/principale" element={<Principale />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/theme" element={<Theme />} />
          </Routes>
          
        </main>
      </div>
     
    </Router>
  );
}

export default App;


