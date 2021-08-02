/* eslint-disable no-throw-literal */
import _ from "lodash"

const url = "https://api.corona-zahlen.org";
const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

const fetchDataGermany = async() => {
  const fetchPromise = await fetch(
    `${url}/germany`,
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
      console.error(error);
			if (error.toString().indexOf("429") !== -1) {
				return { error: { message: "Please take a break! You only have a limited amount of API calls!" } };
			}

    });

  return fetchPromise;
}

const fetchDataStateALL= async(state) => {  
  const fetchPromise = await fetch(`${url}/states/${state}`, {
    method: 'GET',
  }).then((response) => {
    if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  return fetchPromise.data[state]
}

const fetchDataStatePerWeek = async (state, weeks) => {
  let cases = await fetch(`${url}/states/${state}/history/cases/${weeks}`, {
    method: 'GET',
  }).then(async (response) => {
      if (response.ok) {
          return await response.json();
      } 
    }).catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  let recovered= await fetch(`${url}/states/${state}/history/recovered/${weeks}`, {
    method: 'GET',
  }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  let deaths= await fetch(`${url}/states/${state}/history/deaths/${weeks}`, {
    method: 'GET',
  }).then((response) => {
      if (response.ok) {
          return response.json();
      }
    }).catch((error) => {
      throw new Error('FETCH ERROR:', error);
    });
  
  const finalResponse = [];

  for (let index = cases.data[state].history.length; index > 0; --index) {
    finalResponse.push({
      cases: cases.data[state].history[index -1].cases,
      recovered: recovered.data[state].history[index -1].recovered,
      deaths: deaths.data[state].history[index- 1].deaths,
      date: new Date(cases.data[state].history[index- 1].date).toLocaleDateString("de-DE", options)
    });
  }

  return finalResponse
}

export {
  fetchDataGermany,
  fetchDataStateALL,
  fetchDataStatePerWeek
}