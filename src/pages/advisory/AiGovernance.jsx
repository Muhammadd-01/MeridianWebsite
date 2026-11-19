import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const benefitTabs = [
  {
    id: "t1",
    label: "Ethical, transparent AI",
    title: "Ensure ethical, transparent, and explainable AI use.",
    desc: "Set clear rules so people can see how AI decisions are made and question them.",
  },
  {
    id: "t2",
    label: "Bias and reputation",
    title: "Avoid algorithmic bias and reputational risks.",
    desc: "Test models for unfair outcomes before they reach customers or the headlines.",
  },
  {
    id: "t3",
    label: "Evolving AI laws",
    title: "Align with evolving AI laws (EU AI Act, NCA, etc.).",
    desc: "Build your controls once and adapt them as new AI regulations arrive.",
  },
  {
    id: "t4",
    label: "Trust",
    title: "Boost investor, user, and regulatory trust.",
    desc: "Show stakeholders that your AI is governed, documented, and audited.",
  },
  {
    id: "t5",
    label: "Future-proofing",
    title: "Future-proof your innovation strategy.",
    desc: "Keep innovating with guardrails that scale as your use of AI grows.",
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "AI risk & ethics assessment",
    desc: "Identify algorithmic, legal, and operational risks across AI models.",
  },
  {
    step: "Second step",
    num: "2",
    title: "AI governance framework design",
    desc: "Develop ISO 42001-aligned controls, procedures, and oversight protocols.",
  },
  {
    step: "Third step",
    num: "3",
    title: "Training & capability building",
    desc: "Educate teams on AI ethics, risk, and responsible innovation.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Certification readiness & documentation",
    desc: "Audit support, AI life cycle monitoring, and governance reporting.",
  },
];
const outcomes = [
  "Minimized risk of non-compliance and misuse.",
  "Improved trust in AI-driven products and services.",
  "Preparedness for global AI regulations.",
  "Enhanced brand value through ethical innovation.",
  "Seamless integration with data privacy and cybersecurity frameworks.",
];
const whyChooseUs = [
  {
    title: "AI governance experts",
    desc: "With cross-functional knowledge in ethics, tech, and compliance.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    chips: null,
  },
  {
    title: "End-to-end support",
    desc: "From risk analysis to certification.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    chips: null,
  },
  {
    title: "Multi-standard integration",
    desc: "Harmonize ISO 42001 with ISO 27001, GDPR, and ESG frameworks.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    chips: ["ISO 27001", "GDPR", "ESG"],
  },
];
export default function AiGovernance() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const sliderRef = useRef(null);
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const offset = direction * 380;
      sliderRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="aig-page">
      <section className="aig-hero">
        <div className="aig-hero-photo" aria-hidden="true" />
        <svg
          className="aig-net"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g className="aig-ln">
            <line
              x1="40"
              y1="33"
              x2="61"
              y2="211"
              style={{
                "--d": "0.30s",
              }}
            />
            <line
              x1="40"
              y1="33"
              x2="157"
              y2="105"
              style={{
                "--d": "0.42s",
              }}
            />
            <line
              x1="61"
              y1="211"
              x2="54"
              y2="347"
              style={{
                "--d": "0.54s",
              }}
            />
            <line
              x1="61"
              y1="211"
              x2="200"
              y2="184"
              style={{
                "--d": "0.66s",
              }}
            />
            <line
              x1="54"
              y1="347"
              x2="39"
              y2="549"
              style={{
                "--d": "0.78s",
              }}
            />
            <line
              x1="54"
              y1="347"
              x2="149"
              y2="341"
              style={{
                "--d": "0.90s",
              }}
            />
            <line
              x1="39"
              y1="549"
              x2="173"
              y2="509"
              style={{
                "--d": "1.02s",
              }}
            />
            <line
              x1="157"
              y1="105"
              x2="200"
              y2="184"
              style={{
                "--d": "1.14s",
              }}
            />
            <line
              x1="200"
              y1="184"
              x2="269"
              y2="251"
              style={{
                "--d": "1.26s",
              }}
            />
            <line
              x1="149"
              y1="341"
              x2="269"
              y2="251"
              style={{
                "--d": "1.38s",
              }}
            />
            <line
              x1="173"
              y1="509"
              x2="319"
              y2="508"
              style={{
                "--d": "1.50s",
              }}
            />
            <line
              x1="330"
              y1="107"
              x2="443"
              y2="105"
              style={{
                "--d": "1.62s",
              }}
            />
            <line
              x1="330"
              y1="107"
              x2="421"
              y2="180"
              style={{
                "--d": "1.74s",
              }}
            />
            <line
              x1="269"
              y1="251"
              x2="291"
              y2="399"
              style={{
                "--d": "1.86s",
              }}
            />
            <line
              x1="291"
              y1="399"
              x2="319"
              y2="508"
              style={{
                "--d": "1.98s",
              }}
            />
            <line
              x1="291"
              y1="399"
              x2="406"
              y2="384"
              style={{
                "--d": "2.10s",
              }}
            />
            <line
              x1="319"
              y1="508"
              x2="429"
              y2="515"
              style={{
                "--d": "2.22s",
              }}
            />
            <line
              x1="443"
              y1="105"
              x2="421"
              y2="180"
              style={{
                "--d": "2.34s",
              }}
            />
            <line
              x1="443"
              y1="105"
              x2="525"
              y2="57"
              style={{
                "--d": "2.46s",
              }}
            />
            <line
              x1="443"
              y1="105"
              x2="549"
              y2="193"
              style={{
                "--d": "2.58s",
              }}
            />
            <line
              x1="421"
              y1="180"
              x2="549"
              y2="193"
              style={{
                "--d": "2.70s",
              }}
            />
            <line
              x1="406"
              y1="384"
              x2="517"
              y2="378"
              style={{
                "--d": "2.82s",
              }}
            />
            <line
              x1="429"
              y1="515"
              x2="518"
              y2="525"
              style={{
                "--d": "2.94s",
              }}
            />
            <line
              x1="525"
              y1="57"
              x2="549"
              y2="193"
              style={{
                "--d": "3.06s",
              }}
            />
            <line
              x1="517"
              y1="378"
              x2="518"
              y2="525"
              style={{
                "--d": "3.18s",
              }}
            />
          </g>
          <g className="aig-nd">
            <circle
              cx="40"
              cy="33"
              r="6"
              style={{
                "--d": "0.0s",
              }}
            />
            <circle
              cx="61"
              cy="211"
              r="6"
              style={{
                "--d": "0.4s",
              }}
            />
            <circle
              cx="54"
              cy="347"
              r="4"
              style={{
                "--d": "0.8s",
              }}
            />
            <circle
              cx="39"
              cy="549"
              r="8"
              style={{
                "--d": "1.2s",
              }}
            />
            <circle
              cx="157"
              cy="105"
              r="4"
              style={{
                "--d": "1.6s",
              }}
            />
            <circle
              cx="200"
              cy="184"
              r="8"
              style={{
                "--d": "2.0s",
              }}
            />
            <circle
              cx="149"
              cy="341"
              r="4"
              style={{
                "--d": "2.4s",
              }}
            />
            <circle
              cx="173"
              cy="509"
              r="6"
              style={{
                "--d": "0.0s",
              }}
            />
            <circle
              cx="330"
              cy="107"
              r="6"
              style={{
                "--d": "0.4s",
              }}
            />
            <circle
              cx="269"
              cy="251"
              r="5"
              style={{
                "--d": "0.8s",
              }}
            />
            <circle
              cx="291"
              cy="399"
              r="4"
              style={{
                "--d": "1.2s",
              }}
            />
            <circle
              cx="319"
              cy="508"
              r="4"
              style={{
                "--d": "1.6s",
              }}
            />
            <circle
              cx="443"
              cy="105"
              r="5"
              style={{
                "--d": "2.0s",
              }}
            />
            <circle
              cx="421"
              cy="180"
              r="6"
              style={{
                "--d": "2.4s",
              }}
            />
            <circle
              cx="406"
              cy="384"
              r="4"
              style={{
                "--d": "0.0s",
              }}
            />
            <circle
              cx="429"
              cy="515"
              r="5"
              style={{
                "--d": "0.4s",
              }}
            />
            <circle
              cx="525"
              cy="57"
              r="4"
              style={{
                "--d": "0.8s",
              }}
            />
            <circle
              cx="549"
              cy="193"
              r="8"
              style={{
                "--d": "1.2s",
              }}
            />
            <circle
              cx="517"
              cy="378"
              r="6"
              style={{
                "--d": "1.6s",
              }}
            />
            <circle
              cx="518"
              cy="525"
              r="8"
              style={{
                "--d": "2.0s",
              }}
            />
          </g>
        </svg>
        <div className="aig-hero-edge" aria-hidden="true" />
        <div className="aig-hero-pane" aria-hidden="true" />
        <div className="aig-hero-txt">
          <p className="aig-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>{"AI Governance & ISO 42001"}</b>
          </p>
          <h1>
            {"AI Governance & "}
            <em>ISO 42001</em>
          </h1>
          <p className="aig-lead">Build ethical, compliant, and future-ready AI systems.</p>
          <div className="aig-acts">
            <Link className="aig-btn" to="/contact">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="aig-btn o" href="#approach">
              {"See our approach "}
              <i>↓</i>
            </a>
          </div>
        </div>
      </section>
      <section className="aig-sec" id="what">
        <div className="aig-wrap aig-wi">
          <div>
            <div
              className="aig-crumb"
              style={{
                marginBottom: 12,
              }}
            >
              <b>Framework Overview</b>
            </div>
            <h2>What is ISO 42001?</h2>
            <p className="aig-def">
              {"ISO 42001 is the "}
              <b>first international standard</b>
              {
                " focused on Artificial Intelligence Management Systems (AIMS). It offers a structured framework for governing the development, deployment, and oversight of AI systems in line with ethical and regulatory expectations."
              }
            </p>
          </div>
          <svg
            className="aig-ring"
            viewBox="0 0 420 420"
            role="img"
            aria-label="Governing the development, deployment, and oversight of AI systems"
          >
            <circle className="rg" cx="210" cy="210" r="140" />
            <g className="orb">
              <circle cx="210" cy="70" r="7" />
            </g>
            <text className="c" x="210" y="214">
              AIMS
            </text>
            <text className="cs" x="210" y="238">
              AI management system
            </text>
            <g className="n">
              <circle cx="210" cy="70" r="56" />
              <text x="210" y="75">
                Development
              </text>
            </g>
            <g className="n">
              <circle cx="331" cy="280" r="56" />
              <text x="331" y="285">
                Deployment
              </text>
            </g>
            <g className="n">
              <circle cx="89" cy="280" r="56" />
              <text x="89" y="285">
                Oversight
              </text>
            </g>
          </svg>
        </div>
      </section>
      <section className="aig-sec aig-why" id="why">
        <div className="aig-wrap">
          <div className="aig-sh">
            <div
              className="aig-crumb"
              style={{
                marginBottom: 12,
              }}
            >
              <b>Strategic Imperative</b>
            </div>
            <h2>
              {"Why it "}
              <em>matters</em>
            </h2>
          </div>
          <div className="aig-md">
            <div className="aig-tabs" role="tablist" aria-label="Why it matters">
              {benefitTabs.map((benefitTab, index) => (
                <button
                  key={benefitTab.id}
                  role="tab"
                  id={benefitTab.id}
                  aria-selected={activeBenefit === index}
                  onClick={() => setActiveBenefit(index)}
                >
                  {benefitTab.label}
                </button>
              ))}
            </div>
            <div className="aig-pn" role="tabpanel" aria-live="polite">
              <div>
                <h3>{benefitTabs[activeBenefit].title}</h3>
                <p>{benefitTabs[activeBenefit].desc}</p>
              </div>
            </div>
          </div>
          <div className="aig-src">
            <strong>The rules are coming</strong>
            <div>
              <p>
                {
                  "As AI adoption expands, global regulators—including in the EU, US, and Asia—are rapidly introducing new "
                }
                <b>AI compliance laws</b>
                {
                  " covering transparency, bias mitigation, accountability, and safety. Implementing ISO 42001 now positions your organization ahead of these emerging requirements."
                }
              </p>
              <a
                href="https://www.schellman.com/blog/ai-services/global-snapshot-of-ai-laws-and-iso-42001"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the source ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="aig-sec" id="approach">
        <div className="aig-wrap">
          <div className="aig-sh">
            <div
              className="aig-crumb"
              style={{
                marginBottom: 12,
              }}
            >
              <b>Proven Methodology</b>
            </div>
            <h2>
              {"Our ISO 42001 "}
              <em>implementation approach</em>
            </h2>
          </div>
          <div
            className="aig-cross-w"
            style={{
              position: "relative",
            }}
          >
            <ol className="aig-cross">
              {processSteps.map((processStep, index) => (
                <li key={index}>
                  <div className="n">{processStep.num}</div>
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </li>
              ))}
            </ol>
            <div className="aig-hub" aria-hidden="true">
              ↻
            </div>
          </div>
        </div>
      </section>
      <section className="aig-sec aig-ben" id="benefits">
        <div className="aig-wrap">
          <div className="aig-bh">
            <div>
              <div
                className="aig-crumb"
                style={{
                  color: "var(--aig-primrose)",
                  marginBottom: 8,
                }}
              >
                <b>Value Delivered</b>
              </div>
              <h2>
                {"Key "}
                <em>benefits</em>
              </h2>
            </div>
            <div className="aig-arrows">
              <button onClick={() => scrollSlider(-1)} aria-label="Previous benefits">
                ←
              </button>
              <button onClick={() => scrollSlider(1)} aria-label="Next benefits">
                →
              </button>
            </div>
          </div>
          <ul className="aig-cr" ref={sliderRef} tabIndex={0} aria-label="Key benefits">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="aig-chh aig-wrap" id="choose">
        <div
          className="aig-crumb"
          style={{
            marginBottom: 12,
          }}
        >
          <b>Why Meridian</b>
        </div>
        <h2>
          {"Why choose "}
          <em>Meridian?</em>
        </h2>
      </div>
      <ul className="aig-zz">
        {whyChooseUs.map((whyChooseU, index) => (
          <li key={index}>
            <div className="tx">
              <h3>{whyChooseU.title}</h3>
              <p>{whyChooseU.desc}</p>
              {whyChooseU.chips && (
                <div className="chips">
                  {whyChooseU.chips.map((chip, index2) => (
                    <span key={index2}>{chip}</span>
                  ))}
                </div>
              )}
            </div>
            <div
              className="ph"
              aria-hidden="true"
              style={{
                "--img": `url('${whyChooseU.img}')`,
              }}
            />
          </li>
        ))}
      </ul>
      <section className="aig-role" aria-label="Role of AI governance consultants">
        <div className="aig-wrap">
          <p className="big">
            We don’t just develop documentation — we drive innovation while ensuring responsible
            boundaries.
          </p>
          <p className="sm">
            Our consultants guide responsible AI development, reducing future liability and
            accelerating trust.
          </p>
        </div>
      </section>
      <section className="aig-cta" id="contact">
        <div className="aig-wrap">
          <h2>
            {"Ready to embrace "}
            <em>AI responsibly?</em>
          </h2>
          <p className="t">
            Work with our ISO 42001 specialists and lead the way in trustworthy AI.
          </p>
          <Link className="aig-btn dk" to="/contact">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="aig-ct">
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
      </section>
    </div>
  );
}
