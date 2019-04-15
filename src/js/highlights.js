import React, {Component} from 'react'

class Highlight extends Component{
    render(){
        return(
            <div className="highlight">
                <h3>{this.props.name}</h3>
                <span>{this.props.record} {this.props.unit}</span>
            </div>
        )
    }
}

class Highlights extends Component{
    render(){
        let highlights = []
        let highlight_amount = this.props.highlight_amount
        for(let i = 0; i < highlight_amount; i++){
            highlights.push( <Highlight name={this.props.highlight_stats[i].workout_name} record={this.props.highlight_stats[i].record} unit={this.props.highlight_stats[i].unit} key={this.props.highlight_stats[i].workout_name + i}/>)
        }
        return(
            <div className="highlight-grid">
                {highlights}
            </div>
        )
    }
}

export default Highlights