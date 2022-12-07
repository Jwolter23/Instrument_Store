import { useState,useEffect } from "react"
import axios from "axios"

export default function Bass (props) {
    let instruments = props.instruments
    let length = instruments.length
    if (length === 0  ) {
    return (
        <div>
            <h1>Loading Please Wait...</h1>
        </div>
    )
    } else {       
    return(
        <div className="grid">
            <div className="instrument">
            <h3>{props.instruments[16].brand}</h3>
            <h3>{props.instruments[16].model}</h3>
            <img className="instrument-image" src={props.instruments[16].image}></img>
            <h3>{props.instruments[16].color}</h3>
            <h3>{props.instruments[16].type}</h3>
            <h3>${props.instruments[16].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[17].brand}</h3>
            <h3>{props.instruments[17].model}</h3>
            <img className="instrument-image" src={props.instruments[17].image}></img>
            <h3>{props.instruments[17].color}</h3>
            <h3>{props.instruments[17].type}</h3>
            <h3>${props.instruments[17].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[18].brand}</h3>
            <h3>{props.instruments[18].model}</h3>
            <img className="instrument-image" src={props.instruments[18].image}></img>
            <h3>{props.instruments[18].color}</h3>
            <h3>{props.instruments[18].type}</h3>
            <h3>${props.instruments[18].price}</h3>
            </div>
            <div className="instrument">
            <h3>{props.instruments[19].brand}</h3>
            <h3>{props.instruments[19].model}</h3>
            <img className="instrument-image" src={props.instruments[19].image}></img>
            <h3>{props.instruments[19].color}</h3>
            <h3>{props.instruments[19].type}</h3>
            <h3>${props.instruments[19].price}</h3>
            </div>
        </div>
    )
}

}