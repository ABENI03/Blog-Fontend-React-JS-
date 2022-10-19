import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, server, setToken } from "../config";


const Login = () => {
    
    const navigate=useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [errorMessage,setErrorMessage]=useState(false)

    useEffect(()=>{
        if(isLoggedIn()==true){
            navigate('/')
        }
    },[])

    function Login() {
        var data={
            email:email,
            password:password
        }
        axios.post(server+'/users/login',data)
             .then((res)=>{
               
                if(res.data.status==404){
                    setErrorMessage(true)
                }
                else{
                    setToken(res.data.token)
                    navigate("/")
                }
             })
             .catch((err)=>{
                console.log(err)
             })
    }
    return (
        <div className="d-flex align-items-center justify-content-center" >
            <form style={{ border: "10px solid", borderColor: '#513252', marginTop: "20vh", padding: "60px" }}>

                <h2>Arbega Login</h2>

                <br></br>
                {errorMessage==true && <div className="alert alert-danger d-flex align-items-center" role="alert">
                Incorrect Username or Password!
                </div>}
                <div className="form-group">

                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                    </input>

                </div>
                <br></br>
                <div className="form-group">

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password">
                    </input>
                </div>
                <br></br>
                <button type="button" onClick={(e) => Login()} style={{ color: 'white', backgroundColor: '#513252', border: "none" }} className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;