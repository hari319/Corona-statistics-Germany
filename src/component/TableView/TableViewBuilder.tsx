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
  useMediaQuery,
  useTheme,
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

const FormBuilder = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { setSelectedState, setWeeks, setStateData, setDistrictsData } =
    useContext(Context);
  const [countryPicker, setCountryPicker] = useState<SelectedState>({
    name: '',
    code: '',
  });
  const [countryPickerInput, setCountryPickerInput] = useState<string>();
  const [WeeksPicker, setWeeksPicker] = useState<string>('');
  let disable = countryPicker && countryPicker.code === 'all' ? true : false;

  const useStyles = makeStyles(() => ({
    row: {
      display: matchesMobile ? 'grid' : 'flex',
      flexDirection: matchesMobile ? 'column' : 'row',
      alignItems: 'center',
    },
    mobileView: {
      display: matchesMobile ? 'contents' : '',
    },
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
    formControl: {
      marginTop: matchesMobile ? '15px' : '',
      minWidth: 300,
    },
    button: {
      minWidth: 300,
      marginTop: matchesMobile ? '15px' : '',
      height: 55,
    },
  }));

  const classes = useStyles();

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
    setCountryPickerInput('');
  };

  return (
    <div className={classes.row}>
      <Grid
        container
        direction={matchesMobile ? 'column' : 'row'}
        justify="center"
        alignItems="center"
        wrap="nowrap"
        spacing={3}
      >
        <Grid container item xs={4} className={classes.mobileView}>
          <Autocomplete
            value={countryPicker}
            inputValue={countryPickerInput}
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
            onChange={(e, value) => value && setCountryPicker(value)}
            onInputChange={(event, value) => {
              setCountryPickerInput(value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t('STATECHOSSE')}
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid container item xs={4} className={classes.mobileView}>
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
        <Grid container item xs={3} className={classes.mobileView}>
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
    </div>
  );
};

export default FormBuilder;
