import { Character } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";

import { useNavigate } from "react-router-dom";
import { CardContainerStyles, CardContainerStylesHover, ContenH, ContenP, ContentStyles, ImgStyles } from "./styles/CardCharacter.styles";
import { useState } from "react";

export const CardCharacter = (character: Character) => {
const navigate = useNavigate();

const getStatusColor = (status: string) => {
  switch (status) {
    case "Alive":
      return "#039027"; // Verde para "Alive"
    case "Dead":
      return "#fe2d28"; // Rojo para "Dead"
    default:
      return "#505050"; // Gris para otros estados
  }
};

const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

return (
  <div
    style={{ ...CardContainerStyles, ...(isHovered && CardContainerStylesHover) }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={() => {
      console.log("ve a la detalle", character.id);
      navigate(`/characters/${character.id}`);
    }}
  >
    <div>
      <img style={ImgStyles} src={character.image} alt={character.name} />
    </div>
    <div style = {ContentStyles}>
      <h3 style={ContenH}>{character.name}</h3>
      <p style={ContenP}>Status: <span style={{ color: getStatusColor(character.status) }}>{character.status}</span></p>
      <p style={ContenP}>Species: {character.species}</p>
      <p style={ContenP}>Origin: {character.origin.name}</p>
    </div>
  </div>
);
};
