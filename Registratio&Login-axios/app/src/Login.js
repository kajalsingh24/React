import React from 'react'
import axios from 'axios';
import { useState } from 'react'
export default function Login() {
 const [data,setData] = useState({
  email : "",
  password: "",  
  })
 const changSet = (e)=> { 
      setData({...data, [e.target.name] : e.target.value});
  }
  // ----------------form sumit-------------
  const  mySaveData = (e)=>{
      e.preventDefault();
      console.log(data)
 // -----------------Api fetch---------
    axios.post("http://localhost:8002/api/auth/login",data,{ headers: 
    {
        Authorization : `Bearer`
        }}).then(y=> {
          localStorage.setItem("data",JSON.stringify(y.data))})    
 } 
  return (
    <>
     <div>     
<div className='container'>
  <div className='form-control bg-warning text-center"'>
    <h4>File upload </h4>
  </div>
    <form onSubmit={mySaveData}>
   <div className='mb-3 form-control'> 
   <label>email</label>
   <input type="email"  name='email'  className="form-control" onChange={changSet}/>
   </div>
   <div className='mb-3 form-control'> 
   <label>password</label>
   <input type="password" name='password' className="form-control" onChange={changSet} />
   </div>
   <div className='mt-3'>
  <input type="button"  onClick={mySaveData} value="Submit"  class="btn btn-success" />
  </div>
  </form> 
      </div>
  </div>
    </>
  )
}
