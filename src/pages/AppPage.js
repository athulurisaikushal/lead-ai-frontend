import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function AppPage() {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const BACKEND_URL = "https://lead-ai-backend.onrender.com";

    // ✅ AUTO WAKE BACKEND
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/test`)
            .catch(() => console.log("Backend sleeping..."));
    }, []);

    const generate = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setOutput("⚡ Connecting to AI server...");

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setOutput("⚠️ Please login first");
                window.location.href = "/login";
                return;
            }

            const res = await axios.post(
                `${BACKEND_URL}/api/generate`,
                { message: input },
                {
                    timeout: 20000, // ✅ Prevent infinite loading
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setOutput(res.data || "⚠️ No response from AI");

        } catch (err) {
            console.error(err);

            if (err.code === "ECONNABORTED") {
                setOutput("⏳ Server is waking up... please try again in a few seconds.");
            } else if (err.response?.status === 401) {
                setOutput("⚠️ Session expired. Please login again.");
                localStorage.removeItem("token");
                window.location.href = "/login";
            } else if (err.request) {
                setOutput("⏳ First request may take ~20 seconds (server waking up). Try again.");
            } else {
                setOutput("⚠️ Something went wrong. Try again.");
            }
        }

        setLoading(false);
    };

    return (
        <div style={{ fontFamily: "Segoe UI" }}>
            <Navbar />

            <div style={container}>
                <div style={card}>

                    <h2 style={{ textAlign: "center" }}>✨ AI Reply Generator</h2>

                    <textarea
                        rows="5"
                        placeholder="Paste customer message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={textarea}
                    />

                    <button onClick={generate} style={button} disabled={loading}>
                        {loading ? "✨ Thinking..." : "🚀 Generate"}
                    </button>

                    <div style={outputBox}>
                        {output || "AI response will appear here..."}
                    </div>

                </div>
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
    width: "600px",
    padding: "30px",
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    color: "white"
};

const textarea = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    marginTop: "15px"
};

const button = {
    width: "100%",
    marginTop: "10px",
    padding: "12px",
    background: "#ff758c",
    border: "none",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer"
};

const outputBox = {
    marginTop: "20px",
    padding: "15px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "10px",
    minHeight: "100px"
};