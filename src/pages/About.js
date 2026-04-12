import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div style={{ fontFamily: "Segoe UI" }}>

            <Navbar />

            <div style={{ padding: "100px 20px", textAlign: "center" }}>
                <h1>About LeadAI</h1>

                <p style={{ maxWidth: "600px", margin: "20px auto", color: "#555" }}>
                    LeadAI is built to help businesses, freelancers, and sales teams
                    respond faster and smarter using AI.
                </p>
            </div>

            {/* MISSION */}
            <div style={{
                padding: "80px 20px",
                background: "#f9f9f9",
                textAlign: "center"
            }}>
                <h2>Our Mission</h2>
                <p style={{ maxWidth: "600px", margin: "20px auto" }}>
                    We aim to eliminate the time wasted writing repetitive replies and
                    help users focus on what matters — closing deals and growing business.
                </p>
            </div>

            {/* HOW IT WORKS */}
            <div style={{ padding: "80px 20px", textAlign: "center" }}>
                <h2>How it works</h2>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    marginTop: "30px",
                    flexWrap: "wrap"
                }}>
                    <div>
                        <h3>1️⃣ Paste message</h3>
                        <p>Enter customer query</p>
                    </div>

                    <div>
                        <h3>2️⃣ AI generates</h3>
                        <p>Smart reply created instantly</p>
                    </div>

                    <div>
                        <h3>3️⃣ Send & convert</h3>
                        <p>Close more leads</p>
                    </div>
                </div>
            </div>

        </div>
    );
}