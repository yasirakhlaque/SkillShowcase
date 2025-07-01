export const posts = [
  {
    id: 1,
    type: "Project",
    user: { name: "Alex Chen", avatar: "/placeholder.svg?height=40&width=40", username: "@alexchen" },
    title: "AI-Powered Task Manager",
    description:
      "Built a full-stack task management app with AI-powered priority suggestions using React, Node.js, and OpenAI API.",
    link: "https://github.com/alexchen/ai-task-manager",
    linkText: "View on GitHub",
    tags: ["#React", "#NodeJS", "#AI", "#WebDev"],
    likes: 42,
    comments: 8,
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    type: "Certification",
    user: { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40", username: "@sarahj" },
    title: "AWS Solutions Architect Professional",
    description:
      "Successfully completed the AWS Solutions Architect Professional certification. Ready to design scalable cloud solutions!",
    link: "#",
    linkText: "View Certificate",
    tags: ["#AWS", "#Cloud", "#Architecture"],
    likes: 67,
    comments: 12,
    timeAgo: "4 hours ago",
  },
  {
    id: 3,
    type: "Coding Rank",
    user: { name: "Mike Rodriguez", avatar: "/placeholder.svg?height=40&width=40", username: "@mikerod" },
    title: "LeetCode Knight (1800+ Rating)",
    description:
      "Achieved Knight rank on LeetCode! Solved 500+ problems and improved my algorithmic thinking significantly.",
    link: "https://leetcode.com/mikerod",
    linkText: "View Profile",
    tags: ["#LeetCode", "#Algorithms", "#DSA", "#ProblemSolving"],
    likes: 89,
    comments: 15,
    timeAgo: "6 hours ago",
  },
  {
    id: 4,
    type: "Research Paper",
    user: { name: "Dr. Emily Watson", avatar: "/placeholder.svg?height=40&width=40", username: "@emilyw" },
    title: "Machine Learning in Healthcare Diagnostics",
    description:
      "Published research on improving diagnostic accuracy using ensemble ML models. Achieved 94% accuracy in early disease detection.",
    link: "#",
    linkText: "Read Paper",
    tags: ["#MachineLearning", "#Healthcare", "#Research", "#AI"],
    likes: 156,
    comments: 23,
    timeAgo: "1 day ago",
  },
  {
    id: 5,
    type: "Internship",
    user: { name: "David Kim", avatar: "/placeholder.svg?height=40&width=40", username: "@davidk" },
    title: "Software Engineering Intern at Google",
    description:
      "Excited to announce my summer internship at Google! Will be working on Chrome's performance optimization team.",
    link: "#",
    linkText: "View Offer Letter",
    tags: ["#Google", "#Internship", "#SoftwareEngineering", "#Chrome"],
    likes: 234,
    comments: 45,
    timeAgo: "2 days ago",
  },
]

export const leaderboard = [
  { name: "Alex Chen", points: 2840, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Sarah Johnson", points: 2650, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Mike Rodriguez", points: 2420, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Emily Watson", points: 2180, avatar: "/placeholder.svg?height=32&width=32" },
  { name: "David Kim", points: 1950, avatar: "/placeholder.svg?height=32&width=32" },
]

export const topProjects = [
  "AI-Powered Task Manager",
  "E-commerce Platform",
  "Weather Prediction Model",
  "Social Media Dashboard",
  "Blockchain Voting System",
]

export const topSkills = [
  "#React",
  "#Python",
  "#JavaScript",
  "#AI",
  "#WebDev",
  "#MachineLearning",
  "#AWS",
  "#NodeJS",
  "#DataScience",
  "#DevOps",
]