import { useState,useEffect } from "react"
import axios from "axios"
import CreateComment from "./CreateComment"
import { useNavigate } from "react-router"
import DeleteComment  from "./DeleteComment"
import SignIn from "./SignIn"



export default function Comments ({user}) {
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
    }
    if (!user) {
        return <div><h2>Please Log in</h2><SignIn user={user}/></div>
    }
     else {
        return (
            <div className="comment-container">
                <CreateComment user={user} />
                {/* <DeleteComment user={user} /> */}
            <div className="comments">
                <div className="new-comments">
                   {
                    comments.map((comment) => (
                        <div key={comment.name}>
                            <h2>{comment.username}</h2>

                            {
                                (comment.username === user.username) 
                                ?                             
                                <button className="edit-comment-button" onClick={navComment}>Edit</button>
                                :
                                 null
                            }
                            {
                                (comment.username === user.username) 
                                ?
                                <button className="delete-comment-button" onClick={DeleteComment}>Delete</button>
                                :
                                null
                            }
                            <h3>{comment.content}</h3>
                            <h4>likes: {comment.likes}</h4>
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
        )
    }
    
}


