export interface Screenshot {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  category: string;
  year: string;
  tags: string[];
  descriptionPoints: string[];
  link?: string;
  screenshots?: Screenshot[];
}

export const projects: Project[] = [
  {
    title: "Skedaddle",
    category: "Personal Project",
    year: "2026",
    tags: ["Flutter", "Dart", "Firebase", "Groq (Llama 3.3 70B)", "Google Places API"],
    descriptionPoints: [
      'Built a social tribe-matching app where users form and join interest-based groups ("tribes") and discover real-world events together.',
      "Designed a 10-screen onboarding flow and AI-generated tribe match scoring/context cards using Groq's Llama 3.3 70B.",
      "Integrated Firebase Auth/Firestore for real-time data and the Ticketmaster Discovery API for nearby event recommendations.",
    ],
    screenshots: [
      { src: "/images/skedaddle/splash.webp", alt: "Skedaddle splash screen" },
      { src: "/images/skedaddle/signup.webp", alt: "Create account screen" },
      { src: "/images/skedaddle/login.webp", alt: "Welcome back / login screen" },
      { src: "/images/skedaddle/home.webp", alt: "Home dashboard with quick actions" },
      { src: "/images/skedaddle/discover-tribes.webp", alt: "Discover tribes screen" },
      { src: "/images/skedaddle/tribe-detail.webp", alt: "Tribe detail with AI member context cards" },
      { src: "/images/skedaddle/nearby-events.webp", alt: "Nearby events list" },
      { src: "/images/skedaddle/event-detail.webp", alt: "Event detail modal" },
      { src: "/images/skedaddle/scout-ai.webp", alt: "Scout AI local guide chat" },
      { src: "/images/skedaddle/profile.webp", alt: "Profile screen" },
    ],
  },
  {
    title: "Skedaddle Carpool",
    category: "Personal Project",
    year: "2026",
    tags: ["Flutter", "Dart", "Supabase", "Google Maps API", "go_router"],
    descriptionPoints: [
      "Built a carpooling app for offering and booking rides, with route previews and address autocomplete via Google Maps/Places.",
      "Used Supabase (Postgres + Auth) with Row Level Security policies to protect ride and booking data accessed via a client-exposed anon key.",
      "Implemented ride/booking flows backed by rides and bookings tables with live seat availability.",
    ],
  },
  {
    title: "Research Collaboration Dashboard",
    category: "University Project",
    year: "2025",
    tags: ["Angular", "Golang", "JWT", "RESTful APIs", "HTML/CSS"],
    descriptionPoints: [
      "Architected a responsive Angular front-end for 100+ researchers enabling registration, profile management, and project collaboration features.",
      "Implemented JWT-based auth via Angular HTTP interceptors and session storage; designed a dynamic dashboard displaying 50+ concurrent project listings from a Go backend.",
    ],
  },
  {
    title: "Comparative Law Analysis Using NLP",
    category: "University Project",
    year: "2024",
    tags: ["Python", "BERT", "GPT-2", "TensorFlow", "Scikit-learn"],
    descriptionPoints: [
      "Developed an NLP system (BERT, GPT-2) to compare legal frameworks by analyzing 1,000+ documents, achieving 85% accuracy in identifying similarities/differences.",
      "Scraped and processed 500+ web pages (Justia); identified 3 key areas of legal divergence, contributing to AI research in law.",
    ],
  },
  {
    title: "Agile Taskflow Website",
    category: "Personal Project",
    year: "",
    tags: ["AstroJS", "Tailwind CSS", "Agile Development", "In Progress"],
    descriptionPoints: [
      "Designing an agile task-management web app using AstroJS and Tailwind CSS.",
      "Building a Kanban-style interface with statuses like Not Started, In Progress, Review, Testing, and To Verify.",
      "Enhancing frontend skills while applying agile principles and user-centered design.",
    ],
  },
];
