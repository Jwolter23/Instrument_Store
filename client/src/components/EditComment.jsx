import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function EditComment (props) {
  console.log(props)
    let navigate = useNavigate();
  const [content, setContent] = useState({
    user_id: props.user.id, 
    username: props.user.username,
    content: "",
  })
  console.log(props.user)

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value })
    console.log(props.user)
    console.log(content.content)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(content)

    await axios
      .put(`http://localhost:3001/api/comments/${props.selectedComment.id}`, content)
      // .then((res) => {
      //   console.log(res)
      //   console.log(res.data)
      // })
      navigate("/comments")
  }

  return (
    <div className="create-comment-container">
      <form onSubmit={handleSubmit}>
        <input
          className="content-section"
          id="content"
          type="text"
          placeholder={props.selectedComment.content}
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