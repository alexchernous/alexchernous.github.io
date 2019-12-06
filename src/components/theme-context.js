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
  //when making focus borders, remember to have the same unfocused dimensions
  //otherwise html elements will move around

  //longhand property names due to radium warnings
  inputStyle : { 
    boxShadow: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: "3px",
    borderBottomStyle: "solid",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    margin: "0px",
    padding: "10px",
    width: "90%",
    display: "grid",
    ":focus": {
      borderBottomWidth: "3px",
      borderBottomStyle: "solid",
      borderBottomColor: "rgba(233, 188, 40, 0.9)",
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
    borderWidth: "0px",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: "4px",
    transition: "0.15s",
    ":hover": {
      backgroundColor: "rgba(233, 188, 40, 0.9)",
      // boxShadow: "inset 0 0 0px 2px rgb(212, 173, 45)"
    }
  },
};

//use for dark/light theme options in future
export const ThemeContext = React.createContext();