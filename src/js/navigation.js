import React, {Component} from 'react'

class Navigation extends Component{

    render(){
        let workout_classes, progress_classes = ''
        if(this.props.workout_view){
            workout_classes = "nav-button active"
            progress_classes = "nav-button"
        } else {
            workout_classes = "nav-button"
            progress_classes = "nav-button active"
        }
        return(
            <nav className="navigation-bar">
                <button className={workout_classes} id="workoutButton" onClick={this.props.showWorkout}>Workout</button>
                <button className={progress_classes} id="progressButton" onClick={this.props.showProgress}>Progress</button>
            </nav>
        )
    }
}

export default Navigation