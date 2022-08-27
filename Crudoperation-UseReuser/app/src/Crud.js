import React from 'react'
import { useState, useReducer } from 'react';
export default function Crud() {
const myReducer=(state ,action)=>{
  // console.log(state)
switch(action.type){
  case "ADD":
    return [...state, action.payload];

    case "Delete":
      return state.filter((d, index) => {
        return index != action.payload;
      });

      case "Save":
       return state.map((d, myundex) => {
          if (myundex == action.index) {
            return action.payload;
          }
          else {
            return d;
          }

        });
        default:
          return state;

}
}
const myChange=(e)=>
{
  setInput({...input,[e.target.name]:e.target.value});                          
}
const mySave = (e) => {
  if (index >= 0) {
    setData({ type: "Save", payload: input ,index: index});
    setIndex(-1);
  }
  else {
    setData({ type: "ADD", payload: input });
  }
}
const myDelete = (index) => {
  setData({ type: "Delete", payload: index, });
  setIndex(index);
}
const edit = (index) => {
  setInput(data[index]);
  setIndex(index);
}
 const [data, setData] = useReducer(myReducer, []);
 const [input, setInput] = useState({
 firstname:"",
 lastname:"",
categrie:""
 })  
 const [index, setIndex] = useState(-1);

  return (
   <div className='container'>
      <div className='row'>
        <div className='form-control btn btn-secondary'>
          <h3>Crud Operation</h3>
        </div>
        <form>
  <div className='mb-3'>
    <label>Firstname</label>  
    <input type="text" name="firstname" value={input.firstname} placeholder='firstName' className="form-control" onChange={myChange} />                         
</div> 
<div className='mb-3'>
    <label>Lastname</label>  
    <input type="text" name="lastname" value={input.lastname} placeholder='lastName' className="form-control" onChange={myChange} />                         
</div>    
<div className='mb-3' >
    <label>Categories</label>  
    <select className="form-control" name='categrie' value={input.categrie} onChange={myChange} >
    <option value=""></option> 
<option value="Email">Emaill</option> 
<option value="Phoenno">Phoenno</option>
<option value="Address">Addres</option>                             
</select>                      
</div>  
<button type="button" className="btn btn-warning" onClick={mySave}>save</button>                        
  </form>    


  <table class="table">
  <thead>
    <tr>
    <th scope="col">id</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Categrie</th>
      <th scope="col">Edit</th>
      <th scope="col">Delet</th>
    </tr>
  </thead>
  <tbody>
 
  {data.map((value,index)=>
    {
      return(
        <tr>
        <th scope="row">1</th>
        <td>{value.firstname}</td>
        <td>{value.lastname}</td>
        <td>{value.categrie}</td>
        <td><button  onClick={() => { myDelete(index)}} class="btn btn-danger">DELET</button></td>
   <td><button  onClick={() => {edit(index)}}  class="btn btn-primary">Update</button></td>  
       
      </tr>
      )
    })}
  </tbody>
</table>                  
            </div>                              
   </div>
  )
}
