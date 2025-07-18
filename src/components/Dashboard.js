import React, { useState, useEffect } from 'react';

const Dashboard = ({ onLogout }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError('');

      // Fetch first 20 Pokémon from PokeAPI
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();

      // Fetch detailed data for each Pokémon
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailResponse = await fetch(pokemon.url);
          const detailData = await detailResponse.json();
          return {
            id: detailData.id,
            name: detailData.name,
            image: detailData.sprites.front_default,
            types: detailData.types.map(type => type.type.name),
            height: detailData.height,
            weight: detailData.weight,
            abilities: detailData.abilities.map(ability => ability.ability.name)
          };
        })
      );

      setPokemon(pokemonDetails);
    } catch (err) {
      setError('Failed to fetch Pokémon data. Please try again later.');
      console.error('Error fetching Pokémon:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Pokémon Dashboard</h1>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
        <div className="loading-spinner">
          Loading Pokémon data...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Pokémon Dashboard</h1>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
        <div className="error-message">
          {error}
          <br />
          <button onClick={fetchPokemon} className="btn btn-primary" style={{ marginTop: '10px' }}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Pokémon Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
      
      <div className="pokemon-grid">
        {pokemon.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img 
              src={pokemon.image} 
              alt={pokemon.name}
              className="pokemon-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200x200?text=Pokemon';
              }}
            />
            <div className="pokemon-info">
              <h3 className="pokemon-name">#{pokemon.id} {pokemon.name}</h3>
              <div className="pokemon-details">
                <p><strong>Types:</strong> {pokemon.types.join(', ')}</p>
                <p><strong>Height:</strong> {pokemon.height / 10}m</p>
                <p><strong>Weight:</strong> {pokemon.weight / 10}kg</p>
                <p><strong>Abilities:</strong> {pokemon.abilities.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 