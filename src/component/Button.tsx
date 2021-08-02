import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Context } from "./Context";
import { fetchDataStatePerWeek, fetchDataStateALL } from "../api/api";

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
  const { weeks, selectedState, setTableData } = useContext(Context);
  const { t } = useTranslation();

  const handleOnClick = async () => {
    let response =
      weeks === 0
        ? await fetchDataStateALL(selectedState.code)
        : await fetchDataStatePerWeek(selectedState.code, weeks);
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
