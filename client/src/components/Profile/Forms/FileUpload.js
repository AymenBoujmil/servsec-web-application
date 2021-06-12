import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../../_services/Firebase";

const FileUpload= ({setformData,formData}) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setProgress(0);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setformData({...formData,url:url});
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div className="col-md-6 form-group p_star">
      <div style={{display:"flex",flexDirection:"row",}}>
        <progress value={progress} max="100" style={{paddingRight:"25px"}}/>
        { progress === 100 ? (
          <p color="green">Done !! </p>
        ):(
          null
        )}
      </div>
      <br />
      <br />
      <div>
        <div>
          <input type="file" className="form-control" name="image" id="image" onChange={handleChange} />
          <br/>
          <button type="button" className="form-control" onClick={handleUpload}>Upload</button>
        </div>
      </div>     
    </div>
  );
};

export default FileUpload;