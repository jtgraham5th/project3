import axios from "axios";

export default{
    saveBar: function(barData){
        return axios.post("/api/bars", barData)
    }
}