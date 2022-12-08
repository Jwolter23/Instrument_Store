import Nav from "./Nav"
import Welcome from "./Welcome"
import { useNavigate } from "react-router"

export default function Header (props) {
    let navigate = useNavigate()

    function Home () {
        navigate('/')
    }
    return(
        <div className="header">
        <Welcome authenticated={props.authenticated} user={props.user} handleLogOut={props.handleLogOut}/>
        <h1 className="header-text"onClick={(e)=> Home()}>Instrument Store</h1>
        <div className="header-nav">
            <Nav/>
        </div>
        </div>
    )
}