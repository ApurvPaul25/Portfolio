import { useEffect, useRef, useState } from "react";
import "./ScrollJourney.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const journeyData = [
  {
    id: 1,
    title: "The Foundation",
    description:
      "Started my engineering journey by learning software development, programming fundamentals, databases and problem-solving.",

    x: 12,
    y: 8,

    pathProgress: 0.10,

    content: {
      position: "left",
      align: "left",
      offsetX: 560,
      offsetY: 24,
    }
  },

  {
    id: 2,
    title: "Entering Industry",
    description:
      "January–July 2022. Gained practical exposure to software engineering, testing and real-world product development.",

    x: 88,
    y: 18,

    pathProgress: 0.22,

    content: {
      position: "left",
      align: "right",
      offsetX: -40,
      offsetY: 0,
    }
  },

  {
    id: 3,
    title: "Building in Production",
    description:
      "August 2022–November 2024. Worked in fintech product engineering, with experience in API testing, automation and quality engineering.",

    x: 62,
    y: 48,

    pathProgress: 0.40,

    content: {
      position: "left",
      align: "right",
      offsetX: -40,
      offsetY: 0,
    }
  },

  {
    id: 4,
    title: "Expanding My Craft",
    description:
      "Developing projects across React, Node.js, APIs, databases and AI integrations while exploring system architecture and creative web experiences.",

    x: 6,
    y: 68,

    pathProgress: 0.65,

    content: {
      position: "right",
      align: "left",
      offsetX: 40,
      offsetY: 0,
    }
  },

  {
    id: 5,
    title: "Becoming a Product Developer",
    description:
      "Building end-to-end applications, exploring AI-powered systems and combining engineering with thoughtful user experiences.",

    x: 80,
    y: 80,

    pathProgress: 0.90,

    content: {
      position: "left",
      align: "right",
      offsetX: -120,
      offsetY: 0,
    }
  },

];

export function ScrollJourney() {
  const containerRef = useRef(null);
  const textRef = useRef([])

  const [activeIndex, setActiveIndex] = useState(0);

useGSAP(() => {
    const container = containerRef.current
    const path = containerRef.current.querySelector(".visual-area svg path");
    const journeyElements = container.querySelector(".journey-elements")

    if (!path || !journeyElements) return;

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.set(journeyElements, {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.to(journeyElements, {
      visibility: "visible",
      opacity: 1,

      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,

        onUpdate: (self) => {
          const progress = self.progress
          let currentIndex = 0
          journeyData.forEach((item, index) => {
            if(progress >= item.pathProgress) {
              currentIndex = index
            }
          })
          setActiveIndex(currentIndex)
        }

      },
    });
  },
  {
    scope: containerRef,
  }
);

useGSAP(
  () => {
    const textElement = textRef.current[activeIndex];

    if (!textElement) return;

    const text = journeyData[activeIndex].description;

    textElement.textContent = "";

    const typingObject = { characters: 0 };

    const tween = gsap.to(typingObject, {
      characters: text.length,
      duration: 2,
      ease: "none",
      snap: { characters: 1 },

      onUpdate: () => {
        if (!textElement.isConnected) return;

        textElement.textContent = text.slice(
          0,
          Math.floor(typingObject.characters)
        );
      },
    });

    return () => tween.kill();
  },
  {
    dependencies: [activeIndex],
    scope: containerRef,
    revertOnUpdate: true,
  }
);
useEffect(() => {
  const refresh = () => ScrollTrigger.refresh();
  const frameId = requestAnimationFrame(refresh);
  window.addEventListener("load", refresh);
  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("load", refresh);
  };
}, []);

  return (
    <section className="scroll-journey" ref={containerRef}>
      <div className="journey-wrapper">
        <div className="journey-heading">
          <h1>My Journey</h1>
        </div>
            <div className="visual-area">
              <svg width="1940" 
                  height="1440" 
                  viewBox="0 0 1940 1440" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  preserveAspectRatio="none"
              >
                <path d="    M125.966 20
                            C113.996 400
                            1966.68 -100
                            1874.27 500
                            C1785.1 1250
                            91.6478 100
                            60.3879 900
                            C28.8916 1650
                            1908.36 700
                            1774.39 1420" stroke="#63A350" stroke-width="120" stroke-linecap="round" />
              </svg>

          <div className="journey-elements">
          {journeyData.map((item, index) => (
            <div
              key={item.id}
              className={`journey-node ${
                index === activeIndex ? "active" : ""
              }`}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <div className="node-circle">
                <span>{index + 1}</span>
              </div>
              {index <= activeIndex && (
                <div
                  className={`node-content ${item.content.position} ${
                    index === activeIndex ? "active-content" : "previous-content"
                  }`}
                  style={{
                    "--offset-x": `${item.content.offsetX}px`,
                    "--offset-y": `${item.content.offsetY}px`,
                    "--text-align": item.content.align,
                  }}
                >
                  <div className="journey-title">
                    {item.title}
                  </div>
                  <div className="desc">
                    <p ref={(el) => (textRef.current[index] = el)}>
                      {index !== activeIndex ? item.description : ""}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
          </div>
      </div>
      </div>
    </section>
  );
}