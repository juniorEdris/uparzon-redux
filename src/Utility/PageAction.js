
// Delete function to delete from cart
export const DelItem = (item,storage,setInto)=>{
  const filtered = storage.filter(prod => prod.id !== item.id)
  localStorage.setItem(setInto,JSON.stringify(filtered))
  window.location.reload(true);
}