import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Tours from './components/Tours';
import AboutUs from './components/AboutUs';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPolicy from './components/RefundPolicy';
import TourDetailsPage from "./components/TourDetailsPage";
import ScrollToTop from "./components/helpers/ScrollToTop";
import packages from "./data/packages.json";
// import sightseeing from "./data/sightseeing.json";

function App() {

  const domesticPackages = packages.filter(
    p => p.isIntl === "false" && p.toShowMain === "true"
  );
  const internationalPackages = packages.filter(
    p => p.isIntl === "true" && p.toShowIntlMain === "true"
  );

  const domesticPackagesIN = packages.filter(
    p => p.isIntl === "false"
  );
  const internationalPackagesIN = packages.filter(
    p => p.isIntl === "true"
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              domesticPackages={domesticPackages}
              internationalPackages={internationalPackages}
            />
          }
        />
        <Route 
          path="/tours" 
          element={
            <Tours
              domesticPackages={domesticPackagesIN}
              internationalPackages={internationalPackagesIN}
            />
          } 
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/tours/:id" element={<TourDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
