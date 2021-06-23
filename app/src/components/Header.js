import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import DoradoAutoLogo from "../DoradoAutoLogo.png";
import React from "react";
import Navigation from "./Navigation";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    height: "15vh",
    backgroundColor: "#1f1f1f",
    fontSize: "calc(5px + 2vmin)",
    color: "#b79756",
  },

  logo: {
    height: "14vh",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Header() {
  const { header, logo, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <img className={logo} src={DoradoAutoLogo} alt="Dorado Auto" />
        <Navigation />
      </Toolbar>
    );
  };

  return (
    <header className={header}>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
