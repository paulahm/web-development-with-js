import axios from 'axios';

export default{
    getTussit: function() {
        return axios.get('/api/tussi').then((response) => {
            return response.data;
        });
    },
    searchLocation: function(e){
        console.log("SearchBtn clicked: " + e );
    }
}


