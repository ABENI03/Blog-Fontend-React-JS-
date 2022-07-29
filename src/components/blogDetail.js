import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {  useParams } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom'
const BlogDetail = () => {
   
    const { id } = useParams();
    const [posts,setPosts]=useState([]);
  
    
    useEffect(()=>{
        axios.get('http://localhost:5000/post/'+id).then((response)=>{
                 setPosts(response.data.data)
                console.log(response.data)
        })
    },[])
    return ( 
        <div>
            <NavBar></NavBar>
            <div style={{ marginLeft: "25%", marginRight: "5%", marginTop: "50px" }}>
                
            {posts.length > 0 &&  posts?.map((post)=>(
                    
                    <div className="card w-75 mb-2">
                  
                    <div className="card-body">
                        <div >
                            <img src={post.profile} className="rounded-circle float-start" width={"50px"} height={'50px'} alt="..."></img>
                            <div className="float-start ms-2 mt-2">
                                <h5 className="card-title">{post.firstName} {post.lastName}</h5>
                                <span  style={{fontSize:"10px"}}>{post.createdAt}</span>
                            </div> 

                        </div>
                        <br></br>
                        

                    </div>
                    <Link to={"/"+post.id} style={{fontSize:"15px",textDecoration:"none",color:"#FFC18E",marginLeft:"10px"}}>{post.title}</Link>
                    <div className="card-body"><p className="card-text">{post.summary}</p></div>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                     <button type="button" className="btn btn-danger">Delete</button>
                    <button type="button" className="btn btn-warning">Update</button>
                  </div>
                </div>
               

                
         ))

         }
         </div>

        </div>
     );
}
 
export default BlogDetail;