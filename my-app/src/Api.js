import axios from 'axios';

const Api = {
    // Função async que irá buscar na API os nomes
    async getPersons(){
        // Requisição via axios para a API
        let res =  await axios.get(`https://jsonplaceholder.typicode.com/users`);
        // desmembramos data pois é em data que estão os dados dos nomes
        let {data} = await res;
        // console.log(res)
        return data;
    }
}


export default Api;