import axios from 'axios'
        const instance = axios.create({
            baseURL: 'https://demostore.uparzon.com/api/uparzonapp',
        });
  
 const Connection = async (url)=>{
     const data = await instance.get(url)
                    .then(res =>{
                        return res.data
                    }).catch(err => console.error(err))
    return data;
}


  


export default Connection