import axios from "axios";

export default{
    saveBar: function(barData){
        return axios.post("/api/bars", barData);
    },
    getBar: function(id){
        return axios.get("/api/bars" + id);
    },
    deleteBar: function(id){
        return axios.delete("/api/bars" + id);
    }
}