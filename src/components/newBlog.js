import {  useState } from "react";
import axios from 'axios';
import NavBar from "./NavBar";


const NewBlog = () => {
    
        const [title,setTitle]=useState('');
        const [body,setBody]=useState('');
        const [user_id,setUser_id]=useState('1')
        
        function CreateNewPost(){
            
            var data ={
                userid:user_id,
                title:title,
                summary:body
            }
            axios.post('http://localhost:5000/post',data).then((response)=>{
                console.log('created sucessfully')
            })
        }

    return (
        <div>
            <NavBar />
            <div className="m-5" >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" ></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Body</label>
                    <textarea value={body} onChange={(e)=>setBody(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                </div>
                <div className="col-12">
                    <button type="button" onClick={(e)=>CreateNewPost()} className="btn btn-primary">Post</button>
                </div>
            </div>
        </div>
    );
}

export default NewBlog;