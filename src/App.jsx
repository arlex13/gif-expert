import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import GifItem from './components/GifItem'


const App = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = ( newCategory )=>{
    setCategories([   newCategory, ...categories ])
  }


  return (
   <>
    <h2>Categorias</h2>
    <AddCategory onAddCategory={onAddCategory}/>

    <h2>Listado de categorias</h2>
    {categories.map((category)=>{
      return <GifGrid category={category} key={category} />
    })} 

    
   </>
  )
}

export default App