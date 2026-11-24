
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HowIBuild.css";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    year: "2022",
    category: "RESEARCH · PROBLEM SOLVING",
    description:
      "Understand the people, the problem, and the outcome worth building.",
    deliverable: "Problem statement & requirements",
    color: "#A8B9D8", // Pastel blue
    fontColor: "#DCE7F8", // Soft icy blue
    visual: ["USER", "PROBLEM", "GOAL"],
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    year: "2023",
    category: "UX · INTERACTION",
    description:
      "Turn requirements into clear user journeys, interfaces, and experiences.",
    deliverable: "User flows & interface concepts",
    color: "#35483F", // Pastel lavender
    fontColor: "#45366F", // Soft lavender white
    visual: ["FLOW", "WIREFRAME", "PROTOTYPE"],
  },
  {
    id: "architect",
    number: "03",
    title: "Architect",
    year: "2024",
    category: "SYSTEMS · API · DATA",
    description:
      "Define how the frontend, services, databases, and integrations work together.",
    deliverable: "System architecture & API contracts",
    color: "#E8A6B4", // Pastel rose
    fontColor: "#FFE0E6", // Soft blush pink
    visual: ["CLIENT", "API", "DATABASE"],
  },
  {
    id: "build",
    number: "04",
    title: "Build",
    year: "2025",
    category: "FRONTEND · BACKEND",
    description:
      "Bring the product to life with reusable interfaces and dependable backend logic.",
    deliverable: "Working product increment",
    color: "#302B3F", // Pastel plum
    fontColor: "#F2DDF0", // Soft pastel mauve
    visual: ["REACT", "SERVICES", "DATA"],
  },
  {
    id: "validate",
    number: "05",
    title: "Validate",
    year: "2026",
    category: "TESTING · QUALITY",
    description:
      "Challenge assumptions, test edge cases, and verify the product behaves as expected.",
    deliverable: "Test results & verified fixes",
    color: "#AAADE0", // Pastel indigo
    fontColor: "#E0E2FF", // Soft periwinkle
    visual: ["UNIT TESTS", "API TESTS", "E2E"],
  },
  {
    id: "ship",
    number: "06",
    title: "Ship & Iterate",
    year: "NOW",
    category: "DEPLOY · LEARN · IMPROVE",
    description:
      "Release the product, observe real-world behavior, and make the next iteration better.",
    deliverable: "Deployment & feedback loop",
    color: "#F2B39D", // Pastel orange
    fontColor: "#FFE3D6", // Soft peach
    visual: ["DEPLOY", "OBSERVE", "IMPROVE"],
  },
];

function StageVisual({ stage }) {
  return (
    <div className={`hib-visual hib-visual--${stage.id}`}>
      <div className="hib-visual-top">
        <span>PRODUCT SYSTEM</span>
        <span>{stage.number} / 06</span>
      </div>

      <div className="hib-visual-body">
        {stage.visual.map((item, index) => (
          <div className="hib-visual-node" key={item}>
            <span className="hib-node-number">
              0{index + 1}
            </span>
            <strong>{item}</strong>
            <span className="hib-node-line" />
          </div>
        ))}
      </div>

      <div className="hib-visual-footer">
        <span>PROCESS / {stage.title.toUpperCase()}</span>
        <span>● LIVE CONCEPT</span>
      </div>
    </div>
  );
}

export default function HowIBuild() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const markers = gsap.utils.toArray(".hib-marker");

      markers.forEach((marker, index) => {
        ScrollTrigger.create({
          trigger: marker,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const activeStage = stages[activeIndex];

  return (
    <section
      className={`hib-scroll hib-theme-${activeStage.id}`}
      aria-label="How I build products"
      style={{ "--hib-color": activeStage.color }}
    >
      <div className="hib-sticky">

        <header className="hib-header">

          <span className="hib-header-label">
            Product . Development . Process
          </span>

          <span className="hib-counter">
            {activeStage.number}
            <span> / 06</span>
          </span>
        </header>

        <div className="hib-main">
          <div className="hib-list">
            <div className="hib-eyebrow">
              HOW I BUILD PRODUCTS
            </div>

            <div className="hib-stage-list">
              {stages.map((stage, index) => {
                const active = index === activeIndex;

                return (
                  <div
                    className={`hib-stage ${
                      active ? "is-active" : ""
                    }`}
                    key={stage.id}
                    aria-current={active ? "step" : undefined}
                  >
                    <div className="hib-stage-title">
                      <span className="hib-stage-arrow">→</span>

                      <span className="hib-stage-name">
                        {stage.title}
                      </span>

                    </div>

                  </div>
                );
              })}
            </div>

            <div className="hib-more">
              <span>THE PROCESS</span>
              <span>IDEA → PRODUCT</span>
            </div>
          </div>

          <aside className="hib-details" aria-live="polite">
            <div className="hib-detail-meta">
              <span>{activeStage.category}</span>
              <span>STAGE {activeStage.number}</span>
            </div>

            <div className="hib-preview" key={activeStage.id}>
              <StageVisual stage={activeStage} />
            </div>

            <div className="hib-description">
              <p>{activeStage.description}</p>

              <div className="hib-deliverable">
                <span>KEY OUTPUT</span>
                <strong>{activeStage.deliverable}</strong>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="hib-markers" aria-hidden="true">
        {stages.map((stage) => (
          <div className="hib-marker" key={stage.id} />
        ))}
      </div>
    </section>
  );
}
