export const contactInfo = {
  email: "aissatou.germaine.gueye@gmail.com",
  phone: "06 05 98 03 73",
  linkedin: "https://www.linkedin.com/",
};

export const techStack = {
  languages: [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "PHP",
    "C++",
    "C",
    "Julia",
    "Ruby",
    "SQL",
  ],
  frameworks: [
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Django",
    "Spring Boot",
    "PyTorch",
    "scikit-learn",
  ],
  tools: [
    "Git / GitHub",
    "Jenkins",
    "Kafka",
    "ELK",
    "Dynatrace",
    "Docker",
    "Kubernetes",
    "AWS",
    "Jira",
    "Trello",
    "VS Code",
    "IntelliJ",
    "Eclipse",
    "Postman",
  ],
};

export type TechGroupKind = keyof typeof techStack;
