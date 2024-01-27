import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import Welcome from "./Welcome";
import Loading from "./Loading";
const PostList=()=>{
const {postList, addPosts} =  useContext(PostListData);
const [fetching,setFetching]= useState(false);

useEffect(()=>{
    setFetching(true);
    fetch("https://dummyjson.com/posts").then((res)=> res.json()).then(data=>{
        addPosts(data.posts);
        setFetching(false);
        console.log("Setting fetch to false");
    
     });
     
     console.log("Successfully fetched data!")


},[]);
    
    
    
return (
<>
{
    fetching && <Loading />
}
{
   !fetching &&  postList.length===0 && <Welcome />
}
{!fetching && postList.map((post)=><Post key={post.id}  post={post}/>)}

</>
);
}
export default PostList;