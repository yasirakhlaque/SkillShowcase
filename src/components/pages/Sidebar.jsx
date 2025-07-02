import { BsFilePost, BsFillPeopleFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { leaderboard, topProjects, topSkills } from "../../data/data";
import LeaderBoradCard from "../LeaderboradCard";

export default function Sidebar() {
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
            <div className="my-10">
                <h1 className="text-3xl font-bold">Leaderboard</h1>
                {leaderboard.map((lead, index) => (
                    <LeaderBoradCard key={index} image={lead.avatar} name={lead.name} points={lead.points} />
                ))}
            </div>
            <div className="my-10">
                <h1 className="text-3xl font-bold">Projects</h1>
                <ul>
                    {topProjects.map((name, index) => (
                        <li key={index} className="font-semibold text-[.8rem] my-3 hover:text-blue-500 transition-all duration-300 cursor-pointer">{name}</li>
                    ))}
                </ul>
            </div>
            <div className="my-10">
                <h1 className="text-3xl font-bold my-6">Top Skills</h1>
                <ul className="flex flex-wrap gap-4 ">
                    {topSkills.map((skill, index) => (
                        <li key={index} className="bg-gray-600 rounded-full px-4 py-2 hover:bg-gray-800 transition-all duration-300 cursor-pointer">{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}