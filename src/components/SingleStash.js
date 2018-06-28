import React, { Component } from "react";

export const SingleStash = ({ stash: { name, address, country, photos } }) => {
  return (
    <div className="itemCard">
      <a href="#">
        <h3>Host name: {name}</h3>
        <p>Adsress: {address}</p>
        <p>Country: {country}</p>
      </a>
      <img src={photos[0]} />
    </div>
  );
};
