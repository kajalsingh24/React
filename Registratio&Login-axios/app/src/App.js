
import './App.css';
import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() 
{
  const [data,setData] = useState({
      username : "",
      name : "",
      email : "",
      password: "",
      passwordConfirmation : "",
      role : "",
      phone : "",
      address : "",
      companyName : "",
      image : ""
  })
  const changSet = (e)=> {
      if(e.target.type == "file")
      setData({...data, [e.target.name] : e.target.files[0]});
      else
      setData({...data, [e.target.name] : e.target.value});
  }
  const  mySaveData = (e)=>{
      e.preventDefault();
      var formData = new FormData();
      formData.append("username",data.username);
      formData.append("name",data.name);
      formData.append("email",data.email);
      formData.append("password",data.password) 
      formData.append("passwordConfirmation",data.passwordConfirmation);
      formData.append("role",data.role) ;
      formData.append("phone",data.phone);
      formData.append("address",data.address)
      formData.append("companyName",data.companyName);
      formData.append("image",data.image);
      // -----------------Api fetch---------
    axios.post("http://localhost:8002/api/auth/register",formData).then(y=> {   
      console.log(y);
      // localStorage.setItem("data",JSON.stringify(y.data))
    toast.success(y.data.message)})
    .catch(y =>
      {
        toast.error(y.response.data.message);
      })}
return (
  <div>
        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
<div className='container'>
  <div className='form-control bg-warning text-center"'>
    <h4>File upload </h4>
  </div>
      <form  onSubmit={mySaveData}>
        <div className='mb-3 mt-3 form-control'>     
<label>username</label>
   <input type="text" name='username'  onChange={changSet} className="form-control"/>
   </div>
   <div className='mb-3 form-control'> 
   <label>Name</label>
   <input type="text" name='name' onChange={changSet} className="form-control"/>
   </div>
   <div className='mb-3 form-control'> 
   <label>email</label>
   <input type="text" name='email' onChange={changSet} className="form-control" />
   </div>
   <div className='mb-3 form-control'> 
   <label>password</label>
   <input type="text" name='password' onChange={changSet} className="form-control"/>
   </div>
   <div className='mb-3 form-control'> 
   <label>passwordConfirmation</label>
   <input type="text" name='passwordConfirmation' onChange={changSet} className="form-control"/>
   </div> 
   <div className='mb-3 form-control'> 
   <label>role</label>
   <select name='role' onChange={changSet} className="form-control">
          <option value="admin">admin</option>
          <option value="user">user</option>
          <option value="seller">seller</option>
   </select>
   </div>
   <div className='mb-3 form-control'>
   <label>phone</label>
   <input type="text" name='phone' onChange={changSet} className="form-control"/>
   </div>
   <div className='mb-3 form-control'>
   <label>address</label>
   <input type="text" name='address' onChange={changSet} className="form-control"/>
   </div>
   <div className='mb-3 form-control'>
   <label>companyName</label>
   <input type="text" name='companyName' onChange={changSet} className="form-control"/>
   </div>
   <div className='mb-3 form-control '>
    <div><label>Upload image</label></div>
  <input type="file" name="image" onChange={changSet} className="btn btn-warning" />
  </div>
<div className='mt-3'>
  <input type="button"  value="save"  class="btn btn-success" onClick={mySaveData}/>
  <ToastContainer />
  </div>
  <a href="#Login.js" class="link-success"></a>
      </form>
      </div>
  </div>
)
}
export default App;
