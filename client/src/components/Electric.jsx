import { useState,useEffect } from "react"
import axios from "axios"

export default function Electric (props) {
console.log(props)
    if (!props.instruments) {
        return <h2>Loading please wait.</h2>
    } else {         
    return(
        <div className="grid">
            <div className="instrument">
            <h3>{props.instruments[0].brand}</h3>
            <h3>{props.instruments[0].model}</h3>
            <img className="instrument-image" src={props.instruments[0].image}></img>
            <h3>{props.instruments[0].color}</h3>
            <h3>{props.instruments[0].type}</h3>
            <h3>${props.instruments[0].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[1].brand}</h3>
            <h3>{props.instruments[1].model}</h3>
            <img className="instrument-image" src={props.instruments[1].image}></img>
            <h3>{props.instruments[1].color}</h3>
            <h3>{props.instruments[1].type}</h3>
            <h3>${props.instruments[1].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[2].brand}</h3>
            <h3>{props.instruments[2].model}</h3>
            <img className="instrument-image" src={props.instruments[2].image}></img>
            <h3>{props.instruments[2].color}</h3>
            <h3>{props.instruments[2].type}</h3>
            <h3>${props.instruments[2].price}</h3>
            </div>
        </div>
    )
}

}