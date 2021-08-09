/* eslint-disable no-throw-literal */
import GermanyDistricts from "../JSON/GermnayDistricts.json"

const URL = "https://api.corona-zahlen.org";
const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

//This API produces a list of total cases, recovered cases, and deaths for Germany as a whole.
const fetchDataGermany = async() => {
  const fetchPromise = await fetch(
    `${URL}/germany`,
    {
      method: 'GET',
    }
  ).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw {
        name: "ResponseError",
        message: "GET Request returned not okay",
        toString: function () {
          return this.name + ": " + this.message;
        }
      };
		}
  }).catch((error) => {
			if (error.toString().indexOf("429") !== -1) {
				return { error: { message: "Please take a break! You only have a limited amount of API calls!" } };
			}
    });

  return fetchPromise;
}

//This API returns a list of all state with total cases, recovered and deaths.
const fetchDataAllState = async () => {
  const fetchPromise = await fetch(`${URL}/states`, {
    method: 'GET',
  }).then((response) => {
      if (response.ok) {
          return response.json();
      }
    })
    .catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  let finalResponse = []

  if (fetchPromise) {
      for (const property in fetchPromise.data) {
        let res = fetchPromise.data[property]
        finalResponse.push({
          name: res.name,
          date:new Date().toLocaleDateString("de-DE", options),
          cases: res.cases,
          recovered: res.recovered,
          deaths:res.deaths
        })
      }
    return finalResponse
  } else {
     AlertNotification();
  }  
}

//This API returns a list of all state districts' data .
const fetchDataAllDistricts = async () => {
  const fetchPromise = await fetch(`${URL}/districts`, {
    method: 'GET',
  }).then((response) => {
      if (response.ok) {
          return response.json();
      }
    })
    .catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  let finalResponse = []

  if (emptyCheck(fetchPromise.data)) {
    for (const property in fetchPromise.data) {
      let res = fetchPromise.data[property]
      let response = {
        name: res.name,
        date:new Date().toLocaleDateString("de-DE", options),
        cases: res.cases,
        recovered: res.recovered,
        deaths:res.deaths
      }

      if (finalResponse.length > 0 && finalResponse.some(obj => Object.keys(obj).includes(res.state))) {
        finalResponse.forEach((e, i) => {
          if (Object.keys(e).includes(res.state)) {            
            finalResponse[i][res.state].push(response)
          }
        })
        
      } else {
        finalResponse.push({
          [res.state]: [response]
        },)
      }
    }

    return finalResponse
  } else {
     AlertNotification();
  }  
}

// This API returns the entire list of a single state/district.
const fetchDataALL= async(APItype, typeValue) => {  
  const fetchPromise = await fetch(`${URL}/${APItype}/${typeValue}`, {
    method: 'GET',
  }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  if (fetchPromise && fetchPromise.data) {
    return fetchPromise.data[typeValue]
  } else {
    AlertNotification();
  }
}

// This API gives data for a particular state/district per request weeks.
const fetchDataPerWeek = async (APItype, typeValue, weeks) => {

  let cases = await fetch(`${URL}/${APItype}/${typeValue}/history/cases/${weeks}`, {
    method: 'GET',
  }).then(async (response) => {
      if (response.ok) {
          return await response.json();
      }
    }).catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  let recovered= await fetch(`${URL}/${APItype}/${typeValue}/history/recovered/${weeks}`, {
    method: 'GET',
  }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  let deaths= await fetch(`${URL}/${APItype}/${typeValue}/history/deaths/${weeks}`, {
    method: 'GET',
  }).then((response) => {
      if (response.ok) {
          return response.json();
      }
    }).catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  const finalResponse = [];

  if (emptyCheck(cases.data[typeValue]) && emptyCheck(recovered.data[typeValue]) && emptyCheck(deaths.data[typeValue])) {
    let name = APItype === "states" ? cases.data[typeValue].name : (GermanyDistricts.find(obj => obj.code === typeValue)).name
    for (let index = cases.data[typeValue].history.length; index > 0; --index) {
      finalResponse.push({
        cases: cases.data[typeValue].history[index -1].cases,
        recovered: recovered.data[typeValue].history[index -1].recovered,
        deaths: deaths.data[typeValue].history[index- 1].deaths,
        date: new Date(cases.data[typeValue].history[index - 1].date).toLocaleDateString("de-DE", options),
        name:name,
      });
    }
    return finalResponse
  } else {
     AlertNotification();
  }
}

const emptyCheck = (e) => {
  return e && Object.keys(e).length > 0
}

const AlertNotification = () => {
  alert("No Data was returned!. Please retry later");
}

export {
  fetchDataGermany,
  fetchDataALL,
  fetchDataPerWeek,
  fetchDataAllDistricts,
  fetchDataAllState,
}