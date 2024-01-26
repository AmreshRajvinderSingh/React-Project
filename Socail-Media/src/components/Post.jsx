import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import {PostList } from "../store/post-list-store";
const Post =({post})=>{

  console.log(post.title);
  const {deletePost}= useContext(PostList);
    return (
        <div class="card post-card" >

  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={()=>deletePost(post.id)}
    >
    
    <AiFillDelete /> </span>
    </h5>
    <p class="card-text">{post.body}</p>
    {post.tags.map(tag=>( <span className="badge text-bg-primary hashtag">{tag}</span>))}

    <div className="alert alert-success reactions" role="alert">
      {post.reaction}  Reactions
</div>
   
  </div>
</div>
    );
}

export default Post;