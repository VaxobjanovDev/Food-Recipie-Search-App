import React from 'react'
import Input from './Input'

const Header = ({setInput,input}) => {
    return (
        <div className='text-header'>
            <h1>Food Recipie Search App</h1>
            <Input input={input} setInput={setInput}/>
        </div>
    )
}

export default Header
