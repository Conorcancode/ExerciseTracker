import React, {Component} from 'react'
import CheckList from './checklist.js'
class Workout extends Component{
    render(){
        return(
            <div className="workout-grid">
                <h2>Workout Section</h2>
                <CheckList workout_parameters={this.props.workout_parameters}/>
            </div>
        )
    }
}

export default Workout