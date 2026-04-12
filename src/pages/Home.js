import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div style={{ fontFamily: "Segoe UI" }}>

            <Navbar />

            {/* HERO SECTION */}
            <div style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                padding: "140px 20px",
                textAlign: "center"
            }}>
                <h1 style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    marginBottom: "15px"
                }}>
                    Close More Leads with AI
                </h1>

                <p style={{
                    fontSize: "20px",
                    opacity: 0.9,
                    maxWidth: "600px",
                    margin: "auto"
                }}>
                    Generate high-quality, conversion-focused replies instantly.
                    Save time and never lose a lead again.
                </p>

                <div style={{ marginTop: "30px" }}>
                    <a href="/app">
                        <button style={{
                            padding: "14px 30px",
                            fontSize: "16px",
                            borderRadius: "10px",
                            border: "none",
                            cursor: "pointer",
                            marginRight: "10px"
                        }}>
                            🚀 Try Free
                        </button>
                    </a>

                    <a href="/pricing">
                        <button style={{
                            padding: "14px 30px",
                            fontSize: "16px",
                            borderRadius: "10px",
                            border: "none",
                            cursor: "pointer"
                        }}>
                            Pricing
                        </button>
                    </a>
                </div>
            </div>

            {/* PROBLEM SECTION */}
            <div style={{ padding: "80px 20px", textAlign: "center" }}>
                <h2>Writing replies takes time...</h2>
                <p style={{ marginTop: "10px", color: "#555" }}>
                    You lose leads, customers wait, and opportunities slip away.
                </p>
            </div>

            {/* SOLUTION SECTION */}
            <div style={{ padding: "80px 20px", textAlign: "center", background: "#f9f9f9" }}>
                <h2>LeadAI solves this instantly</h2>
                <p style={{ marginTop: "10px", color: "#555" }}>
                    Just paste a message and get a professional AI reply in seconds.
                </p>
            </div>

            {/* FEATURES */}
            <div style={{ padding: "80px 20px", textAlign: "center" }}>
                <h2>What users are saying</h2>

                <div style={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    flexWrap: "wrap"
                }}>
                    <div style={{ maxWidth: "250px" }}>
                        <p>"Saved me hours every day!"</p>
                        <strong>- Startup Founder</strong>
                    </div>

                    <div style={{ maxWidth: "250px" }}>
                        <p>"Replies are super professional."</p>
                        <strong>- Sales Manager</strong>
                    </div>

                    <div style={{ maxWidth: "250px" }}>
                        <p>"Helped increase conversions."</p>
                        <strong>- Freelancer</strong>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{
                padding: "80px 20px",
                textAlign: "center",
                background: "#f4f4f4"
            }}>
                <h2>Start using LeadAI today</h2>
                <p>Join early users and automate your replies</p>

                <a href="/app">
                    <button style={{
                        marginTop: "20px",
                        padding: "12px 30px",
                        background: "#667eea",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}>
                        Get Started
                    </button>
                </a>
            </div>

        </div>
    );
}