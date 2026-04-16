import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div style={nav}>
            <h2 style={logo} onClick={() => navigate("/")}>
                🚀 LeadAI
            </h2>

            <div style={links}>
                <span onClick={() => navigate("/")}>Home</span>
                <span onClick={() => navigate("/pricing")}>Pricing</span>
                <span onClick={() => navigate("/about")}>About</span>
                <span onClick={() => navigate("/faq")}>FAQ</span>
            </div>

            <div style={right}>
                {!token ? (
                    <>
                        <button style={outlineBtn} onClick={() => navigate("/login")}>Login</button>
                        <button style={primaryBtn} onClick={() => navigate("/signup")}>Sign Up</button>
                    </>
                ) : (
                    <>
                        <button style={primaryBtn} onClick={() => navigate("/app")}>Dashboard</button>
                        <button style={dangerBtn} onClick={logout}>Logout</button>
                    </>
                )}
            </div>
        </div>
    );
}

const nav = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0
};

const logo = { cursor: "pointer", color: "#667eea" };
const links = { display: "flex", gap: "20px", cursor: "pointer" };
const right = { display: "flex", gap: "10px" };

const primaryBtn = {
    padding: "10px 20px",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    color: "white",
    border: "none",
    borderRadius: "8px"
};

const outlineBtn = {
    padding: "10px 20px",
    border: "2px solid #667eea",
    background: "white",
    borderRadius: "8px"
};

const dangerBtn = {
    padding: "10px 20px",
    background: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "8px"
};