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
    name: "Computer Programming Lab",
    desc: "Core programming practice from fundamentals to problem solving.",
    points: [
      "C, C++, Java and Python workstations",
      "Structured & object-oriented programming labs",
      "Data structures and algorithm implementation",
      "Competitive programming & contest practice",
      "Project-based software development sessions",
    ],
  },
  {
    icon: "Terminal",
    name: "Operating System Lab",
    desc: "System-level experiments on modern operating systems.",
    points: [
      "Linux/Unix shell and command-line practice",
      "Process scheduling & synchronization experiments",
      "Memory and virtual memory management labs",
      "File system and disk scheduling analysis",
      "Virtualization with VirtualBox & Docker",
    ],
  },
  {
    icon: "Database",
    name: "Database & Data Warehouse Lab",
    desc: "DBMS, data warehousing, and analytics.",
    points: [
      "SQL & PL/SQL query development",
      "ER modelling and schema normalization",
      "MySQL, PostgreSQL and Oracle environments",
      "Data warehousing, ETL and OLAP practice",
      "Analytics and reporting mini-projects",
    ],
  },
  {
    icon: "Cpu",
    name: "Digital & Embedded System Lab",
    desc: "Digital logic design and embedded systems.",
    points: [
      "Logic gates, flip-flops and counter circuits",
      "Combinational & sequential circuit design",
      "Arduino and Raspberry Pi development kits",
      "Sensor, actuator and IoT prototyping",
      "FPGA/VHDL simulation exercises",
    ],
  },
  {
    icon: "Network",
    name: "Network & Hardware Lab",
    desc: "Computer networking and hardware engineering.",
    points: [
      "Structured cabling and crimping practice",
      "Router & switch configuration (CLI)",
      "Subnetting, routing and protocol analysis",
      "Cisco Packet Tracer network simulation",
      "PC assembly, troubleshooting and maintenance",
    ],
  },
  {
    icon: "Wrench",
    name: "Microprocessor & Interfacing Lab",
    desc: "Microprocessor architecture and peripheral interfacing.",
    points: [
      "8085/8086 assembly language programming",
      "Microcontroller (8051, AVR) experiments",
      "ADC/DAC and I/O port interfacing",
      "Stepper motor and display driver circuits",
      "Trainer kits with real-time debugging",
    ],
  },
  {
    icon: "Projector",
    name: "Multimedia Smart Classrooms",
    desc: "Interactive smart boards and multimedia-equipped rooms.",
    points: [
      "Interactive smart boards in every room",
      "High-lumen multimedia projectors",
      "Recorded lecture and presentation support",
      "Campus-wide high-speed Wi-Fi coverage",
      "Seminar and thesis defence facilities",
    ],
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
  { value: 300, suffix: "+", label: "Graduates Produced" },
  { value: 700, suffix: "+", label: "Current Students" },
  { value: 5, suffix: "", label: "Specialized Labs" },
  { value: 30, suffix: "+", label: "Faculty Members" },
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
