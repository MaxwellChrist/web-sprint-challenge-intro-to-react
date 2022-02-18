// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const StyledCharacter = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 60px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin: 20px;
    font-size: 1.5rem;
`;

const StyledHeading = styled.h3`
    color: ${x => x.theme.primary};
    font-size: 2.5rem;
    flex: 0 1 auto;
    width: 500px;
    height: 120px; 
    position: absolute;             
    left: 50%;
    transform: translateX(-50%);
`

const Character = (props) => {
    
    return (
        <>
            {props.characterList.map((character, id)=> {
            return (
                <StyledCharacter key={id}> 
                    <StyledHeading theme={theme}>Name: {character.name}</StyledHeading>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Hair color: {character.hair_color}</p>
                    <p>Skin color: {character.skin_color}</p>
                    <p>Eye color: {character.eye_color}</p>
                    <p>Birth Year: {character.birth_year}</p>
                </StyledCharacter>
        )
      })}
    </>
    )
}

export default Character;