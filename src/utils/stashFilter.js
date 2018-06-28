const path = "https://api-staging.stasher.com/v1/stashpoints";

export const stashFilter = async params => {
  let pathRequest = "";
  console.log("params", params);

  if (!params) {
    pathRequest = path;
  } else {
    pathRequest = `${path}?`;
    Object.keys(params.payload).forEach((key, index) => {
      if (params.payload[key]) {
        pathRequest += `${key}=${params.payload[key]}&`;
      }
    });
    if (pathRequest[pathRequest.length - 1] == "&") {
      pathRequest = pathRequest.slice(0, pathRequest.length - 1);
    }
  }

  const checkResponse = response => {
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json();
  };

  const res = await fetch(pathRequest)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch stashAPI failed ${err}`);
    });
  // const json = await res.json();
  return res;
};
