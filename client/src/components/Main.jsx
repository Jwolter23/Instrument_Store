import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Register from "./Register"
import SignIn from "./SignIn"

export default function Main(props) {

    return(
        <div className="routes">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/signin" element={<SignIn setUser={props.setUser}
                toggleAuthenticated={props.toggleAuthenticated}/>}/>
                <Route exact path="/register" element={<Register/>}/>
            </Routes>
        </div>
    )
}