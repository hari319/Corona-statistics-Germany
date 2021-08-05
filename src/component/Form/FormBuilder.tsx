import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@material-ui/core';
import { Context, SelectedState } from '../Context';
import GermanyJSON from '../../JSON/germany.json';
import {
  fetchDataStatePerWeek,
  fetchDataStateALL,
  fetchDataAllState,
  fetchDataAllDistricts,
} from '../../api/api';

interface Germany {
  name: string;
  code: string;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  formControl: {
    minWidth: 280,
  },
  button: {
    minWidth: 200,
    height: 55,
  },
});

const FormBuilder = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { setSelectedState, setWeeks, setStateData, setDistrictsData } =
    useContext(Context);
  const [countryPicker, setCountryPicker] = useState<SelectedState>({
    name: '',
    code: '',
  });
  const [WeeksPicker, setWeeksPicker] = useState<string>('');
  let disable = countryPicker && countryPicker.code === 'all' ? true : false;

  const handleOnClick = async () => {
    let statesData: any = '';
    let districtsData: any = '';
    if (countryPicker.name === 'Germany') {
      statesData = await fetchDataAllState();
      districtsData = await fetchDataAllDistricts();
    } else if (WeeksPicker.toString() === '0') {
      statesData = await fetchDataStateALL(countryPicker.code);
    } else {
      statesData = await fetchDataStatePerWeek(countryPicker.code, WeeksPicker);
    }

    if (districtsData !== '') {
      setDistrictsData(districtsData);
    }

    setStateData(statesData);
    setWeeks(WeeksPicker);
    setSelectedState(countryPicker);
    setCountryPicker({ name: '', code: '' });
    setWeeksPicker('');
  };

  return (
    <Grid container spacing={6} alignItems="center" justifyContent="center">
      <Grid item xs={4}>
        <Autocomplete
          id="country-picker"
          style={{ width: 300 }}
          options={GermanyJSON as Germany[]}
          inputValue={countryPicker.name}
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
          onChange={(e, value) => value && setCountryPicker(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t('STATECHOSSE')}
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-label">{t('WEEKS')}</InputLabel>
          <Select
            labelId="select"
            id="select"
            value={WeeksPicker}
            onChange={(event) => setWeeksPicker(event.target.value as string)}
            label={t('WEEKS')}
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
      </Grid>
      <Grid item xs={3}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="medium"
          disabled={
            countryPicker.name === '' ||
            WeeksPicker === undefined ||
            WeeksPicker === ''
          }
          onClick={handleOnClick}
        >
          {t('ADD')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormBuilder;
