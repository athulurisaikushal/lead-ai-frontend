import { useState } from "react";
import Navbar from "../components/Navbar";

export default function FAQ() {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            q: "What is LeadAI?",
            a: "LeadAI helps you generate AI-powered replies instantly."
        },
        {
            q: "Is it free?",
            a: "Yes, we offer a free plan with limited usage."
        },
        {
            q: "How accurate are responses?",
            a: "Responses are optimized for clarity and conversions."
        },
        {
            q: "Can I use it for sales?",
            a: "Yes, it's designed for sales, support, and communication."
        }
    ];

    return (
        <div style={{ fontFamily: "Segoe UI" }}>

            <Navbar />

            <div style={{ padding: "100px 20px", textAlign: "center" }}>
                <h1>FAQ</h1>

                <div style={{ maxWidth: "600px", margin: "30px auto" }}>
                    {faqs.map((item, index) => (
                        <div key={index} style={{
                            marginBottom: "15px",
                            textAlign: "left",
                            borderBottom: "1px solid #ddd",
                            paddingBottom: "10px"
                        }}>
                            <h3
                                style={{ cursor: "pointer" }}
                                onClick={() => toggle(index)}
                            >
                                {item.q}
                            </h3>

                            {open === index && <p>{item.a}</p>}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}