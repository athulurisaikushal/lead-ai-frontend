import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AppPage from "./pages/AppPage";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<Home />} />

                {/* AI Tool Page */}
                <Route path="/app" element={<AppPage />} />

                {/* Pricing Page */}
                <Route path="/pricing" element={<Pricing />} />

                {/* About Page */}
                <Route path="/about" element={<About />} />

                {/* FAQ Page */}
                <Route path="/faq" element={<FAQ />} />
            </Routes>
        </Router>
    );
}

export default App;