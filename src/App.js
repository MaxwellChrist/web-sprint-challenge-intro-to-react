import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

  const App = () => {
  const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        // console.log(res.data);
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