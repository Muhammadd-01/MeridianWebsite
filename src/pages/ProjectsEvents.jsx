import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const unsplashImage = (t, o = false) =>
  `https://images.unsplash.com/photo-${t}?auto=format&fit=crop&w=${o ? 1400 : 800}&q=80`;
const projects = {
  feature: {
    cat: "Advisory",
    date: "2026-09-30",
    title: "Integrated management system for a multi-site manufacturer",
    text: "Harmonised quality, environmental and safety procedures across five plants, cutting audit findings by 62% and achieving triple certification in six months.",
    info: ["Manufacturing", "6 months", "ISO 9001 · 14001 · 45001"],
    image: unsplashImage("1581092160607-ee22621dd758", true),
    link: "/services#advisory",
  },
  items: [
    {
      id: "p-1",
      cat: "Compliance",
      date: "2026-08-14",
      title: "Regulatory gap assessment for a regional healthcare provider",
      text: "Mapped 140+ regulatory requirements to existing controls and delivered a prioritised remediation plan for leadership.",
      info: ["Healthcare", "3 months"],
      image: unsplashImage("1567789884554-0b844b597180"),
      link: "/services#compliance",
    },
    {
      id: "p-2",
      cat: "Sustainability",
      date: "2026-07-22",
      title: "Environmental performance roadmap for an office portfolio",
      text: "Baselined energy, waste and water use across 12 buildings and set practical reduction targets through 2030.",
      info: ["Real estate", "4 months"],
      image: unsplashImage("1497366754035-f200968a6e72"),
      link: "/services/sustainability",
    },
    {
      id: "p-3",
      cat: "Training",
      date: "2026-06-18",
      title: "Internal auditor programme for a logistics group",
      text: "Trained and coached 48 auditors across four countries, with a shared audit toolkit and calibration sessions.",
      info: ["Logistics", "8 weeks"],
      image: unsplashImage("1521737711867-e3b97375f902"),
      link: "/services#training",
    },
    {
      id: "p-4",
      cat: "Wellbeing",
      date: "2026-05-09",
      title: "Workplace wellbeing programme rollout",
      text: "Designed a company-wide programme covering mental health, ergonomics and flexible work, with measurable pulse surveys.",
      info: ["Professional services", "5 months"],
      image: unsplashImage("1522202176988-66273c2fd55f"),
      link: "/services#wellbeing",
    },
    {
      id: "p-5",
      cat: "Advisory",
      date: "2026-03-27",
      title: "Certification readiness for a technology firm",
      text: "Built the management system from scratch, ran a mock audit and guided the team to first-time certification.",
      info: ["Technology", "10 weeks"],
      image: unsplashImage("1581092921461-eab62e97a780"),
      link: "/services#advisory",
    },
    {
      id: "p-6",
      cat: "Compliance",
      date: "2026-02-11",
      title: "Supplier audit and risk control framework",
      text: "Introduced a tiered supplier assessment model and a shared scorecard that reduced onboarding time by a third.",
      info: ["Retail", "4 months"],
      image: unsplashImage("1581092160562-40aa08e78837"),
      link: "/services#compliance",
    },
    {
      id: "p-7",
      cat: "Sustainability",
      date: "2025-12-05",
      title: "Sustainability reporting set-up for an energy company",
      text: "Defined material topics, data owners and a reporting calendar ready for the first annual disclosure.",
      info: ["Energy", "3 months"],
      image: unsplashImage("1473341304170-971dccb5ac1e"),
      link: "/services/sustainability",
    },
    {
      id: "p-8",
      cat: "Training",
      date: "2025-10-21",
      title: "Quality leadership series for senior managers",
      text: "A four-part leadership series on risk-based thinking, accountability and continual improvement.",
      info: ["Financial services", "6 weeks"],
      image: unsplashImage("1524178232363-1fb2b075b655"),
      link: "/services#training",
    },
    {
      id: "p-9",
      cat: "Wellbeing",
      date: "2025-09-03",
      title: "Return-to-office wellbeing and safety review",
      text: "Reviewed workspace safety, ergonomics and communication plans ahead of a phased return for 900 staff.",
      info: ["Public sector", "2 months"],
      image: unsplashImage("1517048676732-d65bc937f952"),
      link: "/services#wellbeing",
    },
  ],
  cats: ["Advisory", "Compliance", "Sustainability", "Training", "Wellbeing"],
};
const events = {
  feature: {
    cat: "Conference",
    date: "2026-11-19",
    title: "Annual Quality & Compliance Summit 2026",
    text: "A full day of keynotes, case studies and panels on audits, standards updates and building resilient management systems. Networking lunch included.",
    info: ["9:00 – 17:00", "In person · Karachi / Riyadh", "Seats limited"],
    image: unsplashImage("1540575467063-178a50c2df87", true),
    link: "/contact-us",
  },
  items: [
    {
      id: "e-1",
      cat: "Workshop",
      date: "2026-11-05",
      title: "Internal audit skills workshop",
      text: "Hands-on practice in planning, interviewing and reporting, using real-world scenarios.",
      info: ["Half day", "In person"],
      image: unsplashImage("1531482615713-2afd69097998"),
      link: "/contact-us",
    },
    {
      id: "e-2",
      cat: "Webinar",
      date: "2026-12-02",
      title: "Preparing for your next certification audit",
      text: "A practical checklist for the final 90 days before your certification body arrives.",
      info: ["60 min", "Online"],
      image: unsplashImage("1516321318423-f06f85e504b3"),
      link: "/contact-us",
    },
    {
      id: "e-3",
      cat: "Training",
      date: "2026-12-10",
      title: "ISO 9001 lead auditor course (3 days)",
      text: "An accredited-style course covering audit principles, techniques and exam preparation.",
      info: ["3 days", "Hybrid"],
      image: unsplashImage("1524178232363-1fb2b075b655"),
      link: "/services#training",
    },
    {
      id: "e-4",
      cat: "Workshop",
      date: "2027-01-21",
      title: "Risk-based thinking in practice",
      text: "Build a simple, usable risk register your teams will actually keep up to date.",
      info: ["Half day", "In person"],
      image: unsplashImage("1522071820081-009f0129c71c"),
      link: "/contact-us",
    },
    {
      id: "e-5",
      cat: "Webinar",
      date: "2027-02-04",
      title: "Standards update: what changed and what to do",
      text: "A short briefing on recent amendments and the steps organisations should take now.",
      info: ["45 min", "Online"],
      image: unsplashImage("1573164713988-8665fc963095"),
      link: "/contact-us",
    },
    {
      id: "e-6",
      cat: "Training",
      date: "2027-02-18",
      title: "Environmental management fundamentals",
      text: "Learn the basics of environmental aspects, legal registers and objective setting.",
      info: ["2 days", "Online"],
      image: unsplashImage("1521737711867-e3b97375f902"),
      link: "/services/sustainability",
    },
    {
      id: "e-7",
      cat: "Webinar",
      date: "2026-10-08",
      title: "Getting started with sustainability reporting",
      text: "Where to begin with data, ownership and materiality for first-time reporters.",
      info: ["45 min", "Online"],
      image: unsplashImage("1497366754035-f200968a6e72"),
      link: "/services/sustainability",
    },
    {
      id: "e-8",
      cat: "Workshop",
      date: "2026-09-17",
      title: "Building a supportive workplace",
      text: "Practical tools for managers to support wellbeing without adding workload.",
      info: ["Half day", "In person"],
      image: unsplashImage("1522202176988-66273c2fd55f"),
      link: "/services#wellbeing",
    },
    {
      id: "e-9",
      cat: "Conference",
      date: "2026-06-12",
      title: "Quality leaders roundtable",
      text: "An evening discussion with quality heads on audit fatigue, culture and change.",
      info: ["Evening", "In person"],
      image: unsplashImage("1505373877841-8d25f7d46678"),
      link: "/contact-us",
    },
  ],
  cats: ["Workshop", "Webinar", "Training", "Conference"],
};
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const today = new Date("2026-10-26T00:00:00");
function parseDate(dateString) {
  return new Date(dateString + "T00:00:00");
}
function formatDate(dateString) {
  const date = parseDate(dateString);
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}
export default function ProjectsEvents() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("projects");
  const [projectFilter, setProjectFilter] = useState("all");
  const [projectSearch, setProjectSearch] = useState("");
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [eventFilter, setEventFilter] = useState("all");
  const [eventSearch, setEventSearch] = useState("");
  const [visibleEventCount, setVisibleEventCount] = useState(6);
  useEffect(() => {
    if (location.hash === "#events") {
      setActiveTab("events");
    } else {
      if (location.hash === "#projects") {
        setActiveTab("projects");
      }
    }
  }, [location.hash]);
  const switchTab = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };
  const filteredProjects = useMemo(
    () =>
      projects.items.filter((item) => {
        const matchesFilter = projectFilter === "all" || item.cat === projectFilter;
        const matchesSearch = `${item.title} ${item.cat} ${item.text} ${item.info.join(" ")}`
          .toLowerCase()
          .includes(projectSearch.trim().toLowerCase());
        return matchesFilter && matchesSearch;
      }),
    [projectFilter, projectSearch],
  );
  const filteredEvents = useMemo(
    () =>
      events.items.filter((item) => {
        const isPast = parseDate(item.date) < today;
        let matchesFilter = true;
        if (eventFilter === "s:upcoming") {
          matchesFilter = !isPast;
        } else {
          if (eventFilter === "s:past") {
            matchesFilter = isPast;
          } else {
            if (eventFilter.startsWith("c:")) {
              matchesFilter = item.cat === eventFilter.replace("c:", "");
            }
          }
        }
        const matchesSearch = `${item.title} ${item.cat} ${item.text} ${item.info.join(" ")}`
          .toLowerCase()
          .includes(eventSearch.trim().toLowerCase());
        return matchesFilter && matchesSearch;
      }),
    [eventFilter, eventSearch],
  );
  const visibleProjects = filteredProjects.slice(0, visibleProjectCount);
  const visibleEvents = filteredEvents.slice(0, visibleEventCount);
  return (
    <div className="pe-page">
      <section className="pe-hero">
        <div className="wrap">
          <span className="eyebrow">{"Projects & Events"}</span>
          <h1>
            {"Work in motion, "}
            <em>moments to meet.</em>
          </h1>
          <p className="lead">
            A look at the engagements we have delivered and the workshops, webinars and trainings
            coming up next.
          </p>
          <div className="pe-switch" role="tablist" aria-label="Switch section">
            <button
              type="button"
              role="tab"
              id="tab-projects"
              className={activeTab === "projects" ? "active" : ""}
              aria-selected={activeTab === "projects"}
              onClick={() => switchTab("projects")}
            >
              {"Projects "}
              <small>{projects.items.length + 1}</small>
            </button>
            <button
              type="button"
              role="tab"
              id="tab-events"
              className={activeTab === "events" ? "active" : ""}
              aria-selected={activeTab === "events"}
              onClick={() => switchTab("events")}
            >
              {"Events "}
              <small>{events.items.length + 1}</small>
            </button>
          </div>
        </div>
      </section>
      <div className="wrap pe-content-area">
        {activeTab === "projects" && (
          <section id="projects" role="tabpanel" aria-labelledby="tab-projects">
            <div className="pe-tools" role="group" aria-label="Categories and search">
              <div className="pe-filters" role="group" aria-label="Categories">
                <button
                  type="button"
                  className={projectFilter === "all" ? "active" : ""}
                  aria-pressed={projectFilter === "all"}
                  onClick={() => {
                    setProjectFilter("all");
                    setVisibleProjectCount(6);
                  }}
                >
                  All
                </button>
                {projects.cats.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={projectFilter === cat ? "active" : ""}
                    aria-pressed={projectFilter === cat}
                    onClick={() => {
                      setProjectFilter(cat);
                      setVisibleProjectCount(6);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="pe-search">
                <input
                  type="search"
                  value={projectSearch}
                  onChange={(event) => {
                    setProjectSearch(event.target.value);
                    setVisibleProjectCount(6);
                  }}
                  placeholder="Search projects…"
                  aria-label="Search projects"
                />
              </div>
            </div>
            {(projectFilter === "all" || projectFilter === projects.feature.cat) &&
              `${projects.feature.title} ${projects.feature.text}`
                .toLowerCase()
                .includes(projectSearch.trim().toLowerCase()) && (
                <article className="pe-feature">
                  <div className="p-img">
                    <img src={projects.feature.image} alt={projects.feature.title} />
                  </div>
                  <div className="p-body">
                    <div className="meta">
                      <span className="tag">
                        {"Featured · "}
                        {projects.feature.cat}
                      </span>
                      <time dateTime={projects.feature.date}>
                        {formatDate(projects.feature.date)}
                      </time>
                    </div>
                    <h2>{projects.feature.title}</h2>
                    <p>{projects.feature.text}</p>
                    <div className="info-tags">
                      {projects.feature.info.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <Link className="more" to={projects.feature.link}>
                      Read the case study
                    </Link>
                  </div>
                </article>
              )}
            <p className="pe-count" aria-live="polite">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project found" : "projects found"}
            </p>
            {filteredProjects.length > 0 ? (
              <div className="pe-grid">
                {visibleProjects.map((visibleProject) => (
                  <article key={visibleProject.id} className="pe-card">
                    <div className="p-img">
                      <img src={visibleProject.image} alt={visibleProject.title} loading="lazy" />
                    </div>
                    <div className="p-body">
                      <div className="meta">
                        <span className="tag">{visibleProject.cat}</span>
                        <time dateTime={visibleProject.date}>
                          {formatDate(visibleProject.date)}
                        </time>
                      </div>
                      <h3>{visibleProject.title}</h3>
                      <p>{visibleProject.text}</p>
                      <div className="info-tags">
                        {visibleProject.info.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <Link className="more" to={visibleProject.link}>
                        Read more
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="pe-empty">
                No projects match your search. Try a different keyword or category.
              </p>
            )}
            {visibleProjectCount < filteredProjects.length && (
              <div className="pe-loadmore">
                <button
                  className="btn"
                  type="button"
                  onClick={() => setVisibleProjectCount((prev) => prev + 6)}
                >
                  {"Load more projects "}
                  <i>↓</i>
                </button>
              </div>
            )}
          </section>
        )}
        {activeTab === "events" && (
          <section id="events" role="tabpanel" aria-labelledby="tab-events">
            <div className="pe-tools" role="group" aria-label="Categories and search">
              <div className="pe-filters" role="group" aria-label="Categories">
                <button
                  type="button"
                  className={eventFilter === "all" ? "active" : ""}
                  aria-pressed={eventFilter === "all"}
                  onClick={() => {
                    setEventFilter("all");
                    setVisibleEventCount(6);
                  }}
                >
                  All
                </button>
                <button
                  type="button"
                  className={eventFilter === "s:upcoming" ? "active" : ""}
                  aria-pressed={eventFilter === "s:upcoming"}
                  onClick={() => {
                    setEventFilter("s:upcoming");
                    setVisibleEventCount(6);
                  }}
                >
                  Upcoming
                </button>
                <button
                  type="button"
                  className={eventFilter === "s:past" ? "active" : ""}
                  aria-pressed={eventFilter === "s:past"}
                  onClick={() => {
                    setEventFilter("s:past");
                    setVisibleEventCount(6);
                  }}
                >
                  Past
                </button>
                {events.cats.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={eventFilter === `c:${cat}` ? "active" : ""}
                    aria-pressed={eventFilter === `c:${cat}`}
                    onClick={() => {
                      setEventFilter(`c:${cat}`);
                      setVisibleEventCount(6);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="pe-search">
                <input
                  type="search"
                  value={eventSearch}
                  onChange={(event) => {
                    setEventSearch(event.target.value);
                    setVisibleEventCount(6);
                  }}
                  placeholder="Search events…"
                  aria-label="Search events"
                />
              </div>
            </div>
            {eventFilter !== "s:past" &&
              `${events.feature.title} ${events.feature.text}`
                .toLowerCase()
                .includes(eventSearch.trim().toLowerCase()) && (
                <article className="pe-feature">
                  <div className="p-img">
                    <img src={events.feature.image} alt={events.feature.title} />
                    <div className="dchip" aria-hidden="true">
                      <b>{parseDate(events.feature.date).getDate()}</b>
                      <span>
                        {monthNames[parseDate(events.feature.date).getMonth()]}{" "}
                        {parseDate(events.feature.date).getFullYear()}
                      </span>
                    </div>
                  </div>
                  <div className="p-body">
                    <div className="meta">
                      <span className="tag">
                        {"Featured · "}
                        {events.feature.cat}
                      </span>
                      <time dateTime={events.feature.date}>{formatDate(events.feature.date)}</time>
                    </div>
                    <h2>{events.feature.title}</h2>
                    <p>{events.feature.text}</p>
                    <div className="info-tags">
                      {events.feature.info.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <Link className="more" to={events.feature.link}>
                      View event details
                    </Link>
                  </div>
                </article>
              )}
            <p className="pe-count" aria-live="polite">
              {filteredEvents.length} {filteredEvents.length === 1 ? "event found" : "events found"}
            </p>
            {filteredEvents.length > 0 ? (
              <div className="pe-grid">
                {visibleEvents.map((visibleEvent) => {
                  const eventDate = parseDate(visibleEvent.date);
                  const isPast = eventDate < today;
                  return (
                    <article key={visibleEvent.id} className="pe-card">
                      <div className="p-img">
                        <img src={visibleEvent.image} alt={visibleEvent.title} loading="lazy" />
                        <div className="dchip" aria-hidden="true">
                          <b>{eventDate.getDate()}</b>
                          <span>
                            {monthNames[eventDate.getMonth()]} {eventDate.getFullYear()}
                          </span>
                        </div>
                      </div>
                      <div className="p-body">
                        <div className="meta">
                          <span className="tag">{visibleEvent.cat}</span>
                          {isPast && <span className="tag past">Past</span>}
                        </div>
                        <h3>{visibleEvent.title}</h3>
                        <p>{visibleEvent.text}</p>
                        <div className="info-tags">
                          {visibleEvent.info.map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                        </div>
                        <Link className="more" to={visibleEvent.link}>
                          {isPast ? "View recap" : "Register interest"}
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <p className="pe-empty">
                No events match your search. Try a different keyword or category.
              </p>
            )}
            {visibleEventCount < filteredEvents.length && (
              <div className="pe-loadmore">
                <button
                  className="btn"
                  type="button"
                  onClick={() => setVisibleEventCount((prev) => prev + 6)}
                >
                  {"Load more events "}
                  <i>↓</i>
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
