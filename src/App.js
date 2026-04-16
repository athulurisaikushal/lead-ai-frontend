import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import AppPage from "./pages/AppPage";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// ✅ Protected Route
function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <Router>
            <Routes>

                {/* Landing */}
                <Route path="/" element={<Home />} />

                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected AI Page */}
                <Route
                    path="/app"
                    element={
                        <PrivateRoute>
                            <AppPage />
                        </PrivateRoute>
                    }
                />

                {/* Public Pages */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />

            </Routes>
        </Router>
    );
}

export default App;