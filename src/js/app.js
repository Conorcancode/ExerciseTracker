import React, {Component} from 'react'
import Workout from './workout.js'
import Progress from './progess.js'
import Navigation from './navigation.js'

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navigation />
                <Workout workout_parameters={workouts} />
                <Progress graph_stat={graph_stat} highlight_stats={highlight_stats} highlight_amount={highlight_amount}/>
            </div>
        )
    }
}

const workouts = [
    {
        workout_name: 'Jogging',
        workout_unit: 'miles'
    },
    {
        workout_name: 'Dumbbell Curls',
        workout_unit: 'lbs'
    },
    {
        workout_name: 'Sit Ups',
        workout_unit: 'reps'
    }
]

const graph_stat = {
    graph_stat:{
        workout_name: 'Jogging',
        distances: [
            1.25, 1.5, 1.65, 1.75, 2, 2.2
        ],
        dates: [
            '02 Feb 2019',
            '04 Feb 2019',
            '06 Feb 2019',
            '08 Feb 2019',
            '10 Feb 2019',
            '12 Feb 2019'
        ]
    },
}

const highlight_stats = [
    {
        workout_name: 'Dumbell Curls',
        record: 50,
        unit: 'lbs'
    },
    {
        workout_name: 'Sit Ups',
        record: 125,
        unit: 'reps'
    },
    {
        workout_name: 'Bench Press',
        record: 155,
        unit: 'lbs'
    },
    {
        workout_name: 'Squat',
        record: 185,
        unit: 'lbs'
    }
]

const highlight_amount = 4;
export default App;