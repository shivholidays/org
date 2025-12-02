// src/components/Layout.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ title = "Shiv Holidays", children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
        document.title = title;

        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: "ease-out-cubic",
        });

        const handleScroll = () => {
            setNavbarScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [title]);

    // Disable scroll when menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    return (
        <>
            {/* MOBILE OVERLAY */}
            <div
                className={`menu-overlay fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setMobileOpen(false)}
            ></div>

            {/* NAVBAR */}
            <nav
                className={`fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300 ${navbarScrolled ? "bg-white/95" : "bg-white/30"
                    }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">

                        {/* LOGO */}
                        <a href={`${import.meta.env.BASE_URL}`} className="flex items-center z-50">
                            <img
                                src={`${import.meta.env.BASE_URL}images/SHIV HOLIDAYS LOGO.png`}
                                alt="Shiv Holidays Logo"
                                className="h-10 md:h-12 object-contain"
                            />
                        </a>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href={`${import.meta.env.BASE_URL}`}>
                                <span className="cursor-pointer">Home</span>
                            </a>
                            <NavLink to="/tours" label="Tours" />
                            <NavLink to="/aboutUs" label="About Us" />
                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                            className={`hamburger md:hidden z-50 p-2 ${mobileOpen ? "active" : ""}`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <HamburgerIcon active={mobileOpen} />
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    <div
                        className={`md:hidden bg-white rounded-lg shadow-xl mt-4 overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="px-6 py-4 space-y-1">
                            <a href={`${import.meta.env.BASE_URL}`}>
                                <MobileLink
                                    label="🏠 Home"
                                    noRouter
                                    close={() => setMobileOpen(false)}
                                />
                            </a>
                            <MobileLink to="/tours" label="✈️ Tours" close={() => setMobileOpen(false)} />
                            <MobileLink to="/aboutUs" label="ℹ️ About Us" close={() => setMobileOpen(false)} />

                            <div className="border-t pt-3 mt-3">
                                <MobileLink to="/refundPolicy" label="Refund Policy" small close={() => setMobileOpen(false)} />
                                <MobileLink to="/termsAndConditions" label="Terms & Conditions" small close={() => setMobileOpen(false)} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MAIN CONTENT - Added pt-20 to account for fixed navbar */}
            <main className="relative pt-20">
                {children}
            </main>

            {/* FOOTER */}
            <Footer />
        </>
    );
}

/* ------------------------- SMALL COMPONENTS ------------------------- */
function NavLink({ to, label }) {
    return (
        <Link
            to={to}
            className="text-gray-800 hover:text-brand font-medium transition duration-300"
        >
            {label}
        </Link>
    );
}

function MobileLink({ to, label, close, noRouter }) {

    const handleClick = () => {
        if (close) close();
    };

    // When noRouter is true → render a <span> (NOT a <Link> / <a>)
    if (noRouter) {
        return (
            <span
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-300 cursor-pointer"
                onClick={handleClick}
            >
                {label}
            </span>
        );
    }

    // Normal SPA navigation
    return (
        <Link
            to={to}
            onClick={handleClick}
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-300"
        >
            {label}
        </Link>
    );
}

function HamburgerIcon({ active }) {
    return (
        <div className="flex flex-col justify-center">
            <span
                className={`block w-6 h-[3px] bg-gray-800 transition-all duration-300 mb-1 rounded ${active ? "rotate-45 translate-y-2" : ""
                    }`}
            />
            <span
                className={`block w-6 h-[3px] bg-gray-800 transition-all duration-300 mb-1 rounded ${active ? "opacity-0" : ""
                    }`}
            />
            <span
                className={`block w-6 h-[3px] bg-gray-800 transition-all duration-300 rounded ${active ? "-rotate-45 -translate-y-2" : ""
                    }`}
            />
        </div>
    );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* ABOUT */}
                <div data-aos="fade-up">
                    <a href= {`${import.meta.env.BASE_URL}`}>
                        <img
                            src={`${import.meta.env.BASE_URL}images/SHIV HOLIDAYS LOGO.png`}
                            className="h-12 mb-4"
                            alt=""
                        />
                    </a>
                    <p className="text-gray-300">
                        Discover amazing destinations and create unforgettable memories with us.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-3 list-none">
    <li className="flex items-center gap-2 before:content-['->'] before:text-brand">
        <FooterLink label="Home" to={import.meta.env.BASE_URL} forceExternal />
    </li>
    <li className="flex items-center gap-2 before:content-['->'] before:text-brand">
        <FooterLink to="/tours" label="Tours" />
    </li>
    <li className="flex items-center gap-2 before:content-['->'] before:text-brand">
        <FooterLink to="/aboutUs" label="About Us" />
    </li>
    <li className="flex items-center gap-2 before:content-['->'] before:text-brand">
        <FooterLink to="/refundPolicy" label="Refund Policy" />
    </li>
    <li className="flex items-center gap-2 before:content-['->'] before:text-brand">
        <FooterLink to="/termsAndConditions" label="Terms & Conditions" />
    </li>
</ul>

                </div>

                {/* CONTACT */}
                <ul class="space-y-4">
                    <li class="flex items-start text-gray-300">
                        <svg class="w-6 h-6 mr-3 text-brand flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>shivholidays@yahoo.com</span>
                    </li>
                    <li class="flex items-start text-gray-300">
                        <svg class="w-6 h-6 mr-3 text-brand flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                            <div>+91 9820112574</div>
                            <div>022 24035315</div>
                            <div>022 24035695</div>
                        </div>
                    </li>
                    <li class="flex items-start text-gray-300">
                        <svg class="w-6 h-6 mr-3 text-brand flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>A/12, Om Shivsai CHS, Near Fish market, Omkar Esquire, Sion East, Mumbai, Maharashtra 400022</span>
                    </li>
                </ul>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                © {new Date().getFullYear()} Shiv Holidays. All rights reserved.
            </div>
        </footer>
    );
}

function FooterLink({ to, label, forceExternal }) {
  return (
    <li>
      {forceExternal ? (
        <a href={to} className="text-gray-300 hover:text-white transition duration-300">
          {label}
        </a>
      ) : (
        <Link to={to} className="text-gray-300 hover:text-white transition duration-300">
          {label}
        </Link>
      )}
    </li>
  );
}
