import { useState,useEffect } from "react"
import axios from "axios"

export default function Acoustic (props) {
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
            <h3>{props.instruments[10].brand}</h3>
            <h3>{props.instruments[10].model}</h3>
            <img className="instrument-image" src={props.instruments[10].image}></img>
            <h3>{props.instruments[10].color}</h3>
            <h3>{props.instruments[10].type}</h3>
            <h3>${props.instruments[10].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[11].brand}</h3>
            <h3>{props.instruments[11].model}</h3>
            <img className="instrument-image" src={props.instruments[11].image}></img>
            <h3>{props.instruments[11].color}</h3>
            <h3>{props.instruments[11].type}</h3>
            <h3>${props.instruments[11].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[12].brand}</h3>
            <h3>{props.instruments[12].model}</h3>
            <img className="instrument-image" src={props.instruments[12].image}></img>
            <h3>{props.instruments[12].color}</h3>
            <h3>{props.instruments[12].type}</h3>
            <h3>${props.instruments[12].price}</h3>
            </div>
            <div className="instrument">
            <h3>{props.instruments[13].brand}</h3>
            <h3>{props.instruments[13].model}</h3>
            <img className="instrument-image" src={props.instruments[13].image}></img>
            <h3>{props.instruments[13].color}</h3>
            <h3>{props.instruments[13].type}</h3>
            <h3>${props.instruments[13].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[14].brand}</h3>
            <h3>{props.instruments[14].model}</h3>
            <img className="instrument-image" src={props.instruments[14].image}></img>
            <h3>{props.instruments[14].color}</h3>
            <h3>{props.instruments[14].type}</h3>
            <h3>${props.instruments[14].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[15].brand}</h3>
            <h3>{props.instruments[15].model}</h3>
            <img className="instrument-image" src={props.instruments[15].image}></img>
            <h3>{props.instruments[15].color}</h3>
            <h3>{props.instruments[15].type}</h3>
            <h3>${props.instruments[15].price}</h3>
            </div>
        </div>
    )
}

}