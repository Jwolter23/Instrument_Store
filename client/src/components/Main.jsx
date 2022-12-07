import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"
import Home from "../components/Home"
import AdminPanel from "./AdminPanel"
import Categories from "./Categories"
import Register from "./Register"
import SignIn from "./SignIn"
import Electric from "./Electric"
import Comments from "./Comments"
import Acoustic from "./Acoustic"
import About from "./About"
import Bass from "./Bass"
import Amplifiers from "./Amplifiers"
import PedalsAndEffects from "./PedalsAndEffects"
import Everything from "./Everything"
import EditComment from "./EditComment"



export default function Main(props) {
    const [instruments, setInstruments] = useState([])
  console.log(props.user)
  useEffect(() => {
    const getInstruments = async () => {
      const res = await axios.get(`http://localhost:3001/api/instruments/view`)
      setInstruments(res.data)
      console.log(res.data)
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
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/categories" element={<Categories/>}/>
                <Route exact path="/electric" element={<Electric
                instruments={instruments}/>}/>
                <Route exact path="/acoustic" element={<Acoustic
                instruments={instruments}/>}/>
                <Route exact path="/bass" element={<Bass
                instruments={instruments}/>}/>
                <Route exact path="/amps" element={<Amplifiers
                instruments={instruments}/>}/>
                <Route exact path="/all" element={<Everything
                instruments={instruments}/>}/>
                <Route exact path="/pedalsandeffects" element={<PedalsAndEffects
                instruments={instruments}/>}/>
                <Route exact path="/comments" element={<Comments user={props.user} />} />
                <Route exact path="/comments/:id" element={<EditComment  user={props.user}/>}/> 
            </Routes>
        </div>
    )
}