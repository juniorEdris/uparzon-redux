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



// Our product datas
// useEffect(() => {
//     const fetchData = async () =>{
//       const request = await axios(fetchURL)
//       const {data} = request;
//       setProducts(data);
//       return data
//     }
//     fetchData()
    
//   }, [fetchURL])
//   console.log(">>>",products.map(product => product.shop_name));
//   console.log("data",Entertainments);