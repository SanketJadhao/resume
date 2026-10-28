export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  descriptionPoints: string[];
}

export const experiences: Experience[] = [
  {
    company: "Zenith Tech Solutions",
    location: "Gainesville, FL (Remote)",
    role: "Software Developer",
    period: "Jul 2026 - Present",
    descriptionPoints: [
      "Building reusable React component libraries with TypeScript and integrating Redux Toolkit, enabling consistent state management across frontend workflows and reducing duplicate code.",
      "Consuming and integrating RESTful APIs with async data handling using React Query, ensuring performant and reliable data fetching.",
      "Writing unit and integration tests with Jest and React Testing Library within CI/CD pipelines on GitHub Actions, improving code quality and reducing regression bugs.",
      "Translating Figma designs into pixel accurate, accessible, and responsive UI components, delivering consistent user experiences with minimal oversight.",
      "Leveraging Claude and Cursor for AI assisted development including code generation, debugging, refactoring, and test scaffolding to accelerate delivery.",
    ],
  },
  {
    company: "Univirture Inc.",
    location: "Gainesville, FL",
    role: "Software Engineer",
    period: "Jul 2025 - Jul 2026",
    descriptionPoints: [
      "Architected and launched Skedaddle, a full carpooling mobile app for Android and iOS using Flutter/Dart, delivering 10+ screens end to end including onboarding, ride creation, booking, and route preview.",
      "Designed a real-time Supabase backend with relational schema, Row Level Security, and email-verified authentication, supporting full CRUD operations across the ride lifecycle.",
      "Integrated Google Maps SDK, Directions API, and Places Autocomplete to enable live route rendering and fuzzy geographic ride matching, reducing manual location input friction.",
    ],
  },
  {
    company: "Tata Motors",
    location: "Pune, Maharashtra, India",
    role: "Android Developer Intern",
    period: "Jul 2022 - Dec 2022",
    descriptionPoints: [
      "Built a native Android app integrating live ECU telemetry and OpenStreetMap API to predict EV range in real time, improving estimation accuracy by 10-12% across varied terrains.",
      "Applied OpenStreetMap elevation data to model energy consumption across 20+ geographical test routes, enhancing predictive reliability for a team of 20+ engineers.",
      "Collaborated with a 10+ member cross-functional team across software, mechanical, and electrical disciplines to ship hardware-integrated software on schedule.",
    ],
  },
];
