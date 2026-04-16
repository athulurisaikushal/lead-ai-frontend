import { useState } from "react";
import Navbar from "../components/Navbar";

export default function FAQ() {
    const faqs = [
        {
            q: "What is LeadAI?",
            a: "LeadAI helps you generate AI-powered replies to customer messages instantly."
        },
        {
            q: "Is it free?",
            a: "Yes! You can start with our free plan and upgrade anytime."
        },
        {
            q: "How fast are responses?",
            a: "Responses are generated in seconds using advanced AI."
        },
        {
            q: "Can I use it for business?",
            a: "Absolutely! LeadAI is designed for businesses to scale communication."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div style={{ fontFamily: "Segoe UI" }}>
            <Navbar />

            <div style={{
                minHeight: "90vh",
                padding: "50px 20px",
                background: "#f5f7fa",
                textAlign: "center"
            }}>
                <h1>❓ Frequently Asked Questions</h1>

                <div style={{
                    maxWidth: "600px",
                    margin: "30px auto",
                    textAlign: "left"
                }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{
                            marginBottom: "15px",
                            background: "white",
                            borderRadius: "8px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                        }}>
                            <div
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{
                                    padding: "15px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                {faq.q}
                                <span>{openIndex === i ? "−" : "+"}</span>
                            </div>

                            {openIndex === i && (
                                <div style={{
                                    padding: "15px",
                                    borderTop: "1px solid #eee",
                                    color: "#555"
                                }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}