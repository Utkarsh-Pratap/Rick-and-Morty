import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Character = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    let dataArr = [];
    let charData = fetch('https://rickandmortyapi.com/api/character');
    charData
      .then(res => res.json())
      .then((result) => {
        for (var i = 0; i < 4; i++) {
          dataArr.push(result.results[i])
        }
        console.log(dataArr, "Characters");
      })
      .then(() => setdata(dataArr))
      .catch(err => console.error("Error in fetching characters.", err));
  }, [])
  

  return (
    <div>

      <div className="char-heading">
        <h1>Characters</h1>
        <Link to="CharPage" className="char-links">View all characters</Link>
      </div>

      <div className="character-cont">
        {
          data &&
          data.map((item, index) => (
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
  )
}
export default Character;
