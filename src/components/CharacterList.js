import React from 'react';
// import Character from './Character';

const CharacterList = (props) => {
    return (
        <>
            {props.characterList.map(character=> {
            return (
                <div className="character-wrapper">
                    <h3>Name: {character.name}</h3>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Hair color: {character.hair_color}</p>
                    <p>Skin color: {character.skin_color}</p>
                    <p>Eye color: {character.eye_color}</p>
                    <p>Birth Year: {character.birth_year}</p>
                </div>
        )
      })}
        </>
    )
}

export default CharacterList;