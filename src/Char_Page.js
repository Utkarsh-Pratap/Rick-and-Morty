import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FilterChar from "./Filter-char";





const CharPage = () => {

  const [characters, setCharacters] = useState();

  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const handleFilterChange = (filters) => {
    // Filter the characters based on the selected filters
    const filtered = characters.filter((character) => {
      const { name, status, species, type, gender } = filters;
      return (
        (name === 'all' || character.name.toLowerCase().includes(name.toLowerCase())) &&
        (status === 'all' || character.status === status) &&
        (species === 'all' || character.species === species) &&
        (type === 'all' || character.type === type) &&
        (gender === 'all' || character.gender === gender)
      );
    });
  
    setFilteredCharacters(filtered);
  };

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(json => {setCharacters(json.results)
        setFilteredCharacters(json.results)})
      .catch(error=>
        console.error("Error in Fetching characters.",error))
  }, []);

  return (
    <div className="character-page">
      <Header />
      <div className="char-wrapper">
        <div className="filter-wrapper"><FilterChar characters={characters} onFilterChange={handleFilterChange}/></div>
        <div className="char-items">

        <div className="character-cont">
        {
          filteredCharacters &&
          filteredCharacters.map((item, index) => (
            <div key={index} className="char-card">
              <h2 className="char-name">{item.name}</h2>
              <p>{item.species}</p>
              <img src={item.image} alt="Logo" />
              <p>Status : {item.status}</p>
              <p>type : {item.type}</p>
              <a href="https://google.com">Learn more</a>
            </div>
          ))
        }
      </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CharPage;
