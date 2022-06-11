import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Switch, Routes, BrowserRouter, Route, Router } from 'react-router-dom';

import HeaderBack from "./components/NavBar/HeaderBack.component";
import HeaderFront from "./components/NavBar/HeaderFront.component";

export default function App() {

      let role= sessionStorage.getItem("Role");

      return (


            <div className="App">

                  <div className="theme-loader">
                        <div className="ball-scale">
                              <div className='contain'>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                                    <div className="ring">
                                          <div className="frame"></div>
                                    </div>
                              </div>
                        </div>
                  </div>

                { role!=undefined && role=="Administrateur"?
                 <HeaderBack />:
                 <HeaderFront />

                } 

                 
            </div>

      );
}
