import React, { Component } from "react";

export const SingleStash = ({ stash: { name, address, country } }) => {
  return (
    <a href="#">
      <h3>Host name: {name}</h3>
      <p>Adsress: {address}</p>
      <p>Country: {country}</p>
    </a>
  );
};
