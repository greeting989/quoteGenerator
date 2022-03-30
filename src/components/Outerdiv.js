import axios from 'axios';
import React,{useEffect,useState} from 'react';

import './Outerdiv.css';

function Outerdiv() {
  const [quote, setQuote] = useState('');
  const getData = () =>{
    let result = axios.get('https://api.quotable.io/random').then((resp)=>{
      setQuote(resp.data)
    })
  }
  useEffect(() => {
    getData();
  }, []);

  const getNewData = () =>{
    getData()
  }
  console.log("quote",quote)
  return (
    <>
    <div  className='outerDiv'>
      <div className='innderDiv'>
         <h3 className='quote'>
          {
            JSON.stringify(quote.content)
          }
        </h3> 
        <h3 className='author'>-{JSON.stringify(quote.author)}</h3>
      </div>
      <p style={{textAlign:'center',fontSize:'2rem'}}>Click on GENERATE for random quote</p>
      <button onClick={getNewData} className="genBtn">GENERATE</button>
    </div>
    
    </>
  )
}

export default Outerdiv