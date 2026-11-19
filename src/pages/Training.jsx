import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { coursePath } from "./courses/courseData";
const unsplashImage = (t) =>
  `https://images.unsplash.com/photo-${t}?auto=format&fit=crop&w=800&q=80`;
const trainingTracks = [
  {
    num: "01",
    cat: "Lead Auditor",
    title: "Lead Auditor",
    desc: "ISO 45001, ISO 41001, ISO 31000, ISO 50001, ISO 27001, ISO 9001 and ISO 14001.",
    img: unsplashImage("1524178232363-1fb2b075b655"),
  },
  {
    num: "02",
    cat: "Internal Auditor",
    title: "Internal Auditor",
    desc: "ISO 9001, ISO 45001, ISO 41001, ISO 22000, ISO 50001, ISO 27001 and ISO 14001.",
    img: unsplashImage("1573164713988-8665fc963095"),
  },
  {
    num: "03",
    cat: "Leadership & Management",
    title: "Leadership & Management",
    desc: "Train the Trainer, Business Continuity Management, Lean Six Sigma Green and Black Belt, and Saudi Aramco Schedule Q Awareness.",
    img: unsplashImage("1521737711867-e3b97375f902"),
  },
  {
    num: "04",
    cat: "Safety & Environment",
    title: "Safety & Environment",
    desc: "First Aid, CPR & AED, OSHA 10 & 30 Hours GI/CI Compliance, and Fire Safety Awareness and Fire Fighting.",
    img: unsplashImage("1581092160562-40aa08e78837"),
  },
  {
    num: "05",
    cat: "Exam Preparation Courses",
    title: "Exam Preparation",
    desc: "PMI-RMP® Exam Preparation and PMP® Exam Preparation.",
    img: unsplashImage("1522202176988-66273c2fd55f"),
  },
];
const courses = [
  {
    id: "c1",
    cat: "Exam Preparation Courses",
    title: "PMI-RMP® Exam Preparation",
    text: "Develop your risk management expertise. Prepare for the PMI-RMP® exam.",
    info: [],
    img: unsplashImage("1551288049-bebda4e38f71"),
  },
  {
    id: "c2",
    cat: "Exam Preparation Courses",
    title: "PMP® Exam Preparation",
    text: "The PMP® exam tests how you make project decisions.",
    info: [],
    img: unsplashImage("1552664730-d307ca884978"),
  },
  {
    id: "c3",
    cat: "Internal Auditor",
    title: "ISO 9001:2015 Internal Auditor",
    text: "Develop the knowledge and auditing skills to assess a Quality Management System, examine how processes perform and identify where the system needs attention.",
    info: [],
    img: unsplashImage("1524178232363-1fb2b075b655"),
  },
  {
    id: "c4",
    cat: "Internal Auditor",
    title: "ISO 45001:2018 Internal Auditor",
    text: "Develop the knowledge and auditing skills to assess an Occupational Health and Safety Management System and report where controls, responsibilities or processes need attention.",
    info: [],
    img: unsplashImage("1581092160562-40aa08e78837"),
  },
  {
    id: "c5",
    cat: "Internal Auditor",
    title: "ISO 41001:2018 Internal Auditor",
    text: "Develop the knowledge and auditing skills to assess a Facility Management System, examine service delivery and evaluate whether facility management processes meet requirements.",
    info: [],
    img: unsplashImage("1573164713988-8665fc963095"),
  },
  {
    id: "c6",
    cat: "Internal Auditor",
    title: "ISO 22000:2018 Internal Auditor",
    text: "Develop the knowledge and auditing skills to assess a Food Safety Management System, evaluate its implementation and report findings that deserve attention.",
    info: [],
    img: unsplashImage("1567789884554-0b844b597180"),
  },
  {
    id: "c7",
    cat: "Internal Auditor",
    title: "ISO 50001:2018 Internal Auditor",
    text: "Develop the skills to examine an Energy Management System, review how energy performance is managed and assess whether the organization is meeting its energy objectives.",
    info: [],
    img: unsplashImage("1497366754035-f200968a6e72"),
  },
  {
    id: "c8",
    cat: "Internal Auditor",
    title: "ISO 27001:2022 Internal Auditor",
    text: "Develop the knowledge and auditing skills to examine an Information Security Management System and assess whether the required controls are working.",
    info: [],
    img: unsplashImage("1516321318423-f06f85e504b3"),
  },
  {
    id: "c9",
    cat: "Internal Auditor",
    title: "ISO 14001:2015 Internal Auditor",
    text: "Develop the knowledge and auditing skills to examine an Environmental Management System, assess how environmental requirements are applied and identify where improvements are needed.",
    info: [],
    img: unsplashImage("1524178232363-1fb2b075b655"),
  },
  {
    id: "c10",
    cat: "Lead Auditor",
    title: "ISO 45001:2018 Lead Auditor",
    text: "Develop the knowledge to examine how an organization identifies workplace hazards, manages health and safety risks, leads audit teams and reports findings against ISO 45001 requirements.",
    info: [],
    img: unsplashImage("1581092160562-40aa08e78837"),
  },
  {
    id: "c11",
    cat: "Lead Auditor",
    title: "ISO 41001:2018 Lead Auditor",
    text: "Develop the knowledge to examine how an organization plans and delivers facility management, evaluates service performance, leads audit teams and reports findings against ISO 41001 requirements.",
    info: [],
    img: unsplashImage("1573164713988-8665fc963095"),
  },
  {
    id: "c12",
    cat: "Lead Auditor",
    title: "ISO 31000:2018 Lead Auditor",
    text: "Develop the knowledge to examine how organisations identify, assess and manage risks, lead the audit process and report findings against ISO 31000 guidelines.",
    info: [],
    img: unsplashImage("1521737711867-e3b97375f902"),
  },
  {
    id: "c13",
    cat: "Lead Auditor",
    title: "ISO 50001:2018 Lead Auditor",
    text: "Develop your understanding of the standard and the skills needed to plan, lead and report audits of Energy Management Systems.",
    info: [],
    img: unsplashImage("1497366754035-f200968a6e72"),
  },
  {
    id: "c14",
    cat: "Lead Auditor",
    title: "ISO 27001:2022 Lead Auditor",
    text: "Develop the knowledge to examine how an organization protects information, assesses security risks, evaluates controls, leads audit teams and reports findings against ISO/IEC 27001 requirements.",
    info: [],
    img: unsplashImage("1516321318423-f06f85e504b3"),
  },
  {
    id: "c15",
    cat: "Lead Auditor",
    title: "ISO 9001:2015 Lead Auditor",
    text: "Develop the knowledge to examine how an organization manages quality, evaluates its processes, leads audit teams and reports findings.",
    info: [],
    img: unsplashImage("1524178232363-1fb2b075b655"),
  },
  {
    id: "c16",
    cat: "Lead Auditor",
    title: "ISO 14001:2015 Lead Auditor",
    text: "Develop the knowledge to examine how an organization manages its environmental impacts, evaluates compliance, leads audit teams and reports findings.",
    info: [],
    img: unsplashImage("1573164713988-8665fc963095"),
  },
  {
    id: "c17",
    cat: "Leadership & Management",
    title: "Train the Trainer",
    text: "Knowing your subject is one thing. Knowing how to teach it is another.",
    info: [],
    img: unsplashImage("1524178232363-1fb2b075b655"),
  },
  {
    id: "c18",
    cat: "Leadership & Management",
    title: "Business Continuity Management",
    text: "When an important business operation stops, how quickly can you restore it?",
    info: [],
    img: unsplashImage("1558494949-ef010cbdcc31"),
  },
  {
    id: "c19",
    cat: "Leadership & Management",
    title: "Lean Six Sigma Green Belt",
    text: "Find out where the process is losing time, money and quality. Then work out how to improve it.",
    info: [],
    img: unsplashImage("1567789884554-0b844b597180"),
  },
  {
    id: "c20",
    cat: "Leadership & Management",
    title: "Saudi Aramco Schedule Q Awareness",
    text: "Working on a Saudi Aramco project? Know the quality requirements before the work begins.",
    info: [],
    img: unsplashImage("1504307651254-35680f356dfd"),
  },
  {
    id: "c21",
    cat: "Leadership & Management",
    title: "Lean Six Sigma Black Belt",
    text: "When process problems are complex, improvement needs more than a quick fix.",
    info: [],
    img: unsplashImage("1581092160607-ee22621dd758"),
  },
  {
    id: "c22",
    cat: "Safety & Environment",
    title: "First Aid, CPR & AED",
    text: "Prepare your employees to recognise emergencies and provide an appropriate first response when it matters most.",
    info: [],
    img: unsplashImage("1581092160562-40aa08e78837"),
  },
  {
    id: "c23",
    cat: "Safety & Environment",
    title: "OSHA 10 & 30 Hours GI/CI Compliance",
    text: "OSHA 10-Hour and 30-Hour training for General Industry and Construction, building awareness of workplace hazards and safe work practices.",
    info: [],
    img: unsplashImage("1567789884554-0b844b597180"),
  },
  {
    id: "c24",
    cat: "Safety & Environment",
    title: "Fire Safety Awareness and Fire Fighting",
    text: "Prepare your employees to recognise fire risks, understand their responsibilities and take the right action when an emergency occurs.",
    info: [],
    img: unsplashImage("1581092160562-40aa08e78837"),
  },
];
// Courses that have their own detail page.
const coursePageSlugs = {
  "ISO 9001:2015 Internal Auditor": "iso-9001-internal-auditor",
  "ISO 45001:2018 Internal Auditor": "iso-45001-internal-auditor",
  "ISO 41001:2018 Internal Auditor": "iso-41001-internal-auditor",
  "ISO 22000:2018 Internal Auditor": "iso-22000-internal-auditor",
  "ISO 50001:2018 Internal Auditor": "iso-50001-internal-auditor",
  "ISO 27001:2022 Internal Auditor": "iso-27001-internal-auditor",
  "ISO 14001:2015 Internal Auditor": "iso-14001-internal-auditor",
  "ISO 45001:2018 Lead Auditor": "iso-45001-lead-auditor",
  "ISO 41001:2018 Lead Auditor": "iso-41001-lead-auditor",
  "ISO 31000:2018 Lead Auditor": "iso-31000-lead-auditor",
  "ISO 50001:2018 Lead Auditor": "iso-50001-lead-auditor",
  "ISO 27001:2022 Lead Auditor": "iso-27001-lead-auditor",
  "ISO 9001:2015 Lead Auditor": "iso-9001-lead-auditor",
  "ISO 14001:2015 Lead Auditor": "iso-14001-lead-auditor",
  "First Aid, CPR & AED": "first-aid-cpr-aed",
  "OSHA 10 & 30 Hours GI/CI Compliance": "osha-10-30-hours-gi-ci-compliance",
  "Fire Safety Awareness and Fire Fighting": "fire-safety-awareness-and-fire-fighting",
  "PMP® Exam Preparation": "pmp-exam-preparation",
  "PMI-RMP® Exam Preparation": "pmi-rmp-exam-preparation",
  "Business Continuity Management": "business-continuity-management-course",
  "Train the Trainer": "train-the-trainer",
  "Saudi Aramco Schedule Q Awareness": "saudi-aramco-schedule-q-awareness",
  "Lean Six Sigma Green Belt": "lean-six-sigma-green-belt",
  "Lean Six Sigma Black Belt": "lean-six-sigma-black-belt",
};
courses.forEach((course) => {
  const slug = coursePageSlugs[course.title];
  if (slug) {
    course.link = coursePath(slug);
  }
});
const featuredCourse = {
  cat: "Lead Auditor",
  level: "Flagship",
  title: "ISO 9001 Lead Auditor Certification Course",
  text: "Our most requested program. Five days of practice-led learning on audit planning, execution and reporting, taught by internationally certified trainers.",
  info: ["5 days", "Hybrid", "Limited seats"],
  img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
};
const upcomingSessions = [
  {
    d: "05",
    m: "Nov 2026",
    t: "Internal audit skills workshop",
    s: "ISO 9001 · Auditor",
    w: "In person · Karachi / Riyadh",
    n: "8 seats left",
  },
  {
    d: "19",
    m: "Nov 2026",
    t: "ISO 14001 Internal Auditor",
    s: "Environment",
    w: "Online",
    n: "Open",
  },
  {
    d: "10",
    m: "Dec 2026",
    t: "ISO 9001 Lead Auditor",
    s: "5-day course",
    w: "Hybrid",
    n: "4 seats left",
  },
  {
    d: "21",
    m: "Jan 2027",
    t: "Risk-based thinking in practice",
    s: "Leadership",
    w: "In person · Karachi / Al Khobar",
    n: "Open",
  },
];
const filterCategories = [
  "All Trainings",
  "Exam Preparation Courses",
  "Internal Auditor",
  "Lead Auditor",
  "Leadership & Management",
  "Safety & Environment",
];
export default function Training() {
  const [activePanel, setActivePanel] = useState(0);
  // The selected category (and how many courses are shown) live in the address,
  // e.g. ?category=Lead+Auditor, so returning from a course page keeps the same filter.
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const activeFilter = filterCategories.includes(categoryParam) ? categoryParam : "All Trainings";
  const visibleCount = Math.max(6, Number(searchParams.get("show")) || 6);
  const updateCatalogueParams = (filter, count) => {
    const next = {};
    if (filter !== "All Trainings") {
      next.category = filter;
    }
    if (count > 6) {
      next.show = String(count);
    }
    setSearchParams(next, { replace: true, preventScrollReset: true });
  };
  const setVisibleCount = (value) => {
    const count = typeof value === "function" ? value(visibleCount) : value;
    updateCatalogueParams(activeFilter, count);
  };
  const [searchQuery, setSearchQuery] = useState("");
  // Coming back to a filtered catalogue: bring the course list into view.
  useEffect(() => {
    if (!categoryParam) {
      return undefined;
    }
    const timer = setTimeout(() => {
      const catalogue = document.getElementById("catalogue");
      if (catalogue) {
        window.scrollTo({ top: catalogue.getBoundingClientRect().top + window.scrollY - 90 });
      }
    }, 80);
    return () => clearTimeout(timer);
    // Only on arrival, not on every filter change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    company: "",
    people: "",
    course: "",
    format: "In person",
    message: "",
    consent: false,
  });
  const [formMessage, setFormMessage] = useState("");
  const enquiryRef = useRef(null);
  const enquireAbout = (courseTitle) => {
    setEnquiry((prev) => ({
      ...prev,
      course: courseTitle,
    }));
    if (enquiryRef.current) {
      enquiryRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const selectFilter = (filter) => {
    updateCatalogueParams(filter, 6);
  };
  const filteredCourses = useMemo(
    () =>
      courses.filter((course) => {
        const matchesFilter = activeFilter === "All Trainings" || course.cat === activeFilter;
        const matchesSearch =
          `${course.title} ${course.cat} ${course.text} ${course.info.join(" ")}`
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase());
        return matchesFilter && matchesSearch;
      }),
    [activeFilter, searchQuery],
  );
  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!enquiry.name || !enquiry.email || !enquiry.course) {
      setFormMessage("Please complete all required fields.");
      return;
    }
    setFormMessage(
      "Thank you! Your training enquiry has been prepared. Our coordinator will contact you with course outlines, schedules and seat availability.",
    );
  };
  return (
    <div className="training-page">
      <section className="training-hero">
        <div className="wrap">
          <div className="training-hero-copy">
            <span className="eyebrow">Professional training</span>
            <h1>
              {"Professional Training "}
              <br />
              {"for "}
              <em>Real-World Requirements.</em>
            </h1>
            <p className="lead">
              Meridian delivers professional training for individuals and organizations seeking to
              develop their knowledge, strengthen workplace capabilities and meet professional
              requirements. Our programmes cover management systems, auditing, leadership,
              examination preparation, and safety and environmental practices.
            </p>
            <div className="btns">
              <a className="btn light" href="#catalogue">
                {"Explore Training Courses "}
                <i>↓</i>
              </a>
              <a className="btn ghost" href="#enquire">
                {"Contact Our Training Team "}
                <i>↗</i>
              </a>
            </div>
          </div>
          <div className="training-panels" aria-label="Training tracks">
            {trainingTracks.map((trainingTrack, index) => (
              <article
                key={trainingTrack.num}
                className={`training-panel ${activePanel === index ? "active" : ""}`}
                tabIndex={0}
                onMouseEnter={() => setActivePanel(index)}
                onClick={() => setActivePanel(index)}
                onFocus={() => setActivePanel(index)}
                style={{
                  "--img": `url('${trainingTrack.img}')`,
                }}
              >
                <span className="p-num">{trainingTrack.num}</span>
                <span className="p-vert">{trainingTrack.title}</span>
                <div className="p-open">
                  <h3>{trainingTrack.title}</h3>
                  <p>{trainingTrack.desc}</p>
                  <a
                    className="btn light"
                    href="#catalogue"
                    onClick={() => selectFilter(trainingTrack.cat)}
                  >
                    {"View courses "}
                    <i>↘</i>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="p-hint">Hover or tap a panel to explore</div>
        </div>
      </section>
      <div className="training-ticker" aria-hidden="true">
        <div className="training-ticker-track">
          <span>Lead auditor</span>
          <b>✦</b>
          <span>Internal auditor</span>
          <b>✦</b>
          <span>{"Leadership & management"}</span>
          <b>✦</b>
          <span>{"Safety & environment"}</span>
          <b>✦</b>
          <span>Exam preparation</span>
          <b>✦</b>
          <span>Lead auditor</span>
          <b>✦</b>
          <span>Internal auditor</span>
          <b>✦</b>
          <span>{"Leadership & management"}</span>
          <b>✦</b>
          <span>{"Safety & environment"}</span>
          <b>✦</b>
          <span>Exam preparation</span>
          <b>✦</b>
        </div>
      </div>
      <section className="section training-accred" id="accreditations">
        <div className="wrap training-accred-grid">
          <div>
            <div className="kicker">01 / Accreditations &amp; recognition</div>
            <h2 className="big">
              {"Recognized Training. "}
              <em>Professional Standards.</em>
            </h2>
          </div>
          <p className="lede">
            Our training credentials and professional affiliations reflect our commitment to
            structured learning and recognized standards.
          </p>
        </div>
      </section>
      <section className="section" id="catalogue">
        <div className="wrap">
          <div className="training-cat-head">
            <div className="kicker">02 / Our training portfolio</div>
            <h2 className="big">
              {"Explore Our Training "}
              <em>Programmes.</em>
            </h2>
            <p className="lead">Browse the available courses by subject or training category.</p>
          </div>
          <div className="training-tools" role="group" aria-label="Filters and search">
            <div className="training-filters">
              {filterCategories.map((filterCategory) => (
                <button
                  key={filterCategory}
                  type="button"
                  className={activeFilter === filterCategory ? "active" : ""}
                  aria-pressed={activeFilter === filterCategory}
                  onClick={() => selectFilter(filterCategory)}
                >
                  {filterCategory}
                </button>
              ))}
            </div>
            <div className="training-search">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search courses…"
                aria-label="Search courses"
              />
            </div>
          </div>
          {(activeFilter === "All Trainings" || activeFilter === featuredCourse.cat) &&
            `${featuredCourse.title} ${featuredCourse.text}`
              .toLowerCase()
              .includes(searchQuery.trim().toLowerCase()) && (
              <article className="training-feature">
                <div className="p-img">
                  <img src={featuredCourse.img} alt={featuredCourse.title} />
                  <span className="level">{featuredCourse.level}</span>
                </div>
                <div className="p-body">
                  <div className="meta">
                    <span className="tag">
                      {"Featured · "}
                      {featuredCourse.cat}
                    </span>
                  </div>
                  <h2>{featuredCourse.title}</h2>
                  <p>{featuredCourse.text}</p>
                  <div className="info">
                    {featuredCourse.info.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a
                    className="more"
                    href="#enquire"
                    onClick={(event) => {
                      event.preventDefault();
                      enquireAbout(featuredCourse.title);
                    }}
                  >
                    Enquire about this course ↗
                  </a>
                </div>
              </article>
            )}
          <p className="training-count" aria-live="polite">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course found" : "courses found"}
          </p>
          {filteredCourses.length > 0 ? (
            <div className="training-grid">
              {visibleCourses.map((visibleCourse) => (
                <article key={visibleCourse.id} className="training-post">
                  <div className="p-img">
                    {visibleCourse.link ? (
                      <Link to={visibleCourse.link} aria-label={`View ${visibleCourse.title}`}>
                        <img src={visibleCourse.img} alt={visibleCourse.title} loading="lazy" />
                      </Link>
                    ) : (
                      <img src={visibleCourse.img} alt={visibleCourse.title} loading="lazy" />
                    )}
                    {visibleCourse.level && <span className="level">{visibleCourse.level}</span>}
                  </div>
                  <div className="p-body">
                    <div className="meta">
                      <span className="tag">{visibleCourse.cat}</span>
                    </div>
                    <h3>
                      {visibleCourse.link ? (
                        <Link to={visibleCourse.link}>{visibleCourse.title}</Link>
                      ) : (
                        visibleCourse.title
                      )}
                    </h3>
                    {visibleCourse.text && <p>{visibleCourse.text}</p>}
                    <div className="info">
                      {visibleCourse.info.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    {visibleCourse.link ? (
                      <Link className="more" to={visibleCourse.link}>
                        View course
                      </Link>
                    ) : (
                      <a
                        className="more"
                        href="#enquire"
                        onClick={(event) => {
                          event.preventDefault();
                          enquireAbout(visibleCourse.title);
                        }}
                      >
                        Enquire
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="training-empty">
              No courses match your search. Try a different keyword or track.
            </p>
          )}
          {visibleCount < filteredCourses.length && (
            <div className="training-loadmore">
              <button
                className="btn"
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                {"Load more courses "}
                <i>↓</i>
              </button>
            </div>
          )}
        </div>
      </section>
      <section
        className="section"
        id="enquire"
        style={{
          paddingTop: 0,
        }}
        ref={enquiryRef}
      >
        <div className="wrap">
          <div className="contact-layout">
            <aside className="intro-card">
              <span className="eyebrow">Training enquiries</span>
              <h2>Need Help Choosing a Course?</h2>
              <p>
                If you are looking for a specific programme or planning training for your
                organization, contact our team to discuss your requirements.
              </p>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    ✉
                  </div>
                  <div>
                    <strong>Email</strong>
                    <a
                      href="mailto:info@meqmp.com"
                      style={{
                        color: "#cfe0e3",
                      }}
                    >
                      info@meqmp.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    ↗
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <a
                      href="tel:+966509394640"
                      style={{
                        color: "#cfe0e3",
                      }}
                    >
                      +966 50 939 4640
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true">
                    ⌖
                  </div>
                  <div>
                    <strong>Training centre</strong>
                    <span>{"TVTC Approved Foreign Centre · Riyadh & Al Khobar"}</span>
                  </div>
                </div>
              </div>
            </aside>
            <section className="form-card">
              <div className="form-heading">
                <span className="eyebrow">Training enquiry</span>
                <h2>Which course are you after?</h2>
                <p>
                  Complete the form and we’ll direct your enquiry to the right training coordinator.
                </p>
              </div>
              {formMessage ? (
                <div
                  style={{
                    background: "#DDF3E7",
                    color: "#1F7A4D",
                    padding: "20px",
                    borderRadius: "16px",
                    lineHeight: 1.6,
                    fontWeight: 600,
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    {formMessage}
                  </p>
                  <button
                    type="button"
                    className="btn"
                    style={{
                      marginTop: "14px",
                      padding: "8px 16px",
                      fontSize: "12px",
                    }}
                    onClick={() => setFormMessage("")}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="name">Full name *</label>
                      <input
                        id="name"
                        required
                        minLength={2}
                        placeholder="Your full name"
                        autoComplete="name"
                        value={enquiry.name}
                        onChange={(event) =>
                          setEnquiry({
                            ...enquiry,
                            name: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        autoComplete="email"
                        value={enquiry.email}
                        onChange={(event) =>
                          setEnquiry({
                            ...enquiry,
                            email: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Organisation</label>
                      <input
                        id="company"
                        placeholder="Organisation name"
                        autoComplete="organization"
                        value={enquiry.company}
                        onChange={(event) =>
                          setEnquiry({
                            ...enquiry,
                            company: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="people">Number of participants</label>
                      <input
                        id="people"
                        type="number"
                        min="1"
                        placeholder="e.g. 12"
                        value={enquiry.people}
                        onChange={(event) =>
                          setEnquiry({
                            ...enquiry,
                            people: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="field full">
                      <label htmlFor="course">Course of interest *</label>
                      <select
                        id="course"
                        required
                        value={enquiry.course}
                        onChange={(event) =>
                          setEnquiry({
                            ...enquiry,
                            course: event.target.value,
                          })
                        }
                      >
                        <option value="" disabled>
                          Select a course
                        </option>
                        <option value={featuredCourse.title}>{featuredCourse.title}</option>
                        {courses.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                        <option value="Custom in-house program">Custom in-house program</option>
                        <option value="Not sure yet">Not sure yet (advisory consultation)</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="format">Preferred format</label>
                      <select
                        id="format"
                        value={enquiry.format}
                        onChange={(event) =>
                          setEnquiry({
                            ...enquiry,
                            format: event.target.value,
                          })
                        }
                      >
                        <option>In person</option>
                        <option>Online</option>
                        <option>Hybrid</option>
                        <option>In-house at our site</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="message">Anything else we should know? *</label>
                      <textarea
                        id="message"
                        required
                        minLength={10}
                        placeholder="Goals, timelines, locations…"
                        value={enquiry.message}
                        onChange={(event) =>
                          setEnquiry({
                            ...enquiry,
                            message: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <label className="consent">
                    <input
                      type="checkbox"
                      required
                      checked={enquiry.consent}
                      onChange={(event) =>
                        setEnquiry({
                          ...enquiry,
                          consent: event.target.checked,
                        })
                      }
                    />
                    <span>
                      I agree that Meridian may use the information I provide to respond to this
                      enquiry. *
                    </span>
                  </label>
                  <div className="submit-row">
                    <button className="btn" type="submit">
                      {"Prepare enquiry "}
                      <i>↗</i>
                    </button>
                  </div>
                  <p className="privacy">
                    Your information will be handled with strict confidentiality in line with our
                    data privacy guidelines.
                  </p>
                </form>
              )}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
