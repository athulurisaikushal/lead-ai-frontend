import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function AppPage() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!input) return;

        setLoading(true);

        try {
            const res = await axios.post("https://lead-ai-backend.onrender.com/api/generate", {
                message: input
            });

            setOutput(res.data);
        } catch (err) {
            setOutput("⚠️ Error connecting to backend");
        }

        setLoading(false);
    };

    const copyText = () => {
        navigator.clipboard.writeText(output);
    };

    const clearAll = () => {
        setInput("");
        setOutput("");
    };

    return (
        <div style={{ fontFamily: "Segoe UI" }}>
            <Navbar />

            <div style={{
                minHeight: "90vh",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    width: "650px",
                    background: "white",
                    padding: "30px",
                    borderRadius: "15px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}>
                    <h2 style={{ textAlign: "center" }}>✨ Generate AI Reply</h2>

                    <textarea
                        rows="5"
                        placeholder="Paste customer message here..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            marginTop: "15px"
                        }}
                    />

                    <button
                        onClick={generate}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "15px",
                            background: "#667eea",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >
                        {loading ? "Generating..." : "Generate Reply"}
                    </button>

                    <div style={{
                        marginTop: "20px",
                        padding: "15px",
                        background: "#f9f9f9",
                        borderRadius: "8px",
                        minHeight: "120px"
                    }}>
                        {loading
                            ? "⏳ Generating response..."
                            : (output || "AI response will appear here...")}
                    </div>

                    <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                        <button
                            onClick={copyText}
                            style={{
                                flex: 1,
                                padding: "10px",
                                background: "#28a745",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer"
                            }}
                        >
                            Copy
                        </button>

                        <button
                            onClick={clearAll}
                            style={{
                                flex: 1,
                                padding: "10px",
                                background: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer"
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}