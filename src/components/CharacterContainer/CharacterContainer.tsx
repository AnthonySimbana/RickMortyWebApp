/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent } from "react";
import { useCharacterContainer } from "./state/useCharacterContainer";
import { Character } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";
import { CardCharacter } from "../CardCharacter/CardCharacter";
import { ContainerStyle, InputStyle } from "./CharacterContainer.styles";

export interface ICharacterContainerProps {
  listCharacter: Character[];
}

export const CharacterContainer = ({ listCharacter }: ICharacterContainerProps) => {
  const { setFilter, characterList } = useCharacterContainer(listCharacter);

  return (
    <div
      style={ContainerStyle}
    >
      <input
        style={InputStyle}
        type="text"
        placeholder="Busca un personaje"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFilter(e.target.value.trim());
        }}
      />
      {characterList.length !== 0 ? (
        characterList.map((character) => <CardCharacter key={character.id} {...character} />)
      ) : (
        <h3>Pokemones no encontrados</h3>
      )}
    </div>
  );
};
