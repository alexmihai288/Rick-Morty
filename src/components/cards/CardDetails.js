import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

const CardDetails = () => {

  let {id} = useParams()
  const [fetchedData,updateFetchedData] = useState([]);
  let {name, image, location, origin, gender, species, status, type} = fetchedData

  let api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(()=>{
    (async function(){
      const data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()
  },[api]);

  let statusColor;

            if(status==='Alive')
                statusColor="success";
            else if(status==='Dead')
                statusColor="danger";
            else
                statusColor="secondary";

  return <div className='container d-flex justify-content-center'>
          <div className='d-flex flex-column gap-4'>
            <h1 className='text-center'>{name}</h1>
            <img src={image} alt="" className='img-fluid' />
            <div className={`badge bg-${statusColor} fs-5`}>{status}</div>
            <div className='content'>
              <div className=''>
                <span className='fw-bold'>
                  Gender :
                </span>
                {gender}
              </div>
              <div className=''>
                <span className='fw-bold'>
                  Species :
                </span>
                {species}
              </div>
              <div className=''>
                <span className='fw-bold'>
                  Type :
                </span>
                {type === "" ? "Unknown" : type}
              </div>
              <div className=''>
                <span className='fw-bold'>
                  Location :
                </span>
                {location?.name}
              </div>
              <div className=''>
                <span className='fw-bold'>
                  Origin :
                </span>
                {origin?.name}
              </div>
            </div>
          </div>  
        </div>
  
}

export default CardDetails