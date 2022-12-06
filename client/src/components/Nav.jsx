import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export default function Nav () {
    let navigate = useNavigate()
    return(
       <div className="nav">
           <Link to="/">
               <h2 className="nav-item1">Home</h2>
           </Link>
           <Link to="/categories">
               <h2 className="nav-item2">Instruments</h2>
           </Link>
           <Link to="/about">
               <h2 className="nav-item3">About</h2>
           </Link>
           <Link to="comments">
               <h2 className="nav-item4">Comments</h2>
           </Link>
           <Link onClick={(e)=> navigate(-1)}>
               <h2 className="nav-item5">Back</h2>
           </Link>
       </div>
    )
}