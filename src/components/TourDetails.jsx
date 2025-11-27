import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useEffect } from "react";

export default function TourDetails({ tour }) {
    const [state, handleSubmit] = useForm("mvgnwaay");
    const formRef = useRef();

    useEffect(() => {
        if (state.succeeded && formRef.current) {
            formRef.current.reset(); // clear fields
        }
    }, [state.succeeded]);

    if (!tour) return null;

    const description = (tour.description || "").trim();

    const isPlainTextDescription =
        description.length > 0 && !description.startsWith("{");

    let structured = null;
    if (description.startsWith("{")) {
        try {
            structured = JSON.parse(description);
        } catch {
            structured = null;
        }
    }

    const sightseeing = Array.isArray(tour.sightseeingPlaces)
        ? tour.sightseeingPlaces
        : [];

    const placesWithImages = sightseeing.filter(
        (s) => s.image_url && s.image_url.trim() !== ""
    );
    const placesWithoutImages = sightseeing.filter(
        (s) => !s.image_url || s.image_url.trim() === ""
    );

    const isInternational = tour.isIntl === "true" || tour.isIntl === true;

    return (
        <Layout title={`${tour.package_name} - Shiv Holidays`}>

            {/* HERO BANNER */}
            <div
                className="relative h-[60vh] md:h-[100vh] flex items-center justify-center"
                data-aos="fade"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={`${import.meta.env.BASE_URL}${tour.package_image_url}`}
                        alt={tour.package_name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        {tour.package_name}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            ⏱️ {tour.duration}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            💰 ₹{Number(tour.cost_per_person).toLocaleString("en-IN")} per person
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            {isInternational ? "🌍 International" : "🇮🇳 Domestic"}
                        </span>
                    </div>
                </div>
            </div>

            {/* SIGHTSEEING PLACES */}
            {sightseeing.length > 0 && (
                <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12" data-aos="fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Places You'll Visit
                            </h2>
                            <p className="text-gray-600">
                                Discover the amazing sights included in this tour
                            </p>
                        </div>

                        {/* WITH IMAGES */}
                        {placesWithImages.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {placesWithImages.map((sight, index) => (
                                    <div
                                        key={sight.id || `${sight.sight_name}-${index}`}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
                                        data-aos="flip-left"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={`${import.meta.env.BASE_URL}${sight.image_url}`}
                                                alt={sight.sight_name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = "none";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {sight.sight_name}
                                            </h3>
                                            <p className="text-gray-600 flex items-center gap-1">
                                                <span className="text-blue-500">📍</span>
                                                {sight.city_name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* WITHOUT IMAGES */}
                        {placesWithoutImages.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {placesWithoutImages.map((sight, index) => (
                                    <div
                                        key={sight.id || `${sight.sight_name}-${index}`}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
                                        data-aos="flip-left"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="p-8 flex flex-col justify-center items-start h-full">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {sight.sight_name}
                                            </h3>
                                            <p className="text-gray-600 flex items-center gap-1">
                                                <span className="text-blue-500">📍</span>
                                                {sight.city_name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ABOUT THIS TOUR */}
            {description && (
                <section className="py-16 bg-gradient-to-br from-white via-sky-50 to-blue-50">
                    <div className="container mx-auto px-6" data-aos="fade-up">
                        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <span>🧭</span> About This Tour
                            </h2>

                            {/* Plain text description (non-JSON) */}
                            {isPlainTextDescription && (
                                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-10 whitespace-pre-line">
                                    {description}
                                </div>
                            )}

                            {/* Structured JSON description */}
                            {structured && typeof structured === "object" && !Array.isArray(structured) && (
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    {Object.entries(structured).map(([key, items]) => {
                                        const { bg, border, titleColor, icon } =
                                            getStructuredSectionStyles(key);

                                        const title = key
                                            .split("_")
                                            .join(" ")
                                            .replace(/\b\w/g, (c) => c.toUpperCase());

                                        return (
                                            <div
                                                key={key}
                                                className={`${bg} border ${border} rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300`}
                                            >
                                                <h3
                                                    className={`text-xl font-semibold flex items-center gap-2 mb-4 ${titleColor}`}
                                                >
                                                    <span>{icon}</span> {title}
                                                </h3>

                                                {Array.isArray(items) ? (
                                                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                                        {items.map((item, idx) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {items}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* TERMS BANNER */}
            <section className="bg-[#ff4c4c] text-white text-center py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl leading-relaxed">
                        Please read the <b>Terms and Conditions</b> for all the tours listed{" "}
                        <Link
                            to="/termsAndConditions"
                            className="underline font-semibold hover:text-gray-100"
                        >
                            here
                        </Link>
                        .
                    </p>
                </div>
            </section>

            {/* TOUR DETAILS + CONTACT FORM */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12" data-aos="fade-up" id="contactForm">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Have Questions about this Trip? Just message us and we will get back to
                                you
                            </h2>

                            {state.succeeded && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                                    <p className="font-semibold">Your message has been sent successfully!</p>
                                </div>
                            )}

                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                data-spa="true"
                                className="space-y-6"
                            >

                                {/* FULL NAME */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                {/* PHONE */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    />
                                </div>

                                {/* SUBJECT */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    />
                                </div>

                                {/* MESSAGE */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    ></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full bg-brand hover:bg-brand/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
                                >
                                    {state.submitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>

                        {/* CONTACT INFO BOX */}
                        <div data-aos="fade-left">
                            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-8 h-full">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>

                                <div className="space-y-6">
                                    <ContactItem
                                        title="Phone"
                                        subtitle="+91 9820112574 / 022 24035315 / 022 24035695"
                                        note="Mon-Fri: 9AM - 6PM"
                                        iconPath="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 
                                            4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 
                                            005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 
                                            1.498A1 1 0 0120 17.72V19a2 2 0 01-2 2h-1C9.716 
                                            21 3 14.284 3 6V5z"
                                    />

                                    <ContactItem
                                        title="Email"
                                        subtitle="shivholidays@yahoo.com"
                                        note="We'll respond within 24 hours"
                                        iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 
                                            8M5 19h14a2 2 0 002-2V7a2 2 0 
                                            00-2-2H5a2 2 0 00-2 2v10a2 2 
                                            0 002 2z"
                                    />

                                    <ContactItem
                                        title="Office"
                                        subtitle="A/12, Om Shivsai CHS, Near Fish market, Omkar Esquire, Sion East"
                                        note="Mumbai, Maharashtra 400022"
                                        iconPath="M17.657 16.657L13.414 20.9a1.998 
                                            1.998 0 01-2.827 0l-4.244-4.243a8 8 
                                            0 1111.314 0z
                                            M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </div>

                                <div className="mt-8 pt-8 border-t border-sky-300">
                                    <h3 className="font-bold text-gray-800 text-lg mb-4">
                                        Follow Us
                                    </h3>
                                    <div className="flex space-x-4">
                                        <SocialIcon href="#" type="facebook" />
                                        <SocialIcon href="#" type="twitter" />
                                        <SocialIcon
                                            href="https://www.instagram.com/go.shivholidays/"
                                            type="instagram"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* READY TO EXPLORE SECTION */}
            <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
                <div
                    className="container mx-auto px-6 text-center"
                    data-aos="fade-up"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            🗺️ Ready to Explore?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            From pristine beaches to mountain peaks, from ancient temples to modern
                            cities - your next adventure awaits!
                        </p>
                        <Link
                            to="/tours"
                            className="inline-block bg-brand hover:bg-brand/90 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105"
                        >
                            Browse All Tours
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="py-16 bg-gradient-to-r from-[rgb(241,93,48)] to-[rgb(220,80,40)] text-white">
                <div
                    className="container mx-auto px-6 text-center"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in This Tour?
                    </h2>
                    <p className="text-xl mb-8">
                        Contact us to customize your itinerary or get more information
                    </p>
                    <a
                        href="#contactForm"
                        className="inline-block bg-white text-[rgb(241,93,48)] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
                    >
                        Contact Us Now
                    </a>
                </div>
            </section>
        </Layout>
    );
}

/* ---------- Helper components ---------- */

function getStructuredSectionStyles(key) {
    switch (key) {
        case "includes":
            return {
                bg: "bg-green-50",
                border: "border-green-200",
                titleColor: "text-green-700",
                icon: "✅",
            };
        case "excludes":
            return {
                bg: "bg-red-50",
                border: "border-red-200",
                titleColor: "text-red-700",
                icon: "❌",
            };
        case "supplementary_costs":
            return {
                bg: "bg-yellow-50",
                border: "border-yellow-200",
                titleColor: "text-yellow-700",
                icon: "💰",
            };
        case "note":
            return {
                bg: "bg-blue-50",
                border: "border-blue-200",
                titleColor: "text-blue-700",
                icon: "ℹ️",
            };
        default:
            return {
                bg: "bg-gray-50",
                border: "border-gray-200",
                titleColor: "text-gray-700",
                icon: "📄",
            };
    }
}

function FormField({ label, name, type = "text", error, ...rest }) {
    return (
        <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                {...rest}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">
                    {Array.isArray(error) ? error.join(", ") : error}
                </p>
            )}
        </div>
    );
}

function FormTextarea({ label, name, error, ...rest }) {
    return (
        <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                {...rest}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">
                    {Array.isArray(error) ? error.join(", ") : error}
                </p>
            )}
        </div>
    );
}

function ContactItem({ title, subtitle, note, iconPath }) {
    return (
        <div className="flex items-start">
            <div className="bg-brand hover:bg-brand/90 text-white p-3 rounded-lg mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={iconPath}
                    />
                </svg>
            </div>
            <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{title}</h3>
                <p className="text-gray-700">{subtitle}</p>
                {note && <p className="text-gray-600 text-sm">{note}</p>}
            </div>
        </div>
    );
}

function SocialIcon({ href, type }) {
    const icons = {
        facebook: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.373 
                0 12.073c0 5.99 4.388 10.954 10.125 11.854V15.54H7.078
                v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669
                1.312 0 2.686.235 2.686.235v2.953H15.83
                c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532
                3.47h-2.796v8.385C19.612 23.027 24 18.062
                24 12.073z" />
            </svg>
        ),
        twitter: (
            <svg className="w-6 h-6" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 
                01-2.825.775 4.958 4.958 
                0 002.163-2.723 9.86 9.86 
                0 01-3.127 1.184A4.92 4.92 
                0 0011.868 8.1C7.69 8.095 
                4.067 6.13 1.64 3.162a4.822 
                4.822 0 00-.666 2.475c0 
                1.71.87 3.213 2.188 4.096a4.904 
                4.904 0 01-2.228-.616v.06a4.923 
                4.923 0 003.946 4.827 4.996 
                4.996 0 01-2.212.085 4.936 
                4.936 0 004.604 3.417A9.867 
                9.867 0 010 19.41c-.39 0-.779-.023-1.17-.067a13.995 
                13.995 0 007.557 2.209c9.053 
                0 13.998-7.496 13.998-13.985 
                0-.21 0-.42-.015-.63a9.935 
                9.935 0 002.583-2.438z" />
            </svg>
        ),
        instagram: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 
                8.333.015 7.053.072C5.775.132 
                4.905.333 4.14.63c-.789.306-1.459.717-2.126 
                1.384C.935 3.35.63 4.14.333 4.905.131 5.775.072 
                7.053.012 8.333C0 8.74 0 12 0 
                12s.015 3.667.072 4.947C.132 
                18.225.333 19.095.63 19.86c.306.788.717 
                1.459 1.384 2.126.667.666 1.336 
                1.079 2.126 1.384.766.296 1.636.499 
                2.913.558C8.333 23.988 8.74 24 
                12 24s3.667-.015 4.947-.072c1.277-.06 
                2.148-.262 2.913-.558.788-.306 
                1.459-.718 2.126-1.384.666-.667 
                1.079-1.335 1.384-2.126.296-.765.499-1.636 
                .558-2.913.06-1.28.072-1.687.072-4.947s-.015-
                3.667-.072-4.947c-.06-1.277-.262-2.149-.558-
                2.913-.306-.789-.718-1.459-1.384-2.126C21.319 
                1.347 20.651.935 19.86.63c-.765-.297-1.636-
                .499-2.913-.558C15.667.012 15.26 0 
                12 0zm0 2.16c3.203 0 
                3.585.016 4.85.071 1.17.055 
                1.805.249 2.227.415.562.217.96.477 
                1.382.896.419.42.679.819.896 
                1.381.164.422.36 1.057.413 2.227.057 
                1.266.07 1.646.07 4.85s-.015 3.585-.074 
                4.85c-.061 1.17-.256 1.805-.421 
                2.227-.224.562-.479.96-.899 
                1.382-.419.419-.824.679-1.38.896-.42.164-
                1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 
                0-3.586-.015-4.859-.074-1.171-.061-1.816-
                .256-2.236-.421-.569-.224-.96-.479-
                1.379-.899-.421-.419-.69-.824-.9-
                1.38-.165-.42-.359-1.065-.42-
                2.235-.045-1.26-.061-1.649-.061-
                4.844 0-3.196.016-3.586.061-4.861.061-
                1.17.255-1.814.42-2.234.21-.57.479-
                .96.9-1.381.419-.419.81-.689 
                1.379-.898.42-.166 1.051-.361 
                2.221-.421 1.275-.045 1.65-.06 
                4.859-.06zm0 3.678c-3.405 
                0-6.162 2.76-6.162 6.162 0 
                3.405 2.76 6.162 6.162 6.162 
                3.405 0 6.162-2.76 
                6.162-6.162 0-3.405-2.76-
                6.162-6.162-6.162zM12 
                16c-2.21 0-4-1.79-4-4s1.79-
                4 4-4 4 1.79 4 4-1.79 
                4-4 4zm7.846-10.405c0 
                .795-.646 1.44-1.44 
                1.44-.795 0-1.44-.646-
                1.44-1.44 0-.794.646-
                1.439 1.44-1.439.793 
                0 1.44.645 1.44 1.439z" />
            </svg>
        ),
    };

    return (
        <a
            href={href}
            className="bg-white text-sky-600 p-3 rounded-lg hover:bg-sky-600 hover:text-white transition"
            target={type === "instagram" ? "_blank" : "_self"}
            rel="noreferrer"
        >
            {icons[type]}
        </a>
    );
}
