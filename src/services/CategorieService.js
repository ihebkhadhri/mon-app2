import axios from 'axios';

class CategorieService {

    getCategories(){
        return axios.get("https://localhost:7103/Categorie/GetAll/");
    }

    createCategorie(categorie){
        return axios.post("https://localhost:7103/Categorie/Post/", categorie);
    }

    getCategorieById(categorieId){
        return axios.get("https://localhost:7103/Categorie/GetById"+ '/' + categorieId);
    }

    updateCategorie(categorie, categorieId){
        return axios.put("https://localhost:7103/Categorie/Update" + '/' + categorieId, categorie);
    }

    deleteCategorie(categorieId){
        return axios.delete("https://localhost:7103/Categorie/delete"+ '/' + categorieId);
    }
}

export default new CategorieService()