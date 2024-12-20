import React from 'react';
import { Headphones as HeadphonesIcon, Laptop as LaptopIcon, Watch as WatchIcon, PhoneAndroid as PhoneAndroidIcon } from '@mui/icons-material';
import './Theme.css'; 
import Navbar from './Navbar';

const Theme = () => {
  return (

      <div>
        <Navbar />

  
    <main>
<section> 
    <div class="box">
      <h2 class="titre">Découvrez Nos Produits</h2>

      <div class="flex">
        <div class="card">
          <div class="card-body">
            <HeadphonesIcon className="card-icon" style={{ color: 'orange' }}  />
            <h5>Écouteurs</h5>
            <p>Profitez d'un son de haute qualité avec nos écouteurs.</p>
            <button class="card-button">Choisir</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <LaptopIcon className="card-icon" style={{ color: 'orange' }} />
            <h5>Ordinateur</h5>
            <p>Ordinateurs performants pour tous vos besoins.</p>
            <button className="card-button">Choisir</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <WatchIcon className="card-icon" style={{ color: 'orange' }} />
            <h5>Montre</h5>
            <p>Découvrez nos montres élégantes et modernes.</p>
            <button className="card-button">Choisir</button>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <PhoneAndroidIcon className="card-icon" style={{ color: 'orange' }}  />
            <h5>Mobile</h5>
            <p>Les derniers modèles de téléphones mobiles à votre portée.</p>
            <button class="card-button">Choisir</button>
          </div>
        </div>
      </div>
    </div>
    </section>

  </main>

<footer> 
  <p> @2024</p>
</footer>

</div>
   
    
  );
};

export default Theme;
