import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState({});

    const handleBlur = e => {
        const newEmail = {...email};
        newEmail[e.target.name] = e.target.value;
        setEmail(newEmail);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append('email', email.email);

        fetch(' https://fathomless-wave-03932.herokuapp.com/makeAdmin', {
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
        <form ml-5 onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="exampleInputEmail1">Service Name</label>
        <input onBlur={handleBlur} name="email" type="txt" class="form-control" id="exampleInputEmail1"  placeholder="Enter Admin Email"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
};

export default MakeAdmin;