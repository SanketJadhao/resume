export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  descriptionPoints: string[];
}

export const experiences: Experience[] = [
  {
    company: "Univirture Inc.",
    location: "USA",
    role: "Software Engineer",
    period: "Jul 2025 - Present",
    descriptionPoints: [
      "Architected and built the full Skedaddle carpooling mobile application from scratch using Flutter/Dart across 10+ screens (onboarding, auth, ride creation, booking, route preview) for Android and iOS.",
      "Designed real-time backend with Supabase including relational schema, Row Level Security policies, full CRUD operations, and Supabase Auth with email verification.",
      "Integrated Google Maps SDK, Directions API (polyline decoding), and Places Autocomplete API; implemented fuzzy city-based ride matching via geographic address parsing.",
      "Built real-time seat-request notification system with badge indicators; delivered full ride lifecycle management covering creation, booking, accept/decline, completion, and history.",
      "Researched intelligent matching systems including geohashing, LangChain-based LLM support automation, and AI-driven route proximity matching for future implementation.",
    ],
  },
  {
    company: "Snapper Future Tech",
    location: "Pune, India",
    role: "Software Intern (Capstone Project)",
    period: "Jan 2023 - Jun 2023",
    descriptionPoints: [
      "Worked on a web-based marketplace with Blockchain integration, focusing on secure transaction management and decentralized applications.",
      "Responsible for integrating the marketplace with MetaMask using Web3.js, enabling seamless user interaction with blockchain wallets.",
      "Gained experience with Solidity to develop and deploy smart contracts on Ethereum and Hyperledger frameworks.",
      "Collaborated closely with the development team to troubleshoot and optimize blockchain connectivity and transaction flows, enhancing security and performance.",
    ],
  },
  {
    company: "Tata Motors",
    location: "Pune, India",
    role: "Android Developer Intern",
    period: "Jul 2022 - Dec 2022",
    descriptionPoints: [
      "Developed a native Android application to predict Electric Vehicle (EV) range by integrating real-time ECU data and OpenStreetMap API, improving range estimation accuracy by 10-12%.",
      "Leveraged OpenStreetMap API elevation data to perform complex calculations, enhancing the app's predictive capabilities across diverse geographical terrains for 20+ engineers.",
      "Partnered with a 10+ member cross-functional team (software, mechanical, electrical) to ensure seamless hardware/software integration and iterative development.",
    ],
  },
];
