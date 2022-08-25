
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './Card';

function App() {
  const [data,setdata] = useState([]);
  const [sortingdata,sortdata] =useState(false);

  useEffect(()=>
  {
    axios.get("https://fakestoreapi.com/products").then((carddata=>
    {
         setdata(carddata.data) 
    }))
  },[])
  // --------sortdata-------
  function handleSort()
  {
    sortdata(!sortingdata)
    sortingdata ?
    setdata([...data].sort((a,b)=>{
      return a.title > b.title ? 1: -1}))

     :
   setdata([...data].sort((a,b)=>{
        return b.title < a.title ? -1: 1
    }))
  
  } 
  function asendingorder()
  {
    
    const asendinddata=[...data].sort((a,b)=>{
      return a.price > b.prices ? 1: -1
    })
    setdata(asendinddata)
  }

  // -----------sortdata------
  return(
    <div className='App'>
   <button type="button" className="btn btn-secondary" onClick={handleSort}>SortData</button>
   
   <button type="button" className="btn btn-warning" onClick={asendingorder}>Price</button>

      <h1>display data</h1>
      <div className='container'>
       
        <div className='row'>
          {
            data.map((value,index)=>
            {
              return(
                <Card
                mydata={value}/>
              
              )
            })
          }
        </div>
      </div>
    </div>
  )

}

export default App;
