import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Iso45001() {
  const [firstStat, setFirstStat] = useState(0);
  const [secondStat, setSecondStat] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ISO 45001 – Occupational Health & Safety | MEQMP";
    let startTime = null;
    const duration = 1800;
    const tick = (now) => {
      if (!startTime) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setFirstStat((22.6 * eased).toFixed(1));
      setSecondStat((29.2 * eased).toFixed(1));
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
      title: "Reduce workplace injuries and incidents.",
      desc: "Spot hazards early and put controls in place, so fewer people get hurt and fewer shifts are disrupted.",
    },
    {
      num: "02",
      title: "Improve safety culture and legal compliance.",
      desc: "Clear responsibilities, training, and records keep everyone working safely and keep you within labor and safety regulations.",
    },
    {
      num: "03",
      title: "Boost employee morale and productivity.",
      desc: "When people feel protected and heard, they are more engaged, absent less often, and do better work.",
    },
    {
      num: "04",
      title: "Lower insurance and compensation costs.",
      desc: "Fewer incidents mean fewer claims, which helps keep insurance premiums and compensation payouts down.",
    },
    {
      num: "05",
      title: "Enhance brand reputation and client confidence.",
      desc: "A certified safety system shows clients, partners, and regulators that you take people and risk seriously.",
    },
  ];
  const processSteps = [
    {
      num: "1",
      step: "first step",
      title: "Hazard identification & risk assessment.",
    },
    {
      num: "2",
      step: "second step",
      title: "System design (policies, controls, training).",
    },
    {
      num: "3",
      step: "third step",
      title: "Incident management & internal audits.",
    },
    {
      num: "4",
      step: "fourth step",
      title: "Certification support and compliance tracking.",
    },
  ];
  const outcomes = [
    "Fewer workplace disruptions and liabilities.",
    "Safer, more engaged workforce.",
    "Better compliance with labor regulations.",
    "Increased stakeholder confidence.",
    "Support for ESG and sustainability reporting.",
  ];
  const whyChooseUs = [
    "Certified ISO 45001 Lead Auditors.",
    "Sector-specific hazard profiling.",
    "Practical tools for safety improvement.",
    "Post-certification support and monitoring.",
  ];
  return (
    <div className="ohs-page">
      <section className="ohs-hero">
        <div className="ohs-hero-in">
          <div>
            <p className="ohs-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>{"ISO 45001 – Occupational Health & Safety"}</b>
            </p>
            <h1>
              {"ISO 45001 – "}
              <span>{"Occupational Health & Safety"}</span>
            </h1>
            <p className="ohs-lead">
              {"Create a safer workplace, reduce incidents, and meet global OH&S standards."}
            </p>
            <div className="ohs-acts">
              <Link className="ohs-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="ohs-btn ohs-btn-o" href="#process">
                {"See our process "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="ohs-frame">
            <div className="in">
              <img
                src={
                  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                }
                alt="ISO 45001 workplace safety"
                onError={(event) => {
                  event.target.onerror = null;
                  event.target.src =
                    "https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png";
                }}
              />
            </div>
            <div className="badge" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
              <div>
                <b>ISO 45001</b>
                <span>{"OH&S management"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ohs-sec ohs-wi" id="what">
        <div className="ohs-wrap">
          <div className="top">
            <span className="ohs-eyebrow">The Standard</span>
            <h2>What is ISO 45001?</h2>
            <p className="ohs-def">
              {"ISO 45001 is the "}
              <b>
                {
                  "international standard for Occupational Health & Safety Management Systems (OH&SMS)"
                }
              </b>
              , helping organizations prevent work-related injuries and promote a culture of safety.
            </p>
          </div>
          <ul className="ohs-duo">
            <li>
              <span className="ic" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
                </svg>
              </span>
              <div>
                <small>Helping organizations</small>
                <h3>Prevent work-related injuries</h3>
              </div>
              <p>
                Identify hazards before they cause harm, put the right controls in place, and learn
                from every incident so injuries and work-related ill health keep falling.
              </p>
              <div className="tags">
                <span>Hazard identification</span>
                <span>Risk controls</span>
                <span>Incident learning</span>
              </div>
            </li>
            <li>
              <span className="ic" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.4" />
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15.5 14.2c3 0 5.5 2.3 5.5 5.3" />
                </svg>
              </span>
              <div>
                <small>And</small>
                <h3>Promote a culture of safety</h3>
              </div>
              <p>
                Involve leaders and workers at every level so safe behavior becomes part of everyday
                work, not just a rule written down on paper.
              </p>
              <div className="tags">
                <span>Leadership commitment</span>
                <span>Worker participation</span>
                <span>{"Training & awareness"}</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="ohs-sec ohs-why" id="why">
        <div className="ohs-wrap">
          <div className="ohs-sh">
            <span className="ohs-eyebrow">Why it matters</span>
            <h2>Safer people. Stronger business.</h2>
          </div>
          <div className="ohs-wm">
            <ol className="ohs-lg">
              {benefits.map((benefit) => (
                <li key={benefit.num}>
                  <span className="n">{benefit.num}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside className="ohs-stats" id="stats">
              <span className="tag">Source: INAIL/Accredia study (2017‑2021)</span>
              <div className="ohs-rings">
                <div className="ohs-dc">
                  <div className="ohs-dn">
                    <svg viewBox="0 0 120 120" aria-hidden="true">
                      <circle className="tr" cx="60" cy="60" r="52" />
                      <circle
                        className="pg"
                        cx="60"
                        cy="60"
                        r="52"
                        style={{
                          strokeDashoffset: `${326.7 - 326.7 * (firstStat / 100) * 1.05}`,
                        }}
                      />
                    </svg>
                    <b>{firstStat}%</b>
                  </div>
                  <span>reduction in workplace accidents</span>
                </div>
                <div className="ohs-dc">
                  <div className="ohs-dn">
                    <svg viewBox="0 0 120 120" aria-hidden="true">
                      <circle className="tr" cx="60" cy="60" r="52" />
                      <circle
                        className="pg"
                        cx="60"
                        cy="60"
                        r="52"
                        style={{
                          strokeDashoffset: `${326.7 - 326.7 * (secondStat / 100) * 1.05}`,
                        }}
                      />
                    </svg>
                    <b>{secondStat}%</b>
                  </div>
                  <span>decrease in accident severity</span>
                </div>
              </div>
              <p>
                {"Companies with ISO 45001-certified safety management systems report a "}
                <b>22.6% reduction in workplace accidents</b>
                {" and a "}
                <b>29.2% decrease in accident severity</b>.
              </p>
              <a
                href="https://www.healthandsafetyinternational.com/article/1886379/certified-management-systems-reduce-workplace-accidents-22"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the study ↗
              </a>
            </aside>
          </div>
        </div>
      </section>
      <section className="ohs-sec" id="process">
        <div className="ohs-wrap">
          <div className="ohs-sh c">
            <span className="ohs-eyebrow">Our approach</span>
            <h2>{"Our 4-step OH&S implementation process"}</h2>
          </div>
          <ol className="ohs-tl">
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
      <section className="ohs-sec ohs-ben" id="benefits">
        <div className="ohs-wrap">
          <div className="ohs-sh">
            <span className="ohs-eyebrow">What you gain</span>
            <h2>Key benefits</h2>
          </div>
          <ul className="ohs-tiles">
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <b>{outcome}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ohs-sec ohs-ch" id="choose">
        <div className="ohs-wrap">
          <div className="ohs-sh">
            <span
              className="ohs-eyebrow"
              style={{
                color: "var(--ohs-primrose)",
              }}
            >
              Proven Track Record
            </span>
            <h2>Why choose Meridian?</h2>
          </div>
          <div className="ohs-cg">
            <figure>
              <img
                src={
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                }
                alt={"Meridian OH&S consulting"}
                loading="lazy"
                onError={(event) => {
                  event.target.onerror = null;
                  event.target.src =
                    "https://meqmp.com/wp-content/uploads/2025/06/Environmental-Management-Systems-1024x1024.png";
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
      <section className="ohs-role" aria-label={"Role of OH&S consultants"}>
        <div className="ohs-wrap">
          <div className="mk" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
              <path d="M8.5 12l2.5 2.5 4.5-5" />
            </svg>
          </div>
          <h2>{"Role of OH&S consultants"}</h2>
          <p>
            We help build safety into every level of your operation—from risk analysis to cultural
            adoption.
          </p>
        </div>
      </section>
      <div className="ohs-cta-wrap" id="contact">
        <section className="ohs-cta">
          <div>
            <h2>Ready to build a safer workplace?</h2>
            <p className="t">Prioritize safety with ISO 45001.</p>
            <Link className="ohs-btn ohs-btn-or" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
          </div>
          <dl className="ohs-ct">
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
