import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';


  const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // testing one user before creating many
  //   const luke = {
  //     name: "Luke Skywalker", 
  //     height: "172", 
  //     mass: "77", 
  //     hair_color: "blond", 
  //     skin_color: "fair", 
  //     eye_color: "blue", 
  //     birth_year: "19BBY", 
  //     gender: "male", 
  //     }

  // const [character, setCharacter] = useState(luke);
  const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        console.log(res.data);
        setCharacterList(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterList={characterList}/>
    </div>
  );
}

export default App;


// {characterList.map(character=> {
//   return (
//     <div>
//       <h3>Name: {character.name}</h3>
//       <p>Height: {character.height}</p>
//       <p>Mass: {character.mass}</p>
//       <p>Hair color: {character.hair_color}</p>
//       <p>Skin color: {character.skin_color}</p>
//       <p>Eye color: {character.eye_color}</p>
//       <p>Birth Year: {character.birth_year}</p>
//       <p>Gender: {character.gender}</p>
//     </div>
//   )
// })
// }