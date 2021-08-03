/* eslint-disable no-throw-literal */
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
  
  if (fetchPromise.data) {
    return fetchPromise.data[state]
  } else {
    alert("No Data was returned!. Please retry later");
  }
}

const fetchDataAllState = async () => {
  const fetchPromise = await fetch(`${url}/state`, {
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
          state: res.name,
          date:new Date().toLocaleDateString("de-DE", options),
          cases: res.cases,
          recovered: res.recovered,
          deaths:res.deaths
        })
      }
    return finalResponse
  } else {
     alert("No Data was returned!. Please retry later");
  }
  
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

  if (cases.data.length > 0  && recovered.data.length > 0 && deaths.data.length > 0) {  
    for (let index = cases.data[state].history.length; index > 0; --index) {
      finalResponse.push({
        cases: cases.data[state].history[index -1].cases,
        recovered: recovered.data[state].history[index -1].recovered,
        deaths: deaths.data[state].history[index- 1].deaths,
        date: new Date(cases.data[state].history[index - 1].date).toLocaleDateString("de-DE", options),
        state:cases.data[state].name,
      });
    }
    return finalResponse
  } else {
     alert("No Data was returned!. Please retry later");
  }
}

export {
  fetchDataGermany,
  fetchDataStateALL,
  fetchDataStatePerWeek,
  fetchDataAllState
}