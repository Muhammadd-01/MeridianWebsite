import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const supplyChainStages = ["Storage", "Processing", "Distribution"];
const standards = ["ISO 22000", "HACCP", "GMP"];
const benefits = [
  {
    num: "01",
    title: "Prevent contamination, recalls, and foodborne illnesses.",
    desc: "Regular audits catch hygiene and process failures before they reach the consumer, protecting public health and avoiding costly product withdrawals.",
  },
  {
    num: "02",
    title: "Comply with regulatory and certification requirements.",
    desc: "Audits check your practices against food authority rules and certification criteria, so gaps are fixed well before an official inspection.",
  },
  {
    num: "03",
    title: "Maintain brand reputation and customer trust.",
    desc: "Consistent safety and cleanliness show customers that you take their health seriously, and one avoided incident can protect years of goodwill.",
  },
  {
    num: "04",
    title: "Reduce operational risks and improve traceability.",
    desc: "Clear records and controls let you track ingredients and products through the chain, making any problem faster to find and contain.",
  },
  {
    num: "05",
    title: "Meet retailer and export standards (e.g., GFSI, SFDA, FDA).",
    desc: "Aligning with recognized schemes and regulators opens the door to major retailers and export markets that require proven food safety.",
  },
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Site assessment",
    desc: "We inspect storage, processing, preparation, and distribution environments.",
  },
  {
    step: "Second step",
    num: "2",
    title: "Risk identification",
    desc: "Assess microbial, chemical, allergen, and physical cross-contamination risks.",
  },
  {
    step: "Third step",
    num: "3",
    title: "Compliance audit",
    desc: "Review documentation, sanitation protocols, hygiene practices, and staff training.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Corrective action & certification support",
    desc: "Actionable guidance for ISO 22000, HACCP, or local food authority approvals.",
  },
];
const outcomes = [
  "Cleaner, safer, and compliant operations.",
  "Enhanced food quality and shelf life.",
  "Certification readiness and audit success.",
  "Stronger brand reputation.",
  "Reduced customer risk and legal exposure.",
];
const whyChooseUs = [
  {
    num: "01",
    title: "Global & local expertise",
    desc: "We align audits with local food authority regulations (SFDA, Civil Defense) and global ISO/GFSI frameworks.",
  },
  {
    num: "02",
    title: "Detailed microbiological risk focus",
    desc: "We pinpoint hidden contamination points that compromise food safety and product consistency.",
  },
  {
    num: "03",
    title: "Continuous monitoring support",
    desc: "We help set up reliable SOPs, hygiene KPIs, and digital traceability systems that last.",
  },
  {
    num: "04",
    title: "Industry-trained auditors",
    desc: "Our team includes qualified food technologists, certified QHSE specialists, and lead ISO 22000 auditors.",
  },
];
export default function FoodSafety() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [percentStat, setPercentStat] = useState(0);
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true);
          const duration = 1400;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setPercentStat(Math.round(70 * eased));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      {
        threshold: 0.25,
      },
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [statsVisible]);
  return (
    <div className="fsh-page">
      <section className="fsh-hero">
        <img
          className="fsh-hero-img"
          src={
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2400&q=80"
          }
          alt="Food safety inspection and quality assurance"
        />
        <div className="fsh-hero-shade" aria-hidden="true" />
        <div className="fsh-hero-txt">
          <p className="fsh-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>{"Food Safety & Hygiene Audits"}</b>
          </p>
          <h1>
            {"Food Safety & "}
            <em>Hygiene Audits</em>
          </h1>
          <p className="fsh-lead">
            Ensure food safety, compliance, and consumer confidence through world-class hygiene
            audits.
          </p>
          <div className="fsh-acts">
            <Link className="fsh-btn" to="/contact">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="fsh-btn o" href="#plan">
              {"See our audit plan "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="fsh-fmc" aria-hidden="true">
          <small>Audit Scope</small>
          {supplyChainStages.map((supplyChainStage, index) => (
            <span key={index}>{supplyChainStage}</span>
          ))}
        </div>
      </section>
      <section className="fsh-sec" id="what">
        <div className="fsh-wrap fsh-wi">
          <div>
            <div
              className="fsh-crumb"
              style={{
                color: "#000",
                marginBottom: 12,
              }}
            >
              <b>Comprehensive Hygiene</b>
            </div>
            <h2>
              {"What are food safety & "}
              <em>hygiene audits?</em>
            </h2>
            <p className="fsh-def">
              {"We evaluate your food operations against "}
              <b>international standards</b>
              {" (ISO 22000, HACCP, GMP, etc.) to ensure "}
              <b>cleanliness, safety, and quality</b>
              {" throughout your supply chain."}
            </p>
            <div className="fsh-chips">
              {standards.map((standard, index) => (
                <span key={index}>{standard}</span>
              ))}
            </div>
          </div>
          <figure className="fsh-ph">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="Food safety and hygiene audits inspection"
              loading="lazy"
            />
            <span className="tag">Cleanliness · Safety · Quality</span>
          </figure>
        </div>
      </section>
      <section className="fsh-sec fsh-why" id="why">
        <div className="fsh-wrap">
          <div className="fsh-wb">
            <img
              className="fsh-wb-img"
              src={
                "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=80"
              }
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <h2>
              {"Why it "}
              <em>matters</em>
            </h2>
            <p>
              Five ways strong hygiene audits protect consumers, your brand, and your access to
              markets.
            </p>
          </div>
          <ol className="fsh-rows">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <span className="n">{benefit.num}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </li>
            ))}
          </ol>
          <div className="fsh-src" ref={statsRef}>
            <div className="fsh-nums">
              <div>
                <b>{statsVisible ? percentStat : 0}%</b>
                <span>fewer customer complaints</span>
              </div>
            </div>
            <div>
              <p>
                {"Businesses with strong food safety management systems see "}
                <b>70% fewer customer complaints</b>
                {" and significantly stronger supplier and regulatory confidence."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fsh-sec" id="plan">
        <div className="fsh-wrap fsh-tl">
          <div className="stick">
            <div
              className="fsh-crumb"
              style={{
                color: "#000",
                marginBottom: 12,
              }}
            >
              <b>Structured Audit</b>
            </div>
            <h2>
              {"Our 4-step food safety "}
              <em>audit plan</em>
            </h2>
            <p>
              From initial site walk-through to complete certification and regulatory compliance
              support.
            </p>
          </div>
          <ol className="fsh-steps">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="nd">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="fsh-sec fsh-ben" id="benefits">
        <div className="fsh-wrap">
          <div className="fsh-sh">
            <div
              className="fsh-crumb"
              style={{
                color: "var(--fsh-primrose)",
                marginBottom: 12,
              }}
            >
              <b>Audit Assurance</b>
            </div>
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="fsh-tiles">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fsh-sec fsh-ch" id="choose">
        <div className="fsh-wrap">
          <div className="fsh-sh c">
            <div
              className="fsh-crumb"
              style={{
                color: "#000",
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
          <ul className="grid">
            {whyChooseUs.map((whyChooseU) => (
              <li key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
                <p>{whyChooseU.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fsh-role" aria-label="Role of food safety consultants">
        <div className="fsh-wrap">
          <h2>Role of Food Safety Consultants</h2>
          <p>
            We enable safer food environments through real-time insights, global compliance, and
            improved hygiene culture.
          </p>
        </div>
      </section>
      <section className="fsh-cta" id="contact">
        <div className="l">
          <h2>
            {"Ready to upgrade "}
            <em>food safety standards?</em>
          </h2>
          <p className="t">
            Work with our certified hygiene auditors to meet the highest safety benchmarks.
          </p>
          <Link className="fsh-btn dk" to="/contact">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
        </div>
        <div className="r">
          <dl className="fsh-ct">
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
