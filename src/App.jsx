import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifItem from './components/GifItem'


const App = () => {
  const [categories, setCategories] = useState(["Perro", "Gato"])

  const onAddCategory = ( newCategory )=>{
    setCategories([  newCategory, ...categories ])
  }


  return (
   <>
   
   <h2>Categorias</h2>
   <AddCategory onAddCategory={onAddCategory}/>








    <h2>Listado de categorias</h2>
    {categories.map((category, index)=>{
      return <GifItem title={category} key={index} />
    })}

    
   </>
  )
}

export default App