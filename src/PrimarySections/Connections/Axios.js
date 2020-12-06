import axios from 'axios'
//         const instance = axios.create({
//             baseURL: 'https://demostore.uparzon.com/api/uparzonapp',
//         });
  
//  const Connection = async (url)=>{
//      const data = await instance.get(url)
//         .then(res =>{
//             return res.data
//         }).catch(err => console.error(err))
//     return data;
// }

// axios.get('https://demostore.uparzon.com/api/uparzonapp/get_products?category_id=32&api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699')
//  .then(res=>res.json())
//  .then(data=>console.log('axios',data))

export const FectData = async (url)=>{

const data = await fetch(url)
.then(response => response.json())
.then(json =>json)
return data
}
  


// export default Connection



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