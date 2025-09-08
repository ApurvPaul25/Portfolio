import React from 'react'
import './hero.css'
import Card from '../cards/card'
import product from '../../assets/product.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product5 from '../../assets/product5.jpg'

export const Hero = () => {

const colors = {
  Dark: { bg: '#251E01', text: '#ffffff' },
  Light: { bg: '#F8F4E6', text: '#000000' },
  Gray: { bg: '#868274', text: '#ffcc00' },
};


  return (
    <div className='hero'>
      
<div className="card-section">
        

<div className="color-list">
  {Object.entries(colors).map(([name, { bg, text }]) => (
    <button
      key={name}
      style={{ backgroundColor: bg, color: text }}
      className="color-btn"
    >
      {name}
    </button>
  ))}
</div>
          
      
      <div className="card-container">
        <Card img={product}
              ttl='Product-1'
              des='Mauris vitae semper est. 
            Orci varius natoque penatibus
             et magnis dis parturient montes, nascetur ridiculus mus'
             price='Rs.1600'
        />
        <Card img={product2}
              ttl='Product-2'
              des='Mauris vitae semper est. 
            Orci varius natoque penatibus
             et magnis dis parturient montes, nascetur ridiculus mus'
             price='Rs.2600'
        />
        <Card img={product3}
              ttl='Product-3'
              des='Mauris vitae semper est. 
            Orci varius natoque penatibus
             et magnis dis parturient montes, nascetur ridiculus mus'
             price='Rs.3700'
        />
        <Card img={product4}
              ttl='Product-4'
              des='Mauris vitae semper est. 
            Orci varius natoque penatibus
             et magnis dis parturient montes, nascetur ridiculus mus'
             price='Rs.3300'
        />
        <Card img={product5}
              ttl='Product-5'
              des='Mauris vitae semper est. 
            Orci varius natoque penatibus
             et magnis dis parturient montes, nascetur ridiculus mus'
             price='Rs.2900'
        />

      </div>
      
      </div>
      
    </div>
    
  )
}
export default Hero