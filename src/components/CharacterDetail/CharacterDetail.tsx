import React from "react";
import { CharacterDetailStyles, CharacterImageStyles, CharacterInfoStyles, CharacterNameStyles, CharacterFieldStyles, CharacterNoImageStyles } from "./CharacterDetail.styles";
import { useCharacterDetail } from "./state/useCharacterDetail";

export const CharacterDetail = () => {
  const {character} = useCharacterDetail()
  return (
    <div style={CharacterDetailStyles}>
      <h1 style={CharacterNameStyles}>Detalle de personaje</h1>
      {character !== null ? (
        <>
          <img src={character.image} alt={character.name} style={CharacterImageStyles} />
          <h2 style={CharacterNameStyles}>{character.name}</h2>
          <p style={CharacterFieldStyles}>Status: {character.status}</p>
          <p style={CharacterFieldStyles}>Especie: {character.species}</p>
          <p style={CharacterFieldStyles}>Tipo: {character.type}</p>
          <p style={CharacterFieldStyles}>Género: {character.gender}</p>
          <p style={CharacterFieldStyles}>Origen: {character.origin.name}</p>
          <p style={CharacterFieldStyles}>Ubicación: {character.location.name}</p>
          <p style={CharacterFieldStyles}>Fecha de creación: {character.created}</p>
          <h3 style={CharacterNameStyles}>Episodios en los que aparece:</h3>
          <ul>
            {character.episode.map((episode, index) => (
              <li key={index}>{episode}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2 style={CharacterNameStyles}>Cargando...</h2>
      )}
    </div>
  );
};
