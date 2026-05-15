import './gallery.css'
import React from 'react'

export default function Gallery(){
    return(
        <div className="gal-grid-container">
            <div className="gal-box" style={{gridArea: "box-1"}}></div>
            <div className="gal-box" style={{gridArea: "box-2"}}></div>
            <div className="gal-box" style={{gridArea: "box-3"}}></div>
            <div className="gal-box" style={{gridArea: "box-4"}}></div>
            <div className="gal-box" style={{gridArea: "box-5"}}></div>
        </div>
    )
    
}