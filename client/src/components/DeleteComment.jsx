import React from "react"
import axios from "axios"

import { useNavigate } from "react-router-dom";


export default function DeleteComment ({ comment}) {
    let navigate = useNavigate();
 
  
  
  const handleSubmit = async (event) => {
    event.preventDefault()

        await axios
          .delete(`http://localhost:3001/api/comments/${comment.id}`)
          .then((res) => {
            console.log(res)
            console.log(res.data)
          })
          navigate("/comments")
      
  }

  return (
    <div className="edit-comment-container">
      <form onSubmit={handleSubmit}>
      
      <button
          className="delete-button"
          type="submit"
        >
          Delete
        </button>
       
      </form>
     
    </div>
  )
}