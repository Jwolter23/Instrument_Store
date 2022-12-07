import { useState,useEffect } from "react"
import axios from "axios"

export default function PedalsAndEffects (props) {
console.log(props)
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
            <h3>{props.instruments[26].brand}</h3>
            <h3>{props.instruments[26].model}</h3>
            <img className="instrument-image" src={props.instruments[26].image}></img>
            <h3>{props.instruments[26].color}</h3>
            <h3>{props.instruments[26].type}</h3>
            <h3>${props.instruments[26].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[27].brand}</h3>
            <h3>{props.instruments[27].model}</h3>
            <img className="instrument-image" src={props.instruments[27].image}></img>
            <h3>{props.instruments[27].color}</h3>
            <h3>{props.instruments[27].type}</h3>
            <h3>${props.instruments[27].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[28].brand}</h3>
            <h3>{props.instruments[28].model}</h3>
            <img className="instrument-image" src={props.instruments[28].image}></img>
            <h3>{props.instruments[28].color}</h3>
            <h3>{props.instruments[28].type}</h3>
            <h3>${props.instruments[28].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[29].brand}</h3>
            <h3>{props.instruments[29].model}</h3>
            <img className="instrument-image" src={props.instruments[29].image}></img>
            <h3>{props.instruments[29].color}</h3>
            <h3>{props.instruments[29].type}</h3>
            <h3>${props.instruments[29].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[30].brand}</h3>
            <h3>{props.instruments[30].model}</h3>
            <img className="instrument-image" src={props.instruments[30].image}></img>
            <h3>{props.instruments[30].color}</h3>
            <h3>{props.instruments[30].type}</h3>
            <h3>${props.instruments[30].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[31].brand}</h3>
            <h3>{props.instruments[31].model}</h3>
            <img className="instrument-image" src={props.instruments[31].image}></img>
            <h3>{props.instruments[31].color}</h3>
            <h3>{props.instruments[31].type}</h3>
            <h3>${props.instruments[31].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[32].brand}</h3>
            <h3>{props.instruments[32].model}</h3>
            <img className="instrument-image" src={props.instruments[32].image}></img>
            <h3>{props.instruments[32].color}</h3>
            <h3>{props.instruments[32].type}</h3>
            <h3>${props.instruments[32].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[33].brand}</h3>
            <h3>{props.instruments[33].model}</h3>
            <img className="instrument-image" src={props.instruments[33].image}></img>
            <h3>{props.instruments[33].color}</h3>
            <h3>{props.instruments[33].type}</h3>
            <h3>${props.instruments[33].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[34].brand}</h3>
            <h3>{props.instruments[34].model}</h3>
            <img className="instrument-image" src={props.instruments[34].image}></img>
            <h3>{props.instruments[34].color}</h3>
            <h3>{props.instruments[34].type}</h3>
            <h3>${props.instruments[34].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[35].brand}</h3>
            <h3>{props.instruments[35].model}</h3>
            <img className="instrument-image" src={props.instruments[35].image}></img>
            <h3>{props.instruments[35].color}</h3>
            <h3>{props.instruments[35].type}</h3>
            <h3>${props.instruments[35].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[36].brand}</h3>
            <h3>{props.instruments[36].model}</h3>
            <img className="instrument-image" src={props.instruments[36].image}></img>
            <h3>{props.instruments[36].color}</h3>
            <h3>{props.instruments[36].type}</h3>
            <h3>${props.instruments[36].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[37].brand}</h3>
            <h3>{props.instruments[37].model}</h3>
            <img className="instrument-image" src={props.instruments[37].image}></img>
            <h3>{props.instruments[37].color}</h3>
            <h3>{props.instruments[37].type}</h3>
            <h3>${props.instruments[37].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[38].brand}</h3>
            <h3>{props.instruments[38].model}</h3>
            <img className="instrument-image" src={props.instruments[38].image}></img>
            <h3>{props.instruments[38].color}</h3>
            <h3>{props.instruments[38].type}</h3>
            <h3>${props.instruments[38].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[39].brand}</h3>
            <h3>{props.instruments[39].model}</h3>
            <img className="instrument-image" src={props.instruments[39].image}></img>
            <h3>{props.instruments[39].color}</h3>
            <h3>{props.instruments[39].type}</h3>
            <h3>${props.instruments[39].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[40].brand}</h3>
            <h3>{props.instruments[40].model}</h3>
            <img className="instrument-image" src={props.instruments[40].image}></img>
            <h3>{props.instruments[40].color}</h3>
            <h3>{props.instruments[40].type}</h3>
            <h3>${props.instruments[40].price}</h3>
            </div>
            
        </div>
    )
}

}