import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./coursePage.css";

const ENQUIRY_EMAIL = "info@meqmp.com";
const PHONE_DISPLAY = "+966 50 939 4640";
const PHONE_LINK = "+966509394640";
const DEFAULT_SECTIONS = ["intro", "inside", "journey", "extra", "audience", "related", "enquiry"];
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
          {hero.showCrumb !== false && (
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
          <p className="cp_hero_description">{hero.description}</p>
          <div className="cp_hero_bottom">
            <a className="cp_btn" href="#enquire">
              {hero.cta || "Request course details"} <span className="cp_arrow">↗</span>
            </a>
            <a className="cp_btn cp_btn_ghost" href="#explore">
              {hero.secondaryCta || "Explore the training"} <span className="cp_arrow">↓</span>
            </a>
          </div>
          <div className="cp_hero_reference">
            {hero.reference.map((item) => (
              <div key={`${item.label}-${item.value}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cp_hero_side_label">Meridian Quality Management Professionals</div>
    </section>
  );
}

function Intro({ data, number }) {
  return (
    <section className="cp_intro" id="explore">
      <div className="cp_wrap cp_intro_grid">
        <div className="cp_intro_aside cp_reveal">
          <Kicker number={number} label={data.kicker} />
          <p>{data.aside}</p>
        </div>
        <div className="cp_intro_content cp_reveal">
          <h2>{data.heading}</h2>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {data.statement && (
            <div className="cp_intro_statement">
              <span className="cp_statement_dot" />
              {data.statement}
            </div>
          )}
          {data.points && (
            <div className="cp_points">
              {data.points.map((point, index) => (
                <div key={point.title}>
                  <b>{sectionNumber(index + 1)}</b>
                  <strong>{point.title}</strong>
                  <p>{point.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const NODE_POSITIONS = [
  [130, 75],
  [470, 75],
  [130, 250],
  [470, 250],
];

function Inside({ data, number }) {
  const [activeTopic, setActiveTopic] = useState(0);
  const { visual } = data;
  const headingLines = data.heading.split("\n");
  return (
    <section className="cp_technical">
      <div className="cp_wrap">
        <div className="cp_section_heading cp_reveal">
          <div>
            <Kicker number={number} label={data.kicker} />
            <h2>
              {headingLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <p>{data.text}</p>
        </div>
        <div className="cp_technical_grid">
          <div className="cp_system_visual cp_reveal">
            <div className="cp_visual_labels">
              <span>{visual.labelLeft}</span>
              <span>{visual.labelRight}</span>
            </div>
            <svg
              className="cp_system_svg"
              viewBox="0 0 600 330"
              role="img"
              aria-label={`Illustrative diagram: ${visual.core.join(" ")} connected to ${visual.nodes
                .map((node) => node.join(" "))
                .join(", ")}`}
            >
              <path
                className="cp_line"
                d="M300 155 L130 75 M300 155 L470 75 M300 155 L130 250 M300 155 L470 250"
              />
              <path className="cp_line" d="M130 75 L470 75 L470 250 L130 250 Z" />
              {NODE_POSITIONS.map(([cx, cy], index) => (
                <circle
                  key={`${cx}-${cy}`}
                  className={`cp_node ${activeTopic === index ? "is-active" : ""}`}
                  cx={cx}
                  cy={cy}
                  r="46"
                />
              ))}
              <circle className="cp_core" cx="300" cy="155" r="58" />
              <text className="cp_core_text" x="300" y="151" textAnchor="middle">
                {visual.core[0]}
              </text>
              <text className="cp_core_text" x="300" y="167" textAnchor="middle">
                {visual.core[1]}
              </text>
              {visual.nodes.map((node, index) => {
                const [cx, cy] = NODE_POSITIONS[index];
                const single = !node[1];
                return (
                  <g key={node.join("-")}>
                    <text x={cx} y={single ? cy + 4 : cy - 4} textAnchor="middle">
                      {node[0]}
                    </text>
                    {!single && (
                      <text x={cx} y={cy + 10} textAnchor="middle">
                        {node[1]}
                      </text>
                    )}
                  </g>
                );
              })}
              <text className="cp_small" x="300" y="322" textAnchor="middle">
                {visual.caption || "ILLUSTRATIVE SYSTEM RELATIONSHIPS"}
              </text>
            </svg>
          </div>
          <div className="cp_reveal">
            <div className="cp_topic_list">
              {data.topics.map((topic, index) => {
                const isActive = activeTopic === index;
                const detailId = `cp_topic_${index}`;
                return (
                  <div key={topic.title} className={`cp_topic ${isActive ? "is-active" : ""}`}>
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={detailId}
                      onClick={() => setActiveTopic(isActive ? -1 : index)}
                    >
                      <span className="cp_topic_number">{sectionNumber(index + 1)}</span>
                      <span className="cp_topic_title">{topic.title}</span>
                      <span className="cp_topic_icon" aria-hidden="true">
                        +
                      </span>
                    </button>
                    <div className="cp_topic_detail" id={detailId}>
                      <div>
                        <p>{topic.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {data.result && <p className="cp_result">{data.result}</p>}
          </div>
        </div>
      </div>
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

function Extra({ data, number }) {
  return (
    <section className="cp_extra">
      <div className="cp_wrap cp_extra_grid">
        <div className="cp_reveal">
          <Kicker number={number} label={data.kicker} />
          <h2>{data.heading}</h2>
          <p>{data.text}</p>
        </div>
        <div className="cp_reveal">
          <div className="cp_list" style={{ gridTemplateColumns: "1fr", marginTop: 0 }}>
            {data.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {data.note && <p className="cp_note">{data.note}</p>}
        </div>
      </div>
    </section>
  );
}

function Audience({ data, number }) {
  return (
    <section className="cp_audience">
      <div className="cp_wrap cp_audience_grid">
        <div className="cp_audience_image cp_reveal">
          <img className="cp_img" src={data.image} alt={data.imageAlt} />
          <div className="cp_audience_tag">{data.tag}</div>
        </div>
        <div className="cp_audience_content cp_reveal">
          <Kicker number={number} label={data.kicker} />
          <h2>{data.heading}</h2>
          {data.text && <p>{data.text}</p>}
          <div className="cp_list">
            {data.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          {data.note && <p className="cp_note">{data.note}</p>}
        </div>
      </div>
    </section>
  );
}

function Related({ data, number }) {
  return (
    <section className="cp_related">
      <div className="cp_wrap">
        <div className="cp_reveal">
          <Kicker number={number} label={data.kicker} />
          <h2 style={{ margin: "16px 0 12px" }}>{data.heading}</h2>
          {data.text && <p>{data.text}</p>}
        </div>
        <div className="cp_related_grid">
          {data.items.map((item) =>
            item.link ? (
              <Link key={item.title} className="cp_related_card cp_reveal" to={item.link}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="cp_eyebrow">View course ↗</span>
              </Link>
            ) : (
              <div key={item.title} className="cp_related_card cp_reveal">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a className="cp_eyebrow" href="#enquire">
                  Ask about this course ↗
                </a>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

// "Focus" section (preview 2): heading, paragraph, paper note and image row.
function Focus({ data, number }) {
  return (
    <section className="cp_focus" id="explore">
      <div className="cp_wrap cp_focus_grid">
        <div className="cp_focus_left cp_reveal">
          <Kicker number={number} label={data.kicker} className="cp_kicker_dark" />
          <h2>{data.heading}</h2>
        </div>
        <div className="cp_focus_right cp_reveal">
          <p>{data.text}</p>
          <div className="cp_paper_note">
            <div className="cp_paper_note_label">{data.noteLabel}</div>
            <strong>{data.note}</strong>
          </div>
          <div className="cp_focus_image_row">
            <div className="cp_focus_image">
              <img className="cp_img" src={data.image} alt={data.imageAlt} />
            </div>
            <div className="cp_image_caption">
              <strong>{data.captionNumber}</strong>
              <span>{data.captionText}</span>
            </div>
          </div>
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
          <p>{data.text}</p>
        </div>
        <div className="cp_flow_visual cp_reveal">
          <div className="cp_flow_topline">
            <span>{data.label}</span>
            <small>{data.hint}</small>
          </div>
          <div className="cp_flow" role="group" aria-label={data.label}>
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
                <small>{item.summary}</small>
              </button>
            ))}
          </div>
          <div className="cp_flow_detail" key={node.title} aria-live="polite">
            <strong>{node.title}</strong>
            <p>{node.detail}</p>
          </div>
          <div className="cp_flow_foot">
            <p>{data.footText}</p>
            <span>{data.footLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Audience band (preview 2): numbered roles in a ruled three-column band.
function AudienceBand({ data, number }) {
  return (
    <section className="cp_aud2" id="audience">
      <div className="cp_wrap">
        <div className="cp_aud2_top cp_reveal">
          <div>
            <Kicker number={number} label={data.kicker} className="cp_kicker_dark" />
            <h2>{data.heading}</h2>
          </div>
          <div className="cp_aud2_copy">
            <p>{data.text}</p>
          </div>
        </div>
        <div className="cp_aud2_band cp_reveal">
          {data.items.map((item, index) => (
            <div key={item} className="cp_aud2_item">
              <span>{sectionNumber(index + 1)}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <div className="cp_aud2_foot">{data.foot}</div>
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
            {data.detailLabels ? (
              data.detailLabels.map((label) => (
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
      {sections.map((key) => {
        switch (key) {
          case "intro":
            return <Intro key={key} data={course.intro} number={next()} />;
          case "inside":
            return <Inside key={key} data={course.inside} number={next()} />;
          case "journey":
            return <Journey key={key} data={course.journey} number={next()} />;
          case "extra":
            return <Extra key={key} data={course.extra} number={next()} />;
          case "audience":
            return <Audience key={key} data={course.audience} number={next()} />;
          case "related":
            return <Related key={key} data={course.related} number={next()} />;
          case "focus":
            return <Focus key={key} data={course.focus} number={next()} />;
          case "diagram":
            return <Diagram key={key} data={course.diagram} number={next()} />;
          case "audienceBand":
            return <AudienceBand key={key} data={course.audienceBand} number={next()} />;
          case "enquiry":
            return <Enquiry key={key} course={course} data={course.enquiry} number={next()} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
