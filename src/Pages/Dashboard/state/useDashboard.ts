import { useEffect, useState } from "react";
import { Character } from "../interfaces/Dashboard.interfaces";

export const useDashboard = () => {
  const [listCharacters, setListCharacters] = useState<Character[]>([]);

  
  useEffect(() => {

    //Get characters from the API
    const getCharacters = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_POKE_API_BASE_PATH}/character`
      );

      const data = await response.json();
      console.log(data);
      setListCharacters(data.results);
    };

    getCharacters();
  }, []);

  return {
    listCharacters,
  };
};
