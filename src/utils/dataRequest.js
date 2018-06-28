const path = "https://api-staging.stasher.com/v1/stashpoints";
const orderType = "by_bags_last_30_days";

export const dataRequest = async params => {
  let pathRequest = "";
  console.log("params", params);

  if (!params) {
    pathRequest = path;
  } else {
    pathRequest = `${path}?`;

    Object.keys(params.payloadFilter).forEach((key, index) => {
      if (params.payloadFilter[key]) {
        pathRequest += `${key}=${params.payloadFilter[key]}&`;
      }
    });
    if (pathRequest[pathRequest.length - 1] == "&") {
      pathRequest = pathRequest.slice(0, pathRequest.length - 1);
    }

    if (params.payloadOrder[orderType]) {
      pathRequest[pathRequest.length - 1] === "?"
        ? (pathRequest += `${orderType}=desc`)
        : (pathRequest += `&${orderType}=desc`);
    }
    console.log("pathRequest", pathRequest);
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
