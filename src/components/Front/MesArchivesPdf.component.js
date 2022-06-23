import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../../../src/SpinnerLoader.css'
import $ from 'jquery'

export default class MesArchivesPdf extends React.Component {
    constructor(props) {
        super(props);
        this.rechercher = this.rechercher.bind(this);

    }


    state = {
        docs: [],

    }

    componentWillUnmount() {

    }

    rechercher(e) {
        // e.preventDefault();

        this.setState({
            docs: [],

        })



        let urlrecherche = "https://localhost:7103/Archive/MesArchivesPdf/";
        if (document.getElementById("inputrecherche").value != "")
            urlrecherche = "https://localhost:7103/Archive/MesArchivesPdfFiltrer/" + document.getElementById("inputrecherche").value;

        axios.get(urlrecherche)
            .then(res => {


                let listerapport = (res.data);

                let _docs = [];
                for (let i = 0; i < listerapport.length; i++) {

                    let _listerapportFile = listerapport[i];


                    let _doc = [
                        {
                            uri: "data:application/pdf;base64, " + encodeURI(_listerapportFile),

                        },

                    ];


                    _docs.push(_doc);
                }




                this.setState({
                    docs: _docs,

                })

                console.log(this.state.docs)







            })
    }


    componentDidMount() {


        if (sessionStorage.getItem("Token") == null) {
            window.location.href = "/Authentification";
        }




        axios.get("https://localhost:7103/Archive/MesArchivesPdf/")
            .then(res => {


                let listerapport = (res.data);

                let _docs = [];
                for (let i = 0; i < listerapport.length; i++) {

                    let _listerapportFile = listerapport[i];


                    let _doc = [
                        {
                            uri: "data:application/pdf;base64, " + encodeURI(_listerapportFile),

                        },

                    ];


                    _docs.push(_doc);
                }




                this.setState({
                    docs: _docs,

                })







            })







    }






    render() {
        return (
            <div className="templates">


                <h4 className='titre '>Mes Archives</h4>
                <div className='row' style={{ display: 'inline-block', marginBottom: '20px', marginLeft: '1%' }}>
                    <span> <Link to={"/MesArchives"} style={{ display: 'inline-block' }} title="Vue table" ><i class="fas fa-table"></i></Link> </span>
                    <span> | </span>
                    <span> <Link to={"/MesArchivesPdf"} style={{ display: 'inline-block', color: '#F3BD00' }} title="Consulter Vos archives. Vous pouvez faire une recherche de contenu" ><i class="fas fa-eye"></i></Link> </span>


                </div>

                <div className="col-12">
                    <div className="col-3" style={{ float: "right" }}>
                        <div className="input-group"  >
                            <input type="search" id="inputrecherche" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary" onClick={this.rechercher}>Rechercher</button>
                        </div>
                    </div>
                </div>

                <div className="col-11 row">

                    {this.state.docs.map(doc =>
                        <div className="col-12 col-lg-4  text-center">
                            <DocViewer
                                className="docviewerrr"

                                pluginRenderers={DocViewerRenderers}
                                documents={doc}
                                config={{
                                    header: {
                                        disableHeader: false,
                                        disableFileName: true,
                                        retainURLParams: false
                                    }
                                }}
                                style={{ height: 500 }}
                            />

                        </div>
                    )}


                </div>

                 

            </div>
        );
    }
}