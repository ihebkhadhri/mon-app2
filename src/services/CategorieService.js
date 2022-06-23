import axios from 'axios';
const headers = {
    'Content-Type': 'application/json'
  } 
class CategorieService {
   
    getCategories(){
        return axios.get("https://localhost:7103/Categorie/GetAll/");
    }

    createCategorie(categorie){
        return axios.post("https://localhost:7103/Categorie/Post/", categorie,{headers:headers});
    }

    getCategorieById(categorieId){
        return axios.get("https://localhost:7103/Categorie/GetById"+ '/' + categorieId);
    }

    updateCategorie(categorie, categorieId){
        console.log(categorie);
        return axios.post("https://localhost:7103/Categorie/Update" + '/' + categorieId, categorie,{headers:headers});
    }

    deleteCategorie(categorieId){
        return axios.delete("https://localhost:7103/Categorie/delete"+ '/' + categorieId);
    }
}

export default new CategorieService()