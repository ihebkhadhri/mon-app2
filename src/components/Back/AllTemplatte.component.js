import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default class AllTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.downloadfile = this.downloadfile.bind(this);
    }

    state = {
        tempates: []
    }


    componentDidMount() {
        try {
            const res2 = axios.get("https://localhost:7103/Template/AdminAllTemplatesByCategorie")
                .then(res => {

                    this.setState({
                        tempates: res.data
                    });
                });
        } catch (ex) {
            console.log(ex);
        }

    }

    downloadfile(id) {
        /*  try {
              const res2 =  axios({url: "https://localhost:7103/Template/DownloadTemplate/"+id
          ,
          method: "GET",
          responseType: "blob"
      })
              .then(res => { 
                  const url = window.URL.createObjectURL(new Blob([res.data]));
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', 'file.pdf'); //or any other extension
                  document.body.appendChild(link);
                  link.click();
                 
                 console.log(res.data);
              });
            } catch (ex) {
              console.log(ex);
            } 
            */

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://localhost:7103/Template/DownloadTemplate/" + id);


        xhr.onload = function () {
            if (this.status === 200) {
                console.log("*******");
                console.log(xhr.response);
               // window.open('data:application/pdf;base64,' + xhr.response);

                let pdfWindow = window.open("")
                pdfWindow.document.write(
                    "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
                    encodeURI(xhr.response) + "'></iframe>"
                )


                //  window.location.href = 'data:application/pdf;base64,' + xhr.response;
            }
        };
        xhr.send();
    }




    render() {
        return (
            <div className="templates">
                <table className="table">
                    <tr>
                        <th>Reference</th>
                        <th>Nom</th>
                        <th>Action</th>

                    </tr>

                    <tbody>
                        {this.state.tempates.map((item, index) => {
                            return (
                                <tr>
                                    <th>{item.id}</th>
                                    <th>{item.nom}.pdf</th>
                                    <th>
                                        <button onClick={() => this.downloadfile(item.id)}>Télécharger</button>
                                        <a href="">Supprimer</a> </th>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </div>
        );
    }
}