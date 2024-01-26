const Welcome=({onGetPost})=>{
    return(

<center>
<div className="py-5 text-center">
      <h1 className="display-5 fw-bold text-white">
        Welcome to Your Social Media
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">
          Thank you for joining! While you're here, feel free to explore and connect with others. Currently, there are no posts on your Social Media. Start sharing your thoughts and experiences!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold " onClick={onGetPost}>
            Get Posts from Server
          </button>
          
        </div>
      </div>
    </div>
</center>
    );
};
export default Welcome;