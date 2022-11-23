import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);

    // NOTE: Never do this!
    // onSubmit(document.querySelector("input").value);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
