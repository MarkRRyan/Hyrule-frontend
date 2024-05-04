import React, { useState, useEffect } from "react";
import axios from 'axios'

const Monsters = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const apiUrl = process.env.REACT_APP_API_URL;
  
      axios.get(apiUrl)
        .then(res => {
          setData(res.data);
          console.log(res.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Monsters :)</h1>
        <div className="container row">
          {data.map(monster => (
            <div className='card-container'>
              <div className="card col s3">
                <div className="card-image waves-effect waves-block waves-light">
                  <img src={monster.image} alt="compendium monster" />
                </div>
                <div className="card-content">
                  <h1 className='card-title activator grey-text' key={monster.id}>{monster.name} :)</h1>
                  <p>Compendium ID: {monster.compendiumId}</p>
                </div>
                <div className="card-reveal">
                  <span class="card-title grey-text text-darken-4">Description:<i class="material-icons right">close</i></span>
                  <p>{monster.description}</p>
                  <ul>
                      <h4>Drops:</h4>
                      {monster.drops.map(drop => (
                          <li key={drop.id}>{drop}</li>
                      ))}
                  </ul>
                  <ul>
                      <h4>Commonly Found:</h4>
                      {monster.commonLocations.map(location => (
                          <li key={location.id}>{location}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>

    );
  };

export default Monsters