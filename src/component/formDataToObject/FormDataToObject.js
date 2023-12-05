import React, { useState } from 'react';

function FormDataToObject() {
    const [data, setData] = useState({});

    const getChange = (event) => {
      setData({ ...data, [ event.target.name ]: event.target.value});
    }
  
    const getFormData = (event) => {
      event.preventDefault();
      console.log(data);
    }
  
    return (
      <div>
        <form onSubmit={getFormData}>
          <div>
            <label htmlFor="name">Name</label> <br />
            <input type="text" name='name' placeholder='Enter your name' onChange={getChange}/>
          </div>
          <div>
            <input type="radio" name='gender' value='Male' onChange={getChange}/>
            <label htmlFor="name">Male</label> 
          </div>
          <div>
            <input type="radio" name='gender' value='Female' onChange={getChange}/>
            <label htmlFor="name">Female</label> 
          </div>
  
          <div>
            <button type='submit'>Submit</button>
          </div>
          
        </form>
      </div>
    );
}

export default FormDataToObject;