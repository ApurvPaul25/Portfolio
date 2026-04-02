// import React from 'react'
// import './testing.css'
// import Cloud from '../../assets/cloud.jpg'
// import Card from '../cards/Card'
// import product from '../../assets/product.jpg'



// export default function Testing() {
//   return (
//     <div className="main">

//       <Card img={product}
//               ttl='Product-1'
//               des='Mauris vitae semper est. 
//             Orci varius natoque penatibus
//              et magnis dis parturient montes, nascetur ridiculus mus'
//              price='Rs.1600'
//         />

//         <Card img={product}
//               ttl='Product-1'
//               des='Mauris vitae semper est. 
//             Orci varius natoque penatibus
//              et magnis dis parturient montes, nascetur ridiculus mus'
//              price='Rs.1600'
//         />

//         <Card img={product}
//               ttl='Product-1'
//               des='Mauris vitae semper est. 
//             Orci varius natoque penatibus
//              et magnis dis parturient montes, nascetur ridiculus mus'
//              price='Rs.1600'
//         />
//         <Card img={product}
//               ttl='Product-1'
//               des='Mauris vitae semper est. 
//             Orci varius natoque penatibus
//              et magnis dis parturient montes, nascetur ridiculus mus'
//              price='Rs.1600'
//         />
//         <Card img={product}
//               ttl='Product-1'
//               des='Mauris vitae semper est. 
//             Orci varius natoque penatibus
//              et magnis dis parturient montes, nascetur ridiculus mus'
//              price='Rs.1600'
//         />
//         <Card img={product}
//               ttl='Product-1'
//               des='Mauris vitae semper est. 
//             Orci varius natoque penatibus
//              et magnis dis parturient montes, nascetur ridiculus mus'
//              price='Rs.1600'
//         />

//       {/* <picture>
//         <source media="(min-width: 40em)" srcset={Cloud} width='1080' height='1080' />
//         <img src= {Cloud} alt="Baadal" width='736' height='736'/>
//       </picture>

//       <div className="baadal">
//           Baadal
//       </div> */}
//     </div>
    
//   )
// } 

import React, { useState } from "react";
import Card from '../cards/Card';
import product from '../../assets/product.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product5 from '../../assets/product5.jpg'


export default function Testing() {
  const [activeSection, setActiveSection] = useState("one");
  
    const cards = [
      { srcimg: product, title: "Card 1", description: "This is the first card.This is the first card.This is the first card.This is the first card.This is the first card." },
      { srcimg: product2, title: "Card 2", description: "This is the second card." },
      { srcimg: product3, title: "Card 3", description: "This is the third card." },
      { srcimg: product4, title: "Card 4", description: "This is the fourth card." },
      { srcimg: product5, title: "Card 5", description: "This is the fifth card." },
    ];
  
    const sectionStyles = {
      one: { bg: "bg-gray-500", text: "text-gray-700" },
      two: { bg: "bg-gray-200", text: "text-black" },
      three: { bg: "bg-yellow-400", text: "text-yellow-600" },
    };
  
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center p-6 transition duration-300 ${sectionStyles[activeSection].bg} ${sectionStyles[activeSection].text}`}
      >
        <div className="flex tracking-wide gap-4 mb-6">
          <button
            onClick={() => setActiveSection("one")}
            className={`px-4 py-2 shadow-md transition ${
              activeSection === "one"
                ? "bg-gray-900 rounded-l-xl font-bold text-white"
                : "bg-gray-500 text-black border"
            }`}
          >
            Dark
          </button>
          <button
            onClick={() => setActiveSection("two")}
            className={`px-4 py-2 shadow-md transition ${
              activeSection === "two"
                ? "bg-gray-900 rounded-xl font-bold text-white"
                : "bg-white text-black border"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setActiveSection("three")}
            className={`px-4 py-2 shadow-md transition ${
              activeSection === "three"
                ? "bg-gray-900 rounded-r-xl font-bold text-white"
                : "bg-yellow-400 text-black border"
            }`}
          >
            Kayden
          </button>
        </div>
  
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              srcimg={card.srcimg}
              title={card.title}
              description={card.description}
              textColor={sectionStyles[activeSection].text}
            />
          ))}
        </div>
      </div>
    );
}
