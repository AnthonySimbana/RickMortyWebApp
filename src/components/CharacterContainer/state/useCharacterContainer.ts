/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Character } from "../../../Pages/Dashboard/interfaces/Dashboard.interfaces";

export const useCharacterContainer = (listCharacters: Character[]) => {
  const [characterList, setPokemonList] =
    useState<Character[]>(listCharacters);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const filertCharacter = (name: string): Character[] => {
      return listCharacters.filter((character) => {
        const namesEnMayuscula = character.name.toUpperCase()
        return namesEnMayuscula.includes(name.toUpperCase());
      });
    };

    if (characterList.length === 0 && filter === "") {
      setPokemonList(listCharacters);
      return;
    }

    if (filter !== "") {
      setPokemonList(filertCharacter(filter));
    }

    if (filter === "") {
      setPokemonList(listCharacters);
    }
  }, [filter]);

  useEffect(() => {
    setPokemonList(listCharacters); // antes se cargaba por un archivo quemado
  }, [listCharacters]);

  return {
    characterList,
    setFilter,
  };
};
