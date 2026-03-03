import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Contact"];

const SERVICES = [
  {
    icon: "💊",
    title: "Prescription Medicines",
    desc: "Authentic, doctor-prescribed medicines dispensed by trained pharmacists with complete accuracy and care.",
    color: "#e8f5e9",
    accent: "#2e7d32",
  },
  {
    icon: "🧴",
    title: "OTC & Generic Medicines",
    desc: "Wide range of over-the-counter and affordable generic medicines for everyday health needs.",
    color: "#e3f2fd",
    accent: "#1565c0",
  },
  {
    icon: "🚚",
    title: "Home Delivery",
    desc: "Get your medicines delivered right to your doorstep quickly, safely, and reliably across Varanasi.",
    color: "#fff3e0",
    accent: "#e65100",
  },
  {
    icon: "🩺",
    title: "Medical Equipment",
    desc: "BP monitors, glucometers, nebulizers, wheelchairs and more — everything you need at home.",
    color: "#fce4ec",
    accent: "#ad1457",
  },
];

const STATS = [
  { value: "15+", label: "Years of Trust" },
  { value: "10K+", label: "Happy Customers" },
  { value: "24/7", label: "Always Open" },
  { value: "5000+", label: "Medicines in Stock" },
];

const TESTIMONIALS = [
  {
    name: "Rahul Mishra",
    text: "Always find my medicines here no matter what time. Truly a lifesaver for our family!",
    rating: 5,
  },
  {
    name: "Priya Singh",
    text: "The staff is very knowledgeable and helpful. They delivered on time, every time.",
    rating: 5,
  },
  {
    name: "Anand Gupta",
    text: "Best pharmacy in Varanasi. Genuine medicines, fair prices, and a warm welcome always.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div style={{ color: "#f59e0b", fontSize: 18, marginBottom: 6 }}>
      {"★".repeat(count)}
    </div>
  );
}

function useScrollReveal(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function RevealSection({ children, style = {} }) {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "'Lora', Georgia, serif", background: "#fafaf7", color: "#1a1a1a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f0f0eb; }
        ::-webkit-scrollbar-thumb { background: #2e7d32; border-radius: 3px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:1} 100%{transform:scale(1.6);opacity:0} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
        .nav-link { cursor:pointer; font-family:'Nunito',sans-serif; font-weight:700; font-size:15px; letter-spacing:.5px; padding:8px 4px; border-bottom:2px solid transparent; transition:all .25s; color:#1a1a1a; }
        .nav-link:hover, .nav-link.active { color:#2e7d32; border-bottom-color:#2e7d32; }
        .cta-btn { background:linear-gradient(135deg,#2e7d32,#43a047); color:#fff; border:none; padding:14px 32px; border-radius:50px; font-family:'Nunito',sans-serif; font-weight:800; font-size:16px; cursor:pointer; transition:all .3s; box-shadow:0 4px 20px rgba(46,125,50,.35); }
        .cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(46,125,50,.45); }
        .cta-btn-outline { background:transparent; color:#2e7d32; border:2px solid #2e7d32; padding:12px 28px; border-radius:50px; font-family:'Nunito',sans-serif; font-weight:800; font-size:15px; cursor:pointer; transition:all .3s; }
        .cta-btn-outline:hover { background:#2e7d32; color:#fff; }
        .service-card { background:#fff; border-radius:20px; padding:32px 28px; transition:all .35s; cursor:default; border:1px solid #f0f0e8; }
        .service-card:hover { transform:translateY(-8px); box-shadow:0 20px 50px rgba(0,0,0,.1); }
        .form-input { width:100%; padding:14px 18px; border:1.5px solid #e0e0d8; border-radius:12px; font-family:'Nunito',sans-serif; font-size:15px; outline:none; transition:border .25s; background:#fafaf7; }
        .form-input:focus { border-color:#2e7d32; }
        textarea.form-input { resize:vertical; min-height:110px; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,.08)" : "none",
        transition: "all .35s",
        padding: scrolled ? "12px 0" : "20px 0",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#2e7d32,#66bb6a)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
              ⚕️
            </div>
            <div>
              <div style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 18, color: "#2e7d32", lineHeight: 1.1 }}>Banaras</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: 11, color: "#666", letterSpacing: 2, textTransform: "uppercase" }}>Pharmacy</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
            {NAV_LINKS.map(l => (
              <span key={l} className={`nav-link ${activeSection === l ? "active" : ""}`} onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
            ))}
            <button className="cta-btn" style={{ padding: "10px 22px", fontSize: 14 }} onClick={() => scrollTo("contact")}>
              📞 Call Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setNavOpen(!navOpen)} style={{ display: "none", background: "none", border: "none", fontSize: 26, cursor: "pointer", color: "#2e7d32" }} className="hamburger">
            {navOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #f0f0e8", padding: "16px 24px", animation: "fadeDown .25s ease" }}>
            {NAV_LINKS.map(l => (
              <div key={l} style={{ padding: "12px 0", borderBottom: "1px solid #f5f5f0", fontFamily: "'Nunito',sans-serif", fontWeight: 700, cursor: "pointer", color: "#2e7d32" }} onClick={() => scrollTo(l.toLowerCase())}>{l}</div>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .hero-grid { flex-direction: column !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .about-grid { flex-direction: column !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f1f8e9 0%,#e8f5e9 40%,#fff9c4 100%)", display: "flex", alignItems: "center", paddingTop: 100, position: "relative", overflow: "hidden" }}>
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(76,175,80,.15),transparent 70%)", borderRadius: "50%", animation: "float 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: 40, left: -100, width: 350, height: 350, background: "radial-gradient(circle,rgba(255,193,7,.12),transparent 70%)", borderRadius: "50%", animation: "float 8s ease-in-out infinite reverse" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, position: "relative" }} className="hero-grid">
          <div style={{ flex: 1, maxWidth: 580 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,125,50,.1)", borderRadius: 50, padding: "8px 18px", marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, background: "#2e7d32", borderRadius: "50%", display: "inline-block", position: "relative" }}>
                <span style={{ position: "absolute", inset: -3, border: "2px solid #2e7d32", borderRadius: "50%", animation: "pulse-ring 1.5s infinite" }} />
              </span>
              <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, color: "#2e7d32", letterSpacing: 1 }}>OPEN 24 HOURS · 7 DAYS A WEEK</span>
            </div>

            <h1 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 700, lineHeight: 1.15, color: "#1a2e1a", marginBottom: 20 }}>
              Your Trusted<br />
              <span style={{ color: "#2e7d32", fontStyle: "italic" }}>Health Partner</span><br />
              in Varanasi
            </h1>

            <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 17, color: "#4a5568", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              Banaras Pharmacy has served the people of Kashi for over 15 years — with genuine medicines, expert guidance, and a promise to always be here when you need us most.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="cta-btn" onClick={() => scrollTo("services")}>Explore Services →</button>
              <button className="cta-btn-outline" onClick={() => scrollTo("contact")}>Get Directions</button>
            </div>

            <div style={{ marginTop: 40, display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["✅ Licensed Pharmacists", "✅ Genuine Medicines", "✅ Free Consultation"].map(t => (
                <span key={t} style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, fontWeight: 700, color: "#2e7d32" }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <div style={{ width: 320, height: 320, background: "linear-gradient(135deg,#2e7d32,#66bb6a)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 140, boxShadow: "0 30px 80px rgba(46,125,50,.3)", animation: "float 5s ease-in-out infinite", position: "relative" }}>
              💊
              <div style={{ position: "absolute", top: 16, right: 20, background: "#fff", borderRadius: 50, padding: "8px 14px", fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: "#2e7d32", boxShadow: "0 4px 15px rgba(0,0,0,.1)" }}>
                24/7 🌙
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS MARQUEE */}
      <div style={{ background: "#2e7d32", padding: "20px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 20s linear infinite", width: "max-content" }}>
          {[...STATS, ...STATS, ...STATS, ...STATS].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 40px", whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 22, color: "#fff" }}>{s.value}</span>
              <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: "rgba(255,255,255,.75)" }}>{s.label}</span>
              <span style={{ color: "rgba(255,255,255,.3)", marginLeft: 20 }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealSection>
            <div style={{ display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }} className="about-grid">
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ width: 60, height: 4, background: "linear-gradient(90deg,#2e7d32,#66bb6a)", borderRadius: 2, marginBottom: 16 }} />
                <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: "#2e7d32", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>About Us</p>
                <h2 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#1a2e1a", lineHeight: 1.2, marginBottom: 24 }}>
                  Rooted in Banaras,<br /><span style={{ fontStyle: "italic", color: "#2e7d32" }}>Committed to Health</span>
                </h2>
                <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
                  Established in the heart of Varanasi, Banaras Pharmacy was born from a simple belief — everyone deserves access to quality healthcare, at any hour, without compromise.
                </p>
                <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 32 }}>
                  Our team of licensed pharmacists brings warmth, expertise, and precision to every interaction. From a single tablet to critical equipment, we ensure nothing stands between you and your health.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {[
                    { icon: "🏅", label: "Licensed & Certified" },
                    { icon: "🌿", label: "Genuine Products Only" },
                    { icon: "💙", label: "Patient-First Approach" },
                    { icon: "📦", label: "Pan-Varanasi Delivery" },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, background: "#f8fdf8", padding: "14px 16px", borderRadius: 12, border: "1px solid #e8f5e9" }}>
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, color: "#2e7d32" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ flex: 1, minWidth: 280, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {STATS.map((s) => (
                  <div key={s.label} style={{ background: "linear-gradient(135deg,#f1f8e9,#e8f5e9)", borderRadius: 20, padding: "32px 20px", textAlign: "center", border: "1px solid #c8e6c9" }}>
                    <div style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 40, color: "#2e7d32" }}>{s.value}</div>
                    <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: "#555", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px", background: "#fafaf7" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ width: 60, height: 4, background: "linear-gradient(90deg,#2e7d32,#66bb6a)", borderRadius: 2, margin: "0 auto 16px" }} />
              <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: "#2e7d32", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>What We Offer</p>
              <h2 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#1a2e1a" }}>
                Services Built Around <span style={{ fontStyle: "italic", color: "#2e7d32" }}>Your Wellbeing</span>
              </h2>
            </div>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }} className="services-grid">
            {SERVICES.map((s, i) => (
              <RevealSection key={s.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-card">
                  <div style={{ width: 64, height: 64, background: s.color, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, marginBottom: 20 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 20, color: "#1a2e1a", marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, color: "#666", lineHeight: 1.7 }}>{s.desc}</p>
                  <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: s.accent, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13 }}>
                    Learn more <span>→</span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(160deg,#1a2e1a,#2e7d32)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: "#a5d6a7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Testimonials</p>
              <h2 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#fff" }}>
                What Our Customers <span style={{ fontStyle: "italic", color: "#a5d6a7" }}>Say About Us</span>
              </h2>
            </div>
          </RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }} className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <RevealSection key={t.name} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div style={{ background: "rgba(255,255,255,.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 20, padding: "32px 28px" }}>
                  <StarRating count={t.rating} />
                  <p style={{ fontFamily: "'Lora',serif", fontStyle: "italic", fontSize: 16, color: "rgba(255,255,255,.9)", lineHeight: 1.75, marginBottom: 20 }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#66bb6a,#a5d6a7)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 18, color: "#1a2e1a" }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: "#fff", fontSize: 15 }}>{t.name}</div>
                      <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: "#a5d6a7" }}>Verified Customer</div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ width: 60, height: 4, background: "linear-gradient(90deg,#2e7d32,#66bb6a)", borderRadius: 2, margin: "0 auto 16px" }} />
              <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: "#2e7d32", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
              <h2 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#1a2e1a" }}>
                We're Here <span style={{ fontStyle: "italic", color: "#2e7d32" }}>For You — Always</span>
              </h2>
            </div>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">
            {/* Info */}
            <RevealSection>
              <div>
                <div style={{ background: "#f8fdf8", borderRadius: 20, padding: 32, border: "1px solid #e8f5e9", marginBottom: 24 }}>
                  <h3 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 22, marginBottom: 24, color: "#1a2e1a" }}>Store Information</h3>
                  {[
                    { icon: "📍", label: "Address", value: "Near Bhelupur Chowk, Varanasi, Uttar Pradesh – 221010" },
                    { icon: "🕐", label: "Hours", value: "Open 24 Hours / 7 Days a Week" },
                    { icon: "📞", label: "Phone", value: "+91 98765 XXXXX" },
                    { icon: "✉️", label: "Email", value: "banaraspharmacy@gmail.com" },
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
                      <div style={{ width: 44, height: 44, background: "linear-gradient(135deg,#e8f5e9,#c8e6c9)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 12, color: "#2e7d32", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, color: "#444" }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map embed */}
                <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #e8f5e9", height: 240 }}>
                  <iframe
                    title="Banaras Pharmacy Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4!2d82.9908094!3d25.3135132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dd2244f4491%3A0x1a5747d84213a245!2sBanaras%20Pharmacy!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </RevealSection>

            {/* Form */}
            <RevealSection>
              <div style={{ background: "#fafaf7", borderRadius: 20, padding: 36, border: "1px solid #f0f0e8" }}>
                <h3 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 22, marginBottom: 8, color: "#1a2e1a" }}>Send Us a Message</h3>
                <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: "#777", marginBottom: 28 }}>Have a question about a medicine or service? We'll get back to you soon.</p>

                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div style={{ fontSize: 56, marginBottom: 16 }}>💚</div>
                    <h4 style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 22, color: "#2e7d32", marginBottom: 10 }}>Message Received!</h4>
                    <p style={{ fontFamily: "'Nunito',sans-serif", color: "#666" }}>Thank you for reaching out. Our team will respond shortly.</p>
                    <button className="cta-btn" style={{ marginTop: 24 }} onClick={() => setSubmitted(false)}>Send Another</button>
                  </div>
                ) : (
                  <div>
                    <div style={{ marginBottom: 18 }}>
                      <label style={{ display: "block", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, color: "#444", marginBottom: 6 }}>Your Name</label>
                      <input className="form-input" placeholder="e.g. Rahul Mishra" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <label style={{ display: "block", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, color: "#444", marginBottom: 6 }}>Phone Number</label>
                      <input className="form-input" placeholder="e.g. +91 98765 43210" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ display: "block", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 13, color: "#444", marginBottom: 6 }}>Message</label>
                      <textarea className="form-input" placeholder="Ask about medicine availability, delivery, or anything else..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    <button className="cta-btn" style={{ width: "100%" }} onClick={handleSubmit}>Send Message 💬</button>
                  </div>
                )}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a2e1a", padding: "48px 24px 24px", color: "rgba(255,255,255,.7)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
            <div style={{ maxWidth: 320 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#2e7d32,#66bb6a)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⚕️</div>
                <div>
                  <div style={{ fontFamily: "'Lora',serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>Banaras Pharmacy</div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 11, color: "#a5d6a7", letterSpacing: 2 }}>VARANASI · OPEN 24/7</div>
                </div>
              </div>
              <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, lineHeight: 1.7 }}>Your trusted health partner in the heart of Kashi — providing genuine medicines and compassionate care since day one.</p>
            </div>
            <div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: "#a5d6a7", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Quick Links</div>
              {NAV_LINKS.map(l => (
                <div key={l} style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, marginBottom: 10, cursor: "pointer", transition: "color .2s" }} onClick={() => scrollTo(l.toLowerCase())}
                  onMouseEnter={e => e.target.style.color = "#a5d6a7"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.7)"}
                >{l}</div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: "#a5d6a7", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
              {["📍 Bhelupur, Varanasi, UP", "📞 +91 98765 XXXXX", "✉️ banaraspharmacy@gmail.com", "🕐 24/7 · Always Open"].map(t => (
                <div key={t} style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, marginBottom: 10 }}>{t}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 24, textAlign: "center", fontFamily: "'Nunito',sans-serif", fontSize: 13 }}>
            © {new Date().getFullYear()} Banaras Pharmacy, Varanasi. Made with 💚 for the people of Kashi.
          </div>
        </div>
      </footer>
    </div>
  );
}