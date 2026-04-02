// import { motion } from "framer-motion";
// import product from "../../assets/product.jpg";
// import product2 from "../../assets/product2.jpg";
// import product3 from "../../assets/product3.jpg";
// import product4 from "../../assets/product4.jpg";
// import product5 from "../../assets/product5.jpg";
// import cloud from "../../assets/cloud.jpg";


// const images = [
//   { src: product, size: "row-span-2 col-span-1" },
//   { src: product2, size: "row-span-1 col-span-2" },
//   { src: product3, size: "row-span-1 col-span-1" },
//   { src: product4, size: "row-span-2 col-span-1" },
//   { src: product5, size: "row-span-1 col-span-1" },
//   { src: cloud, size: "row-span-2 col-span-1" },
// ];


// export default function IObserver() {
//   return (
//     <div className="flex items-center justify-center min-h-screen p-6 bg-gray-900">
//       <div className="grid grid-cols-3 gap-4 auto-rows-[200px] w-full max-w-6xl">
//         {images.map((img, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200, damping: 15 }}
//             className={`relative overflow-hidden rounded-2xl shadow-lg ${img.size}`}
//           >
//             <img
//               src={img.src}
//               alt={`gallery-${i}`}
//               className="absolute inset-0 object-cover w-full h-full"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { FaHtml5 } from "react-icons/fa";
import React from 'react'
import cloud from "../../assets/cloud.jpg"
import Line from "../../assets/lines.jpeg"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

// Intersection Observer

export default function iObserver() {
  return (
<div className="relative flex flex-row items-center justify-center h-screen gap-10 p-10 m-auto overflow-hidden BG max-w-140rem">

  {/* Frames side by side */}
  

    {/* Text Frame */}
    <div className="pt-20 text-gray-400 h1">
      <div className="flex items-center justify-center h-100 w-150">
        <div className="relative flex items-center h-95 w-145 rounded-3xl">
          <div className="absolute text-left">
            <h1 className="font-mono font-black pb-0 p-10 tracking-tight text-5xl bg-gradient-to-l from-blue-500 to-white hover:text-[50px] hover:tracking-[-0.5rem] bg-clip-text text-transparent">
              Apurva Paul
            </h1>
            <p className="p-8 text-sm">
              Curabitur ac elementum ligula. Ut eu libero gravida, lacinia eros sit amet, convallis eros. Fusce vel lacus porta nibh accumsan semper at efficitur neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum dignissim felis, et congue justo rutrum ut. Ut non sollicitudin turpis. Integer iaculis urna eget convallis hendrerit. Maecenas nisi libero, sollicitudin vel enim nec, pellentesque viverra nisi. Cras leo ligula, pharetra eu fringilla nec, malesuada nec lorem. Phasellus consequat vestibulum felis, vitae egestas lorem condimentum nec.
            </p>
            <button class ="font-bebas ml-10 mb-10 px-15 py-2 text-gray-500 rounded-md border-2 border-blue-400  font-mono
           hover:text-white hover:border-blue-50
           hover:bg-gradient-to-r from-gray-500 to-blue-900
         transition duration-300 ease-in-out">Explore</button>
          </div>
        </div>
      </div>
    </div>

    {/* Image Frame */}
    <div className="flex flex-col m-8 mt-10 mr-16 font-mono h1 text-blue-50">
      <div className="flex items-center justify-center transition-transform duration-300 bg-gray-100 w-60 h-90 hover:-rotate-6">
        <div className="flex items-center h-85 w-55 bg-blue-950">
          
          <img
            className="object-cover w-full h-full"
            src={cloud}
            alt="the_image-of_me"
          />
          
        </div>
        
      </div>
      <div className="flex flex-row gap-8 p-2 pl-0 m-2 ml-0 font-bold text-right text-gray-500 align">
        <ul>
          <li class = "hover:text-blue-50 "><FaHtml5 /></li>
          <li class = "hover:text-blue-50">-CSS-</li>
          <li class = "hover:text-blue-50">-JavaScript-</li>
          <li class = "hover:text-blue-50">-Tailwind</li>
          <li class = "hover:text-blue-50">-React-</li>
          <li class = "hover:text-blue-50">-Java-</li>
        </ul>
        <ul>
          <li class = "hover:text-blue-50">-HTML-</li>
          <li class = "hover:text-blue-50">-CSS-</li>
          <li class = "hover:text-blue-50">-JavaScript-</li>
          <li class = "hover:text-blue-50">-Tailwind</li>
          <li class = "hover:text-blue-50">-React-</li>
          <li class = "hover:text-blue-50">-Java-</li>
        </ul>
      </div>
    </div>
    
  </div>



  )
}
