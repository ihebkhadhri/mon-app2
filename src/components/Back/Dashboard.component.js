import axios from 'axios';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Bestcategorie from './statistique/bestcategorie.component';
import BestUser from './statistique/bestuser.component';
import BestFields from './statistique/bestfields.component';
import BestTemplate from './statistique/besttemplate.component';
import EtatWorkflows from './statistique/etatworkflows.component';
import NombreArchive from './statistique/NombreArchive.component';

ChartJS.register(ArcElement, Tooltip, Legend);

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

    }













    render() {
        return (
            <div className='row'>
                <div className='col-6 col-lg-4 col-md-4'>
                <div class="card">
      <div class="card-body">
                    <Bestcategorie />
                    </div>
                    </div>
                </div>

                <div className='col-6 col-lg-4 col-md-4'>
                <div class="card">
      <div class="card-body">
                    <BestUser />
                    </div>
                    </div>
                </div>

                <div className='col-6 col-lg-4 col-md-4'>
                <div class="card">
      <div class="card-body">
                    <BestFields />
                    </div>
                    </div>
                </div>
                
                <div className='col-6 col-lg-4 col-md-4'>
                <div class="card">
      <div class="card-body">
                    <BestTemplate />
                    </div>
                    </div>
                </div>

                <div className='col-6 col-lg-4 col-md-4'>
                <div class="card">
      <div class="card-body">
                    <EtatWorkflows />
                    </div>
                    </div>
                </div>
                
                <div className='col-6 col-lg-4 col-md-4'>
                <div class="card">
      <div class="card-body">
                    <NombreArchive />
                    </div>
                    </div>
                </div>

                
                
            </div>

        );
    }
}