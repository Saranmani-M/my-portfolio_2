export const PROFILE = {
  name: "Saranmani M",
  shortName: "SARANMANI",
  role: "Cloud · Storage · Cybersecurity",
  email: "m.saranmani.1@gmail.com",
  phone: "+91 72996 63327",
  location: "Chennai, India",
  photoUrl:
    "https://customer-assets.emergentagent.com/job_saranmani-portfolio/artifacts/uiidkdb9_ChatGPT%20Image%20Jun%207%2C%202026%2C%2006_04_26%20PM%20%281%29%20%281%29.png",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_saranmani-portfolio/artifacts/le5z4x2i_Saranmani_Resume.pdf",
  headline:
    "Building Secure Cloud Infrastructure with Python, AWS & Modern Security Practices.",
  description:
    "Information Technology student passionate about cloud computing, cybersecurity, storage technologies, and Python development.",
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/saranmani-m",
  github: "https://github.com/Saranmani-M",
  instagram: "https://www.instagram.com/m.sxrxn/",
  twitter: "https://x.com/Saran0048597646",
  leetcode: "https://leetcode.com/u/M-SARANMANI/",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "articles", label: "Articles" },
  { id: "profiles", label: "Coding Profiles" },
  { id: "contact", label: "Contact" },
];

export const SKILL_GROUPS = [
  {
    title: "Cloud Computing",
    index: "01",
    items: ["AWS", "EC2", "S3", "IAM"],
  },
  {
    title: "Cybersecurity",
    index: "02",
    items: ["Linux", "Networking", "Security Fundamentals"],
  },
  {
    title: "Programming",
    index: "03",
    items: ["Python"],
  },
  {
    title: "Infrastructure & Storage",
    index: "04",
    items: ["SAN", "NAS", "RAID", "Backup & Recovery"],
  },
  {
    title: "Tools",
    index: "05",
    items: ["Git", "GitHub", "VS Code", "PuTTY", "WinSCP", "PyCharm"],
  },
];

export const FEATURED_PROJECT = {
  title: "Secure Cloud Storage System",
  subtitle: "Using Homomorphic Encryption",
  year: "2025",
  role: "Designer · Engineer",
  cover:
    "https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  problem:
    "Organisations storing sensitive data in the cloud face a constant tension between accessibility and confidentiality. Conventional encryption protects data at rest, but the moment processing is required the information must be decrypted — exposing it to the cloud provider and any compromise in transit.",
  solution:
    "A privacy-preserving multi-tenant storage layer where computation happens directly on encrypted data. Files are encrypted client-side using homomorphic schemes, allowing arithmetic and search operations on ciphertext without ever revealing the underlying plaintext to the server.",
  architecture: [
    "Client SDK in Python — key generation, encryption, lattice-based operations",
    "Object storage layer — encrypted blobs with metadata isolation per tenant",
    "Compute proxy — performs additions and multiplications on ciphertexts",
    "Audit trail — append-only log of access and operations",
  ],
  technologies: ["Python", "Homomorphic Encryption", "Cloud Storage", "Linux"],
  outcome:
    "Awarded 2nd Prize at CYBERNIX '25 Project Expo at Vel Tech. Demonstrated end-to-end encrypted analytics on a 50MB simulated dataset with no plaintext exposure on the server.",
};

export const COMING_PROJECTS = [
  {
    title: "AWS Automated Backup Engine",
    discipline: "Cloud · Storage",
    year: "Soon",
  },
  {
    title: "Linux Hardening Toolkit",
    discipline: "Security · Open Source",
    year: "Soon",
  },
  {
    title: "Python SAN Volume Visualiser",
    discipline: "Infrastructure",
    year: "Soon",
  },
];

export const ARTICLES = [
  {
    title: "Getting Started with AWS EC2",
    category: "Cloud",
    read: "6 min read",
    excerpt:
      "A grounded walk-through of launching, configuring and securing your first EC2 instance — without the marketing fog.",
    date: "2025",
  },
  {
    title: "Linux Security Hardening Basics",
    category: "Security",
    read: "8 min read",
    excerpt:
      "The unglamorous habits — users, SSH, firewalls, journaling — that quietly keep a Linux box out of trouble.",
    date: "2025",
  },
  {
    title: "Python for Cloud Automation",
    category: "Programming",
    read: "7 min read",
    excerpt:
      "From boto3 to small, deliberate scripts: how Python becomes the connective tissue of a calm cloud setup.",
    date: "2025",
  },
  {
    title: "Understanding Homomorphic Encryption",
    category: "Cryptography",
    read: "10 min read",
    excerpt:
      "What it really means to compute on encrypted data — explained without the equations, with the intuition kept intact.",
    date: "2025",
  },
];

export const PROFILES = [
  {
    name: "GitHub",
    handle: "@Saranmani-M",
    url: "https://github.com/Saranmani-M",
    line: "Open source experiments, cloud scripts, security notes.",
  },
  {
    name: "LeetCode",
    handle: "@M-SARANMANI",
    url: "https://leetcode.com/u/M-SARANMANI/",
    line: "Algorithmic practice — building muscle memory in Python.",
  },
];
