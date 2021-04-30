import React from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory()
    const loginPush = () =>(history.push("/signin"))
    const signupPush = () =>(history.push("/signup"))
    return (
        <div>
            <div className="mainHomePage">
                <h1>Welcome Note....!</h1>
                <div className="homeleft">
                    <h2>Left</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Dolores quae laboriosam totam ab rem autem tempora incidunt. 
                        Impedit modi cupiditate at, soluta reiciendis obcaecati minus tenetur 
                        praesentium enim voluptate cum voluptatem magni commodi officiis numquam 
                        ipsam nostrum est a porro iste! Nulla sunt quidem praesentium eius
                        lias quibusdam magnam odio, quisquam nobis maxime ea quaerat quae deserunt a
                        tque est! Quaerat labore minus quia! Quo dolor provident ducimus, tempora 
                        sequi libero accusantium consequuntur alias cum ea tempore praesentium 
                        autem natus excepturi commodi exercitationem, beatae, non magnam illum 
                        sunt amet aspernatur porro! Porro mollitia ut omnis, eaque ipsa esse nobis!
                        </p>
                </div>
                <div className="homeRight">
                    <h2>Right</h2>

                    <div className="homeButtons">
                    <Button variant="contained" color="primary" onClick={loginPush} >Login</Button>
                    <Button variant="contained" color="primary" onClick={signupPush} >sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
