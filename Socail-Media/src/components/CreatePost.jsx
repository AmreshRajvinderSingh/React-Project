import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const Create = () => {
  const { addPost } = useContext(PostList);
  const userIdData = useRef();
  const postTitleData = useRef();
  const postBodyData = useRef();
  const reactionsData = useRef();
  const tagsData = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdData.current.value;
    const postTitle = postTitleData.current.value;
    const postBody = postBodyData.current.value;
    const reaction = reactionsData.current.value;
    const tags = tagsData.current.value.split(" ");

    // addPost(userId,postTitle, postBody,reaction, tags);
    userIdData.current.value = "";
    postTitleData.current.value = "";
    postBodyData.current.value = "";
    reactionsData.current.value = "";
    tagsData.current.value = "";

    console.log("Sending request to server to Create new Post");


    fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
    
  })
})
.then(res => res.json())
.then((post)=>{
  addPost(post);
  console.log("Sent to add New Post");
});
    
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="userId" class="form-label">
          Enter Your User Id
        </label>
        <input
          type="text"
          ref={userIdData}
          class="form-control"
          id="userId"
          placeholder="User Id"
        />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleData}
          class="form-control"
          id="title"
          placeholder="What's in your mind ?"
        />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          ref={postBodyData}
          type="text"
          class="form-control"
          id="body"
          placeholder="How about providing more words?"
        />
      </div>
      <div class="mb-3">
        <label for="reactions" class="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsData}
          class="form-control"
          id="reactions"
          placeholder="Number of People Reacted ?"
        />
      </div>
      <div class="mb-3">
        <label for="tags" class="form-label">
          HashTags
        </label>
        <input
          type="text"
          ref={tagsData}
          class="form-control"
          id="tags"
          placeholder="Eneter Tags using space"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Create;
