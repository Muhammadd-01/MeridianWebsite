import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Iso31000() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ISO 31000 – Risk Management | MEQMP";
  }, []);
  const benefits = [
    {
      num: "01",
      title: "Identify and mitigate threats proactively.",
      level: "rm-l5",
    },
    {
      num: "02",
      title: "Improve decision-making under uncertainty.",
      level: "rm-l4",
    },
    {
      num: "03",
      title: "Align risk practices with business strategy.",
      level: "rm-l3",
    },
    {
      num: "04",
      title: "Enhance resilience to crises and disruptions.",
      level: "rm-l2",
    },
    {
      num: "05",
      title: "Strengthen stakeholder confidence and governance.",
      level: "rm-l1",
    },
  ];
  const processSteps = [
    {
      num: "1",
      step: "first step",
      title: "Risk treatment planning.",
    },
    {
      num: "2",
      step: "second step",
      title: "Risk analysis and evaluation.",
    },
    {
      num: "3",
      step: "third step",
      title: "Monitoring, review, and reporting.",
    },
    {
      num: "4",
      step: "fourth step",
      title: "Risk identification and context definition.",
    },
  ];
  const outcomes = [
    "Fewer surprises and disruptions.",
    "Stronger board and investor assurance.",
    "Improved resource allocation and planning.",
    "More resilient operations and supply chains.",
    "Better alignment with compliance and ISO standards.",
  ];
  const services = [
    {
      n: "01",
      title: "Training and governance workshops.",
    },
    {
      n: "02",
      title: "Custom risk registers, heat maps, and tools.",
    },
    {
      n: "03",
      title: "Ongoing monitoring and strategy support.",
    },
    {
      n: "04",
      title: "Risk specialists with sector-specific knowledge.",
    },
  ];
  return (
    <div className="rm-page">
      <section className="rm-hero">
        <div className="rm-hero-in">
          <div>
            <p className="rm-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>ISO 31000 – Risk Management</b>
            </p>
            <h1>
              {"ISO 31000 – "}
              <span>Risk Management</span>
            </h1>
            <p className="rm-lead">
              Manage uncertainty, protect value, and make better decisions across your organization.
            </p>
            <div className="rm-acts">
              <Link className="rm-btn" to="/contact-us">
                {"Book a free consultation "}
                <i>↗</i>
              </Link>
              <a className="rm-btn rm-btn-o" href="#approach">
                {"See our approach "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="rm-mx" aria-hidden="true">
            <small>Risk matrix</small>
            <div className="rm-mxw">
              <div className="rm-ya">Impact</div>
              <div className="rm-hm">
                <span className="rm-l3" />
                <span className="rm-l4" />
                <span className="rm-l4" />
                <span className="rm-l5" />
                <span className="rm-l5" />
                <span className="rm-l2" />
                <span className="rm-l3" />
                <span className="rm-l4" />
                <span className="rm-l4" />
                <span className="rm-l5" />
                <span className="rm-l2" />
                <span className="rm-l2" />
                <span className="rm-l3" />
                <span className="rm-l4" />
                <span className="rm-l4" />
                <span className="rm-l1" />
                <span className="rm-l2" />
                <span className="rm-l2" />
                <span className="rm-l3" />
                <span className="rm-l4" />
                <span className="rm-l1" />
                <span className="rm-l1" />
                <span className="rm-l2" />
                <span className="rm-l2" />
                <span className="rm-l3" />
                <i />
              </div>
              <div className="rm-xa">Likelihood</div>
            </div>
          </div>
        </div>
      </section>
      <section className="rm-sec" id="what">
        <div className="rm-wrap rm-wi">
          <div>
            <span className="rm-lab">Framework</span>
            <h2>What is ISO 31000?</h2>
            <p className="rm-def">
              {"ISO 31000 offers "}
              <b>principles and guidelines</b>
              {" for effective risk management—applicable to every part of your organization."}
            </p>
          </div>
          <ul className="rm-pg">
            <li>
              <span className="k">01</span>
              <b>Principles</b>
            </li>
            <li>
              <span className="k">02</span>
              <b>Guidelines</b>
            </li>
            <li>
              <span className="k">∞</span>
              <b>Applicable to every part of your organization</b>
            </li>
          </ul>
        </div>
      </section>
      <section className="rm-sec rm-why" id="why">
        <div className="rm-wrap">
          <div className="rm-sh">
            <span className="rm-lab">Strategic Value</span>
            <h2>Why ISO 31000 matters?</h2>
          </div>
          <div className="rm-reg">
            <div className="hr">
              <span>No.</span>
              <span>Why it matters</span>
              <span />
            </div>
            <ol>
              {benefits.map((benefit) => (
                <li
                  key={benefit.num}
                  className={`r ${benefit.level}`}
                  style={{
                    borderLeftColor: `var(--${benefit.level.replace("rm-", "rm-")})`,
                  }}
                >
                  <span className="n">{benefit.num}</span>
                  <h3>{benefit.title}</h3>
                </li>
              ))}
            </ol>
          </div>
          <div className="rm-qt">
            <div className="q" aria-hidden="true">
              “
            </div>
            <div>
              <span className="tag">Source</span>
              <p>
                {"ISO 31000 helps organizations "}
                <b>improve performance</b>, encourages innovation and supports the{" "}
                <b>achievement of objectives</b>
                {" and strategic decision‑making."}
              </p>
              <a
                href="https://www.crigroup.com/iso31000-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the source ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="rm-sec" id="approach">
        <div className="rm-wrap">
          <div className="rm-sh c">
            <span className="rm-lab">Methodology</span>
            <h2>Our 4-step risk management approach</h2>
          </div>
          <ol className="rm-flow">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div>
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                </div>
                <span className="n">{processStep.num}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="rm-sec rm-ben" id="benefits">
        <div className="rm-wrap">
          <div className="rm-sh">
            <span className="rm-lab">Business Outcomes</span>
            <h2>Key benefits</h2>
          </div>
          <ul className="rm-pills">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="rm-sec rm-ch" id="choose">
        <div className="rm-wrap">
          <div className="rm-sh c">
            <span
              className="rm-lab"
              style={{
                color: "var(--rm-primrose)",
              }}
            >
              Dedicated Advisory
            </span>
            <h2>Why choose Meridian?</h2>
          </div>
          <ul className="rm-cg">
            {services.map((service) => (
              <li key={service.n} data-n={service.n}>
                <h3>{service.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="rm-role" aria-label="Role of risk management consultants">
        <div className="rm-wrap">
          <h2>Role of risk management consultants</h2>
          <p>We embed risk awareness into decision-making—transforming risk into opportunity.</p>
        </div>
      </section>
      <div className="rm-wrap" id="contact">
        <section className="rm-cta">
          <div className="mini" aria-hidden="true">
            <span className="rm-l3" />
            <span className="rm-l4" />
            <span className="rm-l4" />
            <span className="rm-l5" />
            <span className="rm-l5" />
            <span className="rm-l2" />
            <span className="rm-l3" />
            <span className="rm-l4" />
            <span className="rm-l4" />
            <span className="rm-l5" />
            <span className="rm-l2" />
            <span className="rm-l2" />
            <span className="rm-l3" />
            <span className="rm-l4" />
            <span className="rm-l4" />
            <span className="rm-l1" />
            <span className="rm-l2" />
            <span className="rm-l2" />
            <span className="rm-l3" />
            <span className="rm-l4" />
            <span className="rm-l1" />
            <span className="rm-l1" />
            <span className="rm-l2" />
            <span className="rm-l2" />
            <span className="rm-l3" />
          </div>
          <h2>Ready to build risk resilience?</h2>
          <p className="rm-t">
            Implement ISO 31000 for smarter business decisions and organizational resilience.
          </p>
          <Link className="rm-btn rm-btn-or" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
          <dl className="rm-ct">
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
