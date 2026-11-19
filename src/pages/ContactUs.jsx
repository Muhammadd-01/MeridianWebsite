import { useState } from "react";
export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({
    type: "",
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (status.text) {
      setStatus({
        type: "",
        text: "",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) {
      setStatus({
        type: "error",
        text: "Please enter your full name.",
      });
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setStatus({
        type: "error",
        text: "Please provide a valid work email address.",
      });
      return;
    }
    if (!form.service) {
      setStatus({
        type: "error",
        text: "Please select a service area.",
      });
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      setStatus({
        type: "error",
        text: "Please provide a little more detail about your requirements (at least 10 characters).",
      });
      return;
    }
    if (!form.consent) {
      setStatus({
        type: "error",
        text: "Please accept the consent terms to continue.",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: "success",
        text: `Thank you, ${form.name}. Your enquiry regarding "${form.service}" has been received. Our advisory team will review your requirements and respond within one business day.`,
      });
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        consent: false,
      });
    }, 700);
  };
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="wrap">
          <span className="eyebrow">Contact Meridian</span>
          <h1>
            {"Let’s start a "}
            <em>conversation.</em>
          </h1>
          <p className="lead">
            Tell us what your organisation is working toward. We’ll help you find the right next
            step in quality, compliance, sustainability, training or corporate wellbeing.
          </p>
        </div>
      </section>
      <main className="contact-main">
        <div className="wrap">
          <section className="contact-layout" aria-label="Contact details and enquiry form">
            <aside className="intro-card">
              <span className="eyebrow">We’re here to help</span>
              <h2>Good work starts with a good conversation.</h2>
              <p>
                Whether you need support with a specific challenge or want to explore a longer-term
                partnership, share a little about your goals and we’ll take it from there.
              </p>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    ✉
                  </div>
                  <div>
                    <strong>Direct Email</strong>
                    <a href="mailto:info@meqmp.com">info@meqmp.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    ↗
                  </div>
                  <div>
                    <strong>Regional Telephone</strong>
                    <a href="tel:+966130000000">+966 13 000 0000 / +971 4 000 0000</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    ⌖
                  </div>
                  <div>
                    <strong>Head Office Locations</strong>
                    <span>{"Al Khobar & Riyadh, Saudi Arabia · Dubai, UAE"}</span>
                  </div>
                </div>
              </div>
              <p className="response-note">
                Please include the best way to reach you and a brief outline of your enquiry.
              </p>
            </aside>
            <section className="form-card">
              <div className="form-heading">
                <span className="eyebrow">Send an enquiry</span>
                <h2>How can we support you?</h2>
                <p>
                  Complete the form below and provide a few details so your enquiry can be directed
                  appropriately.
                </p>
              </div>
              {status.type === "success" ? (
                <div className="form-status success" role="alert">
                  <h4
                    style={{
                      margin: "0 0 8px",
                      fontSize: "17px",
                    }}
                  >
                    Enquiry Sent Successfully
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13.5px",
                      lineHeight: 1.6,
                    }}
                  >
                    {status.text}
                  </p>
                  <button
                    type="button"
                    className="btn"
                    style={{
                      marginTop: "18px",
                      padding: "10px 18px",
                      fontSize: "12px",
                    }}
                    onClick={() =>
                      setStatus({
                        type: "",
                        text: "",
                      })
                    }
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="name">Full name *</label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                        minLength={2}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Company / organisation</label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        placeholder="Organisation name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="Your contact number"
                      />
                    </div>
                    <div className="field full">
                      <label htmlFor="service">What can we help with? *</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value={"Advisory & management systems"}>
                          {"Advisory & management systems"}
                        </option>
                        <option value={"Training & professional development"}>
                          {"Training & professional development"}
                        </option>
                        <option value={"Compliance & auditing"}>{"Compliance & auditing"}</option>
                        <option value={"Sustainability & climate solutions"}>
                          {"Sustainability & climate solutions"}
                        </option>
                        <option value="Corporate wellbeing">Corporate wellbeing</option>
                        <option value="Learning Management System (LMS)">
                          Learning Management System (LMS)
                        </option>
                        <option value="Other / not sure yet">Other / not sure yet</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="message">Tell us about your needs *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        minLength={10}
                        placeholder="A little context about your organisation, goals or challenge…"
                      />
                    </div>
                  </div>
                  <label className="consent">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      I agree that Meridian may use the information I provide to respond to this
                      enquiry. *
                    </span>
                  </label>
                  <div className="submit-row">
                    <button
                      className="btn"
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        border: 0,
                      }}
                    >
                      {isSubmitting ? "Preparing Enquiry…" : "Prepare enquiry"} <i>↗</i>
                    </button>
                    {status.type === "error" && (
                      <span className="form-status error" role="alert">
                        {status.text}
                      </span>
                    )}
                  </div>
                  <p className="privacy">
                    Your information should be handled in line with the organisation’s privacy
                    policy. All enquiries are treated with professional confidentiality.
                  </p>
                </form>
              )}
            </section>
          </section>
          <section className="below">
            <div className="below-head">
              <span className="eyebrow">A clear next step</span>
              <h2>Make your enquiry count.</h2>
              <p>A few details help us understand where to begin.</p>
            </div>
            <div className="reason-grid">
              <article className="reason">
                <div className="num">01</div>
                <h3>Share the challenge</h3>
                <p>Tell us what you’re trying to improve, solve or achieve.</p>
              </article>
              <article className="reason">
                <div className="num">02</div>
                <h3>Choose an area</h3>
                <p>Select a service, or choose “Other” if you’re still exploring options.</p>
              </article>
              <article className="reason">
                <div className="num">03</div>
                <h3>Plan the next step</h3>
                <p>Include your preferred contact details so the team can follow up.</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
