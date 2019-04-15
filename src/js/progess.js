import React, {Component} from 'react'
import Graph from './graph.js'
import Highlights from './highlights.js'
class Progress extends Component{
    render(){
        return(
            <div className="progress-grid">
                <h2>Progress Section</h2>
                <Graph graph_stat={this.props.graph_stat}/>
                <Highlights highlight_stats={this.props.highlight_stats} highlight_amount={this.props.highlight_amount}/>
            </div>
        )
    }
}

export default Progress