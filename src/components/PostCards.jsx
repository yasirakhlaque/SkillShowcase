import { useState } from "react";
import { FaRegComment, FaRegHeart, FaRegBookmark, FaHeart } from "react-icons/fa";

export default function PostCard({ title, description, tags, likes, comments, timeAgo, user, type, getTypeColor, getIconType, linkText }) {
    const { name, username, avatar } = user;
    const [hovered, setHovered] = useState({
        like: false,
        comment: false,
        save: false
    });

    const handleHover = (key, state) => {
        setHovered(prev => ({ ...prev, [key]: state }));
    };


    return (
        <div className="border-1 border-gray-700 rounded-xl text-white my-10 md:w-200 w-[95vw]">
            {/* Headers */}
            <header className="flex items-center md:justify-between justify-center p-4 flex-wrap">
                <div className="flex gap-4 flex-wrap md:justify-start justify-center">
                    <div className="h-13 w-13 rounded-full border-1 border-gray-800">
                        <img src={avatar} alt={name} className="h-[100%] w-[100%] object-cover rounded-full" />
                    </div>
                    <div className="md:text-left text-center">
                        <h2 className="font-semibold hover:text-blue-600 transition-all duration-300 cursor-pointer">{name}</h2>
                        <h4 className="flex items-center gap-4 text-[.8em] text-gray-400">{username} . {timeAgo}</h4>
                    </div>
                </div>
                <div className={`px-3 py-1 rounded-full md:text-sm text-[.6rem] font-semibold border bg-gradient-to-r flex gap-2 items-center hover:scale-110 transition-all duration-200 ${getTypeColor(type)} `}>
                    {getIconType(type)}{type}
                </div>
            </header>
            {/* About Post */}
            <main className="mx-8 my-4">
                {/* About */}
                <div className="flex flex-col gap-2 my-4 md:text-left text-center">
                    <h1 className="font-bold md:text-2xl text-[.9rem]">{title}</h1>
                    <p className="text-gray-300 md:text-[.9em] text-[.6rem]">{description}</p>
                </div>
                <div className="flex md:justify-start justify-center">
                    <button className="md:w-40 md:h-10 rounded-lg bg-blue-950 font-semibold hover:bg-blue-800 transition-all duration-300 cursor-pointer w-fit h-fit md:p-3 p-2 md:text-[1rem] flex justify-center items-center text-[.8rem] ">{linkText}</button>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap my-4 gap-4 md:justify-start justify-center">
                    {tags.map((tag, index) => (
                        <h4 key={index}
                            className="backdrop-blur-md bg-gray-300/5 border border-white/30 text-white rounded-full md:py-2 py-1 md:px-4 px-2 shadow-md hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer md:text-[.9rem] text-[.6rem]">
                            {tag}
                        </h4>
                    ))}
                </div>
                {/* Likes, Comments, Save */}
                <div className="flex md:gap-15 md:justify-start justify-between px-2 flex-wrap ">
                    <h5 className="flex items-center gap-2 transition-all duration-200 cursor-pointer"
                        onMouseEnter={() => handleHover("like", true)}
                        onMouseLeave={() => handleHover("like", false)}>
                        {hovered.like ? (
                            <FaHeart className="text-red-600 shadow-lg shadow-red-400" />
                        ) : (
                            <FaRegHeart className="text-red-600" />
                        )}
                        {likes}
                    </h5>

                    <h5 className="flex items-center gap-2 transition-all duration-200 cursor-pointer"
                        onMouseEnter={() => handleHover("comment", true)}
                        onMouseLeave={() => handleHover("comment", false)}>
                        <FaRegComment className={hovered.comment ? "text-blue-400 scale-110" : ""} />
                        {comments}
                    </h5>

                    <h5 className="flex items-center gap-2 transition-all duration-200 cursor-pointer"
                        onMouseEnter={() => handleHover("save", true)}
                        onMouseLeave={() => handleHover("save", false)}>
                        <FaRegBookmark className={hovered.save ? "text-yellow-400 scale-110" : ""} />
                    </h5>
                </div>

            </main>
        </div>
    )
}