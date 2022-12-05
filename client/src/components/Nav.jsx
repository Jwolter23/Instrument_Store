import { Link } from "react-router-dom";

export default function Nav () {
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
       </div>
    )
}