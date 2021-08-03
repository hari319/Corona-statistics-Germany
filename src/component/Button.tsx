import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Context } from "./Context";
import {
  fetchDataStatePerWeek,
  fetchDataStateALL,
  fetchDataAllState,
} from "../api/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minWidth: 200,
      height: 55,
    },
  })
);

const AddButton = () => {
  const classes = useStyles();
  const { weeks, selectedState, setTableData, setWeeks } = useContext(Context);
  const { t } = useTranslation();

  const handleOnClick = async () => {
    let response: any = "";
    if (selectedState.name === "Germany") {
      response = await fetchDataAllState();
    } else if (weeks.toString() === "0") {
      response = await fetchDataStateALL(selectedState.code);
    } else {
      response = await fetchDataStatePerWeek(selectedState.code, weeks);
    }
    setWeeks("");
    setTableData(response);
  };

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="medium"
        disabled={
          selectedState === undefined || weeks === undefined || weeks === ""
        }
        onClick={handleOnClick}
      >
        {t("Add")}
      </Button>
    </>
  );
};

export default AddButton;
