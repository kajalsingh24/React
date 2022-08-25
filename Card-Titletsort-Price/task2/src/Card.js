import React from 'react';
import ReactStars from "react-rating-stars-component";

export default function Card(data) {

  return (
    
    <div className='col-4'>
    <div className="card" style={{width: "18rem"}}>
    <img src={data.mydata.image}className="card-img-top" alt="..."/>
    <div className="card-body mainclass">
    <ReactStars
    count={5}
    size={24}
    isHalf={true}
    activeColor={"#ffd700"}
    value={data.mydata.rating.rate}
  />,
     <span className='card-title'>{data.mydata.price}</span>
      <h5 className="card-title">{data.mydata.title}</h5>
      <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
</div>
  )
}
