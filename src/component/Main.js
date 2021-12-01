import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './Header'
import Input from './Input'
import './Main.css'

const Main = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState("salad")

    const YOUR_APP_KEY = "402f97b652061bb00d18f9893f042562"
    const app_key_id = "79e6eb56"

    const fetchApi = async()=>{
        try{
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${app_key_id}&app_key=${YOUR_APP_KEY}`)
            setData(response.data.hits)
        }catch{
            console.log("error")
        }
        
    }

    useEffect(()=>{
        fetchApi()
    },[input])

    return (
        <div className='section'>
            <div className='container'>
                <Header/>
                <Input setInput={setInput}/>
                <Card data={data}/>
            </div>
        </div>
    )
}

export default Main
