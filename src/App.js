import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export default function MyBrand() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const updateBlueColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
  const updatepurpleColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "purple" }
    });
  }
  const updateblackColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "black" }
    });
  }
  const updatepinkColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "pink" }
    });
  }
  const updateAudiModel = () => {
    setCar(previousState => {
      return { ...previousState, model: "Audi" }
    });
  }
  const updateBuggattiModel = () => {
    setCar(previousState => {
      return { ...previousState, model: "Buggatti" }
    });
  }
  const updateFarrariModel = () => {
    setCar(previousState => {
      return { ...previousState, model: "Farrati" }
    });
  }
  const updateKTMModel = () => {
    setCar(previousState => {
      return { ...previousState, model: "KTM" }
    });
  }
  const update1956Year = () => {
    setCar(previousState => {
      return { ...previousState, year: "1956" }
    });
  }
  const update1957Year = () => {
    setCar(previousState => {
      return { ...previousState, year: "1958" }
    });
  }
  const update1959Year = () => {
    setCar(previousState => {
      return { ...previousState, year: "1959" }
    });
  }
  const update1960Year = () => {
    setCar(previousState => {
      return { ...previousState, year: "1960" }
    });
  }
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateBlueColor}
      >Blue</button>
       <button
        type="button"
        onClick={updatepurpleColor}
      >purple</button>
      <button
        type="button"
        onClick={updateblackColor}
      >black</button>
      <button
        type="button"
        onClick={updatepinkColor}
      >pink</button>


      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateAudiModel}
      >Audi</button>
       <button
        type="button"
        onClick={updateBuggattiModel}
      >Buggatti</button>
      <button
        type="button"
        onClick={updateFarrariModel}
      >Farrari</button>
      <button
        type="button"
        onClick={updateKTMModel}
      >KTM</button>

<h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={update1956Year}
      >1956</button>
       <button
        type="button"
        onClick={update1957Year}
      >1957</button>
      <button
        type="button"
        onClick={update1959Year}
      >1959</button>
      <button
        type="button"
        onClick={update1960Year}
      >1960</button>
    </>
  );
}
