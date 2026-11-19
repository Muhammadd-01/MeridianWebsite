import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Supply chain audit",
  "Strategy design",
  "Technology integration",
  "Risk & resilience",
  "ERP",
  "WMS",
  "TMS",
  "AI/ML",
  "Sourcing",
  "Delivery",
];
const processSteps = [
  {
    step: "First step",
    num: "01",
    title: "Supply Chain Audit",
    desc: "We evaluate your end-to-end supply chain — from sourcing to warehousing — for inefficiencies and gaps.",
  },
  {
    step: "Second step",
    num: "02",
    title: "Strategy Design",
    desc: "We redesign sourcing, logistics, and inventory strategies tailored to your industry and scale.",
  },
  {
    step: "Third step",
    num: "03",
    title: "Technology Integration",
    desc: "Enable real-time visibility and predictive insights with modern tools (ERP, WMS, TMS, AI/ML).",
  },
  {
    step: "Fourth step",
    num: "04",
    title: "Risk & Resilience Framework",
    desc: "We future-proof operations with risk mitigation strategies and adaptive supplier frameworks.",
  },
];
export default function SupplyChain() {
  const [openPanel, setOpenPanel] = useState(0);
  return (
    <div className="sc-page">
      <section className="sc-hero dark" id="top">
        <div className="sc-hero-bg" aria-hidden="true" />
        <div className="sc-wrap sc-hg">
          <div>
            <p className="sc-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>{"Supply Chain Consulting & Optimization"}</b>
            </p>
            <h1>
              {"Supply chain consulting "}
              <span>{"& optimization."}</span>
            </h1>
            <p className="sc-lead">
              Unlock supply chain agility, resilience, and end-to-end efficiency for sustainable
              growth.
            </p>
            <div className="sc-acts">
              <Link className="sc-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="sc-btn o" href="#what">
                {"What is it? "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="sc-net">
            <svg
              viewBox="0 0 560 380"
              role="img"
              aria-label="Supply chain route from sourcing to delivery"
            >
              <path
                id="route"
                d="M50 310H170V190H300V280H420V110H510"
                fill="none"
                stroke="#f2e6a2"
                strokeWidth="5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <g fill="#145d68" stroke="#9fbab9" strokeWidth="2.5">
                <circle cx="50" cy="310" r="15" />
                <circle cx="170" cy="190" r="15" />
                <circle cx="420" cy="280" r="15" />
              </g>
              <circle cx="510" cy="110" r="26" fill="#f2e6a2" />
              <text
                x="510"
                y="118"
                textAnchor="middle"
                fontSize="22"
                fill="#093f50"
                fontWeight="700"
              >
                ✓
              </text>
              <g fontFamily="ui-monospace,monospace" fontSize="12" letterSpacing="2" fill="#c1d2d1">
                <text x="50" y="348" textAnchor="middle">
                  SOURCING
                </text>
                <text x="170" y="160" textAnchor="middle">
                  WAREHOUSING
                </text>
                <text x="420" y="320" textAnchor="middle">
                  TRANSPORT
                </text>
                <text x="510" y="75" textAnchor="middle">
                  DELIVERY
                </text>
              </g>
              <circle r="8" fill="#f78d00">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath href="#route" />
                </animateMotion>
              </circle>
            </svg>
            <p>From sourcing to delivery — one connected, visible flow.</p>
          </div>
        </div>
      </section>
      <div className="sc-tape" aria-hidden="true">
        <div className="sc-tp">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <section className="sc-sec" id="what">
        <div className="sc-wrap sc-wh">
          <div>
            <span className="sc-lab">What Is Supply Chain Consulting?</span>
            <h2 className="sc-h2">
              {"Design, optimize, "}
              <em>future-proof.</em>
            </h2>
            <p className="sc-def">
              {"We help organizations "}
              <b>design, optimize, and future-proof</b>
              {" their supply chains — from sourcing to delivery."}
            </p>
            <p
              className="sc-def"
              style={{
                marginTop: "16px",
              }}
            >
              By eliminating inefficiencies, reducing lead times, and building agility, we turn your
              supply chain into a competitive advantage.
            </p>
          </div>
          <div className="sc-ph">
            <img
              src={
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Supply chain consulting at Meridian"
              loading="lazy"
            />
            <em>Sourcing to delivery</em>
          </div>
        </div>
      </section>
      <section className="sc-sec sc-why" id="why">
        <div className="sc-wrap">
          <div className="sc-why-h">
            <div>
              <span className="sc-lab">Why It Matters</span>
              <h2 className="sc-h2">
                {"Why supply chain optimization "}
                <em>matters.</em>
              </h2>
            </div>
            <p>Five shifts that turn logistics into growth.</p>
          </div>
          <ul className="sc-vb">
            <li>
              <b>Enhance</b>
              <span>delivery speed and accuracy.</span>
              <em>→</em>
            </li>
            <li>
              <b>Reduce</b>
              <span>procurement and logistics costs.</span>
              <em>→</em>
            </li>
            <li>
              <b>Strengthen</b>
              <span>supplier relationships and performance.</span>
              <em>→</em>
            </li>
            <li>
              <b>Improve</b>
              <span>forecasting, inventory, and demand planning.</span>
              <em>→</em>
            </li>
            <li>
              <b>Build</b>
              <span>resilience against global disruptions.</span>
              <em>→</em>
            </li>
          </ul>
        </div>
      </section>
      <section className="sc-stats dark" id="results">
        <div className="sc-wrap">
          <span className="sc-lab">The Evidence</span>
          <h2>
            {"What excellent supply chains "}
            <em>deliver.</em>
          </h2>
          <p className="by">
            {"Companies that excel in supply chain management can achieve up to "}
            <b>15% higher revenue growth</b>
            {" and"} <b>35% lower supply chain costs.</b>
          </p>
          <div className="sc-sg">
            <div>
              <div className="n">15%</div>
              <div className="t">Higher revenue growth</div>
              <div className="sc-rng">
                <i
                  style={{
                    width: "15%",
                  }}
                />
              </div>
              <div className="sc-scale">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
            <div>
              <div className="n">35%</div>
              <div className="t">Lower supply chain costs</div>
              <div className="sc-rng">
                <i
                  style={{
                    width: "35%",
                  }}
                />
              </div>
              <div className="sc-scale">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
          <p className="sc-src">
            {"Source: Cited from a McKinsey & Company study featured by"}{" "}
            <a
              href="https://vorecol.com/blogs/blog-what-are-the-key-strategies-for-optimizing-supply-chain-management-to-enhance-operational-efficiency-126692"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vorecol
            </a>
          </p>
        </div>
      </section>
      <section className="sc-sec" id="steps">
        <div className="sc-wrap">
          <div className="sc-ph2">
            <div>
              <span className="sc-lab">Our Approach</span>
              <h2 className="sc-h2">
                {"Our 4-step supply chain "}
                <em>optimization.</em>
              </h2>
            </div>
            <p>Select a step to read more.</p>
          </div>
          <div className="sc-ex">
            {processSteps.map((processStep, index) => (
              <button
                key={processStep.num}
                type="button"
                className={`sc-pnl ${openPanel === index ? "on" : ""}`}
                aria-expanded={openPanel === index}
                onClick={() => setOpenPanel(index)}
                onMouseEnter={() => setOpenPanel(index)}
              >
                <div>
                  <i>{processStep.num}</i>
                </div>
                <div>
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="sc-ben" id="benefits">
        <div className="sc-wrap">
          <div>
            <span className="sc-lab">Key Benefits</span>
            <h2 className="sc-h2">Key benefits.</h2>
          </div>
          <ul className="sc-cp">
            <li>Lower procurement and fulfillment costs.</li>
            <li>Higher inventory accuracy and flow.</li>
            <li>Shorter lead times and improved service levels.</li>
            <li>Increased supply chain visibility.</li>
            <li>Greater resilience against disruption.</li>
          </ul>
        </div>
      </section>
      <section className="sc-sec" id="meridian">
        <div className="sc-wrap sc-ch">
          <div className="side">
            <span className="sc-lab">Why Choose Meridian?</span>
            <h2 className="sc-h2">
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
            <p>Diagnostics to execution, with savings you can measure.</p>
          </div>
          <ol className="sc-er">
            <li>
              <i>01</i>
              <b>{"Global & Regional Expertise"}</b>
              <p>
                Our consultants bring experience from North America, GCC, and Asia across multiple
                industries.
              </p>
            </li>
            <li>
              <i>02</i>
              <b>Quantifiable Savings</b>
              <p>
                Clients report tangible ROI — from cost reductions to better supplier compliance.
              </p>
            </li>
            <li>
              <i>03</i>
              <b>Tailored Strategies</b>
              <p>
                We design custom blueprints based on your sector, operational stage, and priorities.
              </p>
            </li>
            <li>
              <i>04</i>
              <b>End-to-End Execution</b>
              <p>We guide you from diagnostics to execution and continuous improvement.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="sc-role">
        <div className="sc-wrap">
          <span className="sc-lab">Role of Supply Chain Consultants</span>
          <h2>
            {"Your strategic "}
            <em>partner.</em>
          </h2>
          <p>
            We act as your strategic partner — aligning operations with market demand, reducing
            risk, and enabling smart, agile decision-making.
          </p>
          <div className="sc-verbs">
            <span>Aligning operations</span>
            <span>Reducing risk</span>
            <span>Smart decisions</span>
            <span>Agile execution</span>
          </div>
        </div>
      </section>
      <section className="sc-cta-w" id="contact">
        <div className="sc-wrap">
          <div className="sc-cta">
            <div>
              <span className="sc-lab">Book a Free Consultation</span>
              <h2>
                {"Ready to optimize "}
                <span>your supply chain?</span>
              </h2>
              <p className="t">
                And start building a responsive, cost-effective, and resilient supply chain today.
              </p>
              <Link className="sc-btn dk" to="/contact-us">
                {"Book a Free Consultation "}
                <i>↗</i>
              </Link>
            </div>
            <dl className="sc-ct">
              <div>
                <dt>Call us</dt>
                <dd>
                  <a href="tel:+966509394640">+966 50 939 4640</a>
                </dd>
              </div>
              <div>
                <dt>Need support</dt>
                <dd>
                  <a href="mailto:info@meqmp.com">info@meqmp.com</a>
                </dd>
              </div>
              <div>
                <dt>Our global locations</dt>
                <dd>Saudi Arabia · Bahrain · Canada · Pakistan</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
