import { CharacterContainer } from "../../components/CharacterContainer/CharacterContainer";
import { useDashboard } from "./state/useDashboard";

export const Dashboard = () => {

  const { listCharacters } = useDashboard();

    return (
      <>
        <CharacterContainer listCharacter={listCharacters} />
      </>
    );
  };
  