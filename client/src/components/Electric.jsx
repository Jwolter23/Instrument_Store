import { useState,useEffect } from "react"
import axios from "axios"

export default function Electric (props) {

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
            <div className="instrument" onMouseOver={((e)=> props.setSelectedCartItem)}>
            <h3>{props.instruments[0].brand}</h3>
            <h3>{props.instruments[0].model}</h3>
            <img className="instrument-image" src={props.instruments[0].image}></img>
            <h3>{props.instruments[0].color}</h3>
            <h3>{props.instruments[0].type}</h3>
            <h3>${props.instruments[0].price}</h3>
            <button  onClick={((e)=> console.log(props.selectedCartItem))}>Add to Cart</button>
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
            <div className="instrument">
            <h3>{props.instruments[3].brand}</h3>
            <h3>{props.instruments[3].model}</h3>
            <img className="instrument-image" src={props.instruments[3].image}></img>
            <h3>{props.instruments[3].color}</h3>
            <h3>{props.instruments[3].type}</h3>
            <h3>${props.instruments[3].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[4].brand}</h3>
            <h3>{props.instruments[4].model}</h3>
            <img className="instrument-image" src={props.instruments[4].image}></img>
            <h3>{props.instruments[4].color}</h3>
            <h3>{props.instruments[4].type}</h3>
            <h3>${props.instruments[4].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[5].brand}</h3>
            <h3>{props.instruments[5].model}</h3>
            <img className="instrument-image" src={props.instruments[5].image}></img>
            <h3>{props.instruments[5].color}</h3>
            <h3>{props.instruments[5].type}</h3>
            <h3>${props.instruments[5].price}</h3>
            </div>
            <div className="instrument">
            <h3>{props.instruments[6].brand}</h3>
            <h3>{props.instruments[6].model}</h3>
            <img className="instrument-image" src={props.instruments[6].image}></img>
            <h3>{props.instruments[6].color}</h3>
            <h3>{props.instruments[6].type}</h3>
            <h3>${props.instruments[6].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[7].brand}</h3>
            <h3>{props.instruments[7].model}</h3>
            <img className="instrument-image" src={props.instruments[7].image}></img>
            <h3>{props.instruments[7].color}</h3>
            <h3>{props.instruments[7].type}</h3>
            <h3>${props.instruments[7].price}</h3>
            </div>
            
            <div className="instrument">
            <h3>{props.instruments[8].brand}</h3>
            <h3>{props.instruments[8].model}</h3>
            <img className="instrument-image" src={props.instruments[8].image}></img>
            <h3>{props.instruments[8].color}</h3>
            <h3>{props.instruments[8].type}</h3>
            <h3>${props.instruments[8].price}</h3>
            </div>

            <div className="instrument">
            <h3>{props.instruments[9].brand}</h3>
            <h3>{props.instruments[9].model}</h3>
            <img className="instrument-image" src={props.instruments[9].image}></img>
            <h3>{props.instruments[9].color}</h3>
            <h3>{props.instruments[9].type}</h3>
            <h3>${props.instruments[9].price}</h3>
            </div>
        </div>
    )
}

}