const server="http://localhost:5000/api"

const getToken=()=>{
   return window.localStorage.getItem("token")
}
const setToken=(token)=>{
 window.localStorage.setItem("token",token)
}

module.exports={server,getToken,setToken}