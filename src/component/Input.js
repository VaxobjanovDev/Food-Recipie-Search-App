import React from 'react'

const Input = ({setInput}) => {
    return (
        <>
          <input onChange={(e)=>setInput(e.target.value)}/>  
        </>
    )
}

export default Input
