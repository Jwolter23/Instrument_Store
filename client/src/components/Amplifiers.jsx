import { useState,useEffect } from "react"
import axios from "axios"

export default function Amplifiers (props) {
console.log(props)
    if (!props.instruments) {
        return <h2>Loading please wait.</h2>
    } else {         
    return(
        <div className="grid">
            <div className="instrument">
            <h3>{props.instruments[20].brand}</h3>
            <h3>{props.instruments[20].model}</h3>
            <img className="instrument-image" src={props.instruments[20].image}></img>
            <h3>{props.instruments[20].color}</h3>
            <h3>{props.instruments[20].type}</h3>
            <h3>${props.instruments[20].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[21].brand}</h3>
            <h3>{props.instruments[21].model}</h3>
            <img className="instrument-image" src={props.instruments[21].image}></img>
            <h3>{props.instruments[21].color}</h3>
            <h3>{props.instruments[21].type}</h3>
            <h3>${props.instruments[21].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[22].brand}</h3>
            <h3>{props.instruments[22].model}</h3>
            <img className="instrument-image" src={props.instruments[22].image}></img>
            <h3>{props.instruments[22].color}</h3>
            <h3>{props.instruments[22].type}</h3>
            <h3>${props.instruments[22].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[23].brand}</h3>
            <h3>{props.instruments[23].model}</h3>
            <img className="instrument-image" src={props.instruments[23].image}></img>
            <h3>{props.instruments[23].color}</h3>
            <h3>{props.instruments[23].type}</h3>
            <h3>${props.instruments[23].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[24].brand}</h3>
            <h3>{props.instruments[24].model}</h3>
            <img className="instrument-image" src={props.instruments[24].image}></img>
            <h3>{props.instruments[24].color}</h3>
            <h3>{props.instruments[24].type}</h3>
            <h3>${props.instruments[24].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[25].brand}</h3>
            <h3>{props.instruments[25].model}</h3>
            <img className="instrument-image" src={props.instruments[25].image}></img>
            <h3>{props.instruments[25].color}</h3>
            <h3>{props.instruments[25].type}</h3>
            <h3>${props.instruments[25].price}</h3>
            </div>
        </div>
    )
}

}