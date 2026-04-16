import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
    const plans = [
        { name: "Starter", price: "$0", features: ["10/day"] },
        { name: "Pro", price: "$19/mo", features: ["Unlimited"] },
        { name: "Enterprise", price: "Custom", features: ["Team"] }
    ];

    return (
        <div>
            <Navbar />

            <div style={{ textAlign: "center", padding: "50px" }}>
                <h1>Pricing</h1>

                <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                    {plans.map((p, i) => (
                        <div key={i} style={card}>
                            <h2>{p.name}</h2>
                            <h1>{p.price}</h1>
                            {p.features.map((f, j) => <p key={j}>✔ {f}</p>)}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

const card = {
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};