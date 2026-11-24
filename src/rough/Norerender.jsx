import { useEffect, useRef, useState } from "react";

function Ref(){
    // const myRef = useRef(null)
    // useEffect(()=>{
    //     myRef.current.focus()
    // },[])

    // return(
    //     <div>
    //         <div>My Component: {myRef.current}</div>
    //         <input ref= {myRef} type="text" />
    //     </div>
    // )
    //-------------------------------------------------------------------
    // const [count, setCount] = useState(0)
    // const countRef = useRef(0)
    
    // function handleClick(){
    //     countRef.current +=1
    //     setCount(countRef.current)
    //     console.log(countRef.current)
    // }

    // return(
    //     <div className="m-10px p-10px">
    //         Count is: {count}
    //         <br />
    //         <button onClick={
    //             handleClick
    //         }>Increment</button>
    //     </div>
    // )

    //-------------------------------------------------------------------
    
    const intervalRef = useRef(null)

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            console.log("Interval Started")
        },1000)

        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])

    function stopTimer(){
        clearInterval(intervalRef.current)
    }

    return(
        <button onClick={stopTimer}>Stop-Timer</button>
    )
}

export default Ref