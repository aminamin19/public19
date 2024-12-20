import React from 'react';
import Navbar from './Navbar';
import './Contact.css';
import axios from 'axios';

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    nom: e.target.nom.value,
    prenom: e.target.prenom.value,
    adresse: e.target.adresse.value
  };

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Données du formulaire envoyées:', response.data);
  } catch (error) {
    console.error('Erreur:', error);
  }
};

const Contact = () => (
  <div>
    <Navbar />

    <main className="container">
      <h1>Contactez-nous</h1>

      <form onSubmit={handleSubmit} className="contact">
        <div className="flex">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
          />
        </div>
        <div className="flex">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
          />
        </div>
        <div className="flex">
          <label htmlFor="adresse">Adresse</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            required
          />
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
    </main>
  </div>
);

export default Contact;

