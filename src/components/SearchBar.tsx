import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GameSearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/games?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search games..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default GameSearchBar;
