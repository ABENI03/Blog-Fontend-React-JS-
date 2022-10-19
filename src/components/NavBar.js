import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { distroyToken, isLoggedIn, server } from "../config";

const NavBar = () => {
    const navigate=useNavigate()
    function Logout(){
        distroyToken();
        axios.post(server+'/users/logout')
             .then((res)=>{
                console.log(res.data)
                navigate('/')
             })
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{margin:"0px",padding:"0px"}} >
            <div className="container-fluid" style={{ backgroundColor: '#513252' ,padding:"10px"}}>
                <Link className="navbar-brand text-white" to="/">Arbega Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="navbar-brand text-white" style={{ fontSize: "15px" }} to="/createnew">New </Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        {
                            isLoggedIn()==true?<button onClick={(e)=>Logout()} className="btn btn-outline-info" style={{color:"white" ,borderColor:"white"}} type="button">Logout</button>:<Link to={'/login'} className="btn btn-outline-info" style={{color:"white" ,borderColor:"white"}} type="button">Login</Link>
                        }
                        
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;