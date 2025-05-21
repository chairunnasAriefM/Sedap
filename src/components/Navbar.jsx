import { useEffect, useState } from 'react';

const sections = ["Home", "About", "Product", "Testimoni"];

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("Home");

    // Handler scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide navbar
            setShowNavbar(currentScrollY < 50 || currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);

            // Cek section aktif
            for (let section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLink = (label, id) => (
        <li>
            <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`block py-2 px-3 font-bold rounded-sm md:bg-transparent md:p-0 ${
                    activeSection === id ? 'text-hijau' : 'text-gray-500 hover:text-hijau'
                }`}
            >
                {label}
            </a>
        </li>
    );

    return (
        <nav
            className={`bg-gray-100 border-gray-100 dark:bg-gray fixed top-0 w-full z-50 transition-transform duration-500 ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="/guest" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="font-poppins text-[32px] sm:text-[40px] text-gray-900">
                        Sedap <b className="text-hijau">.</b>
                    </span>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {navLink("Home", "Home")}
                        {navLink("About", "About")}
                        {navLink("Top Product", "Product")}
                        {navLink("Testimoni", "Testimoni")}
                        <li>
                            <a
                                href="/login"
                                className="block py-2 px-3 font-bold text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-hijau md:p-0"
                            >
                                Login/Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
