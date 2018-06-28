const path = "https://api-staging.stasher.com/v1/stashpoints";

export const stashFilter = async params => {
  let pathRequest = "";

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

  const res = await fetch(pathRequest);
  const json = await res.json();
  return json;
};
