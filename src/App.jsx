import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CitizensList from "./pages/CitizensList";
import AddCitizen from "./pages/AddCitizen";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="flex justify-center gap-6 mb-8">
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            View Citizens
          </Link>
          <Link to="/add" className="text-blue-600 font-medium hover:underline">
            Add Citizen
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<CitizensList />} />
          <Route path="/add" element={<AddCitizen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
