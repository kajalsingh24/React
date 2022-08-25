import React,{useState} from 'react'

export default function Readmore(data) {
                              const [infoData,setInfoData] = useState(false);
                              const toggleBtn = () => {
                              setInfoData(y => !y)
                              }
  return (
    <div className='col-4'>
                        <div className="card" style={{width: "18rem"}}>
  <img src={data.myData.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.myData.name}</h5>
    <p className="card-text">{infoData ? data.myData.info : data.myData.info.substr(0,100)}</p>
    <button onClick={() => {toggleBtn()}}>Readmore</button>
    <a href="#" className="btn btn-primary">{data.myData.price}</a>
  </div>
</div>               
    </div>
  )
}
