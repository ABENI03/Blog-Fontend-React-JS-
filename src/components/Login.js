import { useState } from "react";

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState("")
    function Login(e){
        
    }
    return (
        <div className="d-flex align-items-center justify-content-center" >
            <form style={{border:"10px solid",borderColor:'#513252',marginTop:"20vh",padding:"60px"}}>
            
                <h2>Arbega Login</h2>
                <br></br>
                <div className="form-group">
                   
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                        </input>
                        
                             </div>
                <br></br>
                <div className="form-group">
                    
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password">
                    </input>
                </div>
                <br></br>
                <button type="submit" onClick={(e)=>Login(e)} style={{color:'white',backgroundColor:'#513252' ,border:"none"}} className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;