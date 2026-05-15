// Debouncing

import { useEffect, useState } from "react"

function debounce(value, delay){
    
    let [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value)
            }, delay)

        return ()=> clearTimeout(timer)
        }, [value, delay])
        
    return debounceValue
}


export default function Search({onSearch}){
    let [query, setQuery] = useState("")
    
    const debouncedQuery = debounce(query, 500)
    
    useEffect(()=>{
        if(!debouncedQuery == undefined){
            onSearch(debouncedQuery)
        }
    },[debouncedQuery, onSearch])
    
      return(
        <div className="box-border border-b-black search-container">
            <input type="text"
             placeholder="Type to search..."
             value={query}
             onChange={(e)=>setQuery(e.target.value)}
            />
        </div>
      )
}
