import { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import { isLoggedIn, server } from "../config";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const NewBlog = () => {
    const navigate = useNavigate()
   
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user_id, setUser_id] = useState('1')

    function CreateNewPost() {

        var data = {
            
            title: title,
            summary: body
        }
        axios.post(server+'/posts',data,{withCredentials:true}).then((response)=>{
            
            
            if(response.data.status==200){
                Swal.fire({
                    title: 'Success',
                    text: 'Blog Is Posted Successfuly',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Blog Is Not Posted!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
                  
            }

        })
    }

    return (
        <div>
            <NavBar></NavBar>
            {isLoggedIn() === false &&
            <div>
                <div className="m-4 p-4 d-flex align-items-center justify-content-center">
                    <div>
                        <h2>
                            You Must Login To create New Post
                        </h2>
                    </div>
                    <hr></hr>
                    
                </div>
                <div className=" d-flex align-items-center justify-content-center">
                
                <Link to={'/login'} type="button" class="btn btn-light" style={{backgroundColor:"purple",color:"white"}}>Login</Link>
                <Link to={'/'} type="button" class="btn btn-outline-dark" style={{borderColor:"purple",color:"purple"}}>Go back Home</Link>
            </div>
            </div>
            }
            {isLoggedIn() === true && <div className="m-5" >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" ></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Body</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                </div>
                <div className="col-12">
                    <button type="button" onClick={(e) => CreateNewPost()} className="btn btn-primary" style={{ color: 'white', backgroundColor: '#513252', border: "none" }}>Post</button>
                </div>
            </div>}
        </div>
    );
}

export default NewBlog;