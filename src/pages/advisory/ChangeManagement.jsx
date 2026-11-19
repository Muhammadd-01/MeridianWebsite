import { Link } from "react-router-dom";
const changeDimensions = [
  {
    icon: "C",
    title: "Cultural",
    sub: "Mindsets & ways of working",
  },
  {
    icon: "S",
    title: "Structural",
    sub: "Roles & organization",
  },
  {
    icon: "D",
    title: "Digital",
    sub: "Systems & processes",
  },
];
const benefits = [
  {
    num: "01",
    verb: "Align",
    text: "leadership, teams, and strategy around change.",
  },
  {
    num: "02",
    verb: "Minimize",
    text: "resistance and productivity loss.",
  },
  {
    num: "03",
    verb: "Accelerate",
    text: "adoption of new systems or processes.",
  },
  {
    num: "04",
    verb: "Build",
    text: "long-term cultural resilience.",
  },
  {
    num: "05",
    verb: "Ensure",
    text: "ROI from transformation efforts.",
  },
];
const processSteps = [
  {
    num: "1",
    step: "First step",
    title: "Change Readiness Assessment",
    desc: "We evaluate cultural readiness, stakeholder alignment, and communication needs.",
  },
  {
    num: "2",
    step: "Second step",
    title: "Stakeholder Engagement",
    desc: "Custom engagement plans ensure buy-in from executive leadership to frontline staff.",
  },
  {
    num: "3",
    step: "Third step",
    title: "Change Plan Development",
    desc: "We design strategies for communication, training, reinforcement, and risk mitigation.",
  },
  {
    num: "4",
    step: "Fourth step",
    title: "Impact Tracking & Reinforcement",
    desc: "Post-rollout tracking and feedback loops embed change into culture and performance.",
  },
];
const outcomes = [
  "Higher adoption rates for change initiatives.",
  "Reduced resistance and operational disruption.",
  "Improved morale and leadership credibility.",
  "Faster realization of transformation benefits.",
  "Culture of continuous adaptability and learning.",
];
const whyChooseUs = [
  {
    num: "01",
    title: "Prosci-Certified Experts",
    desc: "Our change leads are globally certified and experienced in high-stakes organizational transitions.",
  },
  {
    num: "02",
    title: "Human-Centered Design",
    desc: "We put people at the heart of the transformation to ensure empathy, clarity, and genuine ownership.",
  },
  {
    num: "03",
    title: "Proven Results",
    desc: "Clients report significantly higher adoption, accelerated ROI, and smoother cross-functional transitions.",
  },
  {
    num: "04",
    title: "Support Beyond Launch",
    desc: "We support change from strategic planning through to long-term reinforcement — not just one-off training.",
  },
];
export default function ChangeManagement() {
  return (
    <div className="cm-page">
      <section className="cm-hero">
        <div className="cm-hg">
          <div>
            <p className="cm-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/advisory">Advisory</Link>
              {" / "}
              <b>Change Management</b>
            </p>
            <h1>
              {"Change management "}
              <em>consulting.</em>
            </h1>
            <p className="l">
              Lead change confidently, reduce resistance, and enable transformation that sticks.
            </p>
            <div className="cm-ha">
              <Link className="cm-btn" to="/contact">
                Book a Free Consultation
              </Link>
              <a className="cm-btn g" href="#model">
                Our 4-step model
              </a>
            </div>
          </div>
          <div className="cm-shot">
            <img
              src={
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
              }
              alt="Team collaborating on a strategic change initiative"
            />
            <div className="cm-float">
              <b>7×</b>
              <span>more likely to meet objectives with excellent change management</span>
            </div>
          </div>
        </div>
      </section>
      <section className="cm-sec" id="what">
        <div className="cm-w">
          <div className="cm-what">
            <div>
              <span className="cm-tag">What Is Change Management?</span>
              <h2>
                {"Guiding people through "}
                <em>every transition.</em>
              </h2>
              <p className="d">
                {"We provide "}
                <b>frameworks, tools, and strategies</b>
                {
                  " that guide your teams through transitions — whether cultural, structural, or digital."
                }
              </p>
            </div>
            <div className="cm-types">
              {changeDimensions.map((changeDimension, index) => (
                <div key={index}>
                  <i>{changeDimension.icon}</i>
                  <h3>{changeDimension.title}</h3>
                  <small>{changeDimension.sub}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="cm-photo">
            <img
              src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
              alt="Change management leadership at Meridian"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="cm-sec cm-why" id="why">
        <div className="cm-w">
          <span className="cm-tag">Why It Matters</span>
          <h2>
            {"Why change management "}
            <em>matters.</em>
          </h2>
          <ul className="cm-wl">
            {benefits.map((benefit) => (
              <li key={benefit.num}>
                <em>{benefit.num}</em>
                <b>{benefit.verb}</b>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="cm-sec cm-ev">
        <div className="cm-w">
          <span
            className="cm-tag"
            style={{
              color: "var(--cm-gold)",
            }}
          >
            The Evidence
          </span>
          <div className="n">7×</div>
          <h2>
            {"Excellent change management "}
            <em>pays off.</em>
          </h2>
          <p>
            {
              "According to Prosci’s Best Practices in Change Management research, a project with excellent change management is "
            }
            <b>approximately seven times more likely to meet its objectives</b>
            {" than one with poor change management."}
          </p>
          <p className="s">
            Source:{" "}
            <a
              href="https://www.prosci.com/blog/the-correlation-between-change-management-and-project-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prosci Research
            </a>
          </p>
        </div>
      </section>
      <section className="cm-sec" id="model">
        <div className="cm-w">
          <div className="cm-mh">
            <span className="cm-tag">Our Approach</span>
            <h2>
              {"Our 4-step change "}
              <em>enablement model.</em>
            </h2>
          </div>
          <ol className="cm-steps">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <div className="nm">{processStep.num}</div>
                <small>{processStep.step}</small>
                <h3>{processStep.title}</h3>
                <p>{processStep.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="cm-sec cm-ben" id="benefits">
        <div className="cm-w cm-bg">
          <div>
            <span
              className="cm-tag"
              style={{
                color: "#8a4f08",
              }}
            >
              Key Benefits
            </span>
            <h2>
              {"Key "}
              <em>benefits.</em>
            </h2>
          </div>
          <ul>
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="cm-sec" id="choose">
        <div className="cm-w">
          <span className="cm-tag">Why Choose Meridian?</span>
          <h2>
            {"Why choose "}
            <em>Meridian?</em>
          </h2>
          <div className="cm-cg">
            {whyChooseUs.map((whyChooseU) => (
              <div key={whyChooseU.num} data-n={whyChooseU.num}>
                <h3>{whyChooseU.title}</h3>
                <p>{whyChooseU.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cm-sec cm-role" aria-label="Role of Change Management Consultants">
        <div className="cm-w">
          <span className="cm-tag">Role of Change Management Consultants</span>
          <p>
            {"We guide the "}
            <em>human side of change</em>
            {" — bridging strategy and culture, and enabling adoption that drives sustained value."}
          </p>
        </div>
      </section>
      <section className="cm-sec" id="contact">
        <div className="cm-w cm-cta">
          <div>
            <span
              className="cm-tag"
              style={{
                color: "var(--cm-gold)",
              }}
            >
              Book a Free Consultation
            </span>
            <h2>
              {"Ready to lead "}
              <em>successful change?</em>
            </h2>
            <p>Enable seamless, confident transformation across your leadership and teams.</p>
            <Link className="cm-btn" to="/contact">
              Book a Free Consultation
            </Link>
          </div>
          <div className="cm-ct">
            <div>
              <small>Call us</small>
              <a href="tel:+966509394640">+966 50 939 4640</a>
            </div>
            <div>
              <small>Need support</small>
              <a href="mailto:info@meqmp.com">info@meqmp.com</a>
            </div>
            <div>
              <small>Our global locations</small>
              <span>Saudi Arabia · Bahrain · Canada · Pakistan</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
