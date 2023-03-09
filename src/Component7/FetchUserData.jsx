import React, { useEffect } from 'react'
import axios from "axios"

const FetchUserData =  () => {
   
    const getData = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }

    useEffect(()=>{
          getData();
    },[])
   
}

export default FetchUserData