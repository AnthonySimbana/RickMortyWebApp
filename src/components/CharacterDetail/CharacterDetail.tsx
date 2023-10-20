import { useCharacterDetail } from "./state/useCharacterDetail";

export const CharacterDetail = () => {
    const { character } = useCharacterDetail();

    return (
        <div>
          <h1>Detalle de character</h1>
          {character !== null ? (
            <>
              <h2>{character.name}</h2>
              {character.url !== null ? (
                <img
                  src={character.image}
                  alt={character.name}
                />
              ) : (
                <h3>No tiene imagen</h3>
              )}
            </>
          ) : (
            <h2>Cargando...</h2>
          )}
        </div>
      );
};