import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Iso22000() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ISO 22000 – Food Safety Management Systems | MEQMP";
  }, []);
  const benefits = [
    {
      num: "01",
      title: "Ensure food safety from farm to fork.",
    },
    {
      num: "02",
      title: "Reduce contamination and recall risks.",
    },
    {
      num: "03",
      title: "Improve process hygiene and traceability.",
    },
    {
      num: "04",
      title: "Strengthen brand trust and market access.",
    },
    {
      num: "05",
      title: "Meet international customer and regulatory expectations.",
    },
  ];
  const processSteps = [
    {
      num: "1",
      tag: "first step",
      title: "Team training & internal audits.",
    },
    {
      num: "2",
      tag: "second step",
      title: "Food safety gap & hazard analysis.",
    },
    {
      num: "3",
      tag: "third step",
      title: "FSMS documentation & HACCP planning.",
    },
    {
      num: "4",
      tag: "fourth step",
      title: "Certification preparation & post-audit support.",
    },
  ];
  const outcomes = [
    "Market entry to global food supply chains.",
    "Decreased product recalls and complaints.",
    "Enhanced traceability and process control.",
    "Stronger hygiene and food safety protocols.",
    "Regulatory compliance and international acceptance.",
  ];
  const whyChooseUs = [
    "Practical FSMS tools and templates.",
    "HACCP-certified trainers and auditors.",
    "Dedicated support through audits and surveillance.",
    "Experience across hospitality, processing, and retail.",
  ];
  return (
    <div className="fsms-page">
      <section className="fsms-hero">
        <div className="fsms-hero-bg" aria-hidden="true">
          <i />
        </div>
        <div className="fsms-hero-in">
          <div className="fsms-hc">
            <p className="fsms-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>ISO 22000 – Food Safety</b>
            </p>
            <h1>ISO 22000 – Food Safety Management Systems</h1>
            <p className="fsms-lead">
              Protect consumers and strengthen your brand with globally recognized food safety
              standards.
            </p>
            <div className="fsms-acts">
              <Link className="fsms-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="fsms-btn fsms-btn-o" href="#approach">
                {"See our approach "}
                <i>↓</i>
              </a>
            </div>
          </div>
        </div>
        <div className="fsms-hbar">
          <div className="fsms-hbar-inner">
            <p>ISO 22000 integrates</p>
            <ul className="fsms-chips">
              <li>Food safety principles</li>
              <li>HACCP</li>
              <li>Quality management</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="fsms-sec" id="what">
        <div className="fsms-wrap">
          <div className="fsms-wig">
            <h2>What is ISO 22000?</h2>
            <p className="fsms-def">
              {"ISO 22000 integrates "}
              <b>food safety principles, HACCP, and quality management</b>
              {" into a comprehensive Food Safety Management System (FSMS)."}
            </p>
          </div>
          <div
            className="fsms-eq"
            aria-label="Food safety principles plus HACCP plus quality management equals FSMS"
          >
            <div>Food safety principles</div>
            <span aria-hidden="true">+</span>
            <div>HACCP</div>
            <span aria-hidden="true">+</span>
            <div>Quality management</div>
            <span aria-hidden="true">=</span>
            <div className="fsms-res">FSMS</div>
          </div>
        </div>
      </section>
      <section className="fsms-sec fsms-why" id="why">
        <div className="fsms-wrap">
          <div className="fsms-sh">
            <span className="fsms-lab">Risk Prevention</span>
            <h2>Why ISO 22000 matters</h2>
          </div>
          <ol className="fsms-bento">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
              </li>
            ))}
          </ol>
          <div className="fsms-src">
            <div className="fsms-nums">
              <div>
                <i>Fewer</i>
                <span>non‑conformities and incidents</span>
              </div>
            </div>
            <div>
              <span className="fsms-tag">Source</span>
              <p>
                {"Certified ISO 22000 organisations report "}
                <b>significantly fewer non‑conformities</b>
                {" and non‑compliance incidents."}
              </p>
              <a
                className="fsms-ref"
                href="https://www.qmii.com/key-benefits-of-iso-22000-certification-for-food-industry-businesses/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the source ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="fsms-sec" id="approach">
        <div className="fsms-wrap">
          <div className="fsms-sh">
            <span className="fsms-lab">Systematic Methodology</span>
            <h2>Our 4-step ISO 22000 implementation plan</h2>
          </div>
          <ol className="fsms-path" id="steps">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="nd">{processStep.num}</div>
                <small>{processStep.tag}</small>
                <h3>{processStep.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="fsms-sec fsms-ben" id="benefits">
        <div className="fsms-wrap">
          <div className="fsms-sh">
            <span className="fsms-lab">Measurable Impact</span>
            <h2>Key benefits</h2>
          </div>
          <ul className="fsms-rows">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fsms-sec" id="choose">
        <div className="fsms-wrap">
          <div className="fsms-sh">
            <span className="fsms-lab">Partner with Experts</span>
            <h2>Why choose Meridian?</h2>
          </div>
          <div className="fsms-ch">
            <ol>
              {whyChooseUs.map((whyChooseU, index) => (
                <li key={index}>{whyChooseU}</li>
              ))}
            </ol>
            <figure>
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt="Meridian food safety consulting"
                loading="lazy"
                onError={(event) => {
                  event.target.style.display = "none";
                }}
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="fsms-role" aria-label="Role of food safety consultants">
        <div className="fsms-q" aria-hidden="true">
          “
        </div>
        <div className="fsms-wrap">
          <h2>Role of food safety consultants</h2>
          <p>
            We help embed safety and compliance into your food operations—ensuring peace of mind for
            you and your customers.
          </p>
        </div>
      </section>
      <section className="fsms-cta" id="contact">
        <div className="fsms-wrap fsms-top">
          <div>
            <h2>Ready to serve safety with every bite?</h2>
            <p className="fsms-t">Transform your food safety systems with ISO 22000 today.</p>
          </div>
          <Link className="fsms-btn fsms-btn-dk" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
        </div>
        <div className="fsms-cc">
          <div className="fsms-wrap">
            <dl className="fsms-ct">
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
