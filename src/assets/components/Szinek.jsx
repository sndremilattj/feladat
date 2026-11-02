import { useState } from "react";

function Szinek() {
    const szinek = [
    {
        RGB: "148, 172, 212",
        nev: "turkiz"
    },
    {
        RGB: "255, 21, 0",
        nev: "piros"
    },
    {
        RGB: "255, 0, 225",
        nev: "magenta"
    }
]
    { szinek.map( (szin, i => {
        //Gondolom a szín nevét lenne jobb megjelenitésnek.
        return <option key={i} id={i.nev}>{i.nev}</option>
    }) ) }
}

export default Szinek;