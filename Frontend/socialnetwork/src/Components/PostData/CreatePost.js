import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
// import Dashboard from './Dashboard';
import {createPostData} from './PostHelper/postHelper'

function CreatePost() {

    const myDataFromLS = JSON.parse(localStorage.getItem("jwt"))
    const myUsername = myDataFromLS.user.username

    const history = useHistory();
    const dashboardPush = () => history.push('/dashboard')

    const [newPost, setNewPost] = useState({
        "postTitle":"",
        "textPost":""
    })

    const {postTitle,textPost} = newPost;

    const handleChange = name => event =>{
        setNewPost({...newPost, error:false, [name]:event.target.value})
    }

    const onSubmit =(event) =>{
        event.preventDefault();
            // setNewPost({...newPost})
            createPostData(myUsername,newPost)
            .then(
                response => { 
                    console.log(response)
                }
            )
    }

    const CreateNewPost = () =>{
            return (
                <div>
                    <div className="createPost">
                        <div className="createPostForm">
                            <h2>Create</h2>
                            <form action="">
                                <label htmlFor="" className="text-light">Title of POst</label>
                                <input required type="text" placeholder="Enter Title" 
                                onChange={handleChange("postTitle")}
                                value={postTitle} required />
        
                                <label htmlFor="">Post</label>
                                <input type="textarea" placeholder="Create your post"
                                onChange={handleChange("textPost")} 
                                value={textPost} />
        
                                <Button variant="contained" color="primary" onClick={onSubmit}>Create</Button>
                                <Button color="primary" onClick={dashboardPush} >Home</Button>
        
                            </form>
                        </div>
                    </div>
                </div>
            )
        
    }

    return (
        <div>
            {/* <h1>HE</h1> */}
            {CreateNewPost()}
        </div>
    )
}

export default CreatePost
