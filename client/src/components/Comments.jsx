import { useState,useEffect } from "react"
import axios from "axios"
import CreateComment from "./CreateComment"
import { useNavigate } from "react-router"
import { DeleteComment } from "./DeleteComment"


export default function Comments ({user},{DeleteComment}) {
    let navigate = useNavigate()


      function navComment () {
        navigate(`/comments/${user.id}`)
    }

    
console.log(user)
    const [comments, setComments] =useState(null)

    useEffect(() => {
        
        const getComments = async () => {
        const response = await axios.get(`http://localhost:3001/api/comments/view`)
        

        console.log(response.data)
        setComments(response.data)
        

       
        }
        getComments()
    }, [])
    if (!comments){
        return <h2>Loading... Please Wait</h2>
    } else {
        return (
            <div className="comment-container">
                <CreateComment user={user} />
            <div className="comments">
                <div className="new-comments">
                   {
                    comments.map((comment) => (
                        <div key={comment.name}>
                            <h2>{comment.username}</h2>
                            <button className="edit-comment-button" onClick={navComment}>Edit</button>
                            <button className="delete-comment-button" onClick={DeleteComment}>Delete</button>
                            <h3>{comment.content}</h3>
                            <h4>likes: {comment.likes}</h4>
                        </div>
                    ))
                   }
                </div>
                {/* <div className="comment1">
                    <h2>{comments[0].username}</h2>
                    <h3>{comments[0].content}</h3>
                    <h4>Likes: {comments[0].likes}</h4>
                </div>
                <div className="comments2">
                    <h2>{comments[1].username}</h2>
                    <h3>{comments[1].content}</h3>
                    <h4>Likes: {comments[1].likes}</h4>
                </div>
                <div className="comments3">
                    <h2>{comments[2].username}</h2>
                    <h3>{comments[2].content}</h3>
                    <h4>Likes: {comments[2].likes}</h4>
                </div>
                <div className="comments4">
                    <h2>{comments[3].username}</h2>
                    <h3>{comments[3].content}</h3>
                    <h4>Likes: {comments[3].likes}</h4>
                </div> */}
            </div>
        </div>
        )
    }
    
}


