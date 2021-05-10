import React from 'react'
import {AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {signout, isAuthenticated} from '../users/Helper/Index'
import Posts from './Posts'
import AccountCircle from '@material-ui/icons/AccountCircle';



export function MyNavbar (){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);



    const history = useHistory();
    const signoutPush = () => history.push('/')
    const createPostPush = () => history.push('/createPost')
    const profilePush = () => history.push('/profile')
    const dashboardPush = () => history.push('/dashboard')

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
    return(
        <div className="myNav">
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Button  color="secondary" variant="contained" onClick={homeRedirect} 
                        className="signout pull-right">Signout</Button>
                        
                        {/* <a href={() =>(homeRedirect)}> Signout </a>     */}
                        <div className="accountButton">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit">
                                <AccountCircle />
                            </IconButton>

                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}>
                            <MenuItem onClick={dashboardPush}>Home</MenuItem>
                            <MenuItem onClick={profilePush}>Profile</MenuItem>
                            <MenuItem onClick={createPostPush}>Create Post</MenuItem>
                        </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}


function Dashboard() {

    // const createPost = () =>{
    //     return(
    //         <div>
    //             <Button color="primary" variant="contained" onClick={createPostPush} >Create Post</Button>
    //         </div>
    //     )
    // }

    return (
        <div>
            {MyNavbar()}
            {/* {createPost()} */}
            <h1>Dashboard</h1>
            <Posts />
        </div>
    )
}

export default Dashboard
