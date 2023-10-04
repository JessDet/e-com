import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Vérifier si le token JWT est expiré
    const tokenExpiration = localStorage.getItem('jwtTokenExpiration');
    if (tokenExpiration && Date.now() > Number(tokenExpiration)) {
      // Le token JWT a expiré, déconnecter l'utilisateur
      setToken('');
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('jwtTokenExpiration');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/users`, {
        email: formData.email,
        password: formData.password,
      });
      console.log('Token received:', response.data.token);
      // Stocker le token JWT côté React
      // setToken(response.data.token);

      // Stocker la date d'expiration du token dans localStorage
      const tokenExpiration = Date.now() + response.data.expiresIn * 1000;
      localStorage.setItem('jwtTokenExpiration', tokenExpiration);

      // Pour stocker le token dans localStorage
      localStorage.setItem('jwtToken', response.data.token);

      // Réinitialiser le formulaire
      setFormData({
        email: '',
        password: '',
      });

      setError(''); // Réinitialiser les erreurs en cas de succès

    } catch (error) {
      
      // Gérer les erreurs de connexion
      setError('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  };

  const handleLogout = () => {
    // Déconnexion de l'utilisateur
    setToken('');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('jwtTokenExpiration');
  };

  return (
    <div>
      <h2>Connexion</h2>
      {token ? (
        <div>
          <p>Vous êtes connecté !</p>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Se connecter</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginForm;