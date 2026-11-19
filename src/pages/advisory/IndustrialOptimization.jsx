import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const challenges = [
  "Reduce operational bottlenecks and inefficiencies.",
  "Ensure full compliance with local and international standards.",
  "Lower the risk of penalties and shutdowns.",
  "Enhance product reliability and customer trust.",
  "Improve energy use, throughput, and resource efficiency.",
];
const processSteps = [
  {
    step: "First step",
    num: "1",
    title: "Diagnostic assessment",
    desc: "Process walkthroughs and system audits to identify gaps and inefficiencies.",
  },
  {
    step: "Second step",
    num: "2",
    title: "Compliance alignment",
    desc: "Mapping and implementing compliance controls (e.g., ISO, local regulations, safety codes).",
  },
  {
    step: "Third step",
    num: "3",
    title: "Performance optimization",
    desc: "Redesigning processes and integrating automation where applicable.",
  },
  {
    step: "Fourth step",
    num: "4",
    title: "Monitoring & training",
    desc: "Real-time compliance dashboards and staff competency building.",
  },
];
const outcomes = [
  "Faster, safer, and smarter industrial operations.",
  "Lowered cost of quality and compliance violations.",
  "Predictable operations with fewer breakdowns.",
  "Improved audit readiness and record-keeping.",
  "Sustainable performance backed by real metrics.",
];
const accordionItems = [
  {
    id: "a1",
    title: "Cross-industry expertise",
    desc: "From manufacturing to utilities, we’ve optimized hundreds of processes.",
  },
  {
    id: "a2",
    title: "Data-driven methods",
    desc: "We deploy Six Sigma, TPM, and Kaizen strategies tailored to your context.",
  },
  {
    id: "a3",
    title: "Proactive compliance support",
    desc: "We ensure you stay ahead of evolving local and global standards.",
  },
  {
    id: "a4",
    title: "Hands-on implementation",
    desc: "We go beyond the report — we train, support, and help you deliver results.",
  },
];
export default function IndustrialOptimization() {
  const [openItem, setOpenItem] = useState(0);
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsVisible) {
          setStatsVisible(true);
          const duration = 1300;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setFirstStat(Math.round(30 * eased));
            setSecondStat(Math.round(25 * eased));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      {
        threshold: 0.3,
      },
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [statsVisible]);
  return (
    <div className="io-page">
      <section className="io-hero">
        <div className="io-hero-bg" aria-hidden="true" />
        <div>
          <p className="io-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>{"Industrial Optimization & Compliance"}</b>
          </p>
          <h1>
            {"Industrial Optimization & "}
            <em>Compliance</em>
          </h1>
          <p className="io-lead">
            Unlock peak operational efficiency while ensuring full regulatory compliance.
          </p>
          <div className="io-acts">
            <Link className="io-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="io-btn o" href="#framework">
              {"See our framework "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="io-bal" aria-label="Our approach balances">
          <span>Efficiency</span>
          <em>⇅</em>
          <span>Regulatory readiness</span>
        </div>
      </section>
      <section className="io-sec" id="what">
        <div className="io-wrap io-wh">
          <div>
            <h2>
              {"What is industrial optimization & "}
              <em>compliance?</em>
            </h2>
            <p className="io-def">
              {
                "We help industries streamline processes, enhance productivity, and meet stringent safety, environmental, and operational standards. Our approach balances "
              }
              <b>efficiency</b>
              {" and "}
              <b>regulatory readiness</b>.
            </p>
          </div>
          <div
            className="io-venn"
            role="img"
            aria-label="Efficiency and regulatory readiness overlapping"
          >
            <div className="io-a">Efficiency</div>
            <div className="io-b">Regulatory readiness</div>
            <p>Our approach balances both</p>
          </div>
        </div>
      </section>
      <section className="io-sec io-why" id="why">
        <div className="io-wrap">
          <div className="io-sh">
            <h2>
              {"Why it "}
              <em>matters</em>
            </h2>
          </div>
          <ul className="io-bento">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
            <li className="io-q" ref={statsRef} id="qbox">
              <div className="io-nums">
                <div>
                  <b>{firstStat}%</b>
                  <span>increase in revenue</span>
                </div>
                <div>
                  <b>{secondStat}%</b>
                  <span>reduction in costs</span>
                </div>
              </div>
              <div>
                <blockquote>
                  “Companies adopting optimization and compliance frameworks report up to 30%
                  increase in revenue and 25% reduction in costs.”
                </blockquote>
                <cite>Source: Thomson Reuters, The Cost of Compliance 2020</cite>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="io-sec" id="framework">
        <div className="io-wrap">
          <div className="io-sh c">
            <h2>
              {"Our 4-step optimization "}
              <em>framework</em>
            </h2>
          </div>
          <ol className="io-pipe" id="pipe">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="io-nd">{processStep.num}</div>
                <div className="io-cd">
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="io-sec io-ben" id="benefits">
        <div className="io-wrap">
          <div className="io-sh">
            <h2>
              {"Key "}
              <em>benefits</em>
            </h2>
          </div>
          <ul className="io-chk">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="io-sec io-ch" id="choose">
        <div className="io-wrap">
          <div className="io-sh c">
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ul className="io-acc">
            {accordionItems.map((accordionItem, index) => {
              const isOpen = openItem === index;
              return (
                <li key={accordionItem.id} className={isOpen ? "open" : ""}>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={accordionItem.id}
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                  >
                    {accordionItem.title}
                    <span className="io-pl" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="io-pa" id={accordionItem.id} role="region">
                    <div>
                      <p>{accordionItem.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="io-role" aria-label="Role of optimization experts">
        <div className="io-wrap">
          <p>
            We serve as transformation enablers — aligning operational speed, safety, and compliance
            under one agile framework.
          </p>
        </div>
      </section>
      <div className="io-cta-wrap" id="contact">
        <section className="io-cta">
          <h2>Ready to optimize industrial performance?</h2>
          <p className="io-t">
            To start streamlining your operations with confidence and compliance.
          </p>
          <Link className="io-btn or" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="io-ct">
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
        </section>
      </div>
    </div>
  );
}
