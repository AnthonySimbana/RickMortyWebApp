import { ApiImageStyle, ApiInfoContainerStyle, ApiInfoResources, ApiInfoStyle, ContainerStyle, SubtitleStyle, TitleStyle } from "./Home";

export const Home = () => {

  return (
    <div style={ContainerStyle}>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" // Agrega la ruta de una imagen de Rick and Morty
        alt="Rick and Morty Logo"
        style={{
          width: "150px", margin: "40px", borderRadius: "50%"
        }}
      />
      <h1 style={TitleStyle}>Explora el Universo de Rick and Morty</h1>
      <p style={SubtitleStyle}>
        Descubre información sobre tus personajes favoritos y aprende sobre la API de Rick and Morty.
      </p>
      <div style={ApiInfoContainerStyle}>
        <div style={ApiInfoStyle}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" // Agrega la ruta de una imagen relacionada con la API
            alt="Rick API Logo"
            style={ApiImageStyle}
          />

          <p style={{maxWidth: "500px"}}>
            Nuestra página hace uso de la API de Rick and Morty. Esta API es una API (Interfaz de Programación de Aplicaciones) basada en la popular serie de televisión de ciencia ficción "Rick and Morty". Esta API proporciona acceso a una amplia gama de datos y recursos relacionados con la serie, lo que permite a los desarrolladores y fanáticos acceder y utilizar información sobre personajes, episodios, ubicaciones y más.
          </p>
        </div>
        <div style={ApiInfoResources}>
          <ul>
            <li>
              <h2>
                Personajes
              </h2>
              <p>
                Información detallada sobre los personajes de la serie, incluyendo nombres, géneros, estados (vivos, muertos o desconocidos), especies y más.
              </p>
            </li>
            <li>
              <h2>
                Episodios
              </h2>
              <p>
                Datos sobre los episodios de la serie, como títulos, números de episodios, fechas de lanzamiento y resúmenes.
              </p>
            </li>
            <li>
              <h2>
                Ubicaciones
              </h2>
              <p>
                Información sobre los lugares y planetas que aparecen en la serie, incluyendo nombres y tipos de ubicación.
              </p>
            </li>
            <li>
              <h2>
                Citas
              </h2>
              <p>
                Frases y diálogos icónicos de los personajes.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
