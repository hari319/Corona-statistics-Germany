/* eslint-disable no-use-before-define */
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import GermanyJSON from "../../JSON/germany.json";
import { Context } from "../Context";

interface Germany {
  name: string;
  code: string;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const CountryPicker = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { setSelectedState } = useContext(Context);

  return (
    <Autocomplete
      id="country-picker"
      style={{ width: 300 }}
      options={GermanyJSON as Germany[]}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <span>{option.name}</span>
        </React.Fragment>
      )}
      onChange={(e, value) => value && setSelectedState(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("STATECHOSSE")}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};

export default CountryPicker;
