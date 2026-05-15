import { useEffect, useState } from "react"
import React from "react"

export default function CatsSsr(){

    const [cat, setCat] = useState(null)

        async function fetchCats(params) {

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search')   
    
        if(!response.ok){
            throw new Error("HTTP response failed")
        }
        const data = await response.json()
        setCat(data[0])
        }catch (error) {
            console.error("Fetch Failed", error.message);
            
        }
    }

    useEffect(()=>{
        fetchCats()
    },[])
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen text-center card">
            <h1 className="text-5xl font-pacifico">Cuteness</h1>
            <p>Catss</p>
            {cat && <img className="p-4 border border-gray-600" src={cat.url} alt="cat" width='200' />}
        </div>
    )
}