/* eslint-disable no-use-before-define */
import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { Context } from "../Context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 280,
    },
  })
);

const WeeksPicker = () => {
  const classes = useStyles();
  const { selectedState, weeks, setWeeks } = useContext(Context);
  let disable = selectedState && selectedState.code === "all" ? true : false;

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-label">Select a Weeks</InputLabel>
        <Select
          labelId="select"
          id="select"
          value={weeks}
          onChange={(event) => setWeeks(event.target.value as string)}
          label="Select a Weeks"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={7} disabled={disable}>
            1 week
          </MenuItem>
          <MenuItem value={14} disabled={disable}>
            2 Weeks
          </MenuItem>
          <MenuItem value={21} disabled={disable}>
            3 weeks
          </MenuItem>
          <MenuItem value={28} disabled={disable}>
            4 weeks
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default WeeksPicker;
