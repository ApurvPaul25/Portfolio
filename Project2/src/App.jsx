import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HomeMe from './components/homeMe/homeme'
import ContactMe from './components/contactMe/contactme';

function App() {

  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current || !containerRef.current) return;

      const { top, height } = scrollRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let progress = -top / (height - viewportHeight);
      progress = Math.min(1, Math.max(0, progress));

      const maxMove = containerRef.current.scrollWidth - window.innerWidth;
      containerRef.current.style.transform = `translateX(${-progress * maxMove}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return(
    <div className="wrapper">
      <nav>
        <Navbar />
      </nav>
      <main className='body-wrapper'>
        <section className="page" id='page-1'>
          <h1><HomeMe /></h1>
        </section>

        <section className="page" id='page-2'>
          <h1>Section-Two</h1>
        </section>

        <div className="h-scroll-wrapper" ref={scrollRef}>
          <section className="page" id='page-3'>
            <div className="cards-container" ref={containerRef}>
              <div className="h-card" id='card-1'>Card-1</div>
              <div className="h-card" id='card-2'>Card-2</div>
              <div className="h-card" id='card-3'>Card-3</div>
              <div className="h-card" id='card-4'>Card-4</div>
              <div className="h-card" id='card-5'>Card-5</div>
            </div>
          </section>
        </div>

        <section className="page" id='page-4'>
          <h1>Section-Four</h1>
        </section>
        
        <section className="page" id='page-5'>
          <h1><ContactMe /></h1>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
