import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function SearcBar(){

    const dispatch = useDispatch()
    const [name, setName]= useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        //dispatch(getProduct(name))
    }

    return (
        <div>
            <input
            type='text'
            placeholder='Search Product...'
            onChange={(e)=>handleInputChange(e)}
            />
            <button type='submit' onClick={(e)=>handleSubmit(e)}>SEARCH!</button>
        </div>
    )

}