import "./App.css";

function App() {
  return (
    <div>

      {/* HERO (BOXED) */}
      <div className="page">
        <section className="hero">
          <h1>Marketing Core</h1>
          <p className="tagline">
            AI-Powered Marketing For Smart Business Owners
          </p>
          <p className="sub">
            Plan. Create. Analyze. Grow. — All in one intelligent platform.
          </p>
          <p className="prelaunch-note">
            🚀 Pre-launch — Join early to get exclusive access!
          </p>

          <div className="buttons">
            <a
              href="http://eepurl.com/jzzA-6"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Get 1 Month Free
            </a>

            <a href="#community" className="btn secondary">
              Join Community
            </a>
          </div>
        </section>
      </div>

      {/* HOW IT WORKS (FULL WIDTH) */}
      <section className="section full">
        <div className="container">
          <h2>How It Works</h2>

          <div className="grid">
            <div className="card">
              <h3>1️⃣ Connect Your Account</h3>
              <p>
                Link Instagram, Facebook and other platforms in one place.
              </p>
            </div>

            <div className="card">
              <h3>2️⃣ Choose a Template</h3>
              <p>
                Select ready made promotional templates tailored for businesses.
              </p>
            </div>

            <div className="card">
              <h3>3️⃣ Publish Everywhere & Track Performance</h3>
              <p>
                Publish across all platforms instantly and monitor engagement,
                reach, and growth from one intelligent dashboard.
              </p>
            </div>

            <div className="card">
              <h3>4️⃣ AI Analysis & Optimization</h3>
              <p>
                Marketing Core analyzes your content performance and provides
                intelligent suggestions to improve engagement and increase sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS (BOXED) */}
      <div className="page">
        <section className="section highlight" id="register">
          <h2>Early Access Offer</h2>
          <p>
            The first businesses to register before launch receive
            <strong> 1 Month Free Premium Access</strong>.
          </p>

          {/* SHIFTED BUTTON */}
          <div style={{ marginTop: "25px" }}>
            <a
              href="http://eepurl.com/jzzA-6"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Register Now
            </a>
          </div>
        </section>
      </div>

      {/* FOUNDING MEMBER (FULL WIDTH) */}
      <section className="section founding full">
        <div className="container">
          <h2>Why Become a Founding Member?</h2>

          <div className="grid">
            <div className="card">
              <h3>🚀 1 Month Free Access</h3>
              <p>
                Enjoy full premium access free for your first month when we launch.
              </p>
            </div>

            <div className="card">
              <h3>🧠 Help Shape The Platform</h3>
              <p>
                As an early member, your feedback directly influences new features
                and future improvements.
              </p>
            </div>

            <div className="card">
              <h3>🤝 Direct Access To The Founder</h3>
              <p>
                Founding members receive priority communication and exclusive
                insider updates.
              </p>
            </div>

            <div className="card">
              <h3>🔥 Early Competitive Advantage</h3>
              <p>
                Master AI-powered marketing before your competitors and gain
                momentum ahead of the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY (BOXED) */}
      <div className="page">
        <section className="section" id="community">
          <h2>Join The Community</h2>
          <p>Stay updated before launch:</p>

          <div className="buttons">
            <a
              href="https://whatsapp.com/channel/0029Vb7BQR0Dp2QAPeIUZM3f"
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp"
            >
              WhatsApp
            </a>

            <a
              href="https://t.me/+QLa52_5JpBMxYTJk"
              target="_blank"
              rel="noreferrer"
              className="btn telegram"
            >
              Telegram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn linkedin"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* DONATION */}
        <section className="section">
          <h2>Support The Project</h2>
          <p>
            Help us accelerate development and bring Marketing Core to life.
          </p>

          {/* SHIFTED BUTTON */}
          <div style={{ marginTop: "25px" }}>
            <a
              href="https://your-donation-link.com"
              target="_blank"
              rel="noreferrer"
              className="btn donation"
            >
              Donate

               

            </a>

              <p className="disclaimer">
              No refunds
              </p>
              
          </div>
        </section>

        {/* SUBMIT SUGGESTION */}
        <section className="section">
          <div className="card">
            <h3>📈 Stay One Step Ahead</h3>
            <p>
              The businesses that adopt early are the ones that dominate later.
              Join now and position your brand ahead of competitors before the
              rest of the market catches up.
            </p>

            {/* SHIFTED BUTTON */}
            <div style={{ marginTop: "25px" }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSek1BBosTggGinxK93xbFY2dEiUbEWY_okuZrq0KrOnmKVpCA/viewform?usp=header"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Submit Suggestion
              </a>
            </div>

            
            
          
          </div>
        </section>
      </div>

      {/* FOOTER */}
<footer className="page" style={{ textAlign: "center", padding: "20px 0", color: "#94a3b8", fontSize: "14px" }}>
  © {new Date().getFullYear()} Marketing Core. All rights reserved.
</footer>
 
    </div>

     
  );
}

export default App;