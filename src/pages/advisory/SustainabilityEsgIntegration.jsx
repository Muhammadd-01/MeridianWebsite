import { useRef } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "ESG",
  "GRI",
  "SASB",
  "SDG",
  "LEED",
  "Mostadam",
  "EcoVadis",
  "LCA",
  "ISO 14064",
  "ISO 50001",
  "Vision 2030",
];
const processSteps = [
  {
    step: "First step",
    num: "01",
    title: "Sustainability Reporting",
    desc: "Develop GRI-, SASB-, and SDG-aligned sustainability reports to enhance transparency and attract ESG-conscious investors.",
    link: "/services/sustainability/reporting",
  },
  {
    step: "Second step",
    num: "02",
    title: "LEED Certification",
    desc: "Achieve LEED standards to optimize energy and water use in your buildings — improving value and environmental footprint.",
    link: "/services/sustainability/leed",
  },
  {
    step: "Third step",
    num: "03",
    title: "Mostadam Certification",
    desc: "Support Saudi Arabia's Vision 2030 with Mostadam — the national green building rating system for commercial and residential projects.",
    link: "/services/sustainability/mostadam",
  },
  {
    step: "Fourth step",
    num: "04",
    title: "EcoVadis Certification",
    desc: "Boost your CSR standing by aligning with EcoVadis benchmarks across labor, ethics, environment, and procurement.",
    link: "/services/sustainability/ecovadis",
  },
  {
    step: "Fifth step",
    num: "05",
    title: "Product Life Cycle Analysis (LCA)",
    desc: "Analyze your product’s full environmental impact — from cradle to grave — to support sustainable design and the circular economy.",
    link: "/services/sustainability/lca",
  },
  {
    step: "Sixth step",
    num: "06",
    title: "Carbon Footprint Assessment",
    desc: "Measure and reduce greenhouse gas emissions through ISO 14064-aligned carbon audits and strategies.",
    link: "/services/sustainability/carbon-footprint",
  },
  {
    step: "Seventh step",
    num: "07",
    title: "Green Building Advisory",
    desc: "Design and modify your spaces to be greener, healthier, and more efficient with strategic construction advisory.",
    link: "/services/sustainability/green-building-advisory",
  },
  {
    step: "Eighth step",
    num: "08",
    title: "Energy Management Systems & ISO 50001",
    desc: "Optimize energy performance using ISO 50001-certified energy management systems for reduced costs and increased efficiency.",
    link: "/services/sustainability/iso-50001",
  },
  {
    step: "Ninth step",
    num: "09",
    title: "Energy Audits",
    desc: "Conduct comprehensive energy and utility audits to identify savings opportunities and efficiency gaps.",
    link: "/services/sustainability/energy-audits",
  },
];
export default function SustainabilityEsgIntegration() {
  const sliderRef = useRef(null);
  const scrollPrev = () => {
    if (sliderRef.current) {
      const firstItem = sliderRef.current.querySelector("li");
      const scrollStep = firstItem ? firstItem.offsetWidth + 12 : 360;
      sliderRef.current.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      });
    }
  };
  const scrollNext = () => {
    if (sliderRef.current) {
      const firstItem = sliderRef.current.querySelector("li");
      const scrollStep = firstItem ? firstItem.offsetWidth + 12 : 360;
      sliderRef.current.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="esg-page">
      <section className="esg-hero dark" id="top">
        <div className="esg-hero-bg" aria-hidden="true" />
        <div className="esg-wrap esg-hg">
          <div>
            <p className="esg-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>{"Sustainability & ESG Integration"}</b>
            </p>
            <h1>
              Embed sustainability into the DNA of your business{" "}
              <span>for long-term value and impact.</span>
            </h1>
            <p className="esg-lead">
              The alignment of environmental, social, and governance principles with your business
              operations.
            </p>
            <div className="esg-acts">
              <Link className="esg-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="esg-btn o" href="#what">
                {"What is ESG integration? "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div>
            <svg
              className="esg-vn"
              viewBox="0 0 460 430"
              role="img"
              aria-label="Environmental, Social and Governance principles overlapping"
            >
              <g tabIndex={0}>
                <circle
                  cx="230"
                  cy="150"
                  r="120"
                  fill="#f2e6a2"
                  fillOpacity="0.26"
                  stroke="#f2e6a2"
                  strokeWidth="2"
                />
              </g>
              <g tabIndex={0}>
                <circle
                  cx="150"
                  cy="285"
                  r="120"
                  fill="#f78d00"
                  fillOpacity="0.28"
                  stroke="#f78d00"
                  strokeWidth="2"
                />
              </g>
              <g tabIndex={0}>
                <circle
                  cx="310"
                  cy="285"
                  r="120"
                  fill="#1a6a74"
                  fillOpacity="0.6"
                  stroke="#9fbab9"
                  strokeWidth="2"
                />
              </g>
              <text className="big" x="230" y="92">
                E
              </text>
              <text className="nm" x="230" y="116">
                Environmental
              </text>
              <text className="big" x="102" y="318">
                S
              </text>
              <text className="nm" x="102" y="342">
                Social
              </text>
              <text className="big" x="358" y="318">
                G
              </text>
              <text className="nm" x="358" y="342">
                Governance
              </text>
              <circle className="dot" cx="230" cy="236" r="40" />
              <text className="mid" x="230" y="242">
                ESG
              </text>
            </svg>
          </div>
        </div>
      </section>
      <div className="esg-tape" aria-hidden="true">
        <div className="esg-tp">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <section className="esg-sec" id="what">
        <div className="esg-wrap esg-wh">
          <div>
            <span className="esg-lab">{"What Is Sustainability & ESG Integration?"}</span>
            <h2 className="esg-h2">
              {"Not just "}
              <em>compliance.</em>
            </h2>
            <p className="esg-def">
              {"It’s the alignment of "}
              <b>environmental, social, and governance principles</b>
              {
                " with your business operations — ensuring not just compliance, but competitive advantage and responsible growth."
              }
            </p>
          </div>
          <ul className="esg-sc">
            <li>
              <b>Compliance</b>
              <small>Foundation</small>
            </li>
            <li>
              <b>Competitive advantage</b>
              <small>Edge</small>
            </li>
            <li>
              <b>Responsible growth</b>
              <small>Outcome</small>
            </li>
          </ul>
        </div>
      </section>
      <section className="esg-sec esg-why" id="why">
        <div className="esg-wrap">
          <div className="esg-why-h">
            <div>
              <span className="esg-lab">Why It Matters</span>
              <h2 className="esg-h2">
                {"Why it "}
                <em>matters.</em>
              </h2>
            </div>
            <div className="esg-arrows">
              <button onClick={scrollPrev} aria-label="Previous">
                ←
              </button>
              <button onClick={scrollNext} aria-label="Next">
                →
              </button>
            </div>
          </div>
          <ul className="esg-cr" ref={sliderRef} tabIndex={0} aria-label="Why it matters">
            <li data-n="1">
              <small>01</small>
              <b>Meet regulatory, stakeholder, and investor expectations.</b>
            </li>
            <li data-n="2">
              <small>02</small>
              <b>Reduce environmental impact and operational costs.</b>
            </li>
            <li data-n="3">
              <small>03</small>
              <b>Build resilient, ethical, and future-proof organizations.</b>
            </li>
            <li data-n="4">
              <small>04</small>
              <b>Drive innovation through responsible practices.</b>
            </li>
            <li data-n="5">
              <small>05</small>
              <b>Increase brand trust and long-term valuation.</b>
            </li>
          </ul>
        </div>
      </section>
      <section className="esg-sec esg-proc dark" id="steps">
        <div className="esg-wrap">
          <div className="esg-ph">
            <div>
              <span className="esg-lab">Our Comprehensive Approach</span>
              <h2 className="esg-h2">
                {"Our comprehensive "}
                <em>approach.</em>
              </h2>
            </div>
            <p>
              Nine connected services that take you from reporting to certification, carbon and
              energy.
            </p>
          </div>
          <div className="esg-sv">
            {processSteps.map((processStep) => (
              <Link key={processStep.num} to={processStep.link}>
                <small>{processStep.step}</small>
                <i>{processStep.num}</i>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
                <em>
                  {"Explore "}
                  <span>→</span>
                </em>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="esg-ben" id="benefits">
        <div className="esg-wrap">
          <div>
            <span className="esg-lab">Key Benefits</span>
            <h2 className="esg-h2">Key benefits.</h2>
          </div>
          <ul className="esg-bb">
            <li>{"Enhanced brand reputation & investor confidence."}</li>
            <li>Cost reduction through smarter energy and resource use.</li>
            <li>Improved compliance with global and local ESG mandates.</li>
            <li>Future-proofing through sustainable innovation.</li>
            <li>Boosted employee and customer engagement.</li>
          </ul>
        </div>
      </section>
      <section className="esg-sec" id="meridian">
        <div className="esg-wrap">
          <div className="esg-ch-h">
            <span className="esg-lab">Why Choose Meridian?</span>
            <h2 className="esg-h2">
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ul className="esg-cl">
            <li>
              <i>01</i>
              <b>ESG Expertise</b>
              <p>
                Specialists with experience in climate action, ESG reporting, and green
                certifications.
              </p>
            </li>
            <li>
              <i>02</i>
              <b>Integrated Strategy</b>
              <p>We go beyond checklists—aligning ESG with your vision, values, and operations.</p>
            </li>
            <li>
              <i>03</i>
              <b>Global Perspective</b>
              <p>
                Experienced in regional and global frameworks including Vision 2030, GRI, SDG, ISO,
                and LEED.
              </p>
            </li>
            <li>
              <i>04</i>
              <b>End-to-End Execution</b>
              <p>From assessment to audit readiness and report publishing — we cover it all.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="esg-role dark">
        <div className="esg-wrap">
          <span className="esg-lab">Role of ESG Consultants</span>
          <h2>
            {"From strategy "}
            <em>to reporting.</em>
          </h2>
          <p>
            Our experts lead ESG implementation from strategy to reporting — facilitating
            sustainability culture, compliance, and stakeholder alignment.
          </p>
        </div>
      </section>
      <section className="esg-cta-w" id="contact">
        <div className="esg-wrap">
          <div className="esg-cta">
            <div>
              <span className="esg-lab">Book a Free Consultation</span>
              <h2>
                {"Ready to build "}
                <span>a sustainable future?</span>
              </h2>
              <p className="t">
                To explore how ESG and sustainability can power long-term growth and impact.
              </p>
              <Link className="esg-btn dk" to="/contact-us">
                {"Book a Free Consultation "}
                <i>↗</i>
              </Link>
            </div>
            <dl className="esg-ct">
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
