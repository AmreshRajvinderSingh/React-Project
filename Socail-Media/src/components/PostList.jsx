import { useContext, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import Welcome from "./Welcome";
const PostList=()=>{
const {postList, addPosts} =  useContext(PostListData);
const [fetcheddata, setfetcheddata]= useState(false);
    if(!fetcheddata){
    fetch("https://dummyjson.com/posts").then((res)=> res.json()).then(data=>{
        addPosts(data.posts);
    
     });
     setfetcheddata(true);
     console.log("Successfully fetched data!")
    };
    
return (
<>{
    postList.length===0 && <Welcome />
}
{postList.map((post)=><Post key={post.id}  post={post}/>)}

</>
);
}
export default PostList;