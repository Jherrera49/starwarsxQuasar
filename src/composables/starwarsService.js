import { api } from 'boot/axios'
import { Loading } from 'quasar'
const starwars = {}

starwars.getData = async (path, page) => {
       Loading.show({
              spinnerColor : 'warning'
       })
       let params = {
              params: {
                     'page' : page.value
              }
       }
       const res = await api.get('https://swapi.dev/api/'+path, params)
       .then(response => { 
              Loading.hide()
              return response.data; 
       })
       .catch(error => { 
              Loading.hide()
              return error; 
       })
       return res;
}


export default starwars