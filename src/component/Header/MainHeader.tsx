import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import CoronaLogo from "../../imgs/corona-144x144.png";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className={"root"}>
      <AppBar position="static">
        <Toolbar className={"toolbar"}>
          <div className={"header-div"}>
            <span className={"header-img"}>
              <img
                style={{ height: 40 }}
                alt={"Corona-Icon"}
                src={CoronaLogo}
              />
            </span>
            <h1>COVID-19 statistics Germany</h1>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;
