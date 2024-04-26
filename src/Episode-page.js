import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FilterEpi from "./Filter-epi";
import ep1 from './ep1.jpg'
import EmptyHeart from './icons8-heart noBackground-50.png';
import RedHeart from './icons8-heart red-50.png'






const EpiPage = () => {

  const [characters, setCharacters] = useState();
  const [char, setChar] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    let charData = fetch('https://rickandmortyapi.com/api/character');
    charData.then(res => res.json())
      .then(json => setChar(json.results))
      .catch(error => console.error("error fetching chardata", error));
  }, []);

  const handleFilterChange = (filters) => {
    // Filter the characters based on the selected filters
    const filtered = characters.filter((character) => {
      const { name, episode } = filters;
      return (
        (name === 'all' || character.name.toLowerCase().includes(name.toLowerCase())) &&
        (episode === 'all' || character.episode === episode)
      );
    });

    setFilteredCharacters(filtered);
  };

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      // .then(json => console.log(json.results) )
      .then(json => {
        setCharacters(json.results)
        setFilteredCharacters(json.results)
      })
      .catch(error =>
        console.error("Error in Fetching characters.", error))
  }, []);

  let [icon, setIcon] = useState(<img src={EmptyHeart} alt="Heart-logo" />)

  return (
    <div className="character-page">
      <Header />
      <div className="char-wrapper">
        <div className="filter-wrapper"><FilterEpi characters={characters} onFilterChange={handleFilterChange} /></div>
        <div className="char-items">

          <div className="character-cont">
            {
              filteredCharacters &&
              filteredCharacters.map((item, index) => (
                <div key={index} className="char-card">
                  <img src={ep1} alt="Logo" />
                  <div className="like-section">
                    <p>{item.episode}</p>
                    <button onClick={() => setIcon(<img src={RedHeart} alt="Heart-logo" />)}>{icon}</button>
                  </div>
                  <h2 className="char-name">{item.name}</h2>
                  <p>Air Date : {item.air_date}</p>
                  <p>Characters:</p>
                  <div className="small-char">
                    {char.map((item, index) => (
                      <div key={index} className="small-char-icon">
                        <img src={item.image} alt="small -char-img" />
                      </div>
                    ))}
                  </div>
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

export default EpiPage;
