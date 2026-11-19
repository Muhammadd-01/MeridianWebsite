import { useState } from "react";
import { Link } from "react-router-dom";
const marqueeItems = [
  "Energy",
  "Water",
  "Indoor quality",
  "Materials",
  "BD+C",
  "ID+C",
  "O+M",
  "USGBC",
  "Certified",
  "Silver",
  "Gold",
  "Platinum",
];
const benefits = [
  {
    num: "01",
    title: "Project feasibility & scoping",
    desc: "Assess certification level and scope (LEED BD+C, ID+C, O+M) to define project goals.",
  },
  {
    num: "02",
    title: "Gap analysis",
    desc: "Review project design and operations to identify gaps against LEED criteria.",
  },
  {
    num: "03",
    title: "Documentation & submission",
    desc: "Prepare credit documentation and coordinate submission to USGBC.",
  },
  {
    num: "04",
    title: "Certification management",
    desc: "Track project status and assist during reviews or clarifications for LEED certification.",
  },
];
const ratingSystems = [
  {
    code: "BD+C",
    name: "Building Design & Construction",
    points: [
      "New construction and major renovations, from design through completion.",
      "Certification level and scope are set at project feasibility.",
      "We stay involved from design to occupancy.",
    ],
  },
  {
    code: "ID+C",
    name: "Interior Design & Construction",
    points: [
      "Tenant fit-outs and complete interior spaces.",
      "Focuses on healthier, more efficient interiors for occupants.",
      "Supports a stronger brand image and market appeal.",
    ],
  },
  {
    code: "O+M",
    name: "Operations & Maintenance",
    points: [
      "Existing buildings that want to improve how they operate.",
      "Targets reduced energy and water use and lower operating costs.",
      "Helps lift lease value and long-term asset value.",
    ],
  },
];
const certificationLevels = [
  {
    name: "Certified",
    range: "40–49",
    min: 40,
    max: 49,
  },
  {
    name: "Silver",
    range: "50–59",
    min: 50,
    max: 59,
  },
  {
    name: "Gold",
    range: "60–79",
    min: 60,
    max: 79,
  },
  {
    name: "Platinum",
    range: "80+",
    min: 80,
    max: 110,
  },
];
export default function Leed() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeRatingSystem, setActiveRatingSystem] = useState(0);
  const [score, setScore] = useState(60);
  const currentRatingSystem = ratingSystems[activeRatingSystem];
  let levelIndex = -1;
  certificationLevels.forEach((certificationLevel, index) => {
    if (score >= certificationLevel.min) {
      levelIndex = index;
    }
  });
  const levelName = levelIndex < 0 ? "Not yet certified" : certificationLevels[levelIndex].name;
  const filledBars = Math.ceil(score / 10);
  return (
    <div className="leed-page">
      <section className="leed-hero dark">
        <div className="leed-hero-bg" aria-hidden="true" />
        <div className="leed-wrap">
          <p className="leed-crumb">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/services/sustainability">Sustainability</Link>
            {" / "}
            <b>LEED Certification</b>
          </p>
          <h1 className="leed-h1">
            {"Build smarter, greener, "}
            <span>and more energy-efficient spaces.</span>
          </h1>
          <p className="leed-lead">
            Leadership in Energy and Environmental Design, handled end to end by a LEED AP and
            engineering-led team.
          </p>
          <div className="leed-acts">
            <Link className="leed-btn" to="/contact-us">
              Book a free consultation ↗
            </Link>
            <a className="leed-btn o" href="#levels">
              Estimate your level ↓
            </a>
          </div>
        </div>
      </section>
      <div className="leed-tape" aria-hidden="true">
        <div className="leed-tp">
          {marqueeItems
            .concat(marqueeItems)
            .concat(marqueeItems)
            .map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <section className="leed-sec" id="what">
        <div className="leed-wrap leed-wh">
          <div>
            <span className="leed-lab">What is LEED certification?</span>
            <h2 className="leed-h2">
              {"The green rating "}
              <em>buyers</em>
              {" recognise."}
            </h2>
            <p className="leed-def">
              LEED (Leadership in Energy and Environmental Design) is the most widely recognized
              green building rating system, promoting energy, water, and resource-efficient design.
            </p>
            <p className="leed-def">
              Developed by the U.S. Green Building Council (USGBC) and verified by a third party, it
              scores a project against a set of prerequisites and credits. The points you earn
              determine your level: Certified, Silver, Gold or Platinum.
            </p>
            <p className="leed-def">
              It applies to the whole building lifecycle, from new construction and fit-outs to the
              day-to-day operation of existing buildings, for offices, hotels, hospitals, schools,
              retail and homes.
            </p>
            <div className="leed-stats">
              <div>
                <b>110</b>
                <span>Maximum points available under LEED v4</span>
              </div>
              <div>
                <b>4</b>
                <span>Levels: Certified, Silver, Gold, Platinum</span>
              </div>
              <div>
                <b>3</b>
                <span>Main systems: BD+C, ID+C and O+M</span>
              </div>
              <div>
                <b>3rd‑party</b>
                <span>Independently reviewed and verified</span>
              </div>
            </div>
            <div className="leed-cats">
              <p>What LEED measures</p>
              <ul>
                <li>{"Location & transportation"}</li>
                <li>Sustainable sites</li>
                <li>Water efficiency</li>
                <li>{"Energy & atmosphere"}</li>
                <li>{"Materials & resources"}</li>
                <li>Indoor environmental quality</li>
                <li>Innovation</li>
                <li>Regional priority</li>
              </ul>
            </div>
          </div>
          <div>
            <span
              className="leed-lab"
              style={{
                marginBottom: "16px",
              }}
            >
              Why LEED certification matters
            </span>
            <ul className="leed-rows">
              <li>
                <div>
                  Improve indoor environmental quality.
                  <span className="leed-rd">
                    Better air quality, daylight, thermal comfort and acoustics support occupant
                    health, comfort and productivity.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  Increase asset value and marketability.
                  <span className="leed-rd">
                    A recognised rating differentiates your building, helping it attract tenants,
                    buyers and investors and often supporting stronger lease and resale value.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  Gain global recognition for sustainability.
                  <span className="leed-rd">
                    LEED is understood by clients, regulators and ESG teams worldwide, making your
                    commitment easy to demonstrate and credible.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  Lower operational costs through efficiency.
                  <span className="leed-rd">
                    Efficient systems, water-saving fixtures and smart operations cut utility bills
                    and maintenance costs across the building's life.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  Qualify for green finance and tax incentives.
                  <span className="leed-rd">
                    Certified projects can be better placed for green loans, sustainability-linked
                    finance and incentives where they are offered.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  Reduce environmental impact.
                  <span className="leed-rd">
                    Lower carbon emissions, less construction waste and responsible material choices
                    help meet corporate sustainability and net-zero goals.
                  </span>
                </div>
              </li>
            </ul>
            <p className="leed-wh-note">
              Not sure which level or system suits your project? Our gap analysis shows what is
              realistic before you commit to a target.
            </p>
          </div>
        </div>
      </section>
      <section
        className="leed-sec leed-proc"
        id="process"
        style={{
          paddingBottom: "clamp(80px, 10vw, 160px)",
        }}
      >
        <div className="leed-wrap leed-pg dark">
          <div className="leed-sticky">
            <span className="leed-lab">Our LEED support process</span>
            <h2
              className="leed-h2"
              style={{
                color: "#fff",
                marginTop: "18px",
              }}
            >
              {"From scope to "}
              <span>certificate.</span>
            </h2>
            <p>A clear path from project feasibility to a certified building.</p>
            <div className="leed-meter" aria-hidden="true">
              <i
                style={{
                  width: `${((activeStep + 1) / 4) * 100}%`,
                }}
              />
            </div>
            <small>
              {"STEP "}
              {activeStep + 1}
              {" OF 4"}
            </small>
          </div>
          <div className="leed-stack">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.num}
                className={`leed-sc ${activeStep === index ? "act" : ""}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="leed-n">{benefit.num}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="leed-sec" id="systems">
        <div className="leed-wrap leed-fr">
          <div className="leed-fc" data-big="LEED">
            <div key={currentRatingSystem.code} className="leed-fp" role="tabpanel">
              <h3>{currentRatingSystem.code}</h3>
              <span className="leed-full">{currentRatingSystem.name}</span>
              <ul>
                {currentRatingSystem.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <span className="leed-lab">Rating systems</span>
            <h2
              className="leed-h2"
              style={{
                marginTop: "18px",
              }}
            >
              {"Pick a system. "}
              <em>See the scope.</em>
            </h2>
            <p
              style={{
                marginTop: "20px",
                color: "var(--mut)",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              We assess certification level and scope to define your project goals.
            </p>
            <div className="leed-chips" role="tablist" aria-label="LEED rating systems">
              {ratingSystems.map((ratingSystem, index) => (
                <button
                  key={ratingSystem.code}
                  className="leed-chip"
                  role="tab"
                  aria-selected={activeRatingSystem === index}
                  onClick={() => setActiveRatingSystem(index)}
                >
                  {ratingSystem.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="leed-sec leed-est" id="levels">
        <div className="leed-wrap">
          <div className="leed-eb dark">
            <div className="leed-flo" aria-hidden="true">
              <div className="leed-roof" />
              {Array.from({
                length: 11,
              }).map((item, index) => (
                <div key={index} className={`leed-fl ${index < filledBars ? "on" : ""}`}>
                  <s />
                  <s />
                  <s />
                  <s />
                  <s />
                  <s />
                </div>
              ))}
            </div>
            <div>
              <span className="leed-lab">Level estimator</span>
              <h2>
                {"How high can your "}
                <em>building</em>
                {" climb?"}
              </h2>
              <p className="leed-t">
                Drag to set a points total and watch the floors fill. Your gap analysis confirms
                what is realistic.
              </p>
              <div className="leed-big">
                <b>{score}</b>
                <span>{levelName}</span>
              </div>
              <input
                type="range"
                min="0"
                max="110"
                value={score}
                onChange={(event) => setScore(Number(event.target.value))}
                aria-label="LEED points estimator slider"
              />
              <div className="leed-tiers">
                {certificationLevels.map((certificationLevel, index) => (
                  <div
                    key={certificationLevel.name}
                    className={`leed-tier ${index === levelIndex ? "on" : ""}`}
                  >
                    <b>{certificationLevel.name}</b>
                    {certificationLevel.range}
                    {" pts"}
                  </div>
                ))}
              </div>
              <p className="leed-note">
                Indicative, based on the standard LEED v4 thresholds out of 110 points.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="leed-sec"
        style={{
          paddingTop: 0,
        }}
      >
        <div className="leed-wrap leed-vs">
          <div className="leed-pn a">
            <span className="leed-lab">Key benefits</span>
            <h2 className="leed-h2">
              {"What you "}
              <em>gain.</em>
            </h2>
            <ul>
              <li>Reduced energy and water use.</li>
              <li>Improved occupant wellbeing.</li>
              <li>Higher resale and lease value.</li>
              <li>Stronger brand image and market appeal.</li>
            </ul>
          </div>
          <div className="leed-pn b dark">
            <span
              className="leed-lab"
              style={{
                color: "var(--primrose)",
              }}
            >
              Why choose Meridian?
            </span>
            <h2
              className="leed-h2"
              style={{
                color: "#fff",
              }}
            >
              {"Built for "}
              <span>buildings.</span>
            </h2>
            <ul>
              <li>Cross-industry experience, from hotels to hospitals.</li>
              <li>End-to-end involvement, from design to occupancy.</li>
              <li>Technical mastery with a LEED AP and engineering-led team.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="leed-role">
        <div className="leed-wrap">
          <span className="leed-lab">Role of LEED consultants</span>
          <p className="leed-q">
            {"We navigate the "}
            <span>certification maze,</span>
            {" so you can focus on building sustainably."}
          </p>
        </div>
      </section>
      <section className="leed-cta dark" id="contact">
        <div className="leed-wrap leed-cg">
          <div>
            <h2>
              {"Ready to go green "}
              <span>with LEED?</span>
            </h2>
            <p className="leed-t">To start your LEED journey with confidence.</p>
            <Link className="leed-btn" to="/contact-us">
              Book a free consultation ↗
            </Link>
          </div>
          <dl className="leed-ct">
            <div>
              <dt>Call us</dt>
              <dd>+966 50 939 4640</dd>
            </div>
            <div>
              <dt>Need support</dt>
              <dd>info@meqmp.com</dd>
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
