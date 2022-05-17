import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Switch,Routes,BrowserRouter,Route, Router } from 'react-router-dom';
import Rapport_template from './components/Front/Rapport_template.component';
import Categorie from './components/Front/Categorie';
import Rapport_modification from "./components/Front/Rapport_modification.component";
import Authentification from "./components/Front/Authentification.component";

export default function App() {
 

  return (
   
      
      <div className="App">
           
           <Routes>
                 <Route exact path='/Templates/:id' element={< Rapport_template />}></Route>

           <Route exact path='/Authentification' element={< Authentification />}></Route>
                 <Route exact path='/Templates' element={< Rapport_template />}></Route>
                 <Route exact path='/Categories' element={< Categorie />}></Route>
                 <Route exact path='/Rapport/:id' element={< Rapport_modification />}></Route>
                
          </Routes>
          </div>

  );
}
