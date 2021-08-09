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
import { Context, SelectedCountryValue } from '../Context';
import GermanyStates from '../../JSON/GermanyStates.json';
import GermnayDistricts from '../../JSON/GermnayDistricts.json';
import {
  fetchDataALL,
  fetchDataPerWeek,
  fetchDataAllDistricts,
  fetchDataAllState,
} from '../../api/api';

const FormBuilder = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const {
    setSelectedState,
    setWeeks,
    setStateData,
    setDistrictsData,
    setShowTableChart,
    radioValue,
  } = useContext(Context);
  const [countryPicker, setCountryPicker] = useState<SelectedCountryValue>({
    name: '',
    code: '',
    group: '',
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
    let countryData: any = '';
    let districtsData: any = '';

    switch (true) {
      case countryPicker.code === 'all':
        countryData = await fetchDataAllState();
        districtsData = await fetchDataAllDistricts();
        break;
      case WeeksPicker.toString() === '0':
        countryData = await fetchDataALL(radioValue, countryPicker.code);
        break;
      case WeeksPicker.toString() !== '0':
        countryData = await fetchDataPerWeek(
          radioValue,
          countryPicker.code,
          WeeksPicker
        );
        break;
    }

    if (districtsData !== '') {
      setDistrictsData(districtsData);
    }

    setShowTableChart(true);
    setStateData(countryData);
    setWeeks(WeeksPicker);
    setSelectedState(countryPicker);
    setCountryPicker({ name: '', code: '', group: '' });
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
            options={
              radioValue === 'states'
                ? (GermanyStates as SelectedCountryValue[])
                : (GermnayDistricts as SelectedCountryValue[])
            }
            classes={{
              option: classes.option,
            }}
            groupBy={(option) => option.group}
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
                label={
                  radioValue === 'states'
                    ? t('STATECHOSSE')
                    : t('DISTRICTCHOSSE')
                }
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
