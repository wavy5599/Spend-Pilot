import { useState } from "react";
import "./App.css";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="badge">{children}</span>
);
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="pill">{children}</span>
);

function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="cardTitle">{title}</div>
      <div className="muted">{desc}</div>
    </div>
  );
}

const NAV = [
  ["features", "features"],
  ["security", "security"],
  ["pricing", "pricing"],
  ["faq", "faq"],
] as const;

const STATS = [
  { label: "avg time saved / week", value: "3.5 hrs" },
  { label: "instant card controls", value: "always on" },
  { label: "fraud monitoring", value: "24/7" },
];

const BADGES = ["fdic-style messaging (demo)", "instant transfers", "smart insights"];

const MINI = [
  { label: "savings", value: "$7,421.20" },
  { label: "cashback", value: "$42.18" },
  { label: "credit util.", value: "34%" },
  { label: "alerts", value: "2" },
];

const TX = [
  { dir: "↘", merchant: "walmart", meta: "groceries • today", amt: "-$52.11", tone: "neg" },
  { dir: "↘", merchant: "spotify", meta: "subscription • yesterday", amt: "-$10.99", tone: "neg" },
  { dir: "↗", merchant: "doordash", meta: "income • jan 2", amt: "+$64.17", tone: "pos" },
] as const;

const FEATURES = [
  { icon: "⚡", title: "instant transfers", desc: "move money fast with clean confirmations and zero drama." },
  { icon: "🛡️", title: "smart protection", desc: "real-time fraud signals + quick card lock from any device." },
  { icon: "💸", title: "cashback built-in", desc: "earn on everyday categories without hunting for coupons." },
  { icon: "📊", title: "spending clarity", desc: "auto-categories and simple insights you’ll actually use." },
  { icon: "🔑", title: "secure sign-in", desc: "passkeys-ready patterns and strong session hygiene (demo)." },
  { icon: "🤝", title: "human support", desc: "fast help when you need it — no endless ticket purgatory." },
];

const QUOTES = [
  { stars: "★★★★★", text: "“the spending view is actually readable. feels premium.”", who: "— alex, student" },
  { stars: "★★★★★", text: "“card lock + alerts saved me once. i’m not going back.”", who: "— jamie, creator" },
  { stars: "★★★★★", text: "“the UI is calm. makes me feel in control of my money.”", who: "— sam, freelancer" },
];

const PRICING = [
  {
    name: "starter",
    price: "$0",
    sub: "for personal basics",
    perks: ["✓ checking + savings view", "✓ basic insights", "✓ card controls"],
    cta: "get started",
    featured: false,
  },
  {
    name: "plus",
    price: "$9",
    sub: "per month",
    perks: ["✓ advanced insights", "✓ auto-budgets", "✓ priority support"],
    cta: "start plus",
    featured: true,
    tag: "most popular",
  },
  {
    name: "team",
    price: "$29",
    sub: "per month",
    perks: ["✓ shared wallets", "✓ approvals + roles", "✓ export + reporting"],
    cta: "contact sales",
    featured: false,
  },
];

const FAQ = [
  {
    q: "is this a real bank?",
    a: "this is a demo marketing homepage. wire up real compliance + banking rails later.",
  },
  {
    q: "can i use this as a startup landing page?",
    a: "yep. swap the copy, hook the buttons to routes, add auth later.",
  },
  {
    q: "what should “get started” do?",
    a: "typically: /signup, or a waitlist form, or a Calendly link for B2B.",
  },
];

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="lp">
      <header className="nav">
        <div className="navInner">
          <div className="brand">
            <div className="dot" />
            <div className="brandText">
              <div className="brandName">vaultbank</div>
              <div className="brandTag">modern banking, simplified</div>
            </div>
          </div>

          <nav className="links">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="navCtas">
            <Button variant="ghost">sign in</Button>
            <Button>get started</Button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div className="heroLeft">
            <div className="heroBadges">
              {BADGES.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>

            <h1 className="h1">
              a cleaner way to <span className="glow">bank</span>.
            </h1>
            <p className="p">
              vaultbank helps you spend smarter, save faster, and stay protected — with a simple, modern experience that
              feels premium.
            </p>

            <div className="ctaRow">
              <div className="emailBox">
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email address" />
                <Button onClick={() => alert("demo: waitlist submitted!")}>join waitlist</Button>
              </div>
              <Button variant="ghost">see demo</Button>
            </div>

            <div className="fineprint">no spam. product updates only. cancel anytime.</div>

            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="statValue">{s.value}</div>
                  <div className="statLabel">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="heroRight">
            <div className="glassCard">
              <div className="glassTop">
                <div>
                  <div className="mutedSmall">vaultbank checking</div>
                  <div className="bigMoney">$3,284.55</div>
                </div>
                <Pill>live</Pill>
              </div>

              <div className="miniGrid">
                {MINI.map((m) => (
                  <div className="mini" key={m.label}>
                    <div className="mutedSmall">{m.label}</div>
                    <div className="miniValue">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="txBox">
                <div className="txTitle">recent activity</div>
                {TX.map((t) => (
                  <div className="txRow" key={t.merchant}>
                    <div className="txLeft">
                      <div className="txIcon">{t.dir}</div>
                      <div>
                        <div className="txMerchant">{t.merchant}</div>
                        <div className="mutedSmall">{t.meta}</div>
                      </div>
                    </div>
                    <div className={`txAmt ${t.tone}`}>{t.amt}</div>
                  </div>
                ))}
              </div>

              <div className="glassBottom">
                <Button>open an account</Button>
                <Button variant="ghost">learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="stripInner">
          <span className="muted">built for:</span>
          {["students", "creators", "freelancers", "small teams"].map((t, i, arr) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span className="logoText">{t}</span>
              {i < arr.length - 1 && <span className="dotSep" />}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="features">
        <div className="sectionInner">
          <div className="sectionHead">
            <h2>everything you need, nothing you don’t</h2>
            <p className="muted">modern controls, clear analytics, and protections that actually feel simple.</p>
          </div>

          <div className="grid">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="security">
        <div className="sectionInner split">
          <div>
            <h2>security that feels invisible</h2>
            <p className="muted">
              vaultbank is designed around secure defaults: less clutter, fewer risky flows, clearer confirmations.
            </p>

            <div className="bullets">
              {[
                "device + session monitoring patterns",
                "instant card freeze, limits, and merchant controls",
                "exportable activity logs for peace of mind",
              ].map((x) => (
                <div className="bullet" key={x}>
                  <span className="check">✓</span>
                  {x}
                </div>
              ))}
            </div>

            <div className="callout">
              <div className="calloutTitle">pro tip</div>
              <div className="muted">keep your credit utilization under ~30% for the cleanest profile long-term.</div>
            </div>
          </div>

          <div className="stackCard">
            <div className="stackTop">
              <div>
                <div className="mutedSmall">security status</div>
                <div className="stackTitle">protected</div>
              </div>
              <Pill>active</Pill>
            </div>

            <div className="stackRows">
              {[
                ["card controls", "enabled"],
                ["alerts", "2 recent"],
                ["login health", "strong"],
              ].map(([k, v]) => (
                <div className="stackRow" key={k}>
                  <span className="mutedSmall">{k}</span>
                  <b>{v}</b>
                </div>
              ))}
            </div>

            <div className="stackBtns">
              <Button>lock card</Button>
              <Button variant="ghost">manage limits</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionInner">
          <div className="sectionHead">
            <h2>people like clean money apps</h2>
            <p className="muted">short, believable quotes. swap these later with real users.</p>
          </div>

          <div className="grid3">
            {QUOTES.map((q) => (
              <div className="quote" key={q.who}>
                <div className="stars">{q.stars}</div>
                <div className="qText">{q.text}</div>
                <div className="mutedSmall">{q.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="pricing">
        <div className="sectionInner">
          <div className="sectionHead">
            <h2>simple pricing</h2>
            <p className="muted">start free. upgrade when you want more automation.</p>
          </div>

          <div className="pricing">
            {PRICING.map((p) => (
              <div key={p.name} className={`priceCard ${p.featured ? "featured" : ""}`}>
                {p.featured && <div className="featuredTag">{p.tag ?? "most popular"}</div>}

                <div className="priceTop">
                  <div className="priceName">{p.name}</div>
                  <div className="priceNum">{p.price}</div>
                  <div className="mutedSmall">{p.sub}</div>
                </div>

                <div className="priceList">
                  {p.perks.map((x) => (
                    <div key={x}>{x}</div>
                  ))}
                </div>

                <Button>{p.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="sectionInner">
          <div className="sectionHead">
            <h2>faq</h2>
            <p className="muted">quick answers — keep it short and confident.</p>
          </div>

          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="muted">{f.a}</div>
              </details>
            ))}
          </div>

          <div className="finalCta">
            <div>
              <div className="finalTitle">ready to launch?</div>
              <div className="muted">ship the homepage first, then add signup + dashboard after.</div>
            </div>
            <div className="finalBtns">
              <Button>get started</Button>
              <Button variant="ghost">talk to sales</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <div className="brand">
              <div className="dot" />
              <div className="brandText">
                <div className="brandName">vaultbank</div>
                <div className="brandTag">modern banking, simplified</div>
              </div>
            </div>
            <div className="mutedSmall" style={{ marginTop: 10 }}>
              © {new Date().getFullYear()} vaultbank. demo UI only.
            </div>
          </div>

          <div className="footerCols">
            {[
              { title: "product", links: ["features", "pricing", "security"] },
              { title: "company", links: ["faq", "pricing", "features"] },
              { title: "legal", links: ["faq", "faq", "faq"] },
            ].map((c) => (
              <div className="col" key={c.title}>
                <div className="colTitle">{c.title}</div>
                {c.links.map((id, i) => (
                  <a key={`${id}-${i}`} href={`#${id}`}>
                    {id === "pricing" && c.title === "company" ? "contact" : id}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
