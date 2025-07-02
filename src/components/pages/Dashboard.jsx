import { FaExternalLinkAlt, FaGithub, FaTrophy, FaUser } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { FiTrendingUp } from "react-icons/fi";
import { posts } from "../../data/data";
import PostCard from "../PostCards";

export default function Dashboard() {
    const getIconType = (type) => {
        switch (type) {
            case "Project":
                return <FaGithub />
            case "Certification":
                return <FaTrophy />
            case "Coding Rank":
                return <FiTrendingUp />
            case "Research Paper":
                return <FaExternalLinkAlt />
            case "Internship":
                return <FaUser />
            default:
                return <FaExternalLinkAlt />
        }
    }
    const getTypeColor = (type) => {
        switch (type) {
            case "Project":
                return "from-blue-500/20 to-cyan-500/20 border-blue-400/30"
            case "Certification":
                return "from-emerald-500/20 to-teal-500/20 border-emerald-400/30"
            case "Coding Rank":
                return "from-purple-500/20 to-pink-500/20 border-purple-400/30"
            case "Research Paper":
                return "from-orange-500/20 to-red-500/20 border-orange-400/30"
            case "Internship":
                return "from-rose-500/20 to-pink-500/20 border-rose-400/30"
            default:
                return "from-gray-500/20 to-slate-500/20 border-gray-400/30"
        }
    }
    return (
        <div className="flex md:justify-center items-center md:items-start">
            {/* Main Content */}
            <div className="md:w-[75%] text-white px-16 py-10 w-full">
                <h1 className="text-3xl font-bold">Explore</h1>
                <div className="flex flex-col justify-center items-center">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            {...post}
                            getTypeColor={getTypeColor}
                            getIconType={getIconType}
                            linkText={post.linkText}
                        />
                    ))}
                </div>
            </div>

            {/* Fixed Sidebar */}
            <div className="w-[25%] md:flex hidden">
                {/* className="fixed overflow-auto right-0 top-20 w-[25%] h-full p-4" */}
                <Sidebar />
            </div>
        </div>
    );
}