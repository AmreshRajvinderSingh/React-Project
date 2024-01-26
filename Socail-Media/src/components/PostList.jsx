import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import Welcome from "./Welcome";
const PostList=()=>{
const {postList, addPosts} =  useContext(PostListData);
const handleGetPost=()=>{
console.log("Pressed Get Post");
 fetch("https://dummyjson.com/posts").then((res)=> res.json()).then(data=>{
    addPosts(data.posts);

 });
};
return (
<>{
    postList.length===0 && <Welcome onGetPost={handleGetPost}/>
}
{postList.map((post)=><Post key={post.id}  post={post}/>)}

</>
);
}
export default PostList;