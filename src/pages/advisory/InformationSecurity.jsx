import { Link } from "react-router-dom";
const benefits = [
  {
    title: "Prevent data breaches and minimize cybersecurity risks.",
    desc: "Structured risk management and incident-response processes help you find weak points and respond before small issues become breaches.",
  },
  {
    title: "Comply with regulations like GDPR, HIPAA, and NCA.",
    desc: "One documented management system makes it easier to meet and evidence requirements across the regulations that apply to you.",
  },
  {
    title: "Protect intellectual property and sensitive customer data.",
    desc: "Clear access controls and policies keep trade secrets, designs, and customer records in the right hands.",
  },
  {
    title: "Strengthen stakeholder trust and business resilience.",
    desc: "Certification shows clients, partners, and regulators that your security is independently audited, and keeps operations steady through incidents.",
  },
  {
    title: "Reduce financial loss and reputational damage.",
    desc: "Fewer incidents means lower recovery costs, less downtime, and less harm to the reputation you’ve built.",
  },
];
const processSteps = [
  {
    num: "1",
    step: "First step",
    title: "Risk assessment & gap analysis",
    desc: "Identify vulnerabilities across systems, people, and processes.",
  },
  {
    num: "2",
    step: "Second step",
    title: "ISMS framework development",
    desc: "Design controls, policies, procedures, and documentation aligned with ISO 27001.",
  },
  {
    num: "3",
    step: "Third step",
    title: "Training & awareness",
    desc: "Upskill your teams to support a strong information security culture.",
  },
  {
    num: "4",
    step: "Fourth step",
    title: "Certification readiness & support",
    desc: "Audit support, internal assessments, and continual improvement planning.",
  },
];
const outcomes = [
  "Reduced cybersecurity risk exposure.",
  "Enhanced operational resilience.",
  "Global recognition and client trust.",
  "Seamless integration with ISO 9001 & ISO 14001.",
  "Stronger vendor and client onboarding potential.",
];
const whyChooseUs = [
  {
    title: "ISO-certified InfoSec experts",
    desc: "With domain knowledge in finance, government, and tech.",
  },
  {
    title: "End-to-end delivery",
    desc: "From strategy and implementation to audit support.",
  },
  {
    title: "Risk-focused methodology",
    desc: "Practical solutions with minimal disruption.",
  },
];
export default function InformationSecurity() {
  return (
    <div className="is-page">
      <section className="is-hero">
        <div className="is-hero-bg" aria-hidden="true" />
        <div className="is-hero-txt">
          <p className="is-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>{"IT & Information Security (ISO 27001)"}</b>
          </p>
          <h1>
            {"IT & Information Security "}
            <span>(ISO 27001)</span>
          </h1>
          <p className="is-lead">
            Secure your digital infrastructure with globally trusted standards.
          </p>
          <div className="is-acts">
            <Link className="is-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="is-btn o" href="#approach">
              {"See our approach "}
              <i>↓</i>
            </a>
          </div>
        </div>
        <div className="is-radar" aria-hidden="true">
          <svg viewBox="0 0 100 116">
            <path d="M50 4 L92 20 V58 C92 86 72 104 50 112 C28 104 8 86 8 58 V20 Z" />
            <text x="50" y="66">
              27001
            </text>
          </svg>
          <b />
          <b />
          <b />
        </div>
      </section>
      <section className="is-sec is-wi" id="what">
        <div className="is-wrap">
          <h2>
            {"What is "}
            <em>ISO 27001?</em>
          </h2>
          <p className="is-def">
            {"ISO 27001 is the international gold standard for "}
            <b>Information Security Management Systems (ISMS)</b>. It provides a structured
            framework to manage, monitor, and improve your organization’s information security —
            safeguarding data, ensuring business continuity, and achieving regulatory compliance.
          </p>
          <div className="is-tri">
            <div>
              <h3>The framework helps you</h3>
              <ul>
                <li>Manage</li>
                <li>Monitor</li>
                <li>Improve</li>
              </ul>
            </div>
            <div>
              <h3>So you can</h3>
              <ul>
                <li>Safeguard data</li>
                <li>Ensure business continuity</li>
                <li>Achieve regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="is-sec is-why" id="why">
        <div className="is-wrap">
          <h2>
            {"Why it "}
            <em>matters</em>
          </h2>
          <ul className="is-wall">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="is-dyk" aria-label="Did you know">
        <div className="is-wrap">
          <strong>Did you know?</strong>
          <div>
            <p>
              Organizations that implement ISO 27001 are widely recognized to experience
              significantly fewer security breaches and data leaks, thanks to structured risk
              management and incident-response processes.
            </p>
            <a
              href="https://ttms.com/iso-27001-implementation-strengthen-data-security-in-your-company/"
              target="_blank"
              rel="noreferrer"
            >
              Read the source
            </a>
          </div>
        </div>
      </section>
      <section className="is-sec" id="approach">
        <div className="is-wrap">
          <div className="is-sh">
            <h2>
              {"Our ISO 27001 implementation "}
              <em>approach</em>
            </h2>
          </div>
          <ol className="is-stairs">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="is-n">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="is-sec is-ben" id="benefits">
        <div className="is-wrap">
          <h2>
            {"Key "}
            <em>benefits</em>
          </h2>
          <ul className="is-pl">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <div className="is-chh is-wrap" id="choose">
        <h2>
          {"Why choose "}
          <em>Meridian?</em>
        </h2>
      </div>
      <ul className="is-tp">
        {whyChooseUs.map((whyChooseU, index) => (
          <li key={index}>
            <h3>{whyChooseU.title}</h3>
            <p>{whyChooseU.desc}</p>
          </li>
        ))}
      </ul>
      <section className="is-sec is-role">
        <div className="is-wrap">
          <h2>Role of ISO 27001 consultants</h2>
          <p>
            Our consultants don’t just assess risks — they help build and embed robust, scalable
            security systems tailored to your organization.
          </p>
        </div>
      </section>
      <section className="is-cta" id="contact">
        <div className="is-l">
          <h2>Ready to secure your digital future?</h2>
          <p className="is-t">
            Work with our ISO 27001 experts and start protecting your business today.
          </p>
          <Link className="is-btn or" to="/contact-us">
            {"Book a free consultation "}
            <i>↗</i>
          </Link>
        </div>
        <div className="is-r">
          <dl className="is-ct">
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
