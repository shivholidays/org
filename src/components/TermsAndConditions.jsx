import Layout from "../components/layout/Layout.jsx";

export default function TermsAndConditions() {
    return (
        <Layout title="Terms and Conditions - Shiv Holidays">

            {/* PAGE HEADER */}
            <div
                className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden"
                data-aos="fade"
            >
                {/* Background Image */}
                <img
                    src="/images/tnc.webp"
                    alt="Terms and Conditions Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-amber-200/20 to-yellow-100/10"></div>

                {/* Header Content */}
                <div className="relative z-10 px-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">
                        Terms and Conditions
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-sm">
                        Read carefully before booking your tour
                    </p>
                </div>
            </div>

            {/* T&C CONTENT SECTION */}
            <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
                <div className="container mx-auto px-6">

                    <div
                        className="max-w-4xl mx-auto bg-orange-100 rounded-3xl shadow-xl p-10 md:p-12"
                        data-aos="fade-up"
                    >

                        {/* NOTE SECTION */}
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
                            📝 Note
                        </h2>

                        <ul className="list-disc list-inside space-y-3 text-orange-800 text-lg mb-8">
                            <li>Govt. approved photo identity proof with address should be kept along with you compulsorily.</li>
                            <li>All package prices and hotel rates are subject to change as per tour date, season, and availability.</li>
                            <li>Under unavoidable circumstances, hotels are subject to change. A substitute hotel of similar category will be provided.</li>
                            <li>Accommodation is on a Twin Sharing basis.</li>
                            <li>Check-in and Check-out times are as per hotel rules.</li>
                            <li>If low occupancy occurs at respective hotels, a set menu for a fixed price will be provided by the hotel as per your chosen plan.</li>
                            <li>
                                <span className="font-semibold text-orange-600">Cancellation Policy:</span>{" "}
                                Cancellation charges are 50% if canceled before 72 hours of the tour commencement date.
                                No refund is provided after that.
                            </li>
                        </ul>

                        {/* INCLUDES SECTION */}
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
                            ✅ Includes
                        </h2>

                        <ul className="list-disc list-inside space-y-3 text-orange-800 text-lg mb-8">
                            <li>For Northern India Packages, accommodation in hotels with breakfast and dinner included.</li>
                            <li>For Southern India Packages, accommodation in hotels with breakfast included.</li>
                            <li>For Gujarat and Rajasthan Packages, accommodation in hotels with breakfast included.</li>
                            <li>Tour by car includes pick-up, drop, and sightseeing.</li>
                            <li>All transfers and sightseeing arrangements by A/C or non-A/C vehicle, as per the itinerary.</li>
                            <li>Services of a well-experienced driver.</li>
                            <li>Driver allowance, parking fees, night halt charges, inter-state permits, and government applicable service tax.</li>
                            <li>Children below 3 years (Northern India) or 5 years (Southern India) are accommodated on a complimentary basis without a bed.</li>
                        </ul>

                        {/* EXCLUDES SECTION */}
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
                            ❌ Excludes
                        </h2>

                        <ul className="list-disc list-inside space-y-3 text-orange-800 text-lg">
                            <li>Any Airfare or Train fare.</li>
                            <li>Any other services or meals not mentioned in the "Includes" section.</li>
                            <li>
                                Any entrance fees or activity charges unless specified in the inclusion.
                                All extras will be on a direct payment basis.
                            </li>
                            <li>Food or refreshments during the journey.</li>
                            <li>Toll taxes, personal tips, laundry charges, porterage, telephone charges, beverages, and other personal expenses.</li>
                            <li>Pony rides, boating, additional sightseeing, and entry fees at parks, monuments, museums, etc.</li>
                            <li>
                                Expenses caused by factors beyond our control, such as train and flight delays, roadblocks, vehicle malfunctions,
                                political disturbances, etc.
                            </li>
                        </ul>

                    </div>
                </div>
            </section>

        </Layout>
    );
}
