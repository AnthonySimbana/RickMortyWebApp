import './NotFound.css'; // Importa tu archivo de estilos CSS

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" // Puedes utilizar una imagen de Rick o Morty
        alt="Rick"
        className="rick-image"
      />
      <h1 className="not-found-text">Parece que esta página no existe, Morty.</h1>
      <p className="not-found-description">¡Wubba lubba dub dub!</p>
    </div>
  );
};
