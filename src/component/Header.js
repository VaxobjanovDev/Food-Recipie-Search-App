import React from 'react'
import Input from './Input'

const Header = ({setRecipie,setInput,input}) => {
    function onSubmit(){
        setRecipie(input)
    }
    return (
        <div className='text-header'>
            <h1>Food Recipie Search App</h1>
            <Input setRecipie={setRecipie} input={input} setInput={setInput}/>
            <button className='button btn-blue' onClick={onSubmit}>Search</button>
        </div>
    )
}

export default Header
