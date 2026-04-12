import Navbar from "../components/Navbar";

export default function Pricing() {
    return (
        <div style={{ fontFamily: "Segoe UI" }}>

            <Navbar />

            <div style={{
                padding: "100px 20px",
                textAlign: "center"
            }}>
                <h1>Pricing</h1>
                <p style={{ color: "#666", marginTop: "10px" }}>
                    Simple and transparent pricing
                </p>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    marginTop: "50px",
                    flexWrap: "wrap"
                }}>

                    {/* FREE PLAN */}
                    <div style={{
                        width: "280px",
                        padding: "30px",
                        borderRadius: "12px",
                        background: "#f9f9f9",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
                    }}>
                        <h2>Free</h2>
                        <h3>$0/month</h3>

                        <ul style={{ textAlign: "left", marginTop: "20px" }}>
                            <li>✔ Limited AI replies</li>
                            <li>✔ Basic responses</li>
                            <li>✔ Standard speed</li>
                        </ul>

                        <a href="/app">
                            <button style={{
                                marginTop: "20px",
                                width: "100%",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer"
                            }}>
                                Start Free
                            </button>
                        </a>
                    </div>

                    {/* PRO PLAN */}
                    <div style={{
                        width: "280px",
                        padding: "30px",
                        borderRadius: "12px",
                        background: "white",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                        border: "2px solid #667eea"
                    }}>
                        <h2>Pro</h2>
                        <h3>$10/month</h3>

                        <ul style={{ textAlign: "left", marginTop: "20px" }}>
                            <li>✔ Unlimited AI replies</li>
                            <li>✔ Advanced responses</li>
                            <li>✔ Faster generation</li>
                            <li>✔ Priority support</li>
                        </ul>

                        <a href="/app">
                            <button style={{
                                marginTop: "20px",
                                width: "100%",
                                padding: "10px",
                                background: "#667eea",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer"
                            }}>
                                Upgrade Now
                            </button>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    );
}