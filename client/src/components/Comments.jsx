import { useState,useEffect } from "react"
import axios from "axios"
import CreateComment from "./CreateComment"


export default function Comments ({user}) {
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
                <div className="comment1">
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
                </div>
            </div>
        </div>
        )
    }
    
}

