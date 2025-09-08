import React from 'react'
import './mainhero.css'

import heroVideo from '../../assets/heroVideo.mp4'

export const Mainhero = () => {

  const text = "HERO"

  const fonts = [
  "Merriweather",
  "Oswald",
  "Bebas Neue",
  "Dancing Script",
  "Righteous",
  "Shadows Into Light",
  "Cinzel Decorative",
  "Luckiest Guy"
];


  return (
    <div className="mainhero">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-content">
        <div className="text-view">
          {text.split("").map((letter, i) => (
          <span key={i} style={{ fontFamily: fonts[i % fonts.length], margin: "0 2px" }}>
            {letter}
          </span>
        ))}
        </div>
      </div>

    </div>
  )
}

export default Mainhero
