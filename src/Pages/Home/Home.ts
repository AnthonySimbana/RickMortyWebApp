import React from "react";

export const HomeStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  background: "linear-gradient(to bottom,#92d88c , #41877b)",
  fontFamily: "-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'"
};

export const ContainerStyle: React.CSSProperties =  {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    background: "linear-gradient(to bottom, #588c62, #41877b)",
    color: "#EEEEEE",
    textAlign: "center",
  };

  export  const TitleStyle: React.CSSProperties =  {
    fontSize: "2rem",
    marginBottom: "20px",
  };

  export const SubtitleStyle: React.CSSProperties =  {
    fontSize: "1.2rem",
    marginBottom: "30px",
  };

  export const ApiInfoContainerStyle: React.CSSProperties =  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "80%"
  };

  export const ApiInfoStyle: React.CSSProperties =  {
    display: "flex",
    justifyContent: "center",
    width: "100%"

  };

  export const ApiImageStyle: React.CSSProperties =  {
    width: "250px",
    margin: "10px",
  };

  export const ApiInfoResources: React.CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "center"

  }
