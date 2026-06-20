export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Florida, Gainesville, FL",
    period: "Aug 2023 - May 2025",
    gpa: "GPA: 3.83/4.00",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "MIT-WPU University, Maharashtra, India",
    period: "Aug 2019 - May 2023",
    gpa: "CGPA: 9.58/10.00",
  },
];

export const researchPaper = {
  title: "Malware Analysis Using Machine Learning Techniques",
  authors: "S. Kinger, B. V. Reddy, S. Jadhao, K. Hambarde, A. Hullur",
  conference:
    "2022 2nd International Conference on Intelligent Technologies (CONIT), Hubli, India, 2022.",
  link: "https://ieeexplore.ieee.org/document/9848045",
};
