import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
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
import DeleteComment from "./DeleteComment"
import Carts from "./Carts"



export default function Main(props) {
  let navigate = useNavigate()

    const [instruments, setInstruments] = useState([])
    const [carts, setCarts] = useState([])
    const [selectedComment,setSelectedComment] = useState()
    const [selectedCartItem,setSelectedCartItem] = useState()
    
    const getInstruments = async () => {
      const res = await axios.get(`http://localhost:3001/api/instruments/view`)
      setInstruments(res.data)
      console.log(res.data)
    }

    const getCarts = async () => {
      const res = await axios.get(`http://localhost:3001/api/carts/view`)
      setCarts(res.data)
      console.log(res.data)
    }

  console.log(props)

  const handleCart = async (event) => {
    await axios
      .put(`http://localhost:3001/api/carts/${props.cart.id}`, selectedCartItem)
      // .then((res) => {
      //   console.log(res)
      //   console.log(res.data)
      // })
      // navigate("/comments")
  }


  useEffect(() => {

    getInstruments()
    getCarts()
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
                <Route exact path="/categories" element={<Categories instruments={instruments}/>}/>
                <Route exact path="/electric" element={<Electric
                instruments={instruments} selectedCartItem={selectedCartItem} setSelectedCartItem={setSelectedCartItem} handleCart={handleCart}/>}/>
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
                <Route exact path="/comments" element={<Comments user={props.user} setUser={props.setUser} toggleAuthenticated={props.toggleAuthenticated} authenticated={props.authenticated} selectedComment={selectedComment} setSelectedComment={setSelectedComment}/>} />
                <Route exact path="/comments/:id" element={<EditComment  selectedComment={selectedComment} user={props.user}/>}/>
                <Route exact path="/comments/:id" element={<DeleteComment selectedComment={selectedComment} user={props.user}/>}/> 
                <Route exact path="/cart" element={<Carts  user={props.user} authenticated={props.authenticated} carts={carts}/>}/>
            </Routes>
        </div>
    )
}