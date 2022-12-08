import { useState,useEffect } from "react"
import axios from "axios"
import CreateComment from "./CreateComment"
import { useNavigate } from "react-router"
import DeleteComment  from "./DeleteComment"
import SignIn from "./SignIn"



export default function Comments (props) {

    console.log(props)
    let navigate = useNavigate()



      function navComment () {
        navigate(`/comments/${props.selectedComment.id}`)
    }

    

console.log(props.user)
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
    if (!props.user) {
        return <div><h2>Please Log in</h2><SignIn user={props.user} setUser={props.setUser} toggleAuthenticated={props.toggleAuthenticated} authenticated={props.authenticated}/></div>
    }
     else {
        return (
            <div className="comment-container">
                <CreateComment user={props.user} />
        
            <div className="comments">
                <div className="grid-comments">
                   {
                    comments.map((comment, i) => (
                        <div>
                        <div className="indiv-comments"key={comment.name} onMouseOver={((e)=>props.setSelectedComment(comment))}>
                           
                            <h2>{comment.username}</h2>
                            <h3>{comment.content}</h3>
                            <h4>likes: {comment.likes}</h4>

                         
                         </div>
                         <div className="button-container">
                         {
                             (comment.username === props.user.username) 
                             ?                             
                             <button className="edit-comment-button" onClick={navComment}>Edit</button>
                             :
                              null
                         }
                         {
                             (comment.username === props.user.username) 
                             ?
                             // <button className="delete-comment-button" onClick={handleSubmit(i)}>Delete</button>
                             <DeleteComment comment={comment} selectedComment={props.selectedComment} />
                             :
                             null
                         }
                         </div>
                         </div>
                        
                    ))
                   }
                </div>
            </div>
        </div>
        )
    }
    
}


