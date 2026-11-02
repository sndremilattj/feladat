import { useState } from "react";

const szinek = [
    {
        RGB: "#94acd4",
        nev: "turkiz"
    },
    {
        RGB: "#ff1500",
        nev: "piros"
    },
    {
        RGB: "#ff00e1",
        nev: "magenta"
    }
]

function Szinek() {
    { szinek.map( (szin, i => {
        //Gondolom a szín lenne jobb megjelenitésnek.
        return <option key={i} id={i.nev}>{szinek.nev}</option>
    }) ) }
}

export default Szinek;