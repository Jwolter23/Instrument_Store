import React from "react"
import axios from "axios"
import { useState } from "react"

export default function CreateComment({ comment }) {
  const [content, setContent] = useState({
    user_id: 6,
    username: comment.username,
    content: "",
  })

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
    console.log(comment)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(content)

    await axios
      .post(`http://localhost:3001/api/comments/${comment.id}`, content)
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
  }

  return (
    <div className="create-comment-container">
      <form onSubmit={handleSubmit}>
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
          className="post button"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  )
}