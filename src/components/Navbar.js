export default function Navbar() {
    return (
        <div style={{
            position: "sticky",
            top: 0,
            background: "white",
            padding: "15px 60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            zIndex: 1000
        }}>

            {/* Logo */}
            <h2 style={{ margin: 0, fontWeight: "bold", color: "#667eea" }}>
                🚀 LeadAI
            </h2>

            {/* Links */}
            <div style={{ display: "flex", gap: "25px" }}>
                <a href="/" style={{ textDecoration: "none", color: "#333" }}>Home</a>
                <a href="/pricing" style={{ textDecoration: "none", color: "#333" }}>Pricing</a>
                <a href="/about" style={{ textDecoration: "none", color: "#333" }}>About</a>
                <a href="/faq" style={{ textDecoration: "none", color: "#333" }}>FAQ</a>
            </div>

            {/* CTA */}
            <a href="/app">
                <button style={{
                    padding: "10px 20px",
                    background: "#667eea",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}>
                    Try Now
                </button>
            </a>

        </div>
    );
}