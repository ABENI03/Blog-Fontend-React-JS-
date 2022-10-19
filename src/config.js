const server="http://localhost:5000/api"

const getToken=()=>{
   return window.localStorage.getItem("token")
}
const setToken=(token)=>{
 window.localStorage.setItem("token",token)
 document.cookie="token="+token
}
const distroyToken=()=>{
   window.localStorage.removeItem("token")
  document.cookie="token="+""
}
const isLoggedIn=()=>{
   if(getToken()==null)
      return false
   return true
}

module.exports={server,getToken,setToken,isLoggedIn,distroyToken}