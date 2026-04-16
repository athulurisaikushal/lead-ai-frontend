import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div style={{ fontFamily: "Segoe UI" }}>
            <Navbar />

            {/* HERO */}
            <div style={{
                padding: "60px 20px",
                textAlign: "center",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white"
            }}>
                <h1 style={{ fontSize: "40px" }}>🚀 About LeadAI</h1>
                <p style={{
                    maxWidth: "700px",
                    margin: "20px auto",
                    fontSize: "18px",
                    opacity: 0.9
                }}>
                    Empowering businesses with AI-driven communication that feels human.
                </p>
            </div>

            {/* MAIN CONTENT */}
            <div style={{
                padding: "50px 20px",
                background: "#f5f7fa",
                textAlign: "center"
            }}>

                {/* DESCRIPTION */}
                <div style={cardStyle}>
                    <h2>💡 What is LeadAI?</h2>
                    <p style={textStyle}>
                        LeadAI is an AI-powered platform designed to help businesses
                        generate high-quality responses to customer messages instantly.
                        It saves time, improves engagement, and boosts conversions using
                        cutting-edge artificial intelligence.
                    </p>
                </div>

                {/* MISSION + VISION */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "30px"
                }}>
                    <div style={cardStyle}>
                        <h2>🎯 Our Mission</h2>
                        <p style={textStyle}>
                            To automate communication while keeping it human,
                            helping businesses scale effortlessly.
                        </p>
                    </div>

                    <div style={cardStyle}>
                        <h2>🌍 Our Vision</h2>
                        <p style={textStyle}>
                            To become the go-to AI platform for business communication worldwide.
                        </p>
                    </div>
                </div>

                {/* FEATURES GRID */}
                <div style={{ marginTop: "40px" }}>
                    <h2>✨ Why Choose LeadAI?</h2>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                        marginTop: "20px"
                    }}>
                        {[
                            { icon: "⚡", text: "Instant AI Replies" },
                            { icon: "🤖", text: "Smart AI Engine" },
                            { icon: "📈", text: "Boost Conversions" },
                            { icon: "💼", text: "Business Ready" }
                        ].map((item, i) => (
                            <div key={i} style={{
                                width: "200px",
                                padding: "20px",
                                background: "white",
                                borderRadius: "10px",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                                transition: "0.3s"
                            }}>
                                <h1>{item.icon}</h1>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div style={{ marginTop: "50px" }}>
                    <a href="/app">
                        <button style={{
                            padding: "14px 30px",
                            background: "#667eea",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "18px",
                            cursor: "pointer",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                        }}>
                            🚀 Start Using LeadAI
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

const cardStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "25px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
};

const textStyle = {
    color: "#555",
    fontSize: "16px"
};