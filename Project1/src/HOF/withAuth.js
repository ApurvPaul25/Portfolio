import React, { useState, useEffect } from ("react")

const checkUserAuth = () =>{
    return localStorage.getItem('isLoggedIn') === 'true'
}

export default function withAuth(WrappedComponent){
    return ()=>{
        const [isAuthenticated, setIsAuthenticated] = useState(false)
        const [loading, setLoading] = useState(true)

        useEffect(()=>{
            const authStatus = checkUserAuth()
            setIsAuthenticated(authStatus)
            setLoading(false)
        },[])

        if(loading){
            return <div>Verifing your identity ... </div>
        }

        if(!isAuthenticated){
            return(
                <div style={{padding: '20px', textAlign: 'center'}}>
                    <h2>Please log in to access the Giblifier</h2>
                    <button onClick={()=>{
                        localStorage.setItem('isLoggedIn', 'true')
                        window.location.reload()
                    }}>
                        Fake Login
                    </button>
                </div>
            )
        }

        return <WrappedComponent {...props} />
    }    
}
