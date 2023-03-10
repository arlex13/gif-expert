import React, { useEffect, useState} from 'react'

const GifItem = ({title, url}) => {

  return (
     <div className='mx-2'>
          {/* <img src={url} alt={title} /> */}
          <p>{title}</p>
     </div>
  )
}

export default GifItem
