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



## MULTER

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form
      action="http://localhost:3000/"
      method="post"
      enctype="multipart/form-data"
    >
      <input type="file" name="avatar" />
      <input type="file" name="doc" />
      <!-- use of multiple input tag -->
      <!-- <input type="file" name="gallery" multiple /> -->
      <input type="submit" name="Submit" />
    </form>
  </body>
</html>

```


```js
const express = require('express');
const multer = require('multer');

const app = express();

// uoload folder
const UPLOADS_FOLDER = './uploads/';

// Prepare the final router multer object
const upload = multer({
    dest: UPLOADS_FOLDER,
    limits: {
        fileSize: 1000000, // 1MB
    },
    fileFilter: (req, file, cb) => {
        // console.log(file); // file = { fieldname, originalname, encoding, mimetype }
        if (
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/png'
        ) {
            cb(null, true);
            /* cb(error, true or false) >>> true -> ok or
            continue to next middleware , false -> loading or stop */
        } else {
            // cb(null, false);
            cb(new Error('Only .jpg or .jpeg or .png format allowed'));
        }
    },
});

/*
Upload single file >>>
upload.single('name of input tag')
Upload multiple files >>>
upload.array('name of input tag', max number of files)

Upload files from multiple input tag>>>
upload.fields([
        { name: 'name of input tag', maxCount: max number of files },
        { name: 'name of input tag', maxCount: max number of files },
    ])

Upload form data >>>
upload.none() // we will get form data in req.body
 */

// application route
app.post('/', upload.single('avatar'), (req, res) => {
    res.send('Successful');
});

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('Upload error');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send('Success');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


```
