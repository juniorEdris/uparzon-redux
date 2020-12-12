import axios from 'axios'

export const FetchData = async (url)=>{

const data = await axios.get(url)
 .then(res=>res.data)
 .catch(err=>err)
 console.log(data);
return data
}