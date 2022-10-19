import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {  useParams } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {server} from "../config";
import { isLoggedIn } from "../config";
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');


const BlogDetail = () => {
   
    const { id } = useParams();
    const [posts,setPosts]=useState([]);
  
    
    useEffect(()=>{
        if(isLoggedIn()==true){
    //         axios.get(server+'/posts/'+id, { withCredentials: true }).then((response)=>{
    //             setPosts(response.data.data)
    //            console.log(response.data)
    //    })
       const transport = axios.create({
        withCredentials: true
      })
      
      transport
        .get(server+'/posts/'+id)
        .then((res) =>{
            setPosts(res.data.data)
            })
        .catch(err => { /* not hit since no 401 */ })
        }
        
    },[])
    return ( 
        <div>
            <NavBar></NavBar>
            {isLoggedIn() === false &&
            <div>
                <div className="m-4 p-4 d-flex align-items-center justify-content-center">
                    <div>
                        <h2>
                            You Must Login To create New posts
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
           { isLoggedIn() === true && <div style={{ marginLeft: "25%", marginRight: "5%", marginTop: "50px" }}>
                
            {posts  &&  
                    
                    <div className="card w-75 mb-2">
                  
                    <div className="card-body">
                        <div >
                            <img src={posts.authorid?.profilepicture} className="rounded-circle float-start" width={"50px"} height={'50px'} alt="..."></img>
                            <div className="float-start ms-2 mt-2">
                            <h6 style={{ marginLeft: "10px", fontSize: "12px" }} className="card-title">{posts.authorid?.firstname} {posts.authorid?.lastname}</h6>
                                    <h6 style={{ fontSize: "10px", marginTop: "-8px", marginLeft: "10px" }}><TimeAgo
                                        datetime={posts.createdAt}
                                        locale='en'/></h6>
                            </div> 

                        </div>
                        <br></br>
                        

                    </div>
                    <Link to={"/"+posts.id} style={{fontSize:"15px",textDecoration:"none",color:"#FFC18E",marginLeft:"10px"}}>{posts.title}</Link>
                    <div className="card-body"><p className="card-text">{posts.summary}</p></div>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                     <button type="button" className="btn btn-danger">Delete</button>
                    <button type="button" className="btn btn-warning">Update</button>
                  </div>
                </div>
               

                
         

         }
         </div>}

        </div>
     );
}
 
export default BlogDetail;