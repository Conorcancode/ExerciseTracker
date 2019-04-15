import React, {Component} from 'react'

class Navigation extends Component{
    render(){
        return(
            <nav className="navigation-bar">
                <button className="nav-button" id="workoutButton">Workout</button>
                <button className="nav-button" id="progressButton">Progress</button>
            </nav>
        )
    }
}

export default Navigation