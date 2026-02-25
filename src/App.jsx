import './App.css';

const highlights = [
  { title: 'Lightning Fast', detail: 'Vite-powered dev server keeps feedback instant.' },
  { title: 'Creative Stack', detail: 'React, modern CSS, and a sprinkle of motion.' },
  { title: 'Deployment Ready', detail: 'Optimized bundles in seconds with zero fuss.' },
];

function App() {
  return (
    <div className="app-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="hero-card">
        <p className="badge">openclaw poc · react + javascript</p>
        <h1>
          Hello, <span>World</span> 👋
        </h1>
        <p className="lede">
          A splash of color, soft glass textures, and a friendly greeting to prove the stack is wired up.
          Customize anything you like—this page is your new canvas.
        </p>
        <div className="cta-row">
          <button className="primary-btn">Explore Components</button>
          <button className="ghost-btn">View Source</button>
        </div>
      </header>

      <section className="highlights">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
