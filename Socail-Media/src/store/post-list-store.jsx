import { createContext, useReducer, useState, useEffect } from"react";

export const PostList =createContext({
    postList:[],
    addPost: ()=>{},
    deletePost:()=>{},
    fetching:false,
});
const postListReducer=(currPostList, action)=>{
    let newPostList=currPostList;
    console.log(currPostList,"This is the Current Post list");
    console.log(newPostList,"This is the copy of current post list -> New post List");
    if(action.type ==='DELETE_POST'){
        newPostList =currPostList.filter(post => post.id !== action.payload.postId);
    }else if(action.type==='ADD_POSTS'){
        newPostList=action.payload.posts;
    }else if(action.type ==='ADD_POST'){
        newPostList= [action.payload, ...currPostList];
    }
    return newPostList;
}

const PostListProvider=({children})=>{

    const[postList, dispatchPostList]=useReducer(postListReducer,[]);
    const [fetching, setFetching] = useState(false);

  
    const addPost=(post)=>{
        
        dispatchPostList({
            type:'ADD_POST',
            payload:post,
        })


    };

    const addPosts=(posts)=>{
        
        dispatchPostList({
            type:'ADD_POSTS',
            payload: {
                posts,
            
            },

        })


    };
    const deletePost=(postId)=>{
    console.log(`Delete Post Pressed${postId}`)
    dispatchPostList({
        type:"DELETE_POST",
        payload:{
            postId,
        }
    });

    };
    useEffect(() => {
        setFetching(true);
    
        const controller = new AbortController();
        const signal = controller.signal;
        fetch("https://dummyjson.com/posts", { signal })
          .then((res) => res.json())
          .then((data) => {
            addPosts(data.posts);
            setFetching(false);
            console.log("Setting fetch to false");
          });
    
        console.log("Successfully fetched data!");
        return () => {
          controller.abort();
        };
      }, []);

    return (<PostList.Provider value={
       {postList:postList,
       addPost:addPost,
       deletePost:deletePost,
       fetching:fetching,
       
    }
    }>
        {children}
    </PostList.Provider>
    );
};

// const Default_Post_List=[{
//     id:'1',
//     title:"This is my first Post",
//     body:"Hi Friends this is my first post",
//     reaction: 5,
//     userId:"user-9",
//     tags:["firstpost","excieted"],

// },
// {
//     id:'2',
//     title:"This is my second Post",
//     body:"Hi Friends this is my second post",
//     reaction: 2,
//     userId:"user-9",
//     tags:["secondpost","excieted"],

// }
// ];
export default PostListProvider;