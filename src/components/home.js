import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';
import { server } from "../config";
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');


const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(server + '/posts').then((response) => {
            setPosts(response.data.data)
            console.log(posts)
        })
    }, [])

    return (
        <div>
            <NavBar></NavBar>

            <div style={{ marginLeft: "25%", marginRight: "5%", marginTop: "50px" }}>


                {posts?.length > 0 && posts?.map((post) => (

                    <div className="card w-75 mb-2">
                       <div className="card-body">
                        <div >
                            
                            <img src={post.authorid?.profilepicture} className="rounded-circle float-start" width={"50px"} height={'50px'} alt="..."></img>
                            <div className="float-start ms-2 mt-2">
                            <h6 style={{ marginLeft: "10px", fontSize: "12px" }} className="card-title">{post.authorid?.firstname} {post.authorid?.lastname}</h6>
                                    <h6 style={{ fontSize: "10px", marginTop: "-8px", marginLeft: "10px" }}><TimeAgo
                                        datetime={post.createdAt}
                                        locale='en'/></h6>
                            </div> 

                        </div>
                        
                        

                    </div>
                    
                    {/* <Link to={"/"+posts.id} style={{fontSize:"15px",textDecoration:"none",color:"purple",marginLeft:"10px"}}>{post.title}</Link> */}
                        <div className="card-body"><p className="card-text">{post.summary}</p></div>

                    </div>

                ))

                }



            </div>
        </div>
    );
}

export default Home;