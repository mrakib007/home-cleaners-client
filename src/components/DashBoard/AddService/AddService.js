import React, { useState } from 'react';

const AddService = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('price', info.price);

        fetch(' https://fathomless-wave-03932.herokuapp.com/addService', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
        return (
        <div>
          <form ml-5 onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Service Name</label>
    <input onBlur={handleBlur} name="name" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Service name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Description</label>
    <input onBlur={handleBlur}  name="description" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Description"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Price</label>
    <input onBlur={handleBlur}  name="price" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Price"/>
  </div>
  
  <div class="form-group">
    <label for="exampleInputEmail1">Upload Photo</label>
    <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputEmail1" placeholder="Upload Image"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default AddService;