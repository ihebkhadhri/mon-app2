import axios from 'axios';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, e } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default class BestUser extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        data: null
    }






    componentDidMount() {
        axios.get(`https://localhost:7103/Stat/BestUsers/`)
            .then(res => {

                let utilisateurs = [];
                let nombres = [];

                for (let i = 0; i < res.data.length; i++) {
                    //séparer les catégories et les nombres dans des arrays différents
                    utilisateurs.push(res.data[i].libelle)
                    nombres.push(res.data[i].nombre)
                }


                this.setState({


                    data: {
                        labels: utilisateurs,
                        datasets: [
                            {
                                label: 'Groupe Corilus ',
                                data: nombres,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],

                            },
                        ],

                    }

                });




            }
            )


    }




    render() {
        return (
            <div>
                <h4> Les Utilisateurs les plus actifs </h4>
                {this.state.data != null ?
                    <Bar data={this.state.data}
                        height={320}
                        options={{
                          
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            // The y-axis value will start from zero
                                            beginAtZero: true,
                                            callback: function(value) {if (value % 1 === 0) {return value;}},
                                            precision: 0,
                                            stepSize: 5
                                        },
                                    },
                                ],
                            },
                            legend: {
                                labels: {
                                    fontSize: 15,
                                },
                            },
                        }}
                    />
                    :
                    <h1> pas d'utilisateurs</h1>
                }
            </div>

        );
    }
}