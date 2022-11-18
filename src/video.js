import React from "react";

export default  function Upload(){
  return(<>
      <h1 style={{textAlign:"center"}}>Upload Video</h1> &nbsp;
      <form action="/upload-video" encType="multipart/form-data">
        <div style={{textAlign:"center"}}>
          <label>select video</label>
          <input type="file" name="video" accept="video/*"></input><br></br>&nbsp;
        </div>
        <div style={{textAlign:"center"}}>
             <input  type="submit" class="btn btn-primary"></input>
        </div>
      </form>
  </>)
}





















