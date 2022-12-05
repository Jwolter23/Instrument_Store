import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"
import Home from "../components/Home"
import AdminPanel from "./AdminPanel"
import Categories from "./Categories"
import Register from "./Register"
import SignIn from "./SignIn"

export default function Main(props) {
    const [instruments, setInstruments] = useState([])

  useEffect(() => {
    const getInstruments = async () => {
      const res = await axios.get(`http://localhost:3001/view`)
      setInstruments(res.data.instruments)
      console.log(res.data.instruments)
    }
    getInstruments()
  }, [])

    return(
        <div className="routes">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/signin" element={<SignIn setUser={props.setUser}
                toggleAuthenticated={props.toggleAuthenticated}/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/admin"  element={<AdminPanel           
                        user={props.user}
                        authenticated={props.authenticated}/>}/>
                <Route exact path="/categories" element={<Categories/>}/>
            </Routes>
        </div>
    )
}