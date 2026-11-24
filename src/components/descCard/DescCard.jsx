import "./DescCard.css"

export const cardData = [
  {
    id: 1,
    title: "COGNISCROLL",
    description:
      "AI-powered content intelligence that connects discovery, orchestration and APIs to turn scattered social content into meaningful insights.",
    bgColor: "#191221",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "AI ENGINEERING",
    technologies: [
      "React",
      "Gemini",
      "Node.js",
      "MCP",
      "Express",
      "Supabase",
      "Prisma",
      "Meta Graph API"
    ]
  },
  {
    id: 2,
    title: "BOOKGLIMPSE",
    description:
      "A glimpse into stories, designed to make discovering books feel simple, visual and engaging.",
    bgColor: "#342342",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "WEB DEVELOPMENT",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "REST APIs"
    ]
  },
  {
    id: 3,
    title: "DIGITAL SELF",
    description:
      "An interactive portfolio that brings together development, creativity and personality through a digital experience.",
    bgColor: "#4F3563",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "CREATIVE DEVELOPMENT",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "GSAP",
      "ScrollTrigger",
      "Tailwind CSS"
    ]
  },
  {
    id: 4,
    title: "BEAGLE",
    description:
      "A frontend experiment focused on exploring visual composition, responsive layouts and the fundamentals of building for the web.",
    bgColor: "#694781",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "FRONTEND DEVELOPMENT",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design"
    ]
  },
  {
    id: 5,
    title: "DRAFTSHIFT",
    description:
      "A Chrome extension that transforms email drafts between formal and informal tones, blending browser experiences with AI-assisted writing.",
    bgColor: "#82599F",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "AI ENGINEERING",
    technologies: [
      "React",
      "JavaScript",
      "Chrome Extensions API",
      "LLM API",
      "HTML",
      "CSS"
    ]
  },
  {
    id: 6,
    title: "PRODUCT EXPLORER",
    description:
      "An interactive dashboard exploring how structured product information can be transformed into clear and useful experiences.",
    bgColor: "#9C6BBC",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "FRONTEND DEVELOPMENT",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "REST APIs"
    ]
  },
  {
    id: 7,
    title: "CATVERSE",
    description:
      "An API-driven exploration of the feline world, built to understand data flow, request handling and scalable backend architecture.",
    bgColor: "#AF82D4",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "FULL STACK DEVELOPMENT",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Axios",
      "REST APIs",
      "TheCatAPI",
      "Wikipedia API",
      "NewsAPI"
    ]
  },
  {
    id: 8,
    title: "COFFEE STORIES",
    description:
      "A visual coffee experience combining responsive design, UI/UX and storytelling to explore the culture behind every cup.",
    bgColor: "#C39AEC",
    repoUrl: "https://github.com/ApurvPaul25?tab=repositories",
    category: "UI/UX & FRONTEND",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "UI/UX Design"
    ]
  }
];

export function DescCard({card}){
    return(
        <div className="i-cards" style={{backgroundColor: card.bgColor}}>
            <div className="card-title">
                {card.title}
            </div>
            <div className="card-desc">
                {card.description}
            </div>
            <a className="project-repo"
                href={card.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${card.title} source on Github`}
            >
              <span>View Source</span>
              <span aria-hidden="true">↗</span>
            </a>
        </div>
    )
}