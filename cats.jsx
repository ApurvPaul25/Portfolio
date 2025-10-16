import React from "react";
import { useEffect, useState, useTransition } from "react"
import { getCatData } from "../../api/postApi";
import { Loader } from "../../ui/loader";
import { CatCard } from "../../ui/catCard";
import "./cats.css"
import BrowserRouter from "../../api/browserRouter";

const Cats = ()=>{

    const [isPending, startTransition] = useTransition();
    const [cats, setCats] = useState([])

    useEffect(() => {
        startTransition(async () => {
        try {
            const res = await getCatData();
            // console.log(res.data);          
            setCats(res.data);              
            } catch (error) {
                console.error("Error fetching cats:", error);
                        }
                        });
                    }, []);


    if(isPending) return <h1><Loader /></h1>

        return (
            <>
            <section>
             <BrowserRouter />
            </section>
        
        <section className="cats-section">
            <ul className="cat-cards">
                {
                    cats.map((curCat)=>(
                        <CatCard cat= {curCat} key={curCat.id} />
                    ))
                }
            </ul>
        </section>
        </>
    )
}

export default Cats;