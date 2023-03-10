import React, { useEffect, useState} from 'react'

const GifItem = ({title}) => {

  const [data, setData] = useState([])

  const getGifs= async()=>{
      const url = `https://api.giphy.com/v1/gifs/search?api_key=1PuGXd7g4n5LgdpImvj59GPVh4bmdkli&q=${ title }&limit=10`;
      const resp = await fetch(url);
      const { data } = await resp.json()
      setData(data)
      console.log("resp", data)
  }

  useEffect(() => {
    getGifs()
  }, [])
  
  
  return (
    <div>
      <p>------------{title}----------</p>
      {data.map(({ url, title})=>{
        return( <div>
          <img src={url} alt={title} />
          <p>{title}</p>
        </div>) 
      })

      }

     


    </div>
  )
}

export default GifItem