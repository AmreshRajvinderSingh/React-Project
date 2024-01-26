import { createContext, useReducer } from"react";

export const PostList =createContext({
    postList:[],
    addPost: ()=>{},
    deletePost:()=>{},
    addPosts:()=>{},
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
    const addPost=(userId,postTitle, postBody,reaction, tags)=>{
        console.log(`${userId} ${postTitle} ${postBody} ${reaction} ${tags}`);
        dispatchPostList({
            type:'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reaction: reaction,
                userId:userId,
                tags:tags,
            
            }

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

    return (<PostList.Provider value={
       {postList:postList,
       addPost:addPost,
       deletePost:deletePost,
       addPosts:addPosts,
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