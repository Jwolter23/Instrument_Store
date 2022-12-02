import Nav from "./Nav"
import Welcome from "./Welcome"

export default function Header (props) {
    return(
        <div className="header">
        <Welcome authenticated={props.authenticated} user={props.user} handleLogOut={props.handleLogOut}/>
        <h1 className="header-text">Instrument Store</h1>
        <div className="header-nav">
            <Nav/>
        </div>
        </div>
    )
}