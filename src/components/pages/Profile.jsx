import { BsFilePost, BsFillPeopleFill } from "react-icons/bs";
import { FaRegHeart, FaUser, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PostCard from "../PostCards";
export default function Profile() {
    const posts = [
        {
            id: 1,
            type: "Project",
            user: { name: "Jhon Doe", avatar: "Images/user.jpg", username: "@jhone_doe12" },
            title: "AI-Powered Task Manager",
            description:
                "Built a full-stack task management app with AI-powered priority suggestions using React, Node.js, and OpenAI API.",
            link: "https://github.com/alexchen/ai-task-manager",
            linkText: "View on GitHub",
            tags: ["#React", "#NodeJS", "#AI", "#WebDev"],
            likes: 49,
            comments: 18,
            timeAgo: "4 hours ago",
        },
    ]
    const getIconType = (type) => {
        switch (type) {
            case "Project":
                return <FaGithub />
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
            case "Internship":
                return "from-rose-500/20 to-pink-500/20 border-rose-400/30"
            default:
                return "from-gray-500/20 to-slate-500/20 border-gray-400/30"
        }
    }
    return (
        <div className="text-white p-4 ">
            <div className="profile flex justify-center items-center flex-col gap-2">
                <div className="h-25 w-25 rounded-full">
                    <img src="Images/user.jpg" alt="user image" className="h-[100%] w-[100%] object-cover rounded-full" />
                </div>
                <div className="text-center my-4">
                    <h1 className="text-white text-2xl font-bold">Jhon Doe</h1>
                    <h4 className="text-gray-500 font-semibold">@jhone_doe12</h4>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="border-1 border-gray-500 rounded-lg px-10 py-4 flex items-center justify-center flex-col gap-2 ">
                    <h1 className="font-bold text-xl">12</h1>
                    <h4 className="font-semibold text-[.8rem] text-gray-500 flex justify-center items-center gap-2"><BsFilePost className="hover:text-green-500 transition-all duration-300" /> Post</h4>
                </div>
                <div className="border-1 border-gray-500 rounded-lg px-10 py-4 flex items-center justify-center flex-col gap-2">
                    <h1 className="font-bold text-xl">240</h1>
                    <h4 className="font-semibold text-[.8rem] text-gray-500 flex justify-center items-center gap-2"><FaRegHeart className="hover:text-red-500 transition-all duration-300" /> Likes</h4>
                </div>
                <div className="border-1 border-gray-500 rounded-lg px-10 py-4 flex items-center justify-center flex-col gap-2 col-span-2">
                    <h1 className="font-bold text-xl">45</h1>
                    <h4 className="font-semibold text-[.8rem] text-gray-500 flex justify-center items-center gap-2 "><BsFillPeopleFill className="hover:text-blue-800 transition-all duration-300" /> Followers</h4>
                </div>
            </div>
            <div className="my-2 border-1 border-gray-400 rounded-lg p-4">
                <h1 className="text-2xl font-bold flex gap-2 items-center my-4"><FaUser /> About Me</h1>
                <p className="text-sm text-gray-500">I am a passionate Frontend Developer who codes in React.js along with Tailwind CSS. Has worked with multiple projects even some full stack works. Can work with RestAPIs.</p>
            </div>
            <div className="my-10 flex justify-center items-center flex-col">
                <h1 className="font-bold text-3xl">Your Posts</h1>
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
    )
}