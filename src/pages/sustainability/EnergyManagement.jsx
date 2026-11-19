import { Link } from "react-router-dom";
export default function EnergyManagement() {
  return (
    <div className="enms-page">
      <section className="enms-hero" id="top">
        <div className="enms-hb">
          <div>
            <p className="enms-crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services">Services</Link>
              {" / "}
              <Link to="/services/sustainability">Sustainability</Link>
              {" / "}
              <b>{"ISO 50001 & Energy Management Systems"}</b>
            </p>
            <h1>
              {"Optimize energy usage and reduce costs "}
              <i>with globally recognized systems.</i>
            </h1>
            <p className="enms-lead">
              ISO 50001 helps organizations use energy more efficiently through structured policies
              and continuous improvement.
            </p>
            <div className="enms-acts">
              <Link className="enms-pill" to="/contact-us">
                Book a free consultation →
              </Link>
              <a className="enms-pill g" href="#help">
                Our approach
              </a>
            </div>
          </div>
          <div className="enms-cert">
            <div>
              <small>International standard</small>
              <b>ISO 50001</b>
            </div>
            <div>
              <small>System</small>
              <b>EnMS</b>
            </div>
            <div>
              <small>Energy savings potential</small>
              <b>10–30%</b>
            </div>
          </div>
        </div>
      </section>
      <section className="enms-sec" id="why">
        <div className="enms-wrap">
          <div className="enms-sh">
            <span className="enms-k">Why It Matters</span>
            <h2 className="enms-h2">
              {"Why ISO 50001 & energy management systems "}
              <i>matter.</i>
            </h2>
          </div>
          <div className="enms-bn">
            <article className="enms-bt def">
              <div>
                <span className="enms-k">What is ISO 50001?</span>
                <p>
                  {"ISO 50001 is the "}
                  <em>international standard</em>
                  {
                    " for Energy Management Systems (EnMS). It enables organizations to use energy more efficiently through structured policies and continuous improvement."
                  }
                </p>
              </div>
              <div className="ch">
                <span>EnMS</span>
                <span>Structured policies</span>
                <span>Continuous improvement</span>
              </div>
            </article>
            <article
              className="enms-bt a"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=75')",
              }}
            >
              <small>01</small>
              <b>Cut energy costs and consumption.</b>
            </article>
            <article
              className="enms-bt a"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=75')",
              }}
            >
              <small>02</small>
              <b>Unlock utility incentives and rebates.</b>
            </article>
            <article
              className="enms-bt t"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=75')",
              }}
            >
              <small>03</small>
              <b>Strengthen ESG and ISO integration.</b>
            </article>
            <article
              className="enms-bt t"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=75')",
              }}
            >
              <small>04</small>
              <b>Meet compliance with energy regulations.</b>
            </article>
            <article
              className="enms-bt t"
              style={{
                "--img":
                  "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=75')",
              }}
            >
              <small>05</small>
              <b>Improve environmental and carbon performance.</b>
            </article>
          </div>
        </div>
      </section>
      <section className="enms-sec enms-help" id="help">
        <div className="enms-wrap">
          <div className="enms-sh">
            <span className="enms-k">Our Approach</span>
            <h2 className="enms-h2">
              {"Our ISO 50001 "}
              <i>implementation approach.</i>
            </h2>
          </div>
          <ol className="enms-st">
            <li data-n="1">
              <h3>{"Energy Review & Baseline"}</h3>
              <p>Evaluate energy usage data and identify major users across all operations.</p>
            </li>
            <li data-n="2">
              <h3>{"Policy & Objective Setting"}</h3>
              <p>Define clear, measurable energy goals and KPIs for performance tracking.</p>
            </li>
            <li data-n="3">
              <h3>EnMS Framework Development</h3>
              <p>Develop policies, and documentation aligned with ISO 50001 requirements.</p>
            </li>
            <li data-n="4">
              <h3>{"Training & Certification Support"}</h3>
              <p>Train your team and prepare the facility for ISO 50001 certification.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="enms-kb">
        <div className="enms-wrap enms-kg">
          <div>
            <span className="enms-k">Key Benefits</span>
            <h2
              className="enms-h2"
              style={{
                marginTop: "14px",
              }}
            >
              Key benefits.
            </h2>
          </div>
          <ul className="enms-kl">
            <li>ISO alignment with 14001, 9001.</li>
            <li>Enhanced operational efficiency.</li>
            <li>10–30% energy savings potential.</li>
            <li>Transparent energy monitoring and reporting.</li>
          </ul>
        </div>
      </section>
      <section className="enms-sec enms-ch3 lt" id="meridian">
        <div className="enms-wrap">
          <div>
            <span className="enms-k">Why Choose Meridian?</span>
            <h2
              className="enms-h2"
              style={{
                marginTop: "16px",
              }}
            >
              {"Why choose "}
              <i>Meridian?</i>
            </h2>
          </div>
          <ul className="enms-cc">
            <li data-n="01">
              <b>{"ISO-Certified Auditors & Trainers."}</b>
            </li>
            <li data-n="02">
              <b>Compliance, Cost-Saving, and Certification — All-in-One.</b>
            </li>
            <li data-n="03">
              <b>Industry-Specific Insights (FMCG, Manufacturing, Hospitality).</b>
            </li>
          </ul>
        </div>
      </section>
      <section className="enms-role">
        <div className="enms-wrap">
          <span className="enms-k">Role of ISO 50001 Consultants</span>
          <h2 className="enms-h2">
            {"Toward a smart, "}
            <i>energy-efficient operation.</i>
          </h2>
          <p>
            We guide your transition to a smart, energy-efficient operation — certified and
            optimized.
          </p>
        </div>
      </section>
      <section className="enms-cta" id="contact">
        <div className="enms-wrap">
          <span className="enms-k">Book a Free Consultation</span>
          <h2
            className="enms-h2"
            style={{
              marginTop: "20px",
            }}
          >
            {"Want to cut energy waste "}
            <i>{"& boost efficiency?"}</i>
          </h2>
          <p>Let our ISO 50001 specialists help you!</p>
          <Link className="enms-pill" to="/contact-us">
            Book a Free Consultation →
          </Link>
          <dl className="enms-cn">
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
