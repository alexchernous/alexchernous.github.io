import React from "react";

/*
  can use combination of styles --> style={{styles.button, styles.primary}}
  this way you can combine basic units of styles
*/
export const appDefaultThemes = {
  labelStyle : {
    height: "100%",
    width: "100%",
    margin: "5px",
    padding: "0px",
    color: "black",
    fontSize: "20px",
    textAlign: "left"
  },
  // when making focus borders, remember to have the same unfocused dimensions
  // otherwise html elements will move around
  inputStyle : { 
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "3px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    margin: "0px",
    padding: "10px",
    width: "90%",
    display: "grid",
    ":focus": {
      borderBottom: "3px solid rgba(233, 188, 40, 0.9)",
    }
  },
  buttonBase : {
    margin: "0px",
    padding: "0px",
    cursor: "pointer",
    fontSize: "20px",
    color: "black",
    textAlign: "center",
  },
  submit : {
    width: "50%",
    height: "50px",
    backgroundColor: "rgb(212, 173, 45)",
    border: "0px solid black",
    borderRadius: "4px",
    ":hover": {
      backgroundColor: "rgba(233, 188, 40, 0.9)",
      // boxShadow: "inset 0 0 0px 2px rgb(212, 173, 45)"
    }
  },
  menu : {
    width: "100px",
    height: "100%",
    backgroundColor: "white",
    border: "1px solid black",
    ":hover": {
      backgroundColor: "#204d17"
    }
  }
};

export const ThemeContext = React.createContext();