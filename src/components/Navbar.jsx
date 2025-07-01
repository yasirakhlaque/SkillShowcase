import { FaSearch } from "react-icons/fa";
import { SiApostrophe } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Navbar() {
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "Profile", link: "/profile" },
        { name: "Explore", link: "/explore" },
        { name: "Notifications", link: "/notifications" }
    ]
    return (
        <nav className="text-white flex justify-between items-center p-4">
            <div className="flex gap-20 font-semibold">
                <h1 className="flex gap-4 justify-center items-center text-2xl font-semibold"><SiApostrophe /> SkillShowCase</h1>
                <ul className="flex gap-10 justify-center items-center">
                    {navLinks.map((option, index) => (
                        <li key={index} className="animated-underline relative cursor-pointer">
                            <Link to={option.link}>
                                {option.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-5">
                <div className="flex justify-center items-center gap-4 border-1 border-gray-400 rounded-lg px-4 py-2">
                    <FaSearch />
                    <input type="search" name="search" placeholder="Search" className="outline-none" />
                </div>
                <div className="h-10 w-10 rounded-full">
                    <img src="Images/user.jpg" alt="user image" className="h-[100%] w-[100%] object-cover rounded-full" />
                </div>
            </div>
        </nav>
    )
}