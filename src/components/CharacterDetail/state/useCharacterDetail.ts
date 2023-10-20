import { useEffect, useState } from "react";
import { Character } from "../../../Pages/Dashboard/interfaces/Dashboard.interfaces";
import { useParams } from "react-router-dom";

export const useCharacterDetail = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const params = useParams();
  console.log(params);

  
  useEffect(() => {
    //Get character from the API
    const getCharacter = async () => {
      console.log('Ejecutando getcharacter')
      const response = await fetch(
        `${import.meta.env.VITE_POKE_API_BASE_PATH}/character/${params.id}`
      );
      const data = await response.json();
      setCharacter(data);
      console.log(data);
    };


    getCharacter();
  }, [params]);

  return {
    character,
  };
};
