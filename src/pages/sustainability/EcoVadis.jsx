import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "EcoVadis",
  "CSR rating",
  "Environment",
  "Labor & human rights",
  "Ethics",
  "Sustainable procurement",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "ESG",
];
const themes = [
  {
    n: "01",
    h: "Environment",
    p: "How well you manage your impact on the planet, from the policies you hold to the actions you take and the results you report.",
    cats: [
      "Energy & emissions",
      "Water",
      "Waste & resource use",
      "Biodiversity",
      "Pollution prevention",
      "Product use & end of life",
    ],
    radarIndex: 0,
  },
  {
    n: "02",
    h: "Labor & Human Rights",
    p: "How you treat the people who work for you, with evidence of fair, safe and respectful practices across your operations.",
    cats: [
      "Working conditions",
      "Health & safety",
      "Training & development",
      "Social dialogue",
      "Human rights",
      "Diversity & inclusion",
    ],
    radarIndex: 1,
  },
  {
    n: "03",
    h: "Ethics",
    p: "How you prevent misconduct and run the business with integrity, including the systems that let people raise concerns.",
    cats: [
      "Anti-corruption",
      "Fair competition",
      "Responsible information management",
      "Whistleblowing channels",
      "Business conduct policies",
    ],
    radarIndex: 2,
  },
  {
    n: "04",
    h: "Sustainable Procurement",
    p: "How you extend responsible practices through your supply chain by setting expectations for suppliers and checking they are met.",
    cats: [
      "Supplier code of conduct",
      "Supplier environmental practices",
      "Supplier social practices",
      "Supplier assessments & audits",
    ],
    radarIndex: 3,
  },
];
const medals = [
  {
    name: "Bronze",
    tier: "MEDAL 1",
    pct: "Top 35%",
    width: "100%",
  },
  {
    name: "Silver",
    tier: "MEDAL 2",
    pct: "Top 15%",
    width: "46%",
  },
  {
    name: "Gold",
    tier: "MEDAL 3",
    pct: "Top 5%",
    width: "20%",
  },
  {
    name: "Platinum",
    tier: "MEDAL 4",
    pct: "Top 1%",
    width: "8%",
  },
];
export default function EcoVadis() {
  const [activeTheme, setActiveTheme] = useState(0);
  const currentTheme = themes[activeTheme];
  return (
    <div className="eco-page">
      <section className="eco-hero dark">
        <div className="eco-hero-bg" aria-hidden="true" />
        <div className="eco-wrap eco-hg">
          <div>
            <p className="eco-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>EcoVadis Certification</b>
            </p>
            <h1>
              {"Elevate your sustainability profile with "}
              <span>globally respected CSR ratings.</span>
            </h1>
            <p className="eco-lead">
              EcoVadis assesses your company’s sustainability practices and turns them into a
              scorecard that global clients and partners trust. We help you get rated and
              recognised.
            </p>
            <div className="eco-acts">
              <Link className="eco-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="eco-btn o" href="#what">
                {"What is EcoVadis? "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="eco-glass" aria-label="EcoVadis theme scorecard overview">
            <div className="top">
              <span>Sustainability scorecard</span>
              <b>4 themes</b>
            </div>
            <svg
              className="eco-radar"
              viewBox="0 0 400 340"
              role="img"
              aria-label="Interactive radar chart for the four EcoVadis themes"
            >
              <g>
                <polygon className="eco-rg" points="200,138 232,170 200,202 168,170" />
                <polygon className="eco-rg" points="200,106 264,170 200,234 136,170" />
                <polygon className="eco-rg" points="200,75 295,170 200,265 105,170" />
                <line className="eco-ra" x1="200" y1="75" x2="200" y2="265" />
                <line className="eco-ra" x1="105" y1="170" x2="295" y2="170" />
              </g>
              <polygon className="eco-rp" points="200,92 263,170 200,240 146,170" />
              <circle
                className={`eco-rd ${activeTheme === 0 ? "on" : ""}`}
                cx="200"
                cy="92"
                r="4.5"
                onClick={() => setActiveTheme(0)}
              />
              <text
                className={`eco-rt ${activeTheme === 0 ? "on" : ""}`}
                x="200"
                y="54"
                textAnchor="middle"
                onClick={() => setActiveTheme(0)}
              >
                ENVIRONMENT
              </text>
              <circle
                className={`eco-rd ${activeTheme === 1 ? "on" : ""}`}
                cx="263"
                cy="170"
                r="4.5"
                onClick={() => setActiveTheme(1)}
              />
              <text
                className={`eco-rt ${activeTheme === 1 ? "on" : ""}`}
                x="392"
                y="174"
                textAnchor="end"
                onClick={() => setActiveTheme(1)}
              >
                {"LABOR & HR"}
              </text>
              <circle
                className={`eco-rd ${activeTheme === 2 ? "on" : ""}`}
                cx="200"
                cy="240"
                r="4.5"
                onClick={() => setActiveTheme(2)}
              />
              <text
                className={`eco-rt ${activeTheme === 2 ? "on" : ""}`}
                x="200"
                y="296"
                textAnchor="middle"
                onClick={() => setActiveTheme(2)}
              >
                ETHICS
              </text>
              <circle
                className={`eco-rd ${activeTheme === 3 ? "on" : ""}`}
                cx="146"
                cy="170"
                r="4.5"
                onClick={() => setActiveTheme(3)}
              />
              <text
                className={`eco-rt ${activeTheme === 3 ? "on" : ""}`}
                x="8"
                y="174"
                onClick={() => setActiveTheme(3)}
              >
                PROCUREMENT
              </text>
            </svg>
            <p className="cap">Illustration only. Not a real score.</p>
          </div>
        </div>
        <div className="eco-wrap eco-life">
          <div
            onClick={() => setActiveTheme(0)}
            style={{
              cursor: "pointer",
            }}
          >
            <small>Theme 01</small>
            <b>Environment</b>
          </div>
          <div
            onClick={() => setActiveTheme(1)}
            style={{
              cursor: "pointer",
            }}
          >
            <small>Theme 02</small>
            <b>{"Labor & Human Rights"}</b>
          </div>
          <div
            onClick={() => setActiveTheme(2)}
            style={{
              cursor: "pointer",
            }}
          >
            <small>Theme 03</small>
            <b>Ethics</b>
          </div>
          <div
            onClick={() => setActiveTheme(3)}
            style={{
              cursor: "pointer",
            }}
          >
            <small>Theme 04</small>
            <b>Sustainable Procurement</b>
          </div>
        </div>
      </section>
      <div className="eco-tape" aria-hidden="true">
        <div className="eco-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="eco-sec" id="what">
        <div className="eco-wrap">
          <div className="eco-wh">
            <div>
              <span className="eco-lab">What is EcoVadis certification?</span>
              <h2 className="eco-h2">
                {"A trusted "}
                <em>sustainability</em>
                {" scorecard for your business."}
              </h2>
              <p className="def">
                <b>EcoVadis</b>
                {
                  " assesses your company’s sustainability practices across labor & human rights, environment, ethics, and procurement, helping build trust with global clients and partners."
                }
              </p>
              <p className="def">
                {
                  "Think of it as a credit score for corporate responsibility. You submit your policies, actions and evidence. Independent analysts review them against a standard method and give you a "
                }
                <b>scorecard with an overall score and a score for each theme</b>.
              </p>
              <p className="def">
                {"Companies that rank well earn a "}
                <b>Bronze, Silver, Gold or Platinum medal</b>. Many large buyers use these ratings
                to compare and select suppliers, which is why more and more businesses are asked for
                one.
              </p>
              <p className="eco-disc">
                EcoVadis is an independent rating platform and awards all scores and medals itself.
                Meridian is an independent consultancy that helps you prepare; we do not issue
                ratings.
              </p>
            </div>
            <div className="eco-flow">
              <span className="eco-lab">How the rating works</span>
              <h3>Three stages from submission to medal.</h3>
              <ol>
                <li>
                  <b>1</b>
                  <strong>Submit your evidence</strong>
                  <span>
                    Answer the assessment and upload policies, KPIs and proof across the four
                    themes.
                  </span>
                </li>
                <li>
                  <b>2</b>
                  <strong>Expert review</strong>
                  <span>
                    EcoVadis analysts evaluate your submission using a standardised methodology.
                  </span>
                </li>
                <li>
                  <b>3</b>
                  <strong>{"Scorecard & medal"}</strong>
                  <span>
                    You receive an overall score, a score per theme, and a medal if you rank in the
                    top group.
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div className="eco-facts">
            <div className="eco-fact">
              <b>4</b>
              <span>Themes</span>
              <p>{"Environment, Labor & Human Rights, Ethics and Sustainable Procurement."}</p>
            </div>
            <div className="eco-fact">
              <b>0–100</b>
              <span>Theme scores</span>
              <p>
                Each theme is scored on its own scale, so you can see exactly where you are strong
                or weak.
              </p>
            </div>
            <div className="eco-fact">
              <b>4</b>
              <span>Medals</span>
              <p>
                Bronze, Silver, Gold and Platinum, awarded by how you rank against other rated
                companies.
              </p>
            </div>
            <div className="eco-fact">
              <b>Top 35%</b>
              <span>Earn a medal</span>
              <p>
                Only the leading group of assessed companies receives a medal, so the bar keeps
                rising.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="eco-sec eco-ex" id="themes">
        <div className="eco-wrap">
          <div className="eco-ex-h">
            <div>
              <span className="eco-lab">What gets assessed</span>
              <h2 className="eco-h2">
                {"Four themes, "}
                <em>one score.</em>
              </h2>
            </div>
            <p>Select a theme to see what EcoVadis looks at, then see how medals are awarded.</p>
          </div>
          <div className="eco-exg">
            <div className="eco-panel" data-big={currentTheme.n}>
              <div key={currentTheme.n} className="eco-pin" role="tabpanel" aria-live="polite">
                <h3>{currentTheme.h}</h3>
                <p>{currentTheme.p}</p>
                <div className="eco-cats">
                  {currentTheme.cats.map((cat, index) => (
                    <span key={index}>{cat}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="eco-tabs" role="tablist" aria-label="EcoVadis themes">
              {themes.map((theme, index) => (
                <button
                  key={theme.n}
                  className="eco-tab"
                  role="tab"
                  aria-selected={activeTheme === index}
                  onClick={() => setActiveTheme(index)}
                >
                  <small>{theme.n}</small>
                  <b>{theme.h}</b>
                </button>
              ))}
            </div>
          </div>
          <div className="eco-lv" id="medals">
            <div className="eco-lv-h">
              <div>
                <span className="eco-lab">Medal levels</span>
                <h3>
                  {"Rank higher, "}
                  <em>earn more recognition.</em>
                </h3>
              </div>
              <p>
                Medals are awarded by percentile: how your rating compares with other companies
                assessed by EcoVadis.
              </p>
            </div>
            <div className="eco-fn">
              {medals.map((medal) => (
                <div key={medal.name} className="eco-fr">
                  <div className="nm">
                    {medal.name}
                    <small>{medal.tier}</small>
                  </div>
                  <div className="eco-bw">
                    <div
                      className="eco-br"
                      style={{
                        width: medal.width,
                      }}
                    >
                      {medal.pct}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="eco-fnote">
              Bar length shows the share of assessed companies that reach each medal. Percentile
              thresholds are set by EcoVadis and can shift as more companies improve, so a strong
              score today may need to rise to keep the same medal later.
            </p>
          </div>
        </div>
      </section>
      <section className="eco-sec eco-why" id="why">
        <div className="eco-wrap">
          <div className="eco-why-h">
            <div>
              <span className="eco-lab">Why EcoVadis certification matters</span>
              <h2 className="eco-h2">
                {"Five reasons to "}
                <em>get rated.</em>
              </h2>
            </div>
            <p>A rating that customers, partners and investors already know how to read.</p>
          </div>
          <p className="eco-why-in">
            {
              "More and more multinational buyers ask their suppliers to prove how responsibly they operate. "
            }
            <b>An EcoVadis rating answers that question once, in a format buyers recognise</b>, and
            shows you exactly where to improve next.
          </p>
          <div className="eco-bento">
            <article className="eco-bn dk">
              <div className="no">01</div>
              <h3>Benchmark against industry peers.</h3>
              <p>
                Ratings are based on how you rank among other assessed companies, so you see where
                you really stand in your sector.
              </p>
            </article>
            <article className="eco-bn">
              <div className="no">02</div>
              <h3>Meet multinational client requirements.</h3>
              <p>
                Large corporations often use EcoVadis to evaluate suppliers. A scorecard lets you
                respond to those requests with one credible result.
              </p>
            </article>
            <article className="eco-bn">
              <div className="no">03</div>
              <h3>Identify sustainability gaps for improvement.</h3>
              <p>
                Your scorecard breaks performance down by theme, showing where policies, actions or
                evidence are missing.
              </p>
            </article>
            <article className="eco-bn dk">
              <div className="no">04</div>
              <h3>Increase ESG scores and investor confidence.</h3>
              <p>
                An independently reviewed, transparent rating gives investors and lenders reliable
                evidence of how you manage ESG.
              </p>
            </article>
            <article className="eco-bn">
              <div className="no">05</div>
              <h3>Improve supplier ranking and procurement visibility.</h3>
              <p>
                Buyers often set a minimum medal for suppliers. A stronger rating helps keep you on
                their shortlists.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section
        className="eco-sec eco-proc dark"
        id="roadmap"
        style={{
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        <div className="eco-wrap">
          <div className="eco-pr-h">
            <div>
              <span className="eco-lab">Our certification roadmap</span>
              <h2 className="eco-h2">
                {"Four steps to "}
                <span>your score.</span>
              </h2>
            </div>
            <p>From a first diagnostic to a clear plan for your next rating upgrade.</p>
          </div>
          <div className="eco-road">
            <div className="fill" />
            <div className="eco-st">
              <span className="dot" />
              <div className="card">
                <div className="n">01</div>
                <h3>Initial Diagnostic</h3>
                <p>
                  Assess current policies, KPIs, and documentation to identify areas for improvement
                  and alignment.
                </p>
              </div>
            </div>
            <div className="eco-st">
              <span className="dot" />
              <div className="card">
                <div className="n">02</div>
                <h3>Gap Closure</h3>
                <p>
                  Develop and implement the necessary sustainability and compliance measures to
                  address identified gaps.
                </p>
              </div>
            </div>
            <div className="eco-st">
              <span className="dot" />
              <div className="card">
                <div className="n">03</div>
                <h3>Submission Preparation</h3>
                <p>
                  Compile and organize documentation in the required EcoVadis platform format for
                  easy submission.
                </p>
              </div>
            </div>
            <div className="eco-st">
              <span className="dot" />
              <div className="card">
                <div className="n">04</div>
                <h3>{"Score Review & Improvement"}</h3>
                <p>
                  Review results, interpret findings, and strategize for future rating upgrades and
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="eco-sec eco-ben-sec" id="benefits">
        <div className="eco-wrap">
          <div className="intro">
            <span className="eco-lab">Key benefits</span>
            <h2 className="eco-h2">
              {"What you "}
              <em>gain.</em>
            </h2>
            <p>
              Four outcomes that help you win trust, keep customers and communicate your ESG story
              clearly.
            </p>
          </div>
          <ul className="eco-bl">
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="22" cy="22" r="17" />
                <path d="M5 22h34M22 5c6 5 8 11 8 17s-2 12-8 17c-6-5-8-11-8-17s2-12 8-17z" />
              </svg>
              <span>Competitive differentiation globally.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="16" cy="15" r="6" />
                <path d="M4 36c0-7 5-11 12-11s12 4 12 11" />
                <path d="M30 20l4 4 8-9" />
              </svg>
              <span>Greater client retention and acquisition.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 22s7-13 19-13 19 13 19 13-7 13-19 13S3 22 3 22z" />
                <circle cx="22" cy="22" r="5" />
              </svg>
              <span>Improved transparency in ESG practices.</span>
            </li>
            <li>
              <svg
                viewBox="0 0 44 44"
                fill="none"
                stroke="#f78d00"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="8" y="5" width="28" height="34" rx="4" />
                <path d="M15 15h14M15 22h14M15 29h8" />
              </svg>
              <span>Streamlined CSR strategy and documentation.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="eco-sec eco-mer dark" id="meridian">
        <div className="eco-wrap">
          <div className="eco-mer-h">
            <div>
              <span className="eco-lab">Why choose Meridian?</span>
              <h2 className="eco-h2">
                {"Beyond a badge. "}
                <em>Real advancement.</em>
              </h2>
            </div>
            <p>
              We act as your EcoVadis partner: aligning your operations with what the platform
              expects, so you improve your score and stand out.
            </p>
          </div>
          <div className="eco-mg">
            <div className="eco-mx">
              <i>01</i>
              <b>Audit-Ready Support</b>
              <span>We know what reviewers look for.</span>
            </div>
            <div className="eco-mx">
              <i>02</i>
              <b>Global Standards Knowledge</b>
              <span>In-depth EcoVadis expertise.</span>
            </div>
            <div className="eco-mx">
              <i>03</i>
              <b>Score Improvement Focus</b>
              <span>Not just certification, but advancement.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="eco-role">
        <div className="eco-wrap">
          <span className="eco-lab">Role of EcoVadis consultants</span>
          <p className="q">
            {"We align your operations with "}
            <span>EcoVadis expectations.</span>
          </p>
          <p className="s">Helping you improve your score and stand out.</p>
        </div>
      </section>
      <section className="eco-cta-w" id="contact">
        <div className="eco-wrap">
          <div className="eco-cta">
            <div>
              <span className="eco-lab">Free consultation</span>
              <h2>
                {"Ready to get rated "}
                <span>{"& recognised?"}</span>
              </h2>
              <p className="t">
                To begin your EcoVadis journey, book a free consultation with our team.
              </p>
              <Link className="eco-btn dk" to="/contact-us">
                {"Book a Free Consultation "}
                <i>↗</i>
              </Link>
            </div>
            <dl className="eco-ct">
              <div>
                <dt>Call us</dt>
                <dd>
                  <a
                    href="tel:+966509394640"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    +966 50 939 4640
                  </a>
                </dd>
              </div>
              <div>
                <dt>Need support</dt>
                <dd>
                  <a
                    href="mailto:info@meqmp.com"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    info@meqmp.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Our global locations</dt>
                <dd>Saudi Arabia · Bahrain · Canada · Pakistan</dd>
              </div>
            </dl>
          </div>
          <p className="eco-disclaimer">
            EcoVadis is a trademark of its respective owner. Meridian is an independent consultancy
            and is not affiliated with EcoVadis. Ratings and medals are awarded solely by EcoVadis.
          </p>
        </div>
      </section>
    </div>
  );
}
