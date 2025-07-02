import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SiApostrophe } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [mobileNavigation, setMobileNavigation] = useState(false);
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "Profile", link: "/profile" },
        { name: "Explore", link: "/explore" },
        { name: "Notifications", link: "/notifications" }
    ]
    return (
        <div>
            {/* PC Navogation Bar */}
            <nav className="text-white hidden md:flex justify-between items-center p-4">
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

            {/* Mobile Navigation Bar */}
            <nav className="md:hidden text-white p-4">
                <div className="flex justify-between items-center p-2 text-white border-1 rounded-lg border-gray-700 relative z-20">
                    <button className="text-2xl font-semibold text-white p-2 transition-transform duration-300 ease-in-out hover:scale-110"
                        onClick={() => setMobileNavigation(!mobileNavigation)}>
                        <div className={`flex justify-center gap-4 transition-transform duration-300 ease-in-out ${mobileNavigation ? 'rotate-90' : ''}`}>
                            {mobileNavigation ? <h1 className="text-4xl rotate-45">+</h1> : <h1 className="rotate-90">|||</h1>}
                        </div>
                    </button>
                    <div className="h-10 w-10 rounded-full">
                       <Link to={"/profile"}><img src="Images/user.jpg" alt="user image" className="h-[100%] w-[100%] object-cover rounded-full" /></Link>
                    </div>
                </div>

                {/* Mobile Overlay Menu */}
                <div className={`fixed inset-0 bg-gray-900 z-10 flex justify-center items-center flex-col gap-8 transition-all duration-500 ease-in-out ${mobileNavigation ? 'translate-x-0 opacity-100 visible' : '-translate-x-full opacity-0 invisible'
                    }`}>
                    {/* Navigation Links */}
                    <div className="flex flex-col justify-center items-center gap-8">
                        <ul className="flex justify-center items-center flex-col gap-8 font-semibold text-xl">
                            {navLinks.map((option, index) => (
                                <li
                                    key={index}
                                    className={`transition-all duration-700 ease-out transform ${mobileNavigation
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <Link
                                        to={option.link}
                                        onClick={() => setMobileNavigation(false)}
                                        className="hover:text-blue-400 transition-colors duration-300"
                                    >
                                        <h1>{option.name}</h1>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}