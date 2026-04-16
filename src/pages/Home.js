import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />

            {/* HERO */}
            <div style={hero}>
                <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} style={title}>
                    AI Customer Replies ⚡
                </motion.h1>

                <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}>
                    Generate smart responses instantly and boost engagement
                </motion.p>

                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}>
                    <button style={primaryBtn} onClick={()=>navigate("/app")}>Try Now</button>
                    <button style={outlineBtn} onClick={()=>navigate("/pricing")}>Pricing</button>
                </motion.div>
            </div>

            {/* SOCIAL PROOF */}
            <div style={strip}>
                <p>Trusted by 1,000+ businesses worldwide 🚀</p>
            </div>

            {/* FEATURES */}
            <div style={section}>
                <h2>Why LeadAI?</h2>

                <div style={grid}>
                    {features.map((f,i)=>(
                        <motion.div key={i} whileHover={{scale:1.05}} style={card}>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* HOW IT WORKS */}
            <div style={sectionLight}>
                <h2>How it works</h2>

                <div style={steps}>
                    {stepsData.map((s,i)=>(
                        <div key={i} style={stepCard}>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TESTIMONIALS */}
            <div style={section}>
                <h2>What users say</h2>

                <div style={grid}>
                    {testimonials.map((t,i)=>(
                        <div key={i} style={card}>
                            <p>"{t.text}"</p>
                            <h4>- {t.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* FINAL CTA */}
            <div style={cta}>
                <h2>Start using AI today 🚀</h2>
                <button style={primaryBtn} onClick={()=>navigate("/signup")}>
                    Get Started
                </button>
            </div>
        </div>
    );
}

/* DATA */

const features = [
    { title:"⚡ Instant Replies", desc:"Generate responses in seconds" },
    { title:"🤖 Smart AI", desc:"Understands tone & intent" },
    { title:"📈 Boost Conversions", desc:"Improve engagement easily" },
    { title:"💼 Business Ready", desc:"Built for real workflows" }
];

const stepsData = [
    { title:"1. Paste Message", desc:"Enter customer query" },
    { title:"2. Generate AI", desc:"AI processes instantly" },
    { title:"3. Copy & Use", desc:"Send reply to customer" }
];

const testimonials = [
    { name:"John D.", text:"Saved hours of work daily!" },
    { name:"Sarah K.", text:"Best AI tool for customer replies" },
    { name:"Mike T.", text:"Increased conversions by 30%" }
];

/* STYLES */

const hero = {
    height:"90vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(135deg,#667eea,#764ba2)",
    color:"white",
    textAlign:"center"
};

const title = { fontSize:"42px" };

const strip = {
    padding:"15px",
    textAlign:"center",
    background:"#111",
    color:"white"
};

const section = {
    padding:"60px 20px",
    textAlign:"center"
};

const sectionLight = {
    padding:"60px 20px",
    textAlign:"center",
    background:"#f5f7fa"
};

const grid = {
    display:"flex",
    gap:"25px",
    justifyContent:"center",
    flexWrap:"wrap"
};

const card = {
    width:"230px",
    padding:"20px",
    background:"white",
    borderRadius:"15px",
    boxShadow:"0 15px 35px rgba(0,0,0,0.1)"
};

const steps = {
    display:"flex",
    justifyContent:"center",
    gap:"20px"
};

const stepCard = {
    padding:"20px",
    background:"white",
    borderRadius:"10px"
};

const cta = {
    padding:"60px",
    textAlign:"center",
    background:"#111",
    color:"white"
};

const primaryBtn = {
    margin:"10px",
    padding:"12px 25px",
    background:"linear-gradient(135deg,#ff7eb3,#ff758c)",
    color:"white",
    border:"none",
    borderRadius:"10px"
};

const outlineBtn = {
    margin:"10px",
    padding:"12px 25px",
    background:"white",
    borderRadius:"10px"
};