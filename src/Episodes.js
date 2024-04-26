import { useEffect, useState } from "react";
import EmptyHeart from './icons8-heart noBackground-50.png';
import RedHeart from './icons8-heart red-50.png'
import { Link } from "react-router-dom";
import ep1 from './ep1.jpg';


const Episode = () => {
  const [data, setdata] = useState();
  const [char, setChar] = useState();

  useEffect(() => {
    let dataArr = [];
    let charData = fetch('https://rickandmortyapi.com/api/episode');
    charData
      .then(res => res.json())
      .then((result) => {
        for (var i = 0; i < 4; i++) {
          dataArr.push(result.results[i])
        }
        console.log(dataArr);
      })
      .then(() => setdata(dataArr))
      .catch(error=>
        console.error("Error in Fetching episodes.",error)
      )
  }, [])

  useEffect(() =>{
    let charData = fetch('https://rickandmortyapi.com/api/character');
    charData.then(res => res.json())
    .then(json => setChar(json.results))
    .catch(error => console.error("error fetching chardata",error));
  },[]);

  let [icon, setIcon] = useState(<img src={EmptyHeart} alt="Heart-logo" />)
  
  return (
    <div>
      <div className="char-heading">
        <h1>Episodes</h1>
        <Link to="EpiPage" className="char-links">View all Episodes</Link>
      </div>
      <div className="character-cont">
        {
          data &&
          data.map((item, index) => (
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
                {
                  char &&
                  char.map((item,index) => {
                    return(
                      <div className="small-char-icon">
                      <img src={item.image} alt="small -char-img" />
                    </div>
                    )
                  })
                }
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Episode;
