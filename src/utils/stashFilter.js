const path = "https://api-staging.stasher.com/v1/stashpoints";

export const stashFilter = async params => {
  const res = await fetch(path);
  const json = await res.json();
  return json;
};
