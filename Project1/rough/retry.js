
const URL = 'https://cataas.com/api/cats?tags=cute'
const cache = {}

async function getCatss(url, attempts = 3, delay = 1000){
    for(let i=0; i<attempts; i++){
        try {

            if(cache[url]){
                return ("From the cache ",cache[url])
            }else{
                const res = await fetch(url)
                if(!res.ok){
                    return (res.status)
                }
                const data = await res.json()
                return (data)
                }   
            } catch (e) {
                
                if(i === attempts -1){
                    return ("attempts exhausted: ", e.message)
                }else{
                    return ("API call failed, retrying ", e.message)
                    await new Promise(res=> setTimeout(res, delay))
                     //creating a new promise and using the delay
                } 
                if(e.message == 404) console.log("Resource not found")
                // console.log(e.message)
            }
    }
}

getCatss()
