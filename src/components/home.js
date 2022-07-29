import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {Link} from 'react-router-dom';
const Home = () => {
    const [posts,setPosts]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/post').then((response)=>{
                 setPosts(response.data.data)
                console.log(posts)
        })
    },[])

    return (
        <div>
            <NavBar></NavBar>

            <div style={{ marginLeft: "25%", marginRight: "5%", marginTop: "50px" }}>
                
                {posts.length> 0 &&  posts?.map((post)=>(
                    
                           <div className="card w-75 mb-2">
                         
                           <div className="card-body">
                               <div >
                                   <img src={post.profile} className="rounded-circle float-start" width={"50px"} height={'50px'} alt="..."></img>
                                   <div className="float-start ms-2 mt-2">
                                   <Link to={"/"+post.postid} style={{fontSize:"20px",textDecoration:"none",color:"#FFC18E",marginLeft:"10px"}}>{post.title} {post.postid}</Link>
                                       <h5 className="card-title">{post.firstName} {post.lastName}</h5>
                                       <span  style={{fontSize:"10px"}}>{post.createdAt}</span>
                                   </div> 
       
                               </div>
                               <br></br>
                               
       
                           </div>
                           
                           <div className="card-body"><p className="card-text">{post.summary}</p></div>
                         
                       </div>
                       
                ))

                }
             
            
           
            </div>
        </div>
    );
}

export default Home;