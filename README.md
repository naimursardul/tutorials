### TUTORIAL-1:  Get Form data as an Object

```jsx
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
```


## React Router 
### (1) Install router
```
npm install react-router-dom 
```

### (2) Route setup
```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create-user" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```
