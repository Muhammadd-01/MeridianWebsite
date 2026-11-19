import { useState } from "react";
import { Link } from "react-router-dom";
const services = [
  {
    num: "01",
    title: "Carbon Footprint & Life Cycle Analysis",
    desc: "Measure greenhouse gas emissions through ISO 14064 carbon footprint assessments and Product Life Cycle Analysis (LCA), giving your organization a clear picture to support decisions and priorities.",
    chips: ["ISO 14064", "GHG Protocol", "ISO 14040/44 LCA", "Net Zero"],
    link: "/services/sustainability/carbon-footprint",
    linkText: "Explore Carbon Footprint Assessment",
  },
  {
    num: "02",
    title: "ESG reporting",
    desc: "Structure and strengthen your ESG priorities and the way you report on them, supported by sustainability and ESG frameworks.",
    chips: ["ESG frameworks", "Regional priorities", "GRI / SASB / SDGs"],
    link: "/services/sustainability/reporting",
    linkText: "Explore Sustainability Reporting",
  },
  {
    num: "03",
    title: "Energy management & ISO 50001",
    desc: "Improve energy efficiency and cut costs through structured energy management systems (EnMS) that connect to day-to-day operations.",
    chips: ["ISO 50001", "EnMS Framework", "Energy efficiency", "10–30% Savings"],
    link: "/services/sustainability/iso-50001",
    linkText: "Explore ISO 50001 & EnMS",
  },
  {
    num: "04",
    title: "Green building advisory & certifications",
    desc: "Support for organizations working toward more sustainable buildings and facilities under Green Building Advisory, international LEED criteria, and the Kingdom’s Mostadam rating system.",
    chips: ["Green Building Advisory", "LEED Certification", "Mostadam (Vision 2030)", "WELL"],
    link: "/services/sustainability/green-building-advisory",
    linkText: "Explore Green Building Advisory",
  },
  {
    num: "05",
    title: "Sustainable procurement & CSR Ratings",
    desc: "Bring sustainability considerations into how your organization buys, sources, and benchmarks performance with globally recognized EcoVadis ratings.",
    chips: ["Procurement practices", "EcoVadis CSR Rating", "Supply chain audits"],
    link: "/services/sustainability/ecovadis",
    linkText: "Explore EcoVadis Certification",
  },
  {
    num: "06",
    title: "Energy Audits & Resource Optimization",
    desc: "Pinpoint operational inefficiencies and resource waste across HVAC, lighting, boilers, water, and utilities with clear ROI-driven savings opportunities.",
    chips: ["Baseline assessment", "Site walkthrough", "HVAC & Lighting", "ROI modeling"],
    link: "/services/sustainability/energy-audits",
    linkText: "Explore Energy Audits",
  },
  {
    num: "07",
    title: "Sustainability & ESG Training",
    desc: "Equip your workforce to embed sustainability into culture and day-to-day operations with customized training in ESG, reporting, green building, and ISO standards.",
    chips: ["ESG Fundamentals", "GRI / SDG Reporting", "Green Building", "Vision 2030"],
    link: "/services/sustainability/training",
    linkText: "Explore Sustainability Training",
  },
];
const faqs = [
  {
    q: "Can we combine more than one service?",
    a: "Yes. Many engagements connect advisory, training and assurance, for example building a management system, training the people who run it and preparing it for audit. We shape the mix around your priorities.",
  },
  {
    q: "Which standards do you work with?",
    a: "For sustainability, our work draws on ISO 14001, ISO 50001 and sustainability and ESG frameworks. More broadly, we also support standards such as ISO 9001, ISO 45001, ISO 22000 and ISO/IEC 27001. The standards available depend on the service you need.",
  },
  {
    q: "Is Meridian an approved training provider?",
    a: "Meridian is a Highfield Approved Centre and is recognized as the first foreign-registered training centre approved by the Technical and Vocational Training Corporation (TVTC) in Saudi Arabia. Each approval applies only to its documented scope.",
  },
  {
    q: "How do we get started?",
    a: "Talk to our team. We start by understanding your priorities, current position and capacity for implementation, then help you identify the appropriate next step.",
  },
  {
    q: "Do you work with organizations of different sizes?",
    a: "Yes. We support growing businesses that are developing their systems as well as established enterprises managing more complex operations. We adapt our services to your requirements, priorities and resources.",
  },
  {
    q: "Which industries do you serve?",
    a: "Our work covers sectors including energy, petrochemicals, construction, manufacturing, healthcare, hospitality, food and beverage, and supply chain and logistics, among others. Services are adapted to the environment and applicable standards of each sector.",
  },
  {
    q: "Is sustainability advisory the same as certification?",
    a: "No. Training, advisory, implementation, auditing and certification are distinct activities, and each is delivered within its applicable scope. Tell us what you are working towards and we will explain what applies.",
  },
];
export default function Sustainability() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const currentService = services[activeService];
  return (
    <div className="sustain-page">
      <section className="sustain-hero">
        <div className="sustain-hero-body">
          <div>
            <span className="tag">{"Sustainability & Climate Solutions"}</span>
            <h1>
              Sustainability.<em>Made practical.</em>
            </h1>
            <p className="lead">
              Sustainability is an important part of responsible business performance. We help
              organizations assess environmental impacts, improve energy efficiency, measure
              greenhouse gas emissions and strengthen sustainability practices.
            </p>
            <div className="acts">
              <a className="btn p" href="#focus">
                Explore our solutions ↘
              </a>
              <Link className="btn line" to="/services/sustainability/reporting">
                Sustainability Reporting ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/leed">
                LEED ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/ecovadis">
                EcoVadis ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/mostadam">
                Mostadam ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/lca">
                Product LCA ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/green-building-advisory">
                Green Building ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/carbon-footprint">
                Carbon Footprint ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/iso-50001">
                ISO 50001 ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/energy-audits">
                Energy Audits ↗
              </Link>
              <Link className="btn line" to="/services/sustainability/training">
                Sustainability Training ↗
              </Link>
              <Link className="btn line" to="/contact-us">
                Talk to our team ↗
              </Link>
            </div>
          </div>
          <aside className="facts" aria-label="Key facts">
            <div>
              <b>2005</b>
              <span>Helping organizations since</span>
            </div>
            <div>
              <b>7</b>
              <span>Sustainability focus areas</span>
            </div>
            <div>
              <b>2030</b>
              <span>Aligned with regional priorities, including Saudi Vision 2030</span>
            </div>
          </aside>
        </div>
        <div className="sustain-strip" aria-hidden="true">
          <div className="sustain-mq">
            <span>Carbon footprint assessments</span>
            <span>ESG reporting</span>
            <span>Energy management</span>
            <span>Green building support</span>
            <span>Sustainable procurement</span>
            <span>Carbon footprint assessments</span>
            <span>ESG reporting</span>
            <span>Energy management</span>
            <span>Green building support</span>
            <span>Sustainable procurement</span>
          </div>
        </div>
      </section>
      <section className="sec" id="overview">
        <div className="sustain-intro">
          <div>
            <span className="eyebrow">Our commitment</span>
          </div>
          <div>
            <p className="sustain-lede">
              {"We help organizations "}
              <em>assess environmental impacts</em>
              {", improve energy efficiency, measure greenhouse gas emissions and "}
              <em>build sustainability into the way they work.</em>
            </p>
          </div>
        </div>
        <div className="sustain-caps">
          <div className="sustain-cap">
            <b>01</b>
            <h3>Assess environmental impacts</h3>
            <p>
              Understand where your organization affects the environment and where to focus first.
            </p>
          </div>
          <div className="sustain-cap">
            <b>02</b>
            <h3>Improve energy efficiency</h3>
            <p>Strengthen how energy is managed across your operations.</p>
          </div>
          <div className="sustain-cap">
            <b>03</b>
            <h3>Measure greenhouse gas emissions</h3>
            <p>Build a clear picture of emissions to support better decisions.</p>
          </div>
          <div className="sustain-cap">
            <b>04</b>
            <h3>Strengthen sustainability practices</h3>
            <p>Embed sustainability into everyday processes, systems and workforce capability.</p>
          </div>
        </div>
      </section>
      <section className="sec sustain-focus card-radius" id="focus">
        <div className="focus-head">
          <div>
            <span className="eyebrow">What we do</span>
            <h2>
              {"Seven focus areas. "}
              <em>One connected approach.</em>
            </h2>
          </div>
          <p>Select an area to see how we can support it.</p>
        </div>
        <div className="sustain-tabs-grid">
          <div className="sustain-tab-list" role="tablist" aria-label="Sustainability focus areas">
            {services.map((service, index) => (
              <button
                key={service.num}
                className="sustain-tab-btn"
                role="tab"
                aria-selected={activeService === index}
                onClick={() => setActiveService(index)}
              >
                <small>{service.num}</small>
                {service.title.split(" ")[0]} {service.title.split(" ")[1] || ""}
              </button>
            ))}
          </div>
          <div className="sustain-panel">
            <div className="sustain-pane" role="tabpanel">
              <span className="pn">{currentService.num}</span>
              <div>
                <h3>{currentService.title}</h3>
                <p>{currentService.desc}</p>
                <div className="sustain-chips">
                  {currentService.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
                {currentService.link && (
                  <div
                    style={{
                      marginTop: "24px",
                    }}
                  >
                    <Link
                      to={currentService.link}
                      className="btn p"
                      style={{
                        display: "inline-flex",
                        padding: "12px 22px",
                        fontSize: "13px",
                      }}
                    >
                      {currentService.linkText}
                      {" ↗"}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="delivery">
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <span className="eyebrow">How we deliver</span>
          <h2>
            {"Three ways "}
            <em>we deliver.</em>
          </h2>
        </div>
        <div>
          <div className="drow">
            <b>A</b>
            <h3>Advisory</h3>
            <p>
              Guidance shaped around your current position, objectives and capacity for
              implementation.
            </p>
          </div>
          <div className="drow">
            <b>B</b>
            <h3>Management systems</h3>
            <p>
              Environmental and energy practices connected to day-to-day operations and business
              objectives.
            </p>
          </div>
          <div className="drow">
            <b>C</b>
            <h3>Professional training</h3>
            <p>Workforce capability built within our approved scopes.</p>
          </div>
        </div>
      </section>
      <section className="sec sustain-approach card-radius" id="approach">
        <div>
          <span className="eyebrow">The Meridian approach</span>
          <h2>
            {"Three stages. "}
            <em>One clear direction.</em>
          </h2>
        </div>
        <div className="sustain-tl" id="tl">
          <div className="sustain-st">
            <span className="big">1</span>
            <h3>Understand</h3>
            <p>
              See the real challenge. We assess your environmental impacts, energy use and emissions
              alongside your business priorities and regional requirements.
            </p>
          </div>
          <div className="sustain-st">
            <span className="big">2</span>
            <h3>Implement</h3>
            <p>
              Put sustainability practices, management systems and training in place in a way that
              fits how your teams actually work.
            </p>
          </div>
          <div className="sustain-st">
            <span className="big">3</span>
            <h3>Improve</h3>
            <p>
              Make progress measurable, so better environmental performance carries on after we
              leave.
            </p>
          </div>
        </div>
        <p className="sustain-manifesto">
          {"Sustainability is part of performance. "}
          <em>We make it measurable.</em>
        </p>
      </section>
      <section
        className="sec sustain-fw-wrap card-radius"
        id="frameworks"
        style={{
          marginTop: "clamp(16px, 2vw, 24px)",
        }}
      >
        <div className="fw-head">
          <div>
            <span className="eyebrow">{"Standards & frameworks"}</span>
            <h2>
              {"Built on recognized "}
              <em>frameworks.</em>
            </h2>
          </div>
          <p>
            Our advisory and training capabilities cover international standards and professional
            frameworks relevant to environmental, energy and sustainability performance.
          </p>
        </div>
        <div className="sustain-fws">
          <div className="sustain-fw">
            <div>
              <span className="pre">Standard</span>
              <div className="code">14001</div>
            </div>
            <div>
              <h3>Environmental management</h3>
              <p>
                Assess environmental impacts and strengthen environmental management, supported by
                relevant QHSE frameworks.
              </p>
            </div>
          </div>
          <div className="sustain-fw">
            <div>
              <span className="pre">Standard</span>
              <div className="code">50001</div>
            </div>
            <div>
              <h3>Energy management</h3>
              <p>
                Improve energy efficiency and build energy management into day-to-day operations.
              </p>
            </div>
          </div>
          <div className="sustain-fw">
            <div>
              <span className="pre">Frameworks</span>
              <div className="code">ESG</div>
            </div>
            <div>
              <h3>{"Sustainability & ESG frameworks"}</h3>
              <p>
                Support for ESG reporting, carbon footprint assessments, green building and
                sustainable procurement.
              </p>
            </div>
          </div>
        </div>
        <p className="sustain-note">
          The specific standards and frameworks available depend on the service required. Training,
          advisory, implementation, auditing and certification are distinct activities and are
          delivered within their applicable scopes.
        </p>
      </section>
      <section
        className="sec"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div className="sustain-vision card-radius" id="vision">
          <div className="badge">
            <b>2030</b>Saudi Arabia's Vision 2030
          </div>
          <div className="vision-in">
            <span className="eyebrow">Regional priorities</span>
            <h2>
              {"Local priorities "}
              <em>matter.</em>
            </h2>
            <p>
              We recognize the importance of regional sustainability priorities, including Saudi
              Arabia's Vision 2030. Operating across the Middle East, Asia and North America, we
              consider them as part of how we support your organization.
            </p>
            <Link className="btn p" to="/contact-us">
              Talk to our team ↗
            </Link>
          </div>
        </div>
      </section>
      <section
        className="sec"
        id="industries"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="ind-head">
          <div>
            <span className="eyebrow">Industries</span>
            <h2>
              {"Experience across "}
              <em>industries.</em>
            </h2>
          </div>
          <p>
            Our services are adapted to the operational environment, workforce requirements and
            applicable standards of each sector.
          </p>
        </div>
        <div className="ind-row">
          <div className="sustain-mq">
            <span>
              <i className="pillx f">Oil and gas and petrochemicals</i>
              <i className="pillx">Construction and infrastructure</i>
              <i className="pillx y">Manufacturing and production</i>
              <i className="pillx">Food and beverage</i>
              <i className="pillx f">Hospitality</i>
              <i className="pillx y">Healthcare and pharmaceuticals</i>
              <i className="pillx">Supply chain and logistics</i>
            </span>
            <span>
              <i className="pillx f">Oil and gas and petrochemicals</i>
              <i className="pillx">Construction and infrastructure</i>
              <i className="pillx y">Manufacturing and production</i>
              <i className="pillx">Food and beverage</i>
              <i className="pillx f">Hospitality</i>
              <i className="pillx y">Healthcare and pharmaceuticals</i>
              <i className="pillx">Supply chain and logistics</i>
            </span>
          </div>
        </div>
        <div
          className="ind-row rev"
          style={{
            marginTop: "12px",
          }}
        >
          <div className="sustain-mq">
            <span>
              <i className="pillx y">Telecommunications</i>
              <i className="pillx">Public sector</i>
              <i className="pillx f">Insurance and banking</i>
              <i className="pillx">Education</i>
              <i className="pillx y">Packaging</i>
              <i className="pillx f">Energy and utilities</i>
            </span>
            <span>
              <i className="pillx y">Telecommunications</i>
              <i className="pillx">Public sector</i>
              <i className="pillx f">Insurance and banking</i>
              <i className="pillx">Education</i>
              <i className="pillx y">Packaging</i>
              <i className="pillx f">Energy and utilities</i>
            </span>
          </div>
        </div>
      </section>
      <section
        className="sec"
        id="why"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="sustain-split">
          <div className="sustain-sticky">
            <span className="eyebrow">Why Meridian?</span>
            <h2>
              {"The right support, "}
              <em>for your business.</em>
            </h2>
            <p>
              Organizations differ in size, resources, maturity and operational complexity. We adapt
              our services to your requirements, priorities and resources.
            </p>
          </div>
          <div className="sustain-why-list">
            <div className="why-i">
              <b>01</b>
              <div>
                <h3>Solutions that scale with your business</h3>
                <p>
                  We support growing businesses developing their systems and established enterprises
                  managing more complex operations.
                </p>
              </div>
            </div>
            <div className="why-i">
              <b>02</b>
              <div>
                <h3>Practical, business-focused expertise</h3>
                <p>
                  We connect standards and regulatory requirements with everyday operations,
                  focusing on effective implementation rather than documentation alone.
                </p>
              </div>
            </div>
            <div className="why-i">
              <b>03</b>
              <div>
                <h3>Integrated services</h3>
                <p>
                  Advisory, training, compliance, sustainability and wellbeing capabilities help you
                  address connected requirements in one coordinated approach.
                </p>
              </div>
            </div>
            <div className="why-i">
              <b>04</b>
              <div>
                <h3>Professional recognition</h3>
                <p>
                  Our training approvals, quality management certification and standards knowledge
                  support our capabilities within their respective scopes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sustain-stats card-radius" id="work">
        <div className="stats-head">
          <div>
            <span
              className="eyebrow"
              style={{
                color: "var(--teal)",
              }}
            >
              Meridian by the numbers
            </span>
            <h2>
              {"Experience "}
              <em>that adds up.</em>
            </h2>
          </div>
          <p>
            Meridian's reported cumulative experience across advisory engagements, professional
            training, audits and third-party inspections.
          </p>
        </div>
        <div className="sustain-nums">
          <div>
            <strong>530+</strong>
            <b>Advisory engagements</b>
            <small>Business and management system support</small>
          </div>
          <div>
            <strong>2,500+</strong>
            <b>Training programs</b>
            <small>Professional learning and development</small>
          </div>
          <div>
            <strong>1,850+</strong>
            <b>Audits</b>
            <small>Audit and assessment experience</small>
          </div>
          <div>
            <strong>350+</strong>
            <b>Third-party inspections</b>
            <small>Inspection experience across requirements</small>
          </div>
        </div>
        <p className="fine">
          Figures are company-wide and not specific to sustainability services.
        </p>
      </section>
      <section className="sec" id="trust">
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <span className="eyebrow">Credentials</span>
          <h2>
            {"Trust is built on "}
            <em>clear scope.</em>
          </h2>
        </div>
        <div className="sustain-creds">
          <div className="sustain-cr">
            <div>
              <div className="cr-ic" />
              <span className="scope">Saudi Arabia</span>
            </div>
            <div>
              <h3>TVTC recognition</h3>
              <p>
                Recognized as the first foreign-registered training centre approved by the Technical
                and Vocational Training Corporation (TVTC) in Saudi Arabia.
              </p>
            </div>
          </div>
          <div className="sustain-cr">
            <div>
              <div className="cr-ic" />
              <span className="scope">Approved scope</span>
            </div>
            <div>
              <h3>Highfield Approved Centre</h3>
              <p>
                Supports the delivery of relevant qualifications and training within the centre's
                approved scope.
              </p>
            </div>
          </div>
          <div className="sustain-cr">
            <div>
              <div className="cr-ic" />
              <span className="scope">Quality</span>
            </div>
            <div>
              <h3>ISO 9001:2015 certified</h3>
              <p>Reflects Meridian's own management system for quality.</p>
            </div>
          </div>
        </div>
        <p className="sustain-note">
          Each credential applies only to its documented scope. Advisory, training and certification
          are distinct activities.
        </p>
      </section>
      <section
        className="sec"
        id="faq"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="sustain-faq-grid">
          <div className="sustain-sticky">
            <span className="eyebrow">FAQ</span>
            <h2>
              {"Common questions. "}
              <em>Clear answers.</em>
            </h2>
            <div className="sustain-ask">
              <h3>Still have a question?</h3>
              <p>
                Tell us what you are working towards and we will help you identify the appropriate
                next step.
              </p>
              <Link className="btn p" to="/contact-us">
                Talk to our team ↗
              </Link>
            </div>
          </div>
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`faq-item-sustain ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-sum"
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="q-n">0{index + 1}</span>
                    <span className="q-t">{faq.q}</span>
                    <span className="q-i" aria-hidden="true">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-a">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="sustain-cta card-radius" id="contact">
        <div>
          <h2>
            {"Make sustainability "}
            <em>work.</em>
          </h2>
          <p>
            Every organization has different priorities. Meridian can help you identify the
            appropriate next step.
          </p>
        </div>
        <Link className="btn p" to="/contact-us">
          Talk to our team ↗
        </Link>
      </section>
    </div>
  );
}
