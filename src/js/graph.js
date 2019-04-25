import React, {Component} from 'react'
import Line from 'react-chartjs-2'

class Graph extends Component{
    render(){
        let data= {
            labels: ["04/01", "04/06", "04/12", "04/18", "04/24", "04/30", "05/05"],
            datasets: [{
            label: "Dummy Dataset",
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgb(255, 99, 132)',
            data: [20, 20, 25, 25, 25, 30, 30],
            }]
        }

        let options={
            elements:{
                line:{
                    tension: 0
                }
            },
            scales: {
                yAxes:[{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax:  Math.max(...data.datasets[0].data) * 1.5
                    }
                }]
            }
        }
        return(
            <div className="graph">
                <Line type='line' data={data} options={options}/>
            </div>
        )
    }
}

export default Graph