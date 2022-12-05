import { useNavigate } from "react-router"

export default function Categories () {
    let navigate = useNavigate();
    return (
        <div className="grid">
            <div className="category c1" onClick={(e)=>navigate("/electric")}>Electric Guitars
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            </div>
            <div className="category c2" onClick={(e)=>navigate("/acoustic")}>Acoustic Guitars
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            </div>
            <div className="category c3" onClick={(e)=>navigate("/bass")}>Bass Guitars
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            </div>
            <div className="category c4" onClick={(e)=>navigate("/amps")} >Amplifyers
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            </div>
            <div className="category c5" onClick={(e)=>navigate("/pedalsandeffects")} >Pedals/Effects
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            </div>
            <div className="category c6" onClick={(e)=>navigate("/all")} >All
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            <h3>DDDDDDDDDDD</h3>
            </div>

        </div>
        
        
    )
}