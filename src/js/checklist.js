import React, {Component} from 'react'

class ListItem extends Component{
    render(){
        return(
            <li>
                <input type="checkbox"></input>{this.props.workout_name}
                <input type="text"></input>{this.props.workout_unit}
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
            <div>{list_items}</div>
            
        )
    }
}

export default CheckList