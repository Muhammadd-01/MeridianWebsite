import { useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function ProjectManagement() {
  const sliderRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const firstItem = sliderRef.current.querySelector("li");
      const scrollStep = firstItem ? firstItem.offsetWidth + 12 : 320;
      sliderRef.current.scrollBy({
        left: direction * scrollStep,
        behavior: "smooth",
      });
    }
  };
  const certifications = [
    "PMP®",
    "PRINCE2®",
    "Agile",
    "Hybrid",
    "Waterfall",
    "PMO",
    "KPIs",
    "Governance",
    "Value realization",
  ];
  const capabilities = [
    {
      num: "01",
      verb: "Align",
      text: "projects with business strategy and ROI.",
    },
    {
      num: "02",
      verb: "Mitigate",
      text: "risks and eliminate overruns.",
    },
    {
      num: "03",
      verb: "Improve",
      text: "cross-functional coordination.",
    },
    {
      num: "04",
      verb: "Ensure",
      text: "transparency and stakeholder engagement.",
    },
    {
      num: "05",
      verb: "Drive",
      text: "faster project completion with quality control.",
    },
  ];
  const processSteps = [
    {
      num: 1,
      step: "First step",
      title: "Project Audit & Planning",
      desc: "We assess current project portfolios and identify risk, budget issues, and missed KPIs.",
    },
    {
      num: 2,
      step: "Second step",
      title: "PM Framework Deployment",
      desc: "We apply PM best practices customized to your business — Agile, Hybrid, or Waterfall.",
    },
    {
      num: 3,
      step: "Third step",
      title: "PMO Setup & Capability Building",
      desc: "We help establish or upgrade your PMO and train your teams to lead successful projects.",
    },
    {
      num: 4,
      step: "Fourth step",
      title: "Monitoring & Value Realization",
      desc: "Post-launch, we track project success using KPIs and ensure business alignment.",
    },
  ];
  const services = [
    {
      num: "01",
      title: "Certified Project Leaders",
      desc: "Our team includes PMP®, Agile, and Lean-certified experts with global experience.",
    },
    {
      num: "02",
      title: "Custom-Fit Solutions",
      desc: "From IT to infrastructure, we tailor approaches based on your industry and complexity.",
    },
    {
      num: "03",
      title: "Portfolio Impact",
      desc: "We’ve delivered success on multimillion-dollar, multi-site, and high-risk projects.",
    },
    {
      num: "04",
      title: "Full Support Lifecycle",
      desc: "From initiation to handover — we stay embedded in your success.",
    },
  ];
  return (
    <div className="pm-page">
      <section className="pm-hero pm-dark" id="top">
        <div className="pm-hero-bg" aria-hidden="true" />
        <div className="pm-wrap">
          <p className="pm-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services">Services</Link>
            {" /"} <Link to="/services/advisory">Advisory</Link>
            {" / "}
            <b>Project Management Excellence</b>
          </p>
          <h1>
            {"Project management "}
            <span>excellence.</span>
          </h1>
          <p className="pm-lead">
            Deliver projects on time, on scope, and on budget with data-driven project governance.
          </p>
          <div className="pm-pills">
            <span>On time</span>
            <span>On scope</span>
            <span>On budget</span>
          </div>
          <div className="pm-acts">
            <Link className="pm-btn" to="/contact-us">
              {"Book a free consultation "}
              <i>↗</i>
            </Link>
            <a className="pm-btn pm-btn-o" href="#framework">
              {"See the framework "}
              <i>↓</i>
            </a>
          </div>
          <div className="pm-scopes">
            <div>
              <small>Phase 01</small>
              <b>{"Audit & planning"}</b>
            </div>
            <div>
              <small>Phase 02</small>
              <b>Framework deployment</b>
            </div>
            <div>
              <small>Phase 03</small>
              <b>{"PMO & capability"}</b>
            </div>
            <div>
              <small>Phase 04</small>
              <b>Value realization</b>
            </div>
          </div>
        </div>
      </section>
      <div className="pm-tape" aria-hidden="true">
        <div className="pm-tp">
          {[...certifications, ...certifications, ...certifications].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <section className="pm-sec" id="what">
        <div className="pm-wrap">
          <div className="pm-wh">
            <div>
              <span className="pm-lab">What Is Project Management Consulting?</span>
              <h2>
                {"Project excellence, "}
                <em>engineered.</em>
              </h2>
              <p className="pm-def">
                We help you achieve project excellence through proven PM frameworks{" "}
                <b>(PMP®, PRINCE2®, Agile)</b>
                {" — aligning strategy, people, and execution for scalable results."}
              </p>
              <div className="pm-std">
                <span>PMP®</span>
                <span>PRINCE2®</span>
                <span>Agile</span>
              </div>
            </div>
            <div className="pm-ph">
              <img
                src="https://meqmp.com/wp-content/uploads/2025/06/765-x-495-px-1024x663.png"
                alt="Project management consulting at Meridian"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <em>Strategy · People · Execution</em>
            </div>
          </div>
          <div className="pm-eq">
            <div className="pm-c">
              <small>Pillar 01</small>
              <h3>Strategy</h3>
            </div>
            <div className="pm-op" aria-hidden="true">
              +
            </div>
            <div className="pm-c">
              <small>Pillar 02</small>
              <h3>People</h3>
            </div>
            <div className="pm-op" aria-hidden="true">
              +
            </div>
            <div className="pm-c">
              <small>Pillar 03</small>
              <h3>Execution</h3>
            </div>
            <div className="pm-op" aria-hidden="true">
              =
            </div>
            <div className="pm-c pm-c-res">
              <small>Outcome</small>
              <h3>Scalable results</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="pm-sec pm-why" id="why">
        <div className="pm-wrap">
          <div className="pm-why-h">
            <div>
              <span className="pm-lab">Why It Matters</span>
              <h2>
                {"Why project management "}
                <em>matters.</em>
              </h2>
            </div>
            <div className="pm-arrows">
              <button type="button" onClick={() => scrollSlider(-1)} aria-label="Previous card">
                ←
              </button>
              <button type="button" onClick={() => scrollSlider(1)} aria-label="Next card">
                →
              </button>
            </div>
          </div>
          <ul
            className="pm-cr"
            ref={sliderRef}
            tabIndex={0}
            aria-label="Why project management matters"
          >
            {capabilities.map((capability, index) => (
              <li key={index} data-n={capability.num}>
                <small>{capability.num}</small>
                <div>
                  <i>{capability.verb}</i>
                  <b>{capability.text}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="pm-sec pm-ev pm-dark" id="evidence">
        <div className="pm-wrap">
          <span className="pm-lab">The Evidence</span>
          <div className="pm-evt">
            <div className="pm-n">30–40%</div>
            <div>
              <h2>
                {"Mature project management "}
                <em>pays off.</em>
              </h2>
              <p>
                {
                  "According to PMI’s Pulse of the Profession, organizations with mature project management practices achieve "
                }
                <b>30–40% higher project success rates.</b>
              </p>
            </div>
          </div>
          <div className="pm-trk">
            <span>30–40%</span>
            <i />
          </div>
          <div className="pm-sc">
            <span>0%</span>
            <span>100%</span>
          </div>
          <p className="pm-src">
            Source:{" "}
            <a
              href="https://www.pmi.org/learning/library"
              target="_blank"
              rel="noopener noreferrer"
            >
              PMI Pulse of the Profession® 2020
            </a>
          </p>
        </div>
      </section>
      <section className="pm-sec pm-proc pm-dark" id="framework">
        <div className="pm-wrap">
          <div className="pm-zh">
            <span className="pm-lab">Our Approach</span>
            <h2>
              {"Our 4-step PM excellence "}
              <em>framework.</em>
            </h2>
          </div>
          <ol className="pm-zz">
            {processSteps.map((processStep) => (
              <li key={processStep.num}>
                <span className="pm-nd">{processStep.num}</span>
                <div className="pm-cd">
                  <small>{processStep.step}</small>
                  <h3>{processStep.title}</h3>
                  <p>{processStep.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="pm-ben" id="benefits">
        <div className="pm-wrap">
          <div>
            <span className="pm-lab">Key Benefits</span>
            <h2>Key benefits.</h2>
          </div>
          <ul className="pm-bb">
            <li>Fewer delays and cost overruns.</li>
            <li>Higher team efficiency and collaboration.</li>
            <li>Better governance and visibility.</li>
            <li>Enhanced quality and customer satisfaction.</li>
            <li>Accelerated innovation and ROI realization.</li>
          </ul>
        </div>
      </section>
      <section className="pm-sec" id="meridian">
        <div className="pm-wrap pm-cg">
          <div className="pm-sticky">
            <span className="pm-lab">Why Choose Meridian?</span>
            <h2>
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
            <p>Select a point to read more.</p>
          </div>
          <div className="pm-ac">
            {services.map((service, index) => {
              const isActive = activeCard === index;
              return (
                <details
                  key={index}
                  open={isActive}
                  onClick={(event) => {
                    event.preventDefault();
                    setActiveCard(isActive ? -1 : index);
                  }}
                >
                  <summary>
                    <i>{service.num}</i>
                    <b>{service.title}</b>
                  </summary>
                  <p>{service.desc}</p>
                </details>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pm-role pm-dark">
        <div className="pm-wrap pm-rg">
          <div>
            <span className="pm-lab">Role of Project Management Experts</span>
            <p>
              {"We lead with "}
              <em>structure and agility</em>
              {
                " — managing teams, tracking KPIs, and building internal capacity for scalable success."
              }
            </p>
            <div className="pm-vs">
              <span>Managing teams</span>
              <span>Tracking KPIs</span>
              <span>Building capacity</span>
            </div>
          </div>
          <div
            className="pm-pic"
            role="img"
            aria-label="Meridian Project Management Team collaborating"
          />
        </div>
      </section>
      <section className="pm-cta-w" id="contact">
        <div className="pm-wrap">
          <div className="pm-cta">
            <div>
              <span className="pm-lab">Book a Free Consultation</span>
              <h2>
                {"Ready to transform "}
                <span>project delivery?</span>
              </h2>
              <p className="pm-t">
                And deliver every project with clarity, confidence, and impact.
              </p>
              <Link className="pm-btn pm-btn-dk" to="/contact-us">
                {"Book a Free Consultation "}
                <i>↗</i>
              </Link>
            </div>
            <dl className="pm-ct">
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
        </div>
      </section>
    </div>
  );
}
