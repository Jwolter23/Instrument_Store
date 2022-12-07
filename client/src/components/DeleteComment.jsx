import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {Comments} from "./Comments";

export default function DeleteComment ({user}) {
    let navigate = useNavigate();
  const [content, setContent] = useState({
    user_id: user.id, 
    username: user.username,
    content: "",
  })
  console.log(user)
  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
    console.log(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(content)

    await axios
      .delete(`http://localhost:3001/api/comments/${user.id}`, content)
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
      navigate("/comments")
  }

  return (
    <div className="create-comment-container">
      <form onSubmit={handleSubmit}>
      
      
        <button
          className="post button"
          type="submit"
        >
          Delete
        </button>
      </form>
    </div>
  )
}