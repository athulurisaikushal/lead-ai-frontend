import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const login = async () => {
        if (!email || !password) {
            alert("Please enter all fields");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post("http://localhost:8080/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);

            navigate("/app");

        } catch (err) {
            alert("Invalid credentials ❌");
        }

        setLoading(false);
    };

    return (
        <div style={container}>
            <div style={card}>

                <h2 style={title}>Welcome Back 👋</h2>
                <p style={subtitle}>Login to continue using LeadAI</p>

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={input}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={input}
                />

                <button onClick={login} style={button}>
                    {loading ? "Signing in..." : "Login"}
                </button>

                <p style={footerText}>
                    Don’t have an account?{" "}
                    <span style={link} onClick={() => navigate("/signup")}>
                        Sign up
                    </span>
                </p>

            </div>
        </div>
    );
}

/* 🎨 STYLES */

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