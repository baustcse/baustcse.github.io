export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "program", label: "Program" },
  { id: "facilities", label: "Facilities" },
  { id: "achievements", label: "Achievements" },
  { id: "tech", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export const LABS = [
  {
    icon: "Laptop",
    name: "Computer Programming & OS Lab",
    desc: "Core programming and operating system concepts.",
  },
  {
    icon: "Database",
    name: "Database & Data Warehouse Lab",
    desc: "DBMS, data warehousing, and analytics.",
  },
  {
    icon: "Cpu",
    name: "Digital & Embedded System Lab",
    desc: "Digital logic design and embedded systems.",
  },
  {
    icon: "Network",
    name: "Network & Hardware Lab",
    desc: "Computer networking and hardware engineering.",
  },
  {
    icon: "Wrench",
    name: "Microprocessor & Interfacing Lab",
    desc: "Microprocessor architecture and peripheral interfacing.",
  },
  {
    icon: "Projector",
    name: "Multimedia Smart Classrooms",
    desc: "Interactive smart boards and multimedia-equipped rooms.",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "Robotics Championship",
    event: "GPH Ispat “Esho Robot Banai” (TV)",
    year: "—",
    icon: "Bot",
  },
  {
    title: "National Champion",
    event: "bdapps National Hackathon — Team HAKO",
    year: "2022",
    icon: "Trophy",
  },
  {
    title: "Championship",
    event: "Innovative Idea Contest — a2i Program",
    year: "2022",
    icon: "Lightbulb",
  },
  {
    title: "Championship",
    event: "Digital Innovation Challenge for Women",
    year: "2023",
    icon: "Sparkles",
  },
] as const;

export const TECH = [
  {
    name: "Electron",
    category: "Desktop",
    desc: "Cross-platform desktop apps with web technologies.",
  },
  { name: "JavaFX", category: "Desktop", desc: "Rich desktop applications on the JVM." },
  {
    name: "Flutter",
    category: "Mobile",
    desc: "Cross-platform mobile apps from a single codebase.",
  },
  { name: "React", category: "Web", desc: "Component-based UIs for modern web applications." },
  { name: "Angular", category: "Web", desc: "Enterprise-grade web application framework." },
] as const;

export const STATS = [
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Graduates Produced" },
  { value: 4, suffix: "+", label: "National Championships" },
  { value: 5, suffix: "", label: "Specialized Labs" },
  { value: 15, suffix: "+", label: "Faculty Members" },
  { value: 1, suffix: "", label: "Washington Accord Recognition" },
] as const;

export const NEWS = [
  {
    tag: "Alumni Spotlight",
    title: "3rd-batch graduate ships production systems as a Full-Stack Engineer",
    date: "Recent",
    excerpt:
      "From lab assignments to React, Next.js, Node.js and TypeScript in production — a look at how coursework translates into industry work.",
  },
  {
    tag: "Seminar",
    title: "Explainability in Machine Learning",
    date: "Department Seminar",
    excerpt:
      "A faculty-led session on interpretable models, feature attribution and responsible AI practice for final-year research students.",
  },
  {
    tag: "Event",
    title: "National day observances at Saidpur Cantonment",
    date: "Annual",
    excerpt:
      "The department joins university-wide observances, blending academic celebration with the discipline of cantonment life.",
  },
] as const;

export const CONTACT = {
  address: "Saidpur Cantonment, Saidpur, Bangladesh",
  admission: "+88-01769675588",
  general: "01769-675560",
  email: "hdcse@baust.edu.bd",
  facebook: "https://www.facebook.com/cse.baust.official/",
  portfolio: "https://baustcse.github.io",
  official: "https://baust.edu.bd/cse",
};
