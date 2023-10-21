import React from "react";

export const CharacterDetailStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "20px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

export const CharacterImageStyles: React.CSSProperties = {
  maxWidth: "300px",
  maxHeight: "300px",
  objectFit: "cover",
  borderRadius: "10px",
  margin: "10px 0",
};

export const CharacterInfoStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const CharacterNameStyles: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
};

export const CharacterFieldStyles: React.CSSProperties = {
  fontSize: "18px",
  margin: "5px 0",
};

export const CharacterNoImageStyles: React.CSSProperties = {
  fontSize: "18px",
  fontStyle: "italic",
  margin: "10px 0",
};
