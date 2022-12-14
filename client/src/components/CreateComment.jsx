import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateComment({ user }) {
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
      .post(`http://localhost:3001/api/comments/${user.id}`, content)
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
      navigate("/comments")
  }

  return (
    <div className="create-comment-container">
      <form className="create-comment-form" onSubmit={handleSubmit}>
        <input
          className="content-section"
          id="content"
          type="text"
          placeholder="Leave comment here"
          autoComplete="off"
          onChange={handleChange}
          value={content[""]}
        />
      
        <button
          className="post-button"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  )
}