import { api } from 'boot/axios'
const starwars = {}

starwars.getData = async (path, page) => {
       let params = {
              params: {
                     'page' : page.value
              }
       }
       const res = await api.get('https://swapi.dev/api/'+path, params)
       .then(response => { 
              return response.data; 
       })
       .catch(error => { 
              return error; 
       })
       return res;
}


export default starwars