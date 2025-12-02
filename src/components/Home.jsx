import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

export default function Home({
    domesticPackages = [],
    internationalPackages = [],
}) {
    return (
        <Layout title="Home - Shiv Holidays">

            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden -mt-20 pt-20">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={`${import.meta.env.BASE_URL}videos/homepagevideo.mp4`} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                    <div data-aos="fade-up">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            Explore the World With Us
                        </h1>

                        <p className="text-xl md:text-2xl mb-8">
                            Discover breathtaking destinations and create memories that last forever
                        </p>

                        <Link
                            to="/tours"
                            className="inline-block bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
                        >
                            Explore Tours
                        </Link>
                    </div>
                </div>
            </div>

            {/* Domestic Packages */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">

                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Domestic Adventures
                        </h2>
                        <p className="text-xl text-gray-600">
                            Explore the beauty of your own country
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {domesticPackages.map((packageItem, index) => (
                            <div
                                key={packageItem.id}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${packageItem.package_image_url.replace(/^\//, "")}`}
                                        alt={packageItem.package_name}
                                        className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                                    />

                                    <div className="absolute top-4 right-4 bg-brand text-white px-4 py-2 rounded-full font-semibold">
                                        ₹{Number(packageItem.cost_per_person).toLocaleString()}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {packageItem.package_name}
                                    </h3>

                                    <p className="text-gray-600 mb-4">
                                        ⏱️ {packageItem.duration}
                                    </p>

                                    {packageItem.sightseeingPlaces?.length > 0 && (
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold text-gray-700 mb-2">
                                                Highlights:
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {packageItem.sightseeingPlaces.slice(0, 3).map((sight, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs bg-sky-100 text-sky-700 px-3 py-1 rounded-full"
                                                    >
                                                        📍 {sight.sight_name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <Link
                                        to={`/tours/${packageItem.id}`}
                                        className="block w-full text-center bg-brand hover:bg-brand/90 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* International Packages */}
            <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
                <div className="container mx-auto px-6">

                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            International Escapes
                        </h2>
                        <p className="text-xl text-gray-600">
                            Journey to exotic destinations around the globe
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {internationalPackages.map((packageItem, index) => (
                            <div
                                key={packageItem.id}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${packageItem.package_image_url.replace(/^\//, "")}`}
                                        alt={packageItem.package_name}
                                        className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                                    />

                                    <div className="absolute top-4 right-4 bg-coral-500 text-white px-4 py-2 rounded-full font-semibold">
                                        ₹{Number(packageItem.cost_per_person).toLocaleString()}
                                    </div>

                                    <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                                        🌍 International
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {packageItem.package_name}
                                    </h3>

                                    <p className="text-gray-600 mb-4">
                                        ⏱️ {packageItem.duration}
                                    </p>

                                    {packageItem.sightseeingPlaces?.length > 0 && (
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold text-gray-700 mb-2">
                                                Highlights:
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {packageItem.sightseeingPlaces.slice(0, 3).map((sight, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs bg-coral-100 text-coral-700 px-3 py-1 rounded-full"
                                                    >
                                                        📍 {sight.sight_name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <Link
                                        to={`/tours/${packageItem.id}`}
                                        className="block w-full text-center bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-brand to-blue-600 text-white">
                <div className="container mx-auto px-6 text-center" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your Adventure?
                    </h2>

                    <p className="text-xl mb-8">
                        Contact us today and let's plan your dream vacation together
                    </p>

                    <Link
                        to="/aboutUs#contactForm"
                        className="inline-block bg-white text-brand hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

        </Layout>
    );
}
