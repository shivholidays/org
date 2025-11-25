import { useParams } from "react-router-dom";
import packages from "../data/packages.json";
import sightseeing from "../data/sightseeing.json";
import TourDetails from "../components/TourDetails";

export default function TourDetailsPage() {
    const { id } = useParams();
    const tourId = Number(id);

    // Find the correct tour from packages.json
    const tour = packages.find((p) => p.id === tourId);

    if (!tour) return <p>Tour not found</p>;

    // Filter sightseeing data for this tour
    const sightseeingPlaces = sightseeing.filter(
        (s) => s.package_id === tourId
    );

    // Attach sightseeing to the tour object
    const tourWithData = {
        ...tour,
        sightseeingPlaces,
    };

    return <TourDetails tour={tourWithData} />;
}
