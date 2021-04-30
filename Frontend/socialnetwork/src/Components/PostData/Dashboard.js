import React from 'react'
import {AppBar, Toolbar, Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {signout, isAuthenticated} from '../users/Helper/Index'
import Posts from './Posts'
import {fetchData} from './PostHelper/postHelper'
import CreatePost from './CreatePost'

function Dashboard() {

    const history = useHistory();
    const signoutPush = () => history.push('/')
    const createPostPush = () => history.push('createPost')

    const homeRedirect = () =>{
        if(isAuthenticated()){
            signout()
            signoutPush()
        }
        else{
            alert("No user is login")
            signoutPush()
        }
        return(console.log("here"))
    }

    const myNavbar = () =>{
        return(
            <div className="myNav">
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Button  color="secondary" variant="contained" onClick={homeRedirect} className="signout pull-right">Signout</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }

    const createPost = () =>{
        return(
            <div>
                <Button color="primary" variant="contained" onClick={createPostPush} >Create Post</Button>
            </div>
        )
    }

    return (
        <div>
            {myNavbar()}
            {createPost()}
            <h1>Dashboard</h1>
            <Posts />
        </div>
    )
}

export default Dashboard
