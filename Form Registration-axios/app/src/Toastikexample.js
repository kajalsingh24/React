import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, Form,ErrorMessage, yupToFormErrors } from 'formik';

export default function Toastikexample() {

return (
    <div>
      <Formik
       initialValues ={
        {
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
        }}

      const mySaveData={ (values) => {
          console.log(values);         
        }}
//         validationSchema={validationSchema}
       >
      
  <div>
  
<div className='container'>
  <div className='form-control btn btn-primary'>
    <h4>File upload </h4>
  </div>
      <form  onSubmit={mySaveData}>
        <div className='mb-3 mt-3 form-control'>     
<label>username</label>
   <input type="text" name='username'  className="form-control"/>
   </div>
   <div className='mb-3 form-control'> 
   <label>Name</label>
   <input type="text" name='name'  className="form-control"/>
   </div>
   <div className='mb-3 form-control'> 
   <label>email</label>
   <input type="text" name='email' className="form-control" />
   </div>
   <div className='mb-3 form-control'> 
   <label>password</label>
   <input type="text" name='password' className="form-control"/>
   </div>
   <div className='mb-3 form-control'> 
   <label>passwordConfirmation</label>
   <input type="text" name='passwordConfirmation'  className="form-control"/>
   </div> 
   <div className='mb-3 form-control'> 
   <label>role</label>
   <select name='role'  className="form-control">
          <option value="admin">admin</option>
          <option value="user">user</option>
          <option value="seller">seller</option>
   </select>
   </div>
   <div className='mb-3 form-control'>
   <label>phone</label>
   <input type="text" name='phone' className="form-control"/>
   </div>
   <div className='mb-3 form-control'>
   <label>address</label>
   <input type="text" name='address'  className="form-control"/>
   </div>
   <div className='mb-3 form-control'>
   <label>companyName</label>
   <input type="text" name='companyName'  className="form-control"/>
   </div>
   <div className='mb-3 form-control '>
    <div><label>Upload image</label></div>

  <input type="file" name="image"  className="btn btn-warning" />
  </div>
<div className='mt-3'>
  <input type="button"  value="save"  class="btn btn-success" onClick={mySaveData} />

  </div>
      </form>
      </div>
  </div>

</Formik>
    </div>
   
  );

}
