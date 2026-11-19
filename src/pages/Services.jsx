import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const serviceAreas = [
  {
    num: "01",
    title: "Advisory",
    desc: "We help organizations strengthen management systems, improve processes, manage risks and align business practices with strategic objectives.",
    cta: "Explore Advisory",
    link: "/services/advisory",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=82",
  },
  {
    num: "02",
    title: "Sustainability",
    desc: "We help organizations measure environmental impact, address sustainability requirements and translate responsible business priorities into practical action.",
    cta: "Explore Sustainability",
    link: "/services/sustainability",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=82",
  },
  {
    num: "03",
    title: "Training",
    desc: "We deliver professional training that builds knowledge, develops practical skills and equips people to perform effectively in their roles.",
    cta: "Explore Training",
    link: "/services/training",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=82",
  },
  {
    num: "04",
    title: "Compliance",
    desc: "We support organizations through audits, inspections, assessments and compliance activities that help identify gaps and strengthen controls.",
    cta: "Explore Compliance",
    link: "/services/compliance",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=82",
  },
  {
    num: "05",
    title: "Corporate wellbeing",
    desc: "We help organizations support employee wellbeing through tailored programmes that encourage healthier workplaces and more supportive working environments.",
    cta: "Explore Corporate Wellbeing",
    link: "/services/corporate-wellbeing",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=82",
  },
];
const sustainabilityServices = [
  {
    num: "01",
    dark: true,
    title: "ESG strategy & sustainability reporting",
    desc: "Improve ESG performance and reporting through relevant frameworks, including GRI and applicable IFRS Sustainability Disclosure Standards. Assessments, data collection and reporting preparation.",
    chips: ["GRI", "IFRS Sustainability"],
  },
  {
    num: "02",
    dark: false,
    title: "Carbon footprint & climate action",
    desc: "Measure greenhouse gas emissions, identify major sources and set priorities for reducing environmental impact through organizational carbon footprint assessments.",
    chips: ["ISO 14064", "GHG accounting"],
  },
  {
    num: "03",
    dark: false,
    title: "Energy management & efficiency",
    desc: "Identify energy-saving opportunities, assess consumption and improve performance through energy audits and Energy Management Systems support.",
    chips: ["ISO 50001", "Energy audits"],
  },
  {
    num: "04",
    dark: false,
    title: "Green building & sustainable development",
    desc: "Support sustainable building projects through advisory, certification preparation and guidance on applicable requirements and building performance.",
    chips: ["LEED", "Mostadam"],
  },
  {
    num: "05",
    dark: false,
    title: "Sustainable procurement & supply chain ESG",
    desc: "Strengthen responsible procurement, identify ESG gaps and prepare supporting documentation for assessments and growing supply chain expectations.",
    chips: ["EcoVadis", "Supply chain ESG"],
  },
  {
    num: "06",
    dark: true,
    title: "Sustainability & ESG training",
    desc: "Develop practical knowledge in sustainability, carbon accounting, environmental management and responsible business practices.",
    chips: ["ISO 14064", "ISO 50001", "ISO 20400"],
  },
];
const serviceCategories = [
  {
    category: "01 · ADVISORY",
    options: [
      "Lean Six Sigma",
      "Supply chain optimisation",
      "Project management",
      "Change management",
      "Process reengineering",
    ],
  },
  {
    category: "02 · TRAINING",
    options: [
      "Lead auditor",
      "Internal auditor",
      "Leadership & management",
      "Exam preparation",
      "Safety & environment",
    ],
  },
  {
    category: "03 · COMPLIANCE",
    options: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "ISO 42001", "API Q1/Q2"],
  },
  {
    category: "04 · SUSTAINABILITY",
    options: [
      "ESG reporting",
      "Carbon footprint",
      "Energy management",
      "LEED / Mostadam",
      "EcoVadis",
    ],
  },
  {
    category: "05 · WELLBEING",
    options: [
      "Counselling services",
      "24/7 hotlines",
      "Workshops & meditation",
      "LMS-ready e-learning",
    ],
  },
];
const faqs = [
  {
    q: "Can we combine more than one service?",
    a: "Yes. Many engagements connect advisory, training and assurance, for example building a management system, training the people who run it and preparing it for audit. We shape the mix around your priorities.",
  },
  {
    q: "Which standards do you work with?",
    a: "Frameworks include ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 42001, ISO 50001, ISO 22000 and API Q1/Q2, among others. The right fit depends on your goals, industry and service scope.",
  },
  {
    q: "Is Meridian an approved training provider?",
    a: "Meridian is recognized as the first foreign-registered training centre approved by TVTC in Saudi Arabia and is a Highfield Approved Centre. Each approval applies within its documented scope.",
  },
  {
    q: "How do we get started?",
    a: "Talk to our team. We’ll review your goals and current situation, identify gaps and propose a practical next step, whether you’re building a first management system or improving an established one.",
  },
];
export default function Services() {
  const [activePanel, setActivePanel] = useState(0);
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(20);
  const [openFaq, setOpenFaq] = useState(0);
  const trackRef = useRef(null);
  const toggleService = (service) => {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(service)) {
        next.delete(service);
      } else {
        next.add(service);
      }
      return next;
    });
  };
  const handleTrackScroll = () => {
    if (!trackRef.current) {
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const progress = (scrollLeft / maxScroll) * 80 + 20;
      setScrollProgress(progress);
    }
  };
  const scrollTrack = (direction) => {
    if (!trackRef.current) {
      return;
    }
    trackRef.current.scrollBy({
      left: direction * 370,
      behavior: "smooth",
    });
  };
  const selectedList = Array.from(selectedServices);
  const mailBody = encodeURIComponent(`Hello Meridian team,

I would like to discuss the following areas:
${
  selectedList.length
    ? selectedList.map((item) => `- ${item}`).join(`
`)
    : "- (not sure yet, please advise)"
}

Thank you.`);
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-copy">
          <span className="eyebrow">What we do</span>
          <h1>
            Expertise for Better
            <br />
            <em>Business</em>
            {" Performance."}
          </h1>
          <p className="sub">
            Every organization has different priorities, challenges and ambitions. Meridian brings
            together specialized expertise across advisory, training, compliance, sustainability and
            corporate wellbeing to help businesses strengthen their systems, develop their people and
            improve performance.
          </p>
          <div className="btns">
            <a className="pill" href="#services">
              Explore services ↓
            </a>
            <a className="pill ghost" href="#build">
              Build your scope ↗
            </a>
          </div>
        </div>
        <div className="panels" aria-label="Services overview">
          {serviceAreas.map((serviceArea, index) => (
            <article
              key={serviceArea.num}
              className={`panel ${activePanel === index ? "active" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setActivePanel(index)}
              onClick={() => setActivePanel(index)}
              onFocus={() => setActivePanel(index)}
              style={{
                "--img": `url('${serviceArea.img}')`,
              }}
            >
              <span className="p-num">{serviceArea.num}</span>
              <span className="p-vert">{serviceArea.title}</span>
              <div className="p-open">
                <h3>{serviceArea.title}</h3>
                <p>{serviceArea.desc}</p>
                <a className="pill" href={serviceArea.link}>
                  {serviceArea.cta} ↘
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="p-hint">Hover or tap a panel to explore</div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            {"Advisory "}
            <b>✦</b>
            {" Management systems "}
            <b>✦</b>
            {" Professional training "}
            <b>✦</b>
            {" Compliance "}
            <b>✦</b>
            {" Assurance "}
            <b>✦</b>
            {" Sustainability "}
            <b>✦</b>
            {" Corporate wellbeing "}
            <b>✦</b>
          </span>
          <span>
            {"Advisory "}
            <b>✦</b>
            {" Management systems "}
            <b>✦</b>
            {" Professional training "}
            <b>✦</b>
            {" Compliance "}
            <b>✦</b>
            {" Assurance "}
            <b>✦</b>
            {" Sustainability "}
            <b>✦</b>
            {" Corporate wellbeing "}
            <b>✦</b>
          </span>
        </div>
      </div>
      <section className="section" id="services">
        <div className="wrap">
          <div className="stack-head">
            <div>
              <div className="kicker">01 / Our areas of expertise</div>
              <h2 className="big">
                Five Areas of Expertise.
                <br />
                <em>One Clear Purpose.</em>
              </h2>
            </div>
            <p className="lede">
              From strengthening management systems to developing people and advancing
              sustainability, our services address the requirements that matter to your
              organization.
            </p>
          </div>
          <div className="stack">
            <article
              className="scard"
              id="advisory"
              style={{
                "--i": 0,
                "--bg": "#093f50",
                "--fg": "#fff",
                "--mut": "#c9d8d7",
                "--ac": "#f2e6a2",
                "--ln": "#2f6070",
                "--btnbg": "#f2e6a2",
                "--btnfg": "#093f50",
              }}
            >
              <div className="sc-left">
                <div>
                  <div className="sc-top">
                    <span className="sc-no">01</span>
                    <span className="sc-tag">ADVISORY</span>
                  </div>
                  <h3
                    style={{
                      marginTop: "34px",
                    }}
                  >
                    {"Build Systems That "}
                    <em>Drive Performance.</em>
                  </h3>
                  <p className="desc">
                    We help organizations strengthen management systems, improve processes, manage
                    risks and align business practices with strategic objectives.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link className="pill" to="/services/advisory">
                    Explore Advisory ↗
                  </Link>
                  <Link className="pill ghost" to="/contact-us">
                    Discuss requirements ↗
                  </Link>
                </div>
              </div>
              <div className="sc-right">
                <div
                  className="sc-img"
                  style={{
                    "--img":
                      "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=82')",
                  }}
                />
                <ul className="sc-list">
                  <li>Lean Six Sigma</li>
                  <li>Supply chain optimisation</li>
                  <li>Project management</li>
                  <li>Change management</li>
                  <li>Process reengineering</li>
                </ul>
                <div className="sc-out">
                  <span>OUTCOME</span>
                  <strong>Processes that make sense on a Monday morning.</strong>
                </div>
              </div>
            </article>
            <article
              className="scard light"
              id="sustainability"
              style={{
                "--i": 1,
                "--bg": "#f2e6a2",
                "--fg": "#093f50",
                "--mut": "#4a6468",
                "--ac": "#8a4f08",
                "--ln": "#cfc17a",
                "--btnbg": "#093f50",
                "--btnfg": "#fff",
              }}
            >
              <div className="sc-left">
                <div>
                  <div className="sc-top">
                    <span className="sc-no">02</span>
                    <span className="sc-tag">SUSTAINABILITY</span>
                  </div>
                  <h3
                    style={{
                      marginTop: "34px",
                    }}
                  >
                    {"Turn Sustainability Into "}
                    <em>Measurable Progress.</em>
                  </h3>
                  <p className="desc">
                    We help organizations measure environmental impact, address sustainability
                    requirements and translate responsible business priorities into practical action.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link className="pill" to="/services/sustainability">
                    Explore Sustainability ↗
                  </Link>
                  <a className="pill ghost" href="#sustainability-deep">
                    Overview ↓
                  </a>
                </div>
              </div>
              <div className="sc-right">
                <div
                  className="sc-img"
                  style={{
                    "--img":
                      "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=82')",
                  }}
                />
                <ul className="sc-list">
                  <li>Sustainability reporting</li>
                  <li>Carbon footprint</li>
                  <li>Energy efficiency</li>
                  <li>{"LEED & Mostadam"}</li>
                  <li>{"EcoVadis & CSR"}</li>
                  <li>Life cycle analysis</li>
                </ul>
                <div className="sc-out">
                  <span>OUTCOME</span>
                  <strong>Measurable progress your customers can see.</strong>
                </div>
              </div>
            </article>
            <article
              className="scard light"
              id="training"
              style={{
                "--i": 2,
                "--bg": "#e8e9e0",
                "--fg": "#093f50",
                "--mut": "#52676a",
                "--ac": "#a45b0b",
                "--ln": "#bdc9c4",
                "--btnbg": "#093f50",
                "--btnfg": "#fff",
              }}
            >
              <div className="sc-left">
                <div>
                  <div className="sc-top">
                    <span className="sc-no">03</span>
                    <span className="sc-tag">TRAINING</span>
                  </div>
                  <h3
                    style={{
                      marginTop: "34px",
                    }}
                  >
                    {"Build Capability. "}
                    <em>Strengthen Performance.</em>
                  </h3>
                  <p className="desc">
                    We deliver professional training that builds knowledge, develops practical skills
                    and equips people to perform effectively in their roles.
                  </p>
                  <p className="sc-note">
                    Qualifications and training are delivered within the approved scope of the
                    relevant centre or awarding body.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link className="pill" to="/services/training">
                    Explore Training ↗
                  </Link>
                  <Link className="pill ghost" to="/contact-us">
                    Enquire ↗
                  </Link>
                </div>
              </div>
              <div className="sc-right">
                <div
                  className="sc-img"
                  style={{
                    "--img":
                      "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=82')",
                  }}
                />
                <ul className="sc-list">
                  <li>Lead auditor</li>
                  <li>Internal auditor</li>
                  <li>{"Leadership & management"}</li>
                  <li>Exam preparation</li>
                  <li>{"Safety & environment"}</li>
                </ul>
                <div className="sc-out">
                  <span>OUTCOME</span>
                  <strong>Teams that apply the standard, not just pass the exam.</strong>
                </div>
              </div>
            </article>
            <article
              className="scard"
              id="compliance"
              style={{
                "--i": 3,
                "--bg": "#101f23",
                "--fg": "#fff",
                "--mut": "#b6c5c5",
                "--ac": "#f2e6a2",
                "--ln": "#2c464c",
                "--btnbg": "#f2e6a2",
                "--btnfg": "#093f50",
              }}
            >
              <div className="sc-left">
                <div>
                  <div className="sc-top">
                    <span className="sc-no">04</span>
                    <span className="sc-tag">COMPLIANCE</span>
                  </div>
                  <h3
                    style={{
                      marginTop: "34px",
                    }}
                  >
                    {"Make Compliance Work for "}
                    <em>Your Organization.</em>
                  </h3>
                  <p className="desc">
                    We support organizations through audits, inspections, assessments and compliance
                    activities that help identify gaps and strengthen controls.
                  </p>
                  <p className="sc-note">
                    Advisory, implementation, auditing and certification are distinct activities.
                    Each service applies to its documented scope.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link className="pill" to="/services/compliance">
                    Explore Compliance ↗
                  </Link>
                  <Link className="pill ghost" to="/contact-us">
                    Strengthen approach ↗
                  </Link>
                </div>
              </div>
              <div className="sc-right">
                <div
                  className="sc-img"
                  style={{
                    "--img":
                      "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=82')",
                  }}
                />
                <ul className="sc-list">
                  <li>ISO 9001 · Quality</li>
                  <li>ISO 14001 · Environment</li>
                  <li>{"ISO 45001 · Health & safety"}</li>
                  <li>ISO 27001 · Info security</li>
                  <li>ISO 42001 · AI management</li>
                  <li>API Q1 / Q2</li>
                </ul>
                <div className="sc-out">
                  <span>OUTCOME</span>
                  <strong>Audit-ready as a habit, not a scramble.</strong>
                </div>
              </div>
            </article>
            <article
              className="scard"
              id="wellbeing"
              style={{
                "--i": 4,
                "--bg": "#145d68",
                "--fg": "#fff",
                "--mut": "#cfe0de",
                "--ac": "#f2e6a2",
                "--ln": "#3b7a84",
                "--btnbg": "#f2e6a2",
                "--btnfg": "#093f50",
                marginBottom: 0,
              }}
            >
              <div className="sc-left">
                <div>
                  <div className="sc-top">
                    <span className="sc-no">05</span>
                    <span className="sc-tag">CORPORATE WELLBEING</span>
                  </div>
                  <h3
                    style={{
                      marginTop: "34px",
                    }}
                  >
                    {"Put Workplace Wellbeing "}
                    <em>Into Practice.</em>
                  </h3>
                  <p className="desc">
                    We help organizations support employee wellbeing through tailored programmes that
                    encourage healthier workplaces and more supportive working environments.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link className="pill" to="/services/corporate-wellbeing">
                    Explore Corporate Wellbeing ↗
                  </Link>
                  <Link className="pill ghost" to="/contact-us">
                    Start a conversation ↗
                  </Link>
                </div>
              </div>
              <div className="sc-right">
                <div
                  className="sc-img"
                  style={{
                    "--img":
                      "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=82')",
                  }}
                />
                <ul className="sc-list">
                  <li>Counselling services</li>
                  <li>24/7 multilingual hotlines</li>
                  <li>{"Surveys & psychological checks"}</li>
                  <li>{"On-site & virtual trainings"}</li>
                  <li>LMS-ready e-learning</li>
                  <li>{"Workshops & guided meditation"}</li>
                </ul>
                <div className="sc-out">
                  <span>OUTCOME</span>
                  <strong>Teams that feel supported and perform better.</strong>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="sus" id="sustainability-deep">
        <div className="wrap">
          <div className="sus-top">
            <div>
              <div className="kicker">{"04+ / Sustainability & climate solutions"}</div>
              <h2 className="big">
                {"Practical sustainability "}
                <em>for business.</em>
              </h2>
              <div className="sus-vals">
                <span>Improve operational efficiency</span>
                <span>{"Manage business & environmental risks"}</span>
                <span>{"Meet customer & supply chain requirements"}</span>
                <span>Strengthen business credibility</span>
                <span>Prepare for changing expectations</span>
              </div>
            </div>
            <p
              className="lede"
              style={{
                fontSize: "15px",
              }}
            >
              Sustainability is becoming an important business priority as organizations face
              growing expectations around carbon emissions, resource efficiency, ESG reporting and
              responsible supply chains. In Saudi Arabia, environmental sustainability is also an
              important part of Vision 2030.
            </p>
          </div>
          <div className="ctrl">
            <button onClick={() => scrollTrack(-1)} aria-label="Previous">
              ←
            </button>
            <div className="bar">
              <span
                style={{
                  width: `${scrollProgress}%`,
                }}
              />
            </div>
            <button onClick={() => scrollTrack(1)} aria-label="Next">
              →
            </button>
          </div>
        </div>
        <div className="wrap">
          <div className="track" ref={trackRef} onScroll={handleTrackScroll}>
            {sustainabilityServices.map((sustainabilityService) => (
              <article
                key={sustainabilityService.num}
                className={`scard2 ${sustainabilityService.dark ? "dark" : ""}`}
              >
                <div className="n">
                  <span>{sustainabilityService.num}</span>
                  <span>↗</span>
                </div>
                <h3>{sustainabilityService.title}</h3>
                <p>{sustainabilityService.desc}</p>
                <div className="chips">
                  {sustainabilityService.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="wrap">
          <div className="sus-close">
            <h3>From assessment to implementation</h3>
            <p>
              We work with organizations to understand their sustainability requirements, assess
              existing practices and identify relevant improvement priorities. This provides a
              clearer basis for planning and implementing sustainability initiatives suited to their
              operations and objectives.
            </p>
          </div>
        </div>
      </section>
      <section className="build" id="build">
        <div className="wrap">
          <div>
            <div className="kicker">02 / Build your scope</div>
            <h2 className="big">
              Pick what matters.
              <br />
              <em>We’ll shape the rest.</em>
            </h2>
            <p className="lede">
              Select the areas you’re interested in. Your selection becomes a ready-made message to
              our team, with no commitment.
            </p>
          </div>
          <div className="build-grid">
            <div>
              {serviceCategories.map((serviceCategory) => (
                <div key={serviceCategory.category} className="grp">
                  <div className="grp-t">
                    <span>{serviceCategory.category}</span>
                  </div>
                  <div className="opts">
                    {serviceCategory.options.map((option) => {
                      const isSelected = selectedServices.has(option);
                      return (
                        <button
                          key={option}
                          className="opt"
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => toggleService(option)}
                        >
                          {isSelected ? `✓ ${option}` : option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <aside className="sum" aria-live="polite">
              <small>YOUR SELECTION</small>
              <div className="sum-count">{selectedList.length}</div>
              <h3>Areas of interest</h3>
              <ul>
                {selectedList.length === 0 ? (
                  <li
                    className="empty"
                    style={{
                      border: 0,
                    }}
                  >
                    Nothing selected yet. Tap an area on the left to begin.
                  </li>
                ) : (
                  selectedList.map((item) => <li key={item}>{item}</li>)
                )}
              </ul>
              <a
                className="pill"
                href={`mailto:info@meqmp.com?subject=${encodeURIComponent("Services enquiry")}&body=${mailBody}`}
              >
                {"Send to our team "}
                <span>↗</span>
              </a>
            </aside>
          </div>
        </div>
      </section>
      <section className="how" id="how">
        <div className="wrap how-grid">
          <div className="how-head">
            <div className="kicker">03 / Our approach</div>
            <h2 className="big">
              A Practical Approach.
              <br />
              <em>From Start to Improvement.</em>
            </h2>
            <p className="lede">
              Every successful engagement begins with understanding what matters to your
              organization. We follow a structured, collaborative approach that turns requirements
              into practical solutions and supports progress beyond implementation.
            </p>
          </div>
          <div className="tl">
            <div className="tl-step">
              <span className="tl-dot" />
              <div className="tl-no">01</div>
              <h3>{"Discover & Define"}</h3>
              <span className="tag">We Listen. We Understand.</span>
              <p>
                We begin by understanding your business objectives, challenges and operating
                environment. Together, we define the scope, assess relevant requirements and identify
                the priorities that will shape the way forward.
              </p>
            </div>
            <div className="tl-step">
              <span className="tl-dot" />
              <div className="tl-no">02</div>
              <h3>{"Build & Align"}</h3>
              <span className="tag">Solutions Designed Around Your Needs.</span>
              <p>
                Every organization is different. We develop practical management systems, training
                programmes and advisory plans that reflect your industry, operations and objectives.
              </p>
            </div>
            <div className="tl-step">
              <span className="tl-dot" />
              <div className="tl-no">03</div>
              <h3>{"Implement & Integrate"}</h3>
              <span className="tag">From Strategy to Practice.</span>
              <p>
                We support the implementation of systems, processes and frameworks across your
                organization. Working with relevant specialists, trainers and auditors, we help
                translate plans into practical action.
              </p>
            </div>
            <div className="tl-step">
              <span className="tl-dot" />
              <div className="tl-no">04</div>
              <h3>{"Sustain & Improve"}</h3>
              <span className="tag">Continuous Progress. Long-Term Value.</span>
              <p>
                Our support can continue beyond initial delivery through monitoring, refresher
                training, internal audits and further advisory support. We help organizations maintain
                their systems, identify opportunities for improvement and respond to changing
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="services-ledger"
        style={{
          padding: "100px 8vw",
        }}
      >
        <div className="wrap">
          <div
            className="stack-head"
            style={{
              marginBottom: "40px",
            }}
          >
            <div>
              <div className="kicker">04 / Our work in numbers</div>
              <h2 className="big">
                Experience that
                <br />
                adds up.
              </h2>
            </div>
            <p className="lede">
              A growing body of work across advisory, professional training, audits and third-party
              inspections.
            </p>
          </div>
          <div
            className="numbers-wall"
            style={{
              borderTopColor: "#345058",
              borderBottomColor: "#345058",
            }}
          >
            <div
              className="about-metric"
              style={{
                color: "#fff",
              }}
            >
              <strong
                style={{
                  color: "var(--yellow)",
                }}
              >
                530+
              </strong>
              <span>Advisory engagements</span>
              <small
                style={{
                  color: "#b6c5c5",
                }}
              >
                Business and management system support
              </small>
            </div>
            <div
              className="about-metric"
              style={{
                color: "#fff",
                borderLeftColor: "#345058",
              }}
            >
              <strong
                style={{
                  color: "var(--yellow)",
                }}
              >
                2,500+
              </strong>
              <span>Training programs</span>
              <small
                style={{
                  color: "#b6c5c5",
                }}
              >
                Professional learning and development
              </small>
            </div>
            <div
              className="about-metric"
              style={{
                color: "#fff",
                borderLeftColor: "#345058",
              }}
            >
              <strong
                style={{
                  color: "var(--yellow)",
                }}
              >
                1,850+
              </strong>
              <span>Audits</span>
              <small
                style={{
                  color: "#b6c5c5",
                }}
              >
                Audit and assessment experience
              </small>
            </div>
            <div
              className="about-metric"
              style={{
                color: "#fff",
                borderLeftColor: "#345058",
              }}
            >
              <strong
                style={{
                  color: "var(--yellow)",
                }}
              >
                350+
              </strong>
              <span>Third-party inspections</span>
              <small
                style={{
                  color: "#b6c5c5",
                }}
              >
                Inspection experience across requirements
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-sec">
        <div className="wrap">
          <div className="faq-head">
            <div className="kicker">05 / Questions</div>
            <h2 className="big">
              {"Questions, "}
              <em>answered.</em>
            </h2>
            <p className="lede">
              Quick answers about our services, standards and how to get started.
            </p>
          </div>
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-header"
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>0{index + 1}</span>
                    <strong>{faq.q}</strong>
                    <i>{isOpen ? "✕" : "+"}</i>
                  </button>
                  {isOpen && (
                    <div className="faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="services-cta" id="contact">
        <div className="kicker">Start a conversation</div>
        <h2>
          {"Let's Make Your Next "}
          <em>Improvement Happen.</em>
        </h2>
        <p>
          Tell us about your requirements, priorities or challenges. Whether you are looking to
          strengthen your systems, develop your people, improve compliance or advance
          sustainability, our team is ready to explore how Meridian can support you.
        </p>
        <div className="row">
          <Link className="pill" to="/contact-us">
            Talk to our team ↗
          </Link>
          <Link
            className="pill alt"
            to="/about-us"
            style={{
              background: "transparent",
              color: "var(--teal)",
              borderColor: "var(--teal)",
            }}
          >
            About Meridian ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
