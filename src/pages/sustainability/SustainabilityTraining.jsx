import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "ESG",
  "Climate action",
  "GRI",
  "SDG",
  "SASB",
  "TCFD",
  "LEED",
  "Mostadam",
  "ISO 14064",
  "Circular economy",
  "Vision 2030",
];
const courses = [
  {
    n: "ESG & Sustainability Fundamentals",
    d: "These sustainability trainings will help you to understand the principles of ESG and their application across industries and roles.",
    t: ["ESG", "Principles", "All roles"],
  },
  {
    n: "Sustainability Reporting (GRI, SDG, SASB, TCFD)",
    d: "Learn how to prepare investor-grade sustainability reports aligned with global frameworks.",
    t: ["GRI", "SDG", "SASB", "TCFD"],
  },
  {
    n: "LEED & Mostadam Awareness",
    d: "This training will let you equip your facilities and project teams to meet green building requirements and certifications.",
    t: ["LEED", "Mostadam", "Green building"],
  },
  {
    n: "Carbon Footprint & Climate Action",
    d: "Train staff to measure, monitor, and reduce GHG emissions under ISO 14064 and decarbonization frameworks.",
    t: ["GHG", "ISO 14064", "Decarbonization"],
  },
  {
    n: "Circular Economy & Waste Management",
    d: "Train the staff to promote sustainable resource use and waste minimization through circular design and operations.",
    t: ["Circular design", "Waste minimization"],
  },
  {
    n: "ISO Standards for Sustainability",
    d: "This sustainability trainings includes the internal auditor and awareness training for ISO 14001, ISO 50001, ISO 26000, and ISO 14064.",
    t: ["ISO 14001", "ISO 50001", "ISO 26000", "ISO 14064"],
  },
];
export default function SustainabilityTraining() {
  const [activeCourse, setActiveCourse] = useState(0);
  return (
    <div className="st-page">
      <section className="st-hero dark" id="top">
        <div className="st-wrap st-hg">
          <div>
            <p className="st-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" /"} <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>Sustainability Training</b>
            </p>
            <h1>
              {"Build internal capacity for long-term sustainability "}
              <span>and ESG success.</span>
            </h1>
            <p className="st-lead">
              At Meridian, we don’t just consult — we empower. Our sustainability training programs
              are designed to upskill your workforce in ESG compliance, climate action, green
              building standards, and sustainable business practices.
            </p>
            <div className="st-acts">
              <Link className="st-btn" to="/contact-us">
                {"Book a free training needs assessment "}
                <i>↗</i>
              </Link>
              <a className="st-btn o" href="#modules">
                {"See the modules "}
                <i>↓</i>
              </a>
            </div>
          </div>
          <div className="st-vis">
            <div className="st-ph" role="img" aria-label="Team in a training session" />
            <div className="st-chip2">
              <small>Aligned with</small>
              <b>Vision 2030 · SDGs</b>
            </div>
            <div className="st-chip">
              <small>Delivery</small>
              <b>On-site · Online · Hybrid</b>
            </div>
          </div>
        </div>
      </section>
      <div className="st-tape" aria-hidden="true">
        <div className="st-tp">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <section className="st-sec st-what" id="what">
        <div className="st-wrap">
          <span className="st-lab">What Are Sustainability Trainings?</span>
          <h2 className="st-h2">
            {"Learning that "}
            <em>changes</em>
            {" how you work."}
          </h2>
          <p className="st-def">
            {
              "Sustainability training are structured learning programs that equip teams across your organization with the knowledge and tools to "
            }
            <em>drive responsible growth</em>, reduce environmental impact, and comply with ESG
            frameworks. These programs are essential for embedding sustainability into your culture,
            operations, and decision-making.
          </p>
          <div className="st-std">
            <span>ESG compliance</span>
            <span>Climate action</span>
            <span>Green building standards</span>
            <span>Sustainable business practices</span>
          </div>
        </div>
      </section>
      <section className="st-sec st-why" id="why">
        <div className="st-wrap st-wg">
          <div className="st-sticky">
            <span className="st-lab">Why It Matters</span>
            <h2 className="st-h2">
              {"Why sustainability "}
              <em>trainings</em>
              {" matter."}
            </h2>
            <p>Trained teams turn sustainability targets into everyday practice.</p>
          </div>
          <ul className="st-wr">
            <li>
              <i>01</i>
              <b>Improve regulatory and reporting readiness.</b>
              <em>→</em>
            </li>
            <li>
              <i>02</i>
              <b>Embed sustainability into day-to-day operations.</b>
              <em>→</em>
            </li>
            <li>
              <i>03</i>
              <b>Develop internal ESG champions and green teams.</b>
              <em>→</em>
            </li>
            <li>
              <i>04</i>
              <b>Strengthen stakeholder trust and corporate reputation.</b>
              <em>→</em>
            </li>
            <li>
              <i>05</i>
              <b>Align staff actions with Vision 2030, SDGs, and corporate goals.</b>
              <em>→</em>
            </li>
          </ul>
        </div>
      </section>
      <section className="st-sec st-mods dark" id="modules">
        <div className="st-wrap">
          <div className="st-mh">
            <span className="st-lab">Our Training Modules</span>
            <h2 className="st-h2">
              {"Our training "}
              <em>modules</em>
              {" include."}
            </h2>
            <p>Pick a module to see what your team will learn.</p>
          </div>
          <div className="st-mx">
            <div className="st-tabs" role="tablist" aria-label="Training modules">
              {courses.map((course, index) => (
                <button
                  key={course.n}
                  className="st-tab"
                  role="tab"
                  id={`tab-${index}`}
                  aria-selected={activeCourse === index}
                  aria-controls="panel-module"
                  tabIndex={activeCourse === index ? 0 : -1}
                  onClick={() => setActiveCourse(index)}
                >
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <span>{course.n}</span>
                </button>
              ))}
            </div>
            <div
              key={activeCourse}
              className="st-pn"
              id="panel-module"
              role="tabpanel"
              aria-labelledby={`tab-${activeCourse}`}
              data-n={String(activeCourse + 1).padStart(2, "0")}
            >
              <div>
                <small>
                  {"Module "}
                  {String(activeCourse + 1).padStart(2, "0")}
                  {" of "}
                  {String(courses.length).padStart(2, "0")}
                </small>
                <h3>{courses[activeCourse].n}</h3>
                <p>{courses[activeCourse].d}</p>
              </div>
              <div className="st-tags">
                {courses[activeCourse].t.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="st-ben" id="benefits">
        <div className="st-wrap">
          <div>
            <span className="st-lab">Key Benefits</span>
            <h2 className="st-h2">Key benefits.</h2>
          </div>
          <ul className="st-bl">
            <li>Improve audit and certification readiness.</li>
            <li>Enhance brand image and industry leadership.</li>
            <li>Strengthen ESG scores and investor confidence.</li>
            <li>Boost employee engagement in sustainability.</li>
            <li>Build a long-term culture of responsibility and resilience.</li>
          </ul>
        </div>
      </section>
      <section className="st-sec" id="meridian">
        <div className="st-wrap">
          <div className="st-ch-h">
            <span className="st-lab">Why Choose Meridian?</span>
            <h2 className="st-h2">
              {"Why choose "}
              <em>Meridian?</em>
            </h2>
          </div>
          <ul className="st-cl">
            <li>
              <small>01</small>
              <b>Flexible Delivery</b>
              <p>On-site, online, or hybrid option.</p>
            </li>
            <li>
              <small>02</small>
              <b>Expert Instructors</b>
              <p>Certified trainers with cross-sector experience.</p>
            </li>
            <li>
              <small>03</small>
              <b>Tailored Content</b>
              <p>Customized by industry, role, and maturity level.</p>
            </li>
            <li>
              <small>04</small>
              <b>Action-Oriented</b>
              <p>Focused on practical application, not just theory.</p>
            </li>
            <li>
              <small>05</small>
              <b>Vision 2030 Alignment</b>
              <p>Designed for regional relevance and global compliance.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="st-role dark">
        <div className="st-wrap">
          <span className="st-lab">Role of Sustainability Training Providers</span>
          <h2>
            {"Learning partners, "}
            <em>not just trainers.</em>
          </h2>
          <p>
            We act as learning partners — translating complex standards and ESG trends into
            actionable, digestible learning that inspires real organizational change.
          </p>
        </div>
      </section>
      <section className="st-cta-w" id="contact">
        <div className="st-wrap">
          <div className="st-cta">
            <div>
              <span className="st-lab">Book a Free Training Needs Assessment</span>
              <h2>
                {"Ready to equip your team "}
                <span>for sustainable success?</span>
              </h2>
              <p className="t">Design a learning path that meets your sustainability goals.</p>
              <Link className="st-btn dk" to="/contact-us">
                {"Book a Free Training Needs Assessment "}
                <i>↗</i>
              </Link>
            </div>
            <dl className="st-ct">
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
