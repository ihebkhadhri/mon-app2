import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Switch,Routes,BrowserRouter,Route, Router } from 'react-router-dom';
import Rapport_template from './components/Front/Rapport_template.component';
import Categorie from './components/Front/Categorie';

export default function App() {
 

  return (
   
      
      <div className="App">
           
           <Routes>
                 <Route exact path='/Templates' element={< Rapport_template />}></Route>
                 <Route exact path='/Categories' element={< Categorie />}></Route>
                
          </Routes>
          </div>

  );
}
