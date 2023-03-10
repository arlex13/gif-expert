import React, {useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({category}) => {

    const { isLoading, data } = useFetchGifs(category)
    // const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // const getGifs= async()=>{
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=1PuGXd7g4n5LgdpImvj59GPVh4bmdkli&q=${ category }&limit=10`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json()
    //     setData(data)
    //     setIsLoading(false)
    // }
  
    // useEffect(() => {
    //   getGifs()
    // }, [])

  return (
    <div> <p>------------{category}----------</p>
    {isLoading ? <h2>Cargando..</h2> : 
     <div>
        {data.map(({ url, title ,id })=>{
            return <GifItem title={title} key={id}/>  
        })
      }
     </div>
    }
    
    </div>
  )
}

export default GifGrid



















