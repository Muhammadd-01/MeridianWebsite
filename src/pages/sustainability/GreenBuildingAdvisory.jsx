import { Link } from "react-router-dom";
export default function GreenBuildingAdvisory() {
  return (
    <div className="gba-page">
      <section className="gba-hero" id="top">
        <div className="gba-hb">
          <div>
            <p className="gba-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>Green Building Advisory</b>
            </p>
            <h1>
              {"Design healthier, more efficient, and sustainable spaces "}
              <i>from the ground up.</i>
            </h1>
            <p className="gba-lead">
              A strategic service for architects, developers, and building owners who want
              high-performance, environmentally responsible structures.
            </p>
            <div className="gba-acts">
              <Link className="gba-pill" to="/contact-us">
                Book a free consultation →
              </Link>
              <a className="gba-pill g" href="#help">
                How we can help
              </a>
            </div>
          </div>
          <div className="gba-cert">
            <div>
              <small>Certification support</small>
              <b>LEED</b>
            </div>
            <div>
              <small>Certification support</small>
              <b>Mostadam</b>
            </div>
            <div>
              <small>Certification support</small>
              <b>WELL</b>
            </div>
          </div>
        </div>
      </section>
      <section className="gba-sec" id="why">
        <div className="gba-wrap">
          <div className="gba-sh">
            <span className="gba-k">Why It Matters</span>
            <h2 className="gba-h2">
              {"Why green building advisory "}
              <i>matters.</i>
            </h2>
          </div>
          <div className="gba-bn">
            <article className="gba-bt def">
              <div>
                <span className="gba-k">What is Green Building Advisory?</span>
                <p>
                  {"It’s a "}
                  <em>strategic service</em>
                  {
                    " that supports architects, developers, and building owners in creating high-performance, environmentally responsible structures."
                  }
                </p>
              </div>
              <div className="ch">
                <span>Architects</span>
                <span>Developers</span>
                <span>Building owners</span>
              </div>
            </article>
            <article
              className="gba-bt a"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=75')",
              }}
            >
              <small>01</small>
              <b>Support ESG and CSR initiatives.</b>
            </article>
            <article
              className="gba-bt a"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=75')",
              }}
            >
              <small>02</small>
              <b>Future-proof real estate investments.</b>
            </article>
            <article
              className="gba-bt t"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=75')",
              }}
            >
              <small>03</small>
              <b>Improve occupant comfort and health.</b>
            </article>
            <article
              className="gba-bt t"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=75')",
              }}
            >
              <small>04</small>
              <b>Lower energy and water consumption.</b>
            </article>
            <article
              className="gba-bt t"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=75')",
              }}
            >
              <small>05</small>
              <b>Achieve green certifications (LEED, Mostadam, etc.).</b>
            </article>
          </div>
        </div>
      </section>
      <section className="gba-sec gba-help" id="help">
        <div className="gba-wrap">
          <div className="gba-sh">
            <span className="gba-k">How We Can Help?</span>
            <h2 className="gba-h2">
              {"How we "}
              <i>can help.</i>
            </h2>
          </div>
          <ol className="gba-st">
            <li data-n="1">
              <h3>Sustainability Goal Setting</h3>
              <p>Align project vision with all of the sustainability targets.</p>
            </li>
            <li data-n="2">
              <h3>{"Design & Material Guidance"}</h3>
              <p>Integrate the eco-friendly materials and systems.</p>
            </li>
            <li data-n="3">
              <h3>Performance Modeling</h3>
              <p>Simulate energy, lighting, and HVAC efficiencies.</p>
            </li>
            <li data-n="4">
              <h3>Certification Support</h3>
              <p>Prepare for LEED, Mostadam, and WELL certification.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="gba-kb">
        <div className="gba-wrap gba-kg">
          <div>
            <span className="gba-k">Key Benefits</span>
            <h2
              className="gba-h2"
              style={{
                marginTop: "14px",
              }}
            >
              Key benefits.
            </h2>
          </div>
          <ul className="gba-kl">
            <li>Stronger ESG alignment.</li>
            <li>Reduced operational costs.</li>
            <li>Improved wellbeing and air quality.</li>
            <li>Higher asset value and occupancy rates.</li>
          </ul>
        </div>
      </section>
      <section className="gba-sec gba-ch3 lt" id="meridian">
        <div className="gba-wrap">
          <div>
            <span className="gba-k">Why Choose Meridian?</span>
            <h2
              className="gba-h2"
              style={{
                marginTop: "16px",
              }}
            >
              {"Why choose "}
              <i>Meridian?</i>
            </h2>
          </div>
          <ul className="gba-cc">
            <li data-n="01">
              <b>Cross-Disciplinary Insights.</b>
            </li>
            <li data-n="02">
              <b>{"Architects & Engineers On Board."}</b>
            </li>
            <li data-n="03">
              <b>{"Integration Across Design, Construction & O&M."}</b>
            </li>
          </ul>
        </div>
      </section>
      <section className="gba-role">
        <div className="gba-wrap">
          <span className="gba-k">Role of Green Building Advisors</span>
          <h2 className="gba-h2">
            {"Where environmental science "}
            <i>meets design.</i>
          </h2>
          <p>
            We bridge environmental science and design — helping you build smart and sustainably
            from concept to completion.
          </p>
        </div>
      </section>
      <section className="gba-cta" id="contact">
        <div className="gba-wrap">
          <span className="gba-k">Book a Free Consultation</span>
          <h2
            className="gba-h2"
            style={{
              marginTop: "20px",
            }}
          >
            {"Planning a "}
            <i>green project?</i>
          </h2>
          <p>Our building sustainability team will help you.</p>
          <Link className="gba-pill" to="/contact-us">
            Book a Free Consultation →
          </Link>
          <dl className="gba-cn">
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
