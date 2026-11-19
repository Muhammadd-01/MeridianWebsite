import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./coursePage.css";

const ENQUIRY_EMAIL = "info@meqmp.com";
const PHONE_DISPLAY = "+966 50 939 4640";
const PHONE_LINK = "+966509394640";
const DEFAULT_SECTIONS = ["intro", "inside", "journey", "extra", "audience", "related", "enquiry"];
// Same three labels as the ISO 50001 Lead Auditor page.
const DEFAULT_DETAIL_LABELS = ["Course information", "Delivery options", "Registration support"];
const DEFAULT_ENQUIRY_TYPES = [
  "Course dates and fees",
  "Training for my organization",
  "Course content",
  "Other enquiry",
];

const sectionNumber = (n) => String(n).padStart(2, "0");

function Kicker({ number, label, className = "" }) {
  return (
    <div className={`cp_eyebrow cp_kicker ${className}`}>
      {number ? `${number} / ${label}` : label}
    </div>
  );
}

function Hero({ course }) {
  const { hero } = course;
  return (
    <section className="cp_hero">
      <div className="cp_hero_photo">
        <img className="cp_img" src={hero.image} alt={hero.imageAlt} />
      </div>
      <div className="cp_wrap cp_hero_inner">
        <div className="cp_hero_copy">
          {hero.showCrumb === true && (
            <p className="cp_crumb">
              <Link to="/">Home</Link>
              {" / "}
              <Link to="/services/training">Training</Link>
              {" / "}
              <b>{course.shortName}</b>
            </p>
          )}
          <div className="cp_eyebrow">{hero.eyebrow}</div>
          <h1 className={hero.longTitle ? "cp_h1_long" : ""}>
            {hero.titleLead} <span>{hero.titleAccent}</span>
          </h1>
          <div className="cp_hero_title">
            {hero.subtitle.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          {(Array.isArray(hero.description) ? hero.description : [hero.description]).map(
            (paragraph) => (
              <p key={paragraph} className="cp_hero_description">
                {paragraph}
              </p>
            ),
          )}
          <div className="cp_hero_bottom">
            <a className="cp_btn" href="#enquire">
              {hero.cta || "Request course details"} <span className="cp_arrow">↗</span>
            </a>
            <a className="cp_btn cp_btn_ghost" href="#explore">
              {hero.secondaryCta || "Explore the training"} <span className="cp_arrow">↓</span>
            </a>
          </div>
          {hero.reference && (
            <div className="cp_hero_reference">
              {hero.reference.map((item) => (
                <div key={`${item.label}-${item.value}`}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="cp_hero_side_label">Meridian Quality Management Professionals</div>
    </section>
  );
}

function Journey({ data, number }) {
  const [activeStage, setActiveStage] = useState(0);
  const stage = data.stages[activeStage];
  return (
    <section className="cp_audit">
      <div className="cp_wrap">
        <div className="cp_audit_heading cp_reveal">
          <div>
            <Kicker number={number} label={data.kicker} />
            <h2>{data.heading}</h2>
          </div>
          {data.text && <p>{data.text}</p>}
        </div>
        <div className="cp_audit_feature cp_reveal">
          <div className="cp_audit_image">
            <img className="cp_img" src={data.image} alt={data.imageAlt} />
            <div className="cp_audit_image_label">
              {`${data.captionPrefix} / ${sectionNumber(activeStage + 1)}`}
            </div>
          </div>
          <div className="cp_audit_info">
            <div className="cp_eyebrow">{data.label}</div>
            <div className="cp_audit_number" aria-hidden="true">
              {sectionNumber(activeStage + 1)}
            </div>
            <h3 id="cp_stage_title">{stage.title}</h3>
            <p aria-live="polite">{stage.text}</p>
            <div
              className="cp_audit_tabs"
              role="tablist"
              aria-label={data.label}
              style={{
                // Up to 4 tabs sit on one row; longer lists (e.g. 7 modules) wrap onto two rows.
                "--cp-tab-count":
                  data.stages.length > 4 ? Math.ceil(data.stages.length / 2) : data.stages.length,
              }}
            >
              {data.stages.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={activeStage === index}
                  className={`cp_audit_tab ${activeStage === index ? "is-active" : ""}`}
                  onClick={() => setActiveStage(index)}
                >
                  <span>{sectionNumber(index + 1)}</span>
                  {item.tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "Focus" section (preview 2): heading, paragraph, paper note and image row.
function Focus({ data, number }) {
  return (
    <section className="cp_focus">
      <div className="cp_wrap cp_focus_grid">
        <div className="cp_focus_left cp_reveal">
          <Kicker number={number} label={data.kicker} className="cp_kicker_dark" />
          <h2>{data.heading}</h2>
        </div>
        <div className="cp_focus_right cp_reveal">
          {(Array.isArray(data.text) ? data.text : [data.text]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {data.note && (
            <div className="cp_paper_note">
              <div className="cp_paper_note_label">{data.noteLabel}</div>
              <strong>{data.note}</strong>
            </div>
          )}
          {data.pointsHeading && <h3 className="cp_focus_points_heading">{data.pointsHeading}</h3>}
          {data.pointsIntro && <p>{data.pointsIntro}</p>}
          {data.points && (
            <div className="cp_focus_points">
              {data.points.map((point, index) => (
                <div key={point.title}>
                  <span>{sectionNumber(index + 1)}</span>
                  <strong>{point.title}</strong>
                  <p>{point.desc}</p>
                </div>
              ))}
            </div>
          )}
          {data.image && (
            <div className="cp_focus_image_row">
              <div className="cp_focus_image">
                <img className="cp_img" src={data.image} alt={data.imageAlt} />
              </div>
              <div className="cp_image_caption">
                <strong>{data.captionNumber}</strong>
                <span>{data.captionText}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Interactive element flow (preview 2): select an element to read what the auditor examines.
function Diagram({ data, number }) {
  const [activeNode, setActiveNode] = useState(0);
  const node = data.nodes[activeNode];
  return (
    <section className="cp_diagram">
      <div className="cp_wrap">
        <div className="cp_diagram_heading cp_reveal">
          <div>
            <Kicker number={number} label={data.kicker} className="cp_kicker_dark" />
            <h2>{data.heading}</h2>
          </div>
          {data.text && (
            <div className="cp_diagram_text">
              {(Array.isArray(data.text) ? data.text : [data.text]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        <div className="cp_flow_visual cp_reveal">
          <div className="cp_flow_topline">
            <span>{data.label}</span>
            <small>{data.hint}</small>
          </div>
          <div
            className={`cp_flow ${data.nodes.some((item) => item.summary) ? "" : "cp_flow_compact"}`}
            role="group"
            aria-label={data.label}
            style={{
              "--cp-flow-count": data.nodes.length,
            }}
          >
            {data.nodes.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`cp_flow_node ${activeNode === index ? "is-active" : ""}`}
                aria-pressed={activeNode === index}
                onClick={() => setActiveNode(index)}
              >
                <span className="cp_flow_no">{sectionNumber(index + 1)}</span>
                <strong>{item.title}</strong>
                {item.summary && <small>{item.summary}</small>}
              </button>
            ))}
          </div>
          <div className="cp_flow_detail" key={node.title} aria-live="polite">
            <strong>{node.title}</strong>
            <p>{node.detail}</p>
          </div>
          {(data.footText || data.footLabel) && (
            <div className="cp_flow_foot">
              <p>{data.footText}</p>
              {data.footLabel && <span>{data.footLabel}</span>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Audience band (preview 2): numbered roles in a ruled three-column band.
function AudienceBand({ data, number }) {
  return (
    <section className="cp_aud2">
      <div className="cp_wrap">
        <div className="cp_aud2_top cp_reveal">
          <div>
            <Kicker number={number} label={data.kicker} className="cp_kicker_dark" />
            {data.heading && <h2>{data.heading}</h2>}
          </div>
          <div className="cp_aud2_copy">
            {data.text && <p>{data.text}</p>}
          </div>
        </div>
        <div className="cp_aud2_band cp_reveal">
          {data.items.map((item, index) => {
            if (typeof item === "string") {
              return (
                <div key={item} className="cp_aud2_item">
                  <span>{sectionNumber(index + 1)}</span>
                  <strong>{item}</strong>
                </div>
              );
            }
            const content = (
              <>
                <span>{sectionNumber(index + 1)}</span>
                <div>
                  <strong>{item.title}</strong>
                  {item.desc && <small>{item.desc}</small>}
                  <em>{item.link ? "View course ↗" : "Ask about this course ↗"}</em>
                </div>
              </>
            );
            return item.link ? (
              <Link key={item.title} to={item.link} className="cp_aud2_item cp_aud2_link">
                {content}
              </Link>
            ) : (
              <a key={item.title} href="#enquire" className="cp_aud2_item cp_aud2_link">
                {content}
              </a>
            );
          })}
        </div>
        {data.foot && <div className="cp_aud2_foot">{data.foot}</div>}
      </div>
    </section>
  );
}

function Enquiry({ course, data, number }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: (data.enquiryTypes || DEFAULT_ENQUIRY_TYPES)[0],
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name.trim().length < 2) {
      setStatus({ type: "error", text: "Please enter your name." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    const subject = `Course enquiry: ${course.fullName}`;
    const body = [
      `Course: ${course.fullName}`,
      `Enquiry type: ${form.interest}`,
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      "",
      form.message.trim() || "Please send me more information about this course.",
    ].join("\n");
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus({
      type: "success",
      text: `Your email app should now open with this enquiry addressed to ${ENQUIRY_EMAIL}. Press send to deliver it. If nothing opens, email ${ENQUIRY_EMAIL} or call ${PHONE_DISPLAY}.`,
    });
  };

  return (
    <section className="cp_contact" id="enquire">
      <div className="cp_contact_mark" aria-hidden="true">
        {data.watermark}
      </div>
      <div className="cp_wrap cp_contact_grid">
        <div className="cp_contact_copy cp_reveal">
          <Kicker number={number} label={data.kicker} />
          <h2>{data.heading}</h2>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="cp_contact_detail">
            {data.detailLabels !== false ? (
              (data.detailLabels || DEFAULT_DETAIL_LABELS).map((label) => (
                <span key={label} className="cp_contact_label">
                  {label}
                </span>
              ))
            ) : (
              <>
                <a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a>
                <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
              </>
            )}
          </div>
          {data.notes && (
            <div className="cp_contact_notes">
              <strong>{data.notes.title}</strong>
              {data.notes.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        <form className="cp_form cp_reveal" onSubmit={handleSubmit} noValidate>
          <div className="cp_form_top">
            <strong>{data.formTitle || "Request course details"}</strong>
            <span>{data.formLabel || "Course enquiry"}</span>
          </div>
          <div className="cp_form_grid">
            <div className="cp_field">
              <label htmlFor="cp_name">Your name *</label>
              <input
                id="cp_name"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={update("name")}
              />
            </div>
            <div className="cp_field">
              <label htmlFor="cp_email">Email address *</label>
              <input
                id="cp_email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={update("email")}
              />
            </div>
            <div className="cp_field">
              <label htmlFor="cp_phone">Phone number</label>
              <input
                id="cp_phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
              />
            </div>
            <div className="cp_field">
              <label htmlFor="cp_interest">Enquiry type</label>
              <select
                id="cp_interest"
                name="interest"
                value={form.interest}
                onChange={update("interest")}
              >
                {(data.enquiryTypes || DEFAULT_ENQUIRY_TYPES).map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="cp_field cp_full">
              <label htmlFor="cp_message">Message (optional)</label>
              <textarea
                id="cp_message"
                name="message"
                placeholder="Tell us what information you need."
                value={form.message}
                onChange={update("message")}
              />
            </div>
          </div>
          <button className="cp_btn cp_btn_dark" type="submit">
            Send enquiry <span className="cp_arrow">↗</span>
          </button>
          <p className="cp_form_note">Your details will be used to respond to this course enquiry.</p>
          <p
            className={`cp_form_status ${status.type === "error" ? "is-error" : ""}`}
            aria-live="polite"
          >
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}


// ---------------------------------------------------------------------------
// Every course page uses the ISO 50001 Lead Auditor section designs. Older content
// shapes (intro / inside / extra / audience / related) are converted here.
// ---------------------------------------------------------------------------
const isAuditorCourse = (course) => /Auditor/.test(course.category || "");

function introToFocus(data, course, { withImage }) {
  const paragraphs = [...(data.paragraphs || [])];
  let note = data.statement;
  if (data.aside) {
    if (note) {
      paragraphs.unshift(data.aside);
    } else {
      note = data.aside;
    }
  }
  const nodeCount = course.inside?.topics?.length || course.diagram?.nodes?.length;
  const image = course.audience?.image || course.journey?.image || course.hero.image;
  return {
    kicker: data.kicker,
    heading: data.heading,
    text: paragraphs,
    noteLabel: "The focus of this training",
    note,
    points: data.points,
    image: withImage ? image : undefined,
    imageAlt: course.audience?.imageAlt || course.journey?.imageAlt || course.hero.imageAlt,
    captionNumber: nodeCount ? `01—${String(nodeCount).padStart(2, "0")}` : undefined,
    captionText: isAuditorCourse(course)
      ? "Key areas an auditor needs to examine"
      : "Key areas this training covers",
  };
}

function insideToDiagram(data, course) {
  const { visual = {} } = data;
  return {
    kicker: data.kicker,
    heading: data.heading.replace(/\n/g, " "),
    text: data.text,
    label: [visual.labelRight, visual.labelLeft].filter(Boolean).join(" · "),
    hint: "Select an element to explore",
    nodes: data.topics.map((topic) => ({ title: topic.title, detail: topic.desc })),
    footText: data.result,
    footLabel: "Explore each element ↗",
  };
}

function listToBand(data) {
  return {
    kicker: data.kicker,
    heading: data.heading,
    text: data.text,
    items: data.items,
    foot: data.note || data.tag,
  };
}

// Exam domain weights shown in the same interactive diagram as the ISO 50001 page.
function weightsToDiagram(data) {
  return {
    kicker: data.kicker,
    heading: data.heading,
    text: data.text,
    label: "Exam domains · share of the examination",
    hint: "Select a domain to explore",
    nodes: data.items.map((item) => ({
      title: `${item.title} · ${item.pct}%`,
      summary: item.desc,
      detail: item.desc,
    })),
    footText: data.note,
    footLabel: "Explore each domain ↗",
  };
}

function relatedToBand(data) {
  return {
    kicker: data.kicker,
    heading: data.heading,
    text: data.text,
    items: data.items,
  };
}

function renderSection(key, course, number, isFirstFocus) {
  // "extra2", "intro2"... reuse the layout of their base type.
  const type = key.replace(/\d+$/, "");
  const data = course[key];
  switch (type) {
    case "intro":
      return <Focus key={key} data={introToFocus(data, course, { withImage: isFirstFocus })} number={number} />;
    case "focus":
      return <Focus key={key} data={data} number={number} />;
    case "inside":
      return <Diagram key={key} data={insideToDiagram(data, course)} number={number} />;
    case "diagram":
      return <Diagram key={key} data={data} number={number} />;
    case "journey":
      return <Journey key={key} data={data} number={number} />;
    case "extra":
    case "audience":
      return <AudienceBand key={key} data={listToBand(data)} number={number} />;
    case "audienceBand":
      return <AudienceBand key={key} data={data} number={number} />;
    case "related":
      return <AudienceBand key={key} data={relatedToBand(data)} number={number} />;
    case "weights":
      return <Diagram key={key} data={weightsToDiagram(data)} number={number} />;
    case "enquiry":
      return <Enquiry key={key} course={course} data={data} number={number} />;
    default:
      return null;
  }
}

export default function CoursePage({ course }) {
  const rootRef = useRef(null);
  const progressRef = useRef(null);

  // Page title and meta description for this course.
  useEffect(() => {
    document.title = course.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    const previous = meta ? meta.getAttribute("content") : null;
    if (meta) {
      meta.setAttribute("content", course.metaDescription);
    }
    return () => {
      if (meta && previous) {
        meta.setAttribute("content", previous);
      }
    };
  }, [course]);

  // Reading progress bar.
  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${value}%`;
      }
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  // Reveal sections as they scroll into view (content stays visible without JS).
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) {
      return undefined;
    }
    const items = root.querySelectorAll(".cp_reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    root.classList.add("cp_reveal_ready");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [course]);

  const sections = (course.sections || DEFAULT_SECTIONS).filter((key) => course[key]);

  let counter = 0;
  const next = () => sectionNumber(++counter);

  return (
    <div className="cp" ref={rootRef}>
      <div className="cp_progress" ref={progressRef} aria-hidden="true" />
      <Hero course={course} />
      {/* Target of the hero's secondary button */}
      <div id="explore" />
      {sections.map((key, index) => {
        const type = key.replace(/\d+$/, "");
        const isFirstFocus =
          (type === "intro" || type === "focus") &&
          sections.findIndex((k) => /^(intro|focus)\d*$/.test(k)) === index;
        return renderSection(key, course, next(), isFirstFocus);
      })}
    </div>
  );
}
