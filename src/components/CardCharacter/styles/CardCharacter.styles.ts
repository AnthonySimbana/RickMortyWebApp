import React from "react";

export const CardContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  borderRadius: "10px",
  boxShadow: "0px 9px 12px 5px rgba(0,0,0,0.19)",
  margin: "20px",
  backgroundColor: "white", // Fondo blanco
  width: "350px", // Ancho máximo fijo
  height: "150px",
  color: "black",
  transition: "transform 0.2s", // Agregar una transición suave
  cursor: "pointer", // Cambiar el cursor a una mano
};

export const CardContainerStylesHover: React.CSSProperties = {
  transform: "scale(1.05)", // Escala ligeramente al hacer hover
};

export const ImgStyles: React.CSSProperties = {
  backgroundColor: "#f2f2f2",
  borderRadius: "10px 0px 0px 10px",
  maxWidth: "150px", // Tamaño máximo de la imagen
  height: "auto", // Altura automática para mantener la proporción
};

export const ContentStyles: React.CSSProperties = {
  backgroundColor: "white", // Fondo blanco
  width: "100%", // Ancho máximo fijo
  height: "100%",
}

export const ContenP : React.CSSProperties = {
margin: "5px",
padding: "0px 0px 0px 5px"
}

export const ContenH : React.CSSProperties = {
  margin: "10px",
}