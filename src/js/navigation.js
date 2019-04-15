import React, {Component} from 'react'

class Navigation extends Component{

    render(){
        return(
            <nav className="navigation-bar">
                <button className="nav-button" id="workoutButton" onClick={this.props.showWorkout}>Workout</button>
                <button className="nav-button" id="progressButton" onClick={this.props.showProgress}>Progress</button>
            </nav>
        )
    }
}

export default Navigation