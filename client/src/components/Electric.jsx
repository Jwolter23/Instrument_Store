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
            </div>
        </div>
    )
}

}