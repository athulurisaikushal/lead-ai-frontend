import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signup = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            await axios.post("http://localhost:8080/auth/signup", {
                email,
                password
            });

            alert("Account created successfully ✅");

            navigate("/login");

        } catch (err) {
            alert("Signup failed ❌");
        }

        setLoading(false);
    };

    return (
        <div style={container}>
            <div style={card}>

                <h2 style={title}>Create Account 🚀</h2>
                <p style={subtitle}>Join LeadAI and start generating AI replies</p>

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && signup()}
                    style={input}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && signup()}
                    style={input}
                />

                <button onClick={signup} style={button}>
                    {loading ? "Creating..." : "Sign Up"}
                </button>

                <p style={footerText}>
                    Already have an account?{" "}
                    <span style={link} onClick={() => navigate("/login")}>
                        Login
                    </span>
                </p>

            </div>
        </div>
    );
}

/* 🎨 STYLES (same as Login for consistency) */

const container = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
};

const card = {
    width: "350px",
    padding: "30px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
};

const title = {
    textAlign: "center"
};

const subtitle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#666"
};

const input = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px"
};

const button = {
    padding: "12px",
    background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
};

const footerText = {
    textAlign: "center",
    fontSize: "13px"
};

const link = {
    color: "#667eea",
    cursor: "pointer",
    fontWeight: "bold"
};