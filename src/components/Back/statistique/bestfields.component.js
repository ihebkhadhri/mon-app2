import axios from 'axios';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default class BestFields extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        data:null
    }






    componentDidMount() {
        axios.get(`https://localhost:7103/Stat/BestFields/`)
            .then(res => {

                let champs = [];
                let nombres = [];

                for (let i = 0; i < res.data.length; i++) {
                    //séparer les catégories et les nombres dans des arrays différents
                    champs.push(res.data[i].libelle)
                    nombres.push(res.data[i].nombre)
                }
              


                this.setState({
                    

                    data : {
                        labels: champs,
                        datasets: [
                          {
                            label: '# champs les plus utilisés',
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
                            borderWidth: 1,
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
                <h4> Les champs les plus utilisées </h4>
                { this.state.data!=null?
                    <Pie data={this.state.data} 
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Champs les plus utilisées'
                            }
                        }
                      }}
                    />
                    :
                    <h1> pas de champs</h1>
                }
            </div>

        );
    }
}