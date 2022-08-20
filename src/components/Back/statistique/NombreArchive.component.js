import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default class NombreArchive extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        data:null
    }






    componentDidMount() {
              


                this.setState({
                    

                    data : {
                        labels: ["Mars","Avril","Mai","Juin","Juillet"],
                        datasets: [
                          {
                            label: 'archives',
                            data: [4,3,12,4,14],
                            backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              
                            ],
                            borderColor: [
                              'rgba(255, 99, 132, 1)',
                              
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
                <h4> Nombre d'archives </h4>
                <select>
                    <option>Jours</option>
                    <option>Mois</option>
                    <option>Années</option>
                </select>
                { this.state.data!=null?
                    <Line data={this.state.data} 
                    options={{
                        responsive: true,
                        plugins: {
                          legend: {
                           
                          },
                          title: {
                            display: true,
                            text: 'Nombre d\'archives',
                          },
                        },
                      }}
                    />
                    :
                    <h1> pas d'archives</h1>
                }
            </div>

        );
    }
}