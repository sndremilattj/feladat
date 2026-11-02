//Mégis mit ért a React az alatt, hogy ez a fájl nem létezik, ha éppen abba írok?
import { useState } from "react";
import { KivalasztottSzin } from "KivalasztottSzin.jsx";

function Szinek() {
  const szinek = [
    {
      RGB: "148, 172, 212",
      nev: "turkiz",
    },
    {
      RGB: "255, 21, 0",
      nev: "piros",
    },
    {
      RGB: "255, 0, 225",
      nev: "magenta",
    },
  ];
  return (
    <div className="Szinvalaszto">
      {szinek.map(
        (szin,
        (i) => {
          //Gondolom a szín nevét lenne jobb megjelenitésnek.
          return (
            <option key={i} id={szin.nev}>
              {szin.nev}
            </option>
          );
        }),
      )}
    </div>
  );
}

export default Szinek;
