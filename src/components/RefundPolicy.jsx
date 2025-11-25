import Layout from "../components/layout/Layout.jsx";

export default function RefundPolicy() {
    return (
        <Layout title="Refund Policy - Shiv Holidays">

            {/* PAGE HEADER */}
            <div
                className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden"
                data-aos="fade"
            >
                {/* Background Image */}
                <img
                    src="/images/kullu_valley.jpg"
                    alt="Refund Policy Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-amber-200/20 to-yellow-100/10"></div>

                {/* Content */}
                <div className="relative z-10 px-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">
                        Refund Policy
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-sm">
                        Know our cancellation and refund guidelines before booking.
                    </p>
                </div>
            </div>

            {/* REFUND POLICY CONTENT */}
            <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
                <div className="container mx-auto px-6">
                    <div
                        className="max-w-4xl mx-auto bg-orange-100 rounded-3xl shadow-xl p-10 md:p-12"
                        data-aos="fade-up"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                            📝 Refund Policy
                        </h2>

                        <ul className="list-disc list-inside space-y-4 text-orange-800 text-lg">
                            <li>
                                In case the tourist wishes to cancel the tour, he/she should
                                intimate the company.
                            </li>

                            <li>
                                Cancellation charges are{" "}
                                <span className="font-semibold text-orange-600">
                                    50% before 72 hours
                                </span>{" "}
                                of the tour commencement date. After this period, no refund shall
                                be provided.
                            </li>

                            <li>
                                Cancellation charges for any type of transport ticket are applicable
                                as per the rules of the concerned authority.
                            </li>

                            <li>
                                Air tickets issued on special fares are{" "}
                                <span className="font-semibold text-red-600">
                                    NON-REFUNDABLE
                                </span>
                                , and guests shall bear cancellation charges.
                            </li>

                            <li>
                                Any refund payable to the guest will be paid after the company
                                receives a refund from the respective authorities.
                            </li>

                            <li>
                                The company deducts processing charges from the refund to be paid to
                                the guest.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
