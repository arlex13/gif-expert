import React, { useState } from 'react'

const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState("")
    const [inputError, setInputError] = useState("")

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit =()=>{
        if (inputValue.length<=2) {
            setInputError("Minimo 3 caracteres")
            return;        
        }
        setInputError("")
        setInputValue("")
        onAddCategory(inputValue)
    }


  return (
  <form onSubmit={(e)=>{
    e.preventDefault()
    onSubmit()
  }}>
    
   <input type="text" 
    value={inputValue} 
    onChange={onInputChange}
    />

    {inputError && <p>{inputError}</p>}
   

    <div>
    {/* <button onClick={onSubmit}>  Agregar</button> */}
    </div>
    </form>
  
  )
}

export default AddCategory