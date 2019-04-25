import React, {Component} from 'react'

class ListItem extends Component{
    render(){
        return(
            <li className='list-item'>
                <input className="workout-checkbox" type="checkbox"></input>
                <span className="workout-checkmark"></span>
                <span className="workout-label">{this.props.workout_name}</span>
                <div className="workout-input-group">
                    <input className="workout-input" type="number"></input>
                    <span className="workout-unit">{this.props.workout_unit}</span>
                </div>
            </li>
        )
    }
}

class CheckList extends Component{
    render(){
        let workouts = this.props.workout_parameters
        let list_items = []
        workouts.forEach((workout)=>{
            list_items.push(<ListItem workout_name={workout.workout_name} workout_unit={workout.workout_unit} key={workout.workout_name}/>)
        })
        return(
            <ul className="workout-list">{list_items}</ul>
            
        )
    }
}

export default CheckList