import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"

export default function Main() {
    return(
        <div className="routes">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                
            </Routes>
        </div>
    )
}