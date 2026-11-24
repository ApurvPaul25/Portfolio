import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HomeMe from './components/homeMe/homeme'
import ContactMe from './components/contactMe/contactme';
import Ref from './rough/Norerender';
import { ScrollJourney } from './components/ScrollJourney/ScrollJourney';
import  HowIBuild  from './components/HowIBuild/HowIBuild'
import { DescCard, cardData } from './components/descCard/DescCard';
import car from "./assets/minecraftnobg2.png"
import ScrollUpFadeEntry from './components/homeMe/ScrollupFadeEntry';



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
      <main>
          <section className="page" id='page-1'>
              {/* <HomeMe /> */}
              <ScrollUpFadeEntry />
          </section>

        <section className="journey-page" id='page-2'>
          <ScrollJourney />
        </section>

        <div className="h-scroll-wrapper" ref={scrollRef}>
          <section className="page" id='page-3'>
            <div className="cards-container" ref={containerRef}>
              <div className="project-title">MY <br /> EXPLORATIONS</div>
              {cardData.map((card) => (
                <DescCard
                  key={card.id}
                  card={card}
                />
              ))}
            </div>
          </section>
        </div>

        <section className="page" id='page-4'>
          <HowIBuild />
        </section>
        
        <section className="page" id='page-5'>
          <h1><ContactMe /></h1>
        </section>
      </main>
      <footer>
        <div className="footnote">
            <img src={car} alt="car" />
        </div>
      </footer>
    </div>
  )
}

export default App
