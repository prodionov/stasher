const path = "https://api-staging.stasher.com/v1/stashpoints";

export const stashFilter = async params => {
  let pathRequest = "";

  if (!params) {
    pathRequest = path;
  } else {
    pathRequest = `${path}?city=${params.payload.search}`;
  }

  const res = await fetch(pathRequest);
  const json = await res.json();
  return json;
};
