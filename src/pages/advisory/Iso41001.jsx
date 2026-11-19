import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Iso41001() {
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ISO 41001 – Facility Management Systems | MEQMP";
    let startTime = null;
    const duration = 1800;
    const tick = (now) => {
      if (!startTime) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setFirstStat(Math.round(18 * eased));
      setSecondStat(Math.round(20 * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    const frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);
  const benefits = [
    {
      num: "01",
      title: "Ensure safety, accessibility, and compliance.",
    },
    {
      num: "02",
      title: "Align with ESG and sustainability objectives.",
    },
    {
      num: "03",
      title: "Drive value through integrated management.",
    },
    {
      num: "04",
      title: "Enhance environmental and user satisfaction.",
    },
    {
      num: "05",
      title: "Optimize facility performance and lifecycle cost.",
    },
  ];
  const processSteps = [
    {
      num: "1",
      step: "first step",
      title: "Internal Audits + Certification Readiness.",
    },
    {
      num: "2",
      step: "second step",
      title: "Operations Optimization & Risk Control.",
    },
    {
      num: "3",
      step: "third step",
      title: "System Development (Policies, SLAs, SOPs).",
    },
    {
      num: "4",
      step: "fourth step",
      title: "Facility Gap & Asset Performance Assessment.",
    },
  ];
  const outcomes = [
    "Reduced downtime and energy use.",
    "Long-term asset value preservation.",
    "Compliance with local and global standards.",
    "Enhanced user experience and satisfaction.",
    "Improved operational efficiency and control.",
  ];
  const whyChooseUs = [
    "End-to-end facility compliance support.",
    "Documented best practices and benchmarks.",
    "Practical SLAs, maintenance, and service tools.",
    "Expertise across hospitality, healthcare, and industrial FM.",
  ];
  return (
    <div className="fms-page">
      <section className="fms-hero">
        <div className="fms-hbg" aria-hidden="true" />
        <div className="fms-hero-in">
          <div>
            <p className="fms-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>ISO 41001 – Facility Management</b>
            </p>
            <h1>
              {"ISO 41001 – "}
              <span>Facility Management Systems</span>
            </h1>
            <p className="fms-lead">
              Streamline facility operations and align them with international best practices.
            </p>
            <div className="fms-acts">
              <Link className="fms-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="fms-btn fms-btn-o" href="#process">
                {"See our process "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <aside className="fms-hp" aria-label="Key facts">
            <div className="hh">
              <span className="ic" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 21V4l9-1.5V21M14 8l5 1.5V21M3 21h18M8.5 8h2M8.5 12h2M8.5 16h2" />
                </svg>
              </span>
              <div>
                <b>ISO 41001</b>
                <small>Facility management systems</small>
              </div>
            </div>
            <div className="st">
              <strong>12–18%</strong>
              <span>lower overall maintenance costs with preventive maintenance programs</span>
            </div>
            <div className="st">
              <strong>20%</strong>
              <span>lower utility expenses with energy efficiency measures</span>
            </div>
          </aside>
        </div>
      </section>
      <section className="fms-sec fms-wi" id="what">
        <div className="fms-wrap">
          <div className="top">
            <span className="fms-eyebrow">The Standard</span>
            <h2>What Is ISO 41001?</h2>
            <p className="fms-def">
              {"ISO 41001 provides a "}
              <b>structured framework for efficient, safe, and sustainable facility management</b>
              —enhancing user experience and operational reliability.
            </p>
          </div>
        </div>
      </section>
      <section className="fms-sec fms-why" id="why">
        <div className="fms-wrap">
          <div className="fms-sh">
            <span className="fms-eyebrow">Why it matters</span>
            <h2>Why ISO 41001 Matters?</h2>
          </div>
          <div className="fms-wm">
            <ol className="fms-lg">
              {benefits.map((benefit) => (
                <li key={benefit.num}>
                  <span className="n">{benefit.num}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                  </div>
                </li>
              ))}
            </ol>
            <aside className="fms-stats" id="stats">
              <span className="tag">
                Source: International Facility Management Association (IFMA)
              </span>
              <div className="fms-rings">
                <div className="fms-dc">
                  <div className="fms-dn">
                    <svg viewBox="0 0 120 120" aria-hidden="true">
                      <circle className="tr" cx="60" cy="60" r="52" />
                      <circle
                        className="pg"
                        cx="60"
                        cy="60"
                        r="52"
                        style={{
                          strokeDashoffset: `${326.7 - 326.7 * (firstStat / 100) * 0.8}`,
                        }}
                      />
                    </svg>
                    <b>12–{firstStat}%</b>
                  </div>
                  <span>reduction in overall maintenance costs with preventive maintenance</span>
                </div>
                <div className="fms-dc">
                  <div className="fms-dn">
                    <svg viewBox="0 0 120 120" aria-hidden="true">
                      <circle className="tr" cx="60" cy="60" r="52" />
                      <circle
                        className="pg"
                        cx="60"
                        cy="60"
                        r="52"
                        style={{
                          strokeDashoffset: `${326.7 - 326.7 * (secondStat / 100) * 0.8}`,
                        }}
                      />
                    </svg>
                    <b>{secondStat}%</b>
                  </div>
                  <span>lower utility expenses with energy efficiency measures</span>
                </div>
              </div>
              <p>
                {
                  "Organizations that implement preventive maintenance programs can reduce overall maintenance costs by "
                }
                <b>12–18%</b>
                {". Energy efficiency measures can reduce utility expenses by up to "}
                <b>20%</b>.
              </p>
              <a
                href="https://bizintraprenuership.com/how-effective-facilities-management-can-reduce-operational-costs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the source ↗
              </a>
            </aside>
          </div>
        </div>
      </section>
      <section className="fms-sec" id="process">
        <div className="fms-wrap">
          <div className="fms-sh c">
            <span className="fms-eyebrow">Our approach</span>
            <h2>Our 4-Step ISO 41001 Approach</h2>
          </div>
          <ol className="fms-tl">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="nd">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="fms-sec fms-ben" id="benefits">
        <div className="fms-wrap">
          <div className="fms-sh">
            <span className="fms-eyebrow">What you gain</span>
            <h2>Key Benefits</h2>
          </div>
          <ul className="fms-tiles">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="fms-sec fms-ch" id="choose">
        <div className="fms-wrap">
          <div className="fms-sh">
            <span
              className="fms-eyebrow"
              style={{
                color: "var(--fms-primrose)",
              }}
            >
              Operational Excellence
            </span>
            <h2>Why Choose Meridian?</h2>
          </div>
          <div className="fms-cg">
            <figure>
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png"
                alt="Meridian facility management advisory"
                loading="lazy"
                onError={(event) => {
                  event.target.style.display = "none";
                }}
              />
            </figure>
            <ol>
              {whyChooseUs.map((whyChooseU, index) => (
                <li key={index}>{whyChooseU}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="fms-role" aria-label="Role of FM Consultants">
        <div className="fms-wrap">
          <div className="mk" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 21V4l9-1.5V21M14 8l5 1.5V21M3 21h18M8.5 8h2M8.5 12h2M8.5 16h2" />
            </svg>
          </div>
          <h2>Role of FM Consultants</h2>
          <p>
            We turn your facility operations into a strategic value point—balancing cost, quality,
            and user experience.
          </p>
        </div>
      </section>
      <div className="fms-cta-wrap" id="contact">
        <section className="fms-cta">
          <div>
            <h2>Ready to Optimize Your Facilities?</h2>
            <p className="t">Elevate your facility performance with ISO 41001.</p>
            <Link className="fms-btn fms-btn-or" to="/contact-us">
              {"Book a Free Consultation "}
              <i>↗</i>
            </Link>
          </div>
          <dl className="fms-ct">
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
