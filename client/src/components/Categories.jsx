import { useNavigate } from "react-router"

export default function Categories (props) {
    let instruments = props.instruments
    let length = instruments.length
    console.log(props)
    let navigate = useNavigate();
    if (length === 0  ) {
        return (
            <div>
                <h1>Loading... Please wait...</h1>
            </div>
        )
    } else {
    return (
        <div className="grid">
            <div className="category c1" onClick={(e)=>navigate("/electric")}>Electric Guitars
            <img className="instrument-image" src={props.instruments[0].image}/>
            </div>
            <div className="category c2" onClick={(e)=>navigate("/acoustic")}>Acoustic Guitars
            <img className="instrument-image" src={props.instruments[10].image}/>

            </div>
            <div className="category c3" onClick={(e)=>navigate("/bass")}>Bass Guitars
            <img className="instrument-image" src={props.instruments[16].image}/>

            </div>
            <div className="category c4" onClick={(e)=>navigate("/amps")} >Amplifyers
            <img className="instrument-image" src={props.instruments[20].image}/>

            </div>
            <div className="category c5" onClick={(e)=>navigate("/pedalsandeffects")} >Pedals/Effects
            <img className="instrument-image"src={props.instruments[26].image}/>

            </div>
            <div className="category c6" onClick={(e)=>navigate("/all")} >All
            <img className="instrument-image" src={"guitar2.jpg"}/>

            </div>

        </div>
        
        
    )
    }
}