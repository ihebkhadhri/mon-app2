import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


export default class BestTemplate extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        data:null
    }


    componentDidMount() {
        
              


                this.setState({
                    
                    data : {
                        labels: ['Template_A', 'Template_B', 'Template_C', 'Template_Rapport'],
                        datasets: [
                          {
                            label: '# of Votes',
                            data: [12, 19, 3,16],
                            backgroundColor: [
                              'rgba(255, 99, 132, 0.5)',
                              'rgba(54, 162, 235, 0.5)',
                              'rgba(255, 206, 86, 0.5)',
                              'rgba(75, 192, 192, 0.5)',
                              'rgba(153, 102, 255, 0.5)',
                              'rgba(255, 159, 64, 0.5)',
                            ],
                            borderWidth: 1,
                          },
                        ],
                      }
                    

                });




            }
            


    

    render() {
        
        return (
            <div>
                <h4> Les modèles les plus utilisées </h4>
                { this.state.data!=null?
                    <PolarArea data={this.state.data} 
                   
                    />
                    :
                    <h1> pas de templates</h1>
                }
            </div>

        );
    }



}