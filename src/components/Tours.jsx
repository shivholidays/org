import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout.jsx";

export default function Tours({ domesticPackages = [], internationalPackages = [] }) {
    const [domesticQuery, setDomesticQuery] = useState("");
    const [internationalQuery, setInternationalQuery] = useState("");

    const [showToInternational, setShowToInternational] = useState(false);
    const [showToDomestic, setShowToDomestic] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY + window.innerHeight / 2;

            const domesticSection = document.getElementById("domesticSection");
            const internationalSection = document.getElementById("internationalSection");

            if (!domesticSection || !internationalSection) return;

            const domesticEnd = domesticSection.offsetTop + domesticSection.offsetHeight / 2;

            if (y > domesticEnd) {
                setShowToDomestic(true);
                setShowToInternational(false);
            } else {
                setShowToInternational(true);
                setShowToDomestic(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Layout title="Tours - Shiv Holidays">

            {/* HEADER */}
            <div
                className="relative h-[85vh] md:h-[105vh] flex items-center justify-center text-center text-white overflow-hidden"
                data-aos="fade"
            >
                <img
                    src={`${import.meta.env.BASE_URL}images/tourpage.jpg`}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Tours"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-amber-100/20 to-yellow-100/10"></div>

                <div className="relative z-10 px-6">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 drop-shadow-md">
                        Our Tours
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-sm">
                        Discover your next adventure from our curated collection
                    </p>
                </div>
            </div>

            {/* DOMESTIC SECTION */}
            <section id="domesticSection" className="py-16 bg-white">
                <div className="container mx-auto px-6">

                    <div className="mb-6" data-aos="fade-right">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">🇮🇳 Domestic Tours</h2>
                        <p className="text-gray-600 mb-4">Explore incredible destinations within your country</p>

                        <input
                            type="text"
                            placeholder="Search domestic tours..."
                            value={domesticQuery}
                            onChange={(e) => setDomesticQuery(e.target.value.toLowerCase())}
                            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg mb-8 focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {domesticPackages
                            .filter((pkg) =>
                                pkg.package_name.toLowerCase().includes(domesticQuery)
                            )
                            .map((packageItem, i) => (
                                <TourCard
                                    key={packageItem.id}
                                    data={packageItem}
                                    isInternational={false}
                                    delay={i * 50}
                                />
                            ))}

                        {domesticPackages.length === 0 && (
                            <p className="col-span-full text-center text-gray-600 py-8">
                                No domestic tours available at the moment.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* INTERNATIONAL SECTION */}
            <section
                id="internationalSection"
                className="py-16 bg-gradient-to-br from-sky-50 to-blue-50"
            >
                <div className="container mx-auto px-6">

                    <div className="mb-6" data-aos="fade-right">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">🌍 International Tours</h2>
                        <p className="text-gray-600 mb-4">
                            Experience the world's most amazing destinations
                        </p>

                        <input
                            type="text"
                            placeholder="Search international tours..."
                            value={internationalQuery}
                            onChange={(e) => setInternationalQuery(e.target.value.toLowerCase())}
                            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg mb-8 focus:ring-2 focus:ring-coral-300"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {internationalPackages
                            .filter((pkg) =>
                                pkg.package_name.toLowerCase().includes(internationalQuery)
                            )
                            .map((packageItem, i) => (
                                <TourCard
                                    key={packageItem.id}
                                    data={packageItem}
                                    isInternational={true}
                                    delay={i * 50}
                                />
                            ))}

                        {internationalPackages.length === 0 && (
                            <p className="col-span-full text-center text-gray-600 py-8">
                                No international tours available at the moment.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Scroll Buttons */}
            {showToInternational && (
                <button
                    onClick={() =>
                        document
                            .getElementById("internationalSection")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="fixed right-6 bottom-20 bg-orange-400 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-500 transition z-50"
                >
                    ↓ To International Trips
                </button>
            )}

            {showToDomestic && (
                <button
                    onClick={() =>
                        document
                            .getElementById("domesticSection")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="fixed right-6 bottom-20 bg-coral-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-coral-600 transition z-50"
                >
                    ↑ To Domestic Trips
                </button>
            )}
        </Layout>
    );
}

/* ========== REUSABLE TOUR CARD COMPONENT ========== */
function TourCard({ data, isInternational, delay }) {
    return (
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={delay}
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={`${import.meta.env.BASE_URL}${data.package_image_url}`}
                    alt={data.package_name}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {isInternational && (
                    <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        International
                    </div>
                )}

                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{data.package_name}</h3>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600">⏱️ {data.duration}</span>
                    <span
                        className={`font-bold text-lg ${
                            isInternational ? "text-coral-600" : "text-brand"
                        }`}
                    >
                        ₹{Number(data.cost_per_person).toLocaleString("en-IN")}
                    </span>
                </div>

                <a
                    href={`#/tours/${data.id}`}
                    className={`block w-full text-center py-2 rounded-lg font-semibold transition text-white ${
                        isInternational
                            ? "bg-coral-500 hover:bg-coral-600"
                            : "bg-brand hover:bg-sky-700"
                    }`}
                >
                    Explore Tour
                </a>
            </div>
        </div>
    );
}
