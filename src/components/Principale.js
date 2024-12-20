import React from 'react';
import '../components/Principale.css';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import'./Navbar.css';

const Principale = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/theme');
  };

  return (
    <div>
      <Navbar />

      <main>
        <section className="image1">
          <h1>Bienvenue sur le site pour les Accessoires</h1>
          <h2>Découvrez nos Accessoires : chargeurs, câbles, écouteurs</h2>
        </section>

        <section className="titre">
          <h2>Pourquoi Choisir nos accessoires ?</h2>
        </section>

        <section className="flex">
          <div className="box1">
            <VerifiedIcon fontSize="large" style={{ color: 'orange' }} />
            <h5>Qualité sûre</h5>
            <p>Nous sélectionnons les matériaux fiables et solides.</p>
          </div>

          <div className="box1">
            <PriceCheckIcon fontSize="large" style={{ color: 'orange' }} />
            <h5>Prix compétitifs</h5>
            <p>Nos accessoires ont les meilleurs prix.</p>
          </div>

          <div className="box1">
            <EventAvailableIcon fontSize="large" style={{ color: 'orange' }} />
            <h5>Le choix</h5>
            <p>Que ce soit pour un événement spécial ou pour un usage quotidien, nous avons ce qu'il vous faut.</p>
          </div>
        </section>

        <section className="button-section">
          <button onClick={handleButtonClick} className="button">
            Découvrez nos modèles ici
          </button>
        </section>
      </main>
      
      <br> 
      </br>

      <footer> 
    <p> @2024</p>
    </footer>
    </div>
  );
};

export default Principale;

