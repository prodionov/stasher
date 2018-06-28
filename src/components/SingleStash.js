import React, { Component } from "react";

export const SingleStash = ({ stash: { name, address, country } }) => {
  return (
    <a href="#">
      <p>Host name: {name}</p>
      <p>Adsress: {address}</p>
      <p>Country: {country}</p>
    </a>
  );
};
