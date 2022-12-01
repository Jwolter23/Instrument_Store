import Nav from "./Nav"
import Welcome from "./Welcome"

export default function Header () {
    return(
        <div className="header">
        <Welcome/>
        <h1 className="header-text">Instrument Store</h1>
        <div className="header-nav">
            <Nav/>
        </div>
        </div>
    )
}