import { useEffect, useState } from "react";


export const useFetchGifs = (category) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifs= async()=>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=1PuGXd7g4n5LgdpImvj59GPVh4bmdkli&q=${ category }&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json()
        setData(data)
        setIsLoading(false)
    }
  
    useEffect(() => {
      getGifs()
    }, [])

  return {
    isLoading,
    data,
  }
}