import { useState } from "react";
import { Link } from "react-router-dom";
const workSteps = [
  {
    label: "UNDERSTAND",
    title: "See the real challenge.",
    copy: "Understand business priorities, operational realities and applicable requirements.",
  },
  {
    label: "IMPLEMENT",
    title: "Make it work in practice.",
    copy: "Build useful systems, capable teams and practical ways of working.",
  },
  {
    label: "IMPROVE",
    title: "Make progress measurable.",
    copy: "Strengthen performance through risk-based thinking and continual improvement.",
  },
];
const industries = [
  {
    name: "Oil & gas",
    desc: "Operational control, risk and performance.",
    sector: "01 / SECTOR",
    feature: true,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Petrochemicals",
    desc: "Process safety and consistent operations.",
    sector: "02 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Construction",
    desc: "Project quality, safety and delivery.",
    sector: "03 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Manufacturing",
    desc: "Reliable processes and product quality.",
    sector: "04 / SECTOR",
    feature: true,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Food & beverage",
    desc: "Food safety, hygiene and control.",
    sector: "05 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Hospitality",
    desc: "Service quality and guest experience.",
    sector: "06 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Healthcare & pharma",
    desc: "Care quality, compliance and safety.",
    sector: "07 / SECTOR",
    feature: true,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Logistics",
    desc: "Traceability, coordination and reliability.",
    sector: "08 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Telecommunications",
    desc: "Service resilience and information systems.",
    sector: "09 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Public sector",
    desc: "Accountability and dependable services.",
    sector: "10 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Banking & insurance",
    desc: "Risk, governance and customer trust.",
    sector: "11 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Education",
    desc: "Learning quality and capable teams.",
    sector: "12 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Packaging",
    desc: "Product integrity and process control.",
    sector: "13 / SECTOR",
    feature: false,
    image:
      "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Energy & utilities",
    desc: "Resource performance and resilience.",
    sector: "14 / SECTOR",
    feature: true,
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=82",
  },
];
const expertiseAreas = [
  {
    label: "QUALITY & IMPROVEMENT",
    title: "Build consistency. Keep improving.",
    copy: "Develop consistent processes and strengthen performance through structured quality management and continual improvement methods.",
    tags: ["ISO 9001", "Lean", "Six Sigma"],
  },
  {
    label: "HEALTH, SAFETY & ENVIRONMENT",
    title: "Build safer, more responsible operations.",
    copy: "Strengthen workplace health and safety and environmental management in line with relevant operational risks and requirements.",
    tags: ["ISO 45001", "ISO 14001", "QHSE"],
  },
  {
    label: "FOOD SAFETY",
    title: "Protect products. Strengthen food safety.",
    copy: "Support food safety management and practical controls that help organizations manage hazards, hygiene and operational requirements.",
    tags: ["HACCP", "ISO 22000"],
  },
  {
    label: "INFORMATION & IT",
    title: "Build trust into information systems.",
    copy: "Address information security and IT service management through structured approaches aligned with organizational needs and applicable requirements.",
    tags: ["ISO/IEC 27001", "ISO/IEC 20000"],
  },
  {
    label: "RISK & RESILIENCE",
    title: "Prepare for disruption. Protect continuity.",
    copy: "Strengthen organizational resilience by considering risks, business continuity and the frameworks that support dependable operations.",
    tags: ["ISO 22301", "Risk management", "Project frameworks"],
  },
  {
    label: "ENERGY & SUSTAINABILITY",
    title: "Improve resource performance.",
    copy: "Explore energy management, ESG priorities and carbon management in line with environmental objectives and business priorities.",
    tags: ["ISO 50001", "ESG", "Carbon management"],
  },
  {
    label: "TECHNICAL & PEOPLE",
    title: "Strengthen capability and confidence.",
    copy: "Connect technical competence, leadership and workforce development with the skills and systems organizations need.",
    tags: ["ISO/IEC 17025", "Leadership", "Workforce development"],
  },
];
export default function AboutUs() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });
  const handlePointerMove = (event) => {
    if (window.innerWidth < 850) {
      return;
    }
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 16;
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 16;
    setPointer({
      x: offsetX,
      y: offsetY,
    });
  };
  const currentStep = workSteps[activeStep];
  const currentExpertise = expertiseAreas[activeExpertise];
  return (
    <div className="about-page" onPointerMove={handlePointerMove}>
      <section className="about-hero">
        <div className="about-hero-copy">
          <div className="eyebrow">Independent thinking. Practical progress.</div>
          <h1>
            Better systems.
            <br />
            <em>Stronger</em>
            <br />
            business.
          </h1>
          <p>
            We help businesses improve the way they work. From management systems and professional
            training to compliance and sustainability, we turn complex requirements into practical
            steps forward.
          </p>
          <div className="actions">
            <Link className="btn" to="/services">
              {"Explore what we do "}
              <span>↘</span>
            </Link>
            <Link className="btn btn-outline" to="/contact-us">
              {"Talk to our team "}
              <span>↗</span>
            </Link>
          </div>
          <div className="about-hero-meta">
            <span>Middle East</span>
            <span>· Asia</span>
            <span>· North America</span>
            <span>Since 2005</span>
          </div>
        </div>
        <div className="about-hero-art" aria-label="Abstract operational system illustration">
          <div
            className="about-orbit"
            style={{
              transform: `translate(-50%, -50%) rotate(-25deg) scaleY(0.43) translate(${pointer.x * 0.4}px, ${pointer.y * 0.4}px)`,
            }}
          />
          <div
            className="about-orbit two"
            style={{
              transform: `translate(-50%, -50%) rotate(45deg) scaleY(0.6) translate(${pointer.x * -0.3}px, ${pointer.y * -0.3}px)`,
            }}
          />
          <div
            className="about-core"
            style={{
              transform: `translate(calc(-50% + ${pointer.x * 0.6}px), calc(-50% + ${pointer.y * 0.6}px))`,
            }}
          >
            <span className="num">MEQMP / 01</span>
            <strong>
              Make
              <br />
              complexity
              <br />
              work.
            </strong>
            <small>From requirements to better everyday performance.</small>
          </div>
          <span className="about-orbit-label ol1">01 / UNDERSTAND</span>
          <span className="about-orbit-label ol2">02 / IMPLEMENT</span>
          <span className="about-orbit-label ol3">03 / IMPROVE</span>
          <span className="crosshair" />
        </div>
      </section>
      <section className="complexity-work" id="approach">
        <div className="work-panel" id="how-we-work">
          <div className="work-heading">
            <div>
              <div className="kicker">01 / How we work</div>
              <h2>
                Three stages.
                <br />
                <em>One clear direction.</em>
              </h2>
            </div>
            <div className="work-index">
              <span>THE MERIDIAN APPROACH</span>
              <strong>{String(activeStep + 1).padStart(2, "0")}</strong>
              <span>{currentStep.label}</span>
            </div>
          </div>
          <div className="work-track">
            <div className="work-track-line">
              <span
                style={{
                  width: `${activeStep * 50}%`,
                }}
              />
            </div>
            <div className="work-stages">
              {workSteps.map((workStep, index) => (
                <button
                  key={workStep.label}
                  className={`work-stage ${activeStep === index ? "active" : ""}`}
                  onClick={() => setActiveStep(index)}
                  aria-pressed={activeStep === index}
                >
                  <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="work-word">{workStep.label}</span>
                  <span className="work-teaser">{workStep.title}</span>
                  <span className="work-open">↗</span>
                </button>
              ))}
            </div>
            <div className="work-detail" aria-live="polite">
              <div className="work-detail-number">{String(activeStep + 1).padStart(2, "0")}</div>
              <div>
                <span className="work-detail-label">{currentStep.label}</span>
                <h3>{currentStep.title}</h3>
                <p>{currentStep.copy}</p>
              </div>
              <div className="work-detail-mark">↘</div>
            </div>
          </div>
        </div>
        <div className="complexity-panel">
          <div className="kicker">02 / The Meridian approach</div>
          <p className="complexity-kicker">MAKE</p>
          <h2>
            complexity
            <br />
            <em>work.</em>
          </h2>
          <p className="complexity-copy">
            Since 2005, Meridian Quality Management Professionals (MEQMP) has helped organizations
            turn standards and requirements into better ways of working. We connect proven
            frameworks with the realities of day-to-day business.
          </p>
          <div className="complexity-foot">
            <span>STANDARDS ARE THE STARTING POINT.</span>
            <span>PERFORMANCE IS THE GOAL.</span>
          </div>
        </div>
      </section>
      <section className="services-ledger" id="services">
        <div className="section-heading">
          <div className="kicker">03 / What we do</div>
          <h2 className="section-title">
            Different challenges.
            <br />
            <em>One connected approach.</em>
          </h2>
          <p className="section-intro intro">
            From system development to workforce capability and sustainability, our services are
            shaped around the requirements and priorities of each organization.
          </p>
        </div>
        <div className="service-list">
          <article className="service-row">
            <span className="service-no">01</span>
            <h3>
              {"Advisory &"}
              <br />
              management systems
            </h3>
            <div>
              <p>
                Develop, strengthen and improve management systems that connect standards with
                day-to-day operations, risk management and business objectives.
              </p>
              <Link className="service-link" to="/services#advisory">
                Discuss your requirements ↗
              </Link>
            </div>
            <span className="service-arrow">↗</span>
          </article>
          <article className="service-row">
            <span className="service-no">02</span>
            <h3>
              Professional
              <br />
              training
            </h3>
            <div>
              <p>
                Build the knowledge and practical competence teams need through professional
                development, auditor training and relevant qualifications within approved scopes.
              </p>
              <Link className="service-link" to="/services#training">
                Explore training options ↗
              </Link>
            </div>
            <span className="service-arrow">↗</span>
          </article>
          <article className="service-row">
            <span className="service-no">03</span>
            <h3>
              {"Compliance &"}
              <br />
              assurance
            </h3>
            <div>
              <p>
                Support organizations in understanding applicable requirements, assessing gaps and
                strengthening controls, audits and operational assurance.
              </p>
              <Link className="service-link" to="/services#compliance">
                Strengthen your approach ↗
              </Link>
            </div>
            <span className="service-arrow">↗</span>
          </article>
          <article className="service-row">
            <span className="service-no">04</span>
            <h3>
              {"Sustainability &"}
              <br />
              climate solutions
            </h3>
            <div>
              <p>
                Address environmental performance, energy efficiency, greenhouse gas measurement,
                ESG priorities and sustainable business practices.
              </p>
              <Link className="service-link" to="/services#sustainability">
                Explore sustainability ↗
              </Link>
            </div>
            <span className="service-arrow">↗</span>
          </article>
          <article className="service-row">
            <span className="service-no">05</span>
            <h3>
              Corporate
              <br />
              wellbeing
            </h3>
            <div>
              <p>
                Support healthier, more capable workplaces through programs aligned with
                organizational needs and workforce priorities.
              </p>
              <Link className="service-link" to="/services#wellbeing">
                Start a conversation ↗
              </Link>
            </div>
            <span className="service-arrow">↗</span>
          </article>
        </div>
      </section>
      <section className="about-proof" id="numbers">
        <div className="section-heading">
          <div className="kicker">04 / Our work in numbers</div>
          <h2 className="section-title">
            Experience that
            <br />
            adds up.
          </h2>
          <p className="section-intro">
            A growing body of work across advisory, professional training, audits and third-party
            inspections.
          </p>
        </div>
        <div className="numbers-wall">
          <div className="about-metric">
            <strong data-counter="530" data-suffix="+" className="stat-counter">
              530+
            </strong>
            <span>Advisory engagements</span>
            <small>Business and management system support</small>
          </div>
          <div className="about-metric">
            <strong data-counter="2500" data-suffix="+" data-comma="true" className="stat-counter">
              2,500+
            </strong>
            <span>Training programs</span>
            <small>Professional learning and development</small>
          </div>
          <div className="about-metric">
            <strong data-counter="1850" data-suffix="+" data-comma="true" className="stat-counter">
              1,850+
            </strong>
            <span>Audits</span>
            <small>Audit and assessment experience</small>
          </div>
          <div className="about-metric">
            <strong data-counter="350" data-suffix="+" className="stat-counter">
              350+
            </strong>
            <span>Third-party inspections</span>
            <small>Inspection experience across requirements</small>
          </div>
        </div>
      </section>
      <section className="credentials-sec">
        <div className="cred-new-head">
          <div className="kicker">{"05 / Recognition & credentials"}</div>
          <h2>
            Trust is built on
            <br />
            <em>clear scope.</em>
          </h2>
          <p>
            Trust is earned through clear standards and accountable practice. These credentials
            reflect different parts of Meridian’s work, each with its own purpose and defined scope.
          </p>
        </div>
        <div className="cred-new-list">
          <article className="cred-panel">
            <span className="cred-panel-no">01</span>
            <div className="cred-panel-type">TRAINING CENTRE RECOGNITION</div>
            <h3>TVTC recognition</h3>
            <p>
              Meridian is recognized as the first foreign-registered training centre approved by the
              Technical and Vocational Training Corporation (TVTC) in Saudi Arabia.
            </p>
            <span className="cred-panel-line" />
          </article>
          <article className="cred-panel">
            <span className="cred-panel-no">02</span>
            <div className="cred-panel-type">{"QUALIFICATIONS & TRAINING"}</div>
            <h3>Highfield Approved Centre</h3>
            <p>
              Supports the delivery of relevant qualifications and training within the centre’s
              approved scope.
            </p>
            <span className="cred-panel-line" />
          </article>
          <article className="cred-panel">
            <span className="cred-panel-no">03</span>
            <div className="cred-panel-type">MANAGEMENT SYSTEM</div>
            <h3>ISO 9001:2015 certified</h3>
            <p>
              Reflects a structured approach to managing processes, monitoring performance and
              delivering consistent services.
            </p>
            <span className="cred-panel-line" />
          </article>
          <p className="scope-note">
            Each approval or certification applies to its documented scope. Training, advisory,
            implementation, auditing and certification are distinct activities.
          </p>
        </div>
      </section>
      <section className="about-why">
        <div className="why-new-head">
          <div>
            <div className="kicker">06 / Why Meridian</div>
            <h2>
              Experience that works
              <br />
              <em>for your business.</em>
            </h2>
          </div>
          <p>
            Since 2005, Meridian has supported organizations across industries and markets. We bring
            advisory, training, assurance and sustainability capabilities together to help
            businesses turn requirements into practical improvements—at a scale that fits their
            needs.
          </p>
        </div>
        <div className="why-new-body">
          <div className="why-orbit">
            <span className="orbit-ring ring-a" />
            <span className="orbit-ring ring-b" />
            <div className="orbit-track" aria-hidden="true">
              <div className="orbit-node-carrier carrier-a">
                <span className="orbit-node">ADVISORY</span>
              </div>
              <div className="orbit-node-carrier carrier-b">
                <span className="orbit-node">TRAINING</span>
              </div>
              <div className="orbit-node-carrier carrier-c">
                <span className="orbit-node">ASSURANCE</span>
              </div>
              <div className="orbit-node-carrier carrier-d">
                <span className="orbit-node">SUSTAINABILITY</span>
              </div>
            </div>
            <div className="orbit-center">
              <strong>MEQMP</strong>
              <span>ONE CONNECTED APPROACH</span>
            </div>
          </div>
          <div className="why-new-list">
            <article className="why-item">
              <span className="symbol">01</span>
              <div>
                <h3>Connected capabilities</h3>
                <p>
                  Access a broad range of services, with support shaped around the challenge—not a
                  one-size-fits-all package.
                </p>
              </div>
            </article>
            <article className="why-item">
              <span className="symbol">02</span>
              <div>
                <h3>Practical implementation</h3>
                <p>
                  Move beyond paperwork. Build systems and ways of working that make sense in
                  day-to-day operations.
                </p>
              </div>
            </article>
            <article className="why-item">
              <span className="symbol">03</span>
              <div>
                <h3>Recognized training expertise</h3>
                <p>
                  Develop your people through professional learning and relevant qualifications
                  within approved scopes.
                </p>
              </div>
            </article>
            <article className="why-item">
              <span className="symbol">04</span>
              <div>
                <h3>International experience, for every size of business</h3>
                <p>
                  From small teams building strong foundations to established organizations
                  improving complex systems, we adapt our support to your needs.
                </p>
              </div>
            </article>
            <div className="regions">
              <span>Middle East</span>
              <span>Asia</span>
              <span>North America</span>
            </div>
          </div>
        </div>
      </section>
      <section className="industries-sec" id="industries">
        <div className="section-heading">
          <div className="kicker">07 / Where we work</div>
          <h2 className="section-title">
            Different industries.
            <br />
            <em>Built around your reality.</em>
          </h2>
          <p className="section-intro intro">
            Every sector has its own pressures, risks and ways of working. We shape support around
            the real-world demands of each industry—without a one-size-fits-all approach.
          </p>
        </div>
        <div className="industry-gallery">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              className={`industry-photo ${industry.feature ? "feature" : ""}`}
              to="/contact-us"
              style={{
                "--industry-image": `url('${industry.image}')`,
              }}
              aria-label={`Discuss Meridian support for ${industry.name}`}
            >
              <span className="photo-top">
                <small>{industry.sector}</small>
                <i>↗</i>
              </span>
              <span className="photo-caption">
                <strong>{industry.name}</strong>
                <small>{industry.desc}</small>
              </span>
            </Link>
          ))}
        </div>
        <p className="industry-close">
          From specialist operators to growing businesses, we adapt our support to the context,
          risks and goals of each organization.
        </p>
      </section>
      <section className="frameworks-sec" id="frameworks">
        <div className="framework-layout">
          <div className="framework-left">
            <div className="kicker">{"08 / Frameworks & standards"}</div>
            <h2>
              The right framework.
              <br />
              <em>A stronger way forward.</em>
            </h2>
            <p>
              Explore the standards and methods connected to our work. The right fit depends on your
              goals, industry and service scope.
            </p>
            <p className="scope-note">
              Services, training and support are provided according to the applicable scope and
              qualifications.
            </p>
          </div>
          <div className="framework-explorer">
            <div className="framework-tabs" role="tablist" aria-label="Framework categories">
              {expertiseAreas.map((expertiseArea, index) => (
                <button
                  key={expertiseArea.label}
                  className={`tab ${activeExpertise === index ? "active" : ""}`}
                  role="tab"
                  aria-selected={activeExpertise === index}
                  onClick={() => setActiveExpertise(index)}
                >
                  <span className="tabno">{String(index + 1).padStart(2, "0")}</span>
                  <strong>
                    {expertiseArea.label
                      .toLowerCase()
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </strong>
                  <span className="plus">↗</span>
                </button>
              ))}
            </div>
            <div className="framework-detail" role="tabpanel" aria-live="polite">
              <div className="framework-detail-kicker">
                {String(activeExpertise + 1).padStart(2, "0")}
                {" / "}
                {currentExpertise.label}
              </div>
              <h3>{currentExpertise.title}</h3>
              <p>{currentExpertise.copy}</p>
              <div className="framework-tags">
                {currentExpertise.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="framework-mark" aria-hidden="true">
                M.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="about-sustain" id="sustainability">
        <div className="sustain-copy">
          <div className="kicker">09 / Sustainability</div>
          <h2>
            Better decisions.
            <br />
            <em>Long-term impact.</em>
          </h2>
          <p>
            Sustainability is part of how a business plans for the future. We help organizations
            explore practical steps in environmental management, energy performance, carbon
            measurement, ESG and responsible procurement—aligned with their priorities and
            applicable requirements.
          </p>
          <Link
            className="text-link"
            to="/services#sustainability"
            style={{
              color: "var(--yellow)",
              borderColor: "var(--yellow)",
            }}
          >
            {"Explore sustainability solutions "}
            <span>↗</span>
          </Link>
        </div>
        <div className="sustain-stamp">
          <div>
            <strong>
              Think
              <br />
              long-term.<small>ACT WITH PURPOSE</small>
            </strong>
          </div>
        </div>
      </section>
      <section className="about-final-cta" id="contact">
        <div className="cta-topline">
          <span>Meridian Quality Management Professionals</span>
          <span>Make the next step count ↘</span>
        </div>
        <div className="cta-main">
          <h2>Wherever you are today, let’s plan what’s next.</h2>
          <div>
            <p>
              Whether you’re building your first management system or improving an established one,
              we’ll help you explore a practical next step for your business.
            </p>
            <div className="cta-actions">
              <Link className="cta-btn" to="/contact-us">
                Talk to our team ↗
              </Link>
              <Link className="cta-btn alt" to="/services">
                Explore what we do ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
