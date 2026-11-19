import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=85",
    eyebrow: "Strategy · Compliance · Quality",
    headlinePrefix: "WE BELIEVE IN ",
    headlineAccent: "STRATEGY",
    headlineSuffix: " SINCE 2005",
    copy: "We help ambitious organizations strengthen operational systems, enforce safety and compliance, and turn standards into measurable business performance.",
    ctaPrimary: {
      text: "Find Your Solution",
      href: "#pathways",
    },
    ctaSecondary: {
      text: "Discover Meridian",
      href: "#about",
    },
    label: "Strategy & Infrastructure",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=2400&q=85",
    eyebrow: "Advisory & Systems Assurance",
    headlinePrefix: "BUILD BETTER. ",
    headlineAccent: "OPERATE",
    headlineSuffix: " STRONGER.",
    copy: "From ISO certification readiness (9001, 14001, 45001, 50001) to Lean Six Sigma and risk management across demanding industrial facilities.",
    ctaPrimary: {
      text: "Explore Advisory",
      href: "/services/advisory",
    },
    ctaSecondary: {
      text: "Our Capabilities",
      href: "#expertise",
    },
    label: "Systems Advisory",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=85",
    eyebrow: "Oil & Gas · Energy · Quality Audits",
    headlinePrefix: "RIGOROUS ASSURANCE. ",
    headlineAccent: "MEASURABLE",
    headlineSuffix: " RESULTS.",
    copy: "API Q1 / Q2 quality management, vendor technical inspections, and facility safety audits that protect your critical infrastructure assets.",
    ctaPrimary: {
      text: "Industrial Compliance",
      href: "/services/compliance",
    },
    ctaSecondary: {
      text: "Vendor Audits",
      href: "/services/advisory",
    },
    label: "Energy & Heavy Industry",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=85",
    eyebrow: "Accredited Professional Training",
    headlinePrefix: "EMPOWERING TEAMS. ",
    headlineAccent: "ELEVATING",
    headlineSuffix: " STANDARDS.",
    copy: "Accredited training programmes developing recognized capability in lead auditing, technical compliance, and engineering team performance.",
    ctaPrimary: {
      text: "Explore Training",
      href: "/services/training",
    },
    ctaSecondary: {
      text: "Talk to Our Team",
      href: "/contact-us",
    },
    label: "Capability Building",
  },
];
const tabContent = {
  training: {
    eyebrow: "Training",
    title: "Give Your People the Skills to Perform.",
    text: "Build the skills, knowledge and confidence your people need through relevant professional and workplace training.",
    cta: "Explore Training",
    href: "/services#training",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
  },
  iso: {
    eyebrow: "Advisory",
    title: "Build a Management System That Works.",
    text: "Understand your gaps, strengthen your management system and prepare for applicable certification requirements.",
    cta: "Explore Advisory",
    href: "/services#advisory",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
  },
  performance: {
    eyebrow: "Advisory",
    title: "Make Your Operations Work Better.",
    text: "Identify inefficiencies, strengthen processes and find opportunities to improve operational consistency and performance.",
    cta: "Explore Advisory",
    href: "/services#advisory",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",
  },
  compliance: {
    eyebrow: "Compliance",
    title: "Know Your Gaps. Strengthen Your Controls.",
    text: "Explore audits, inspections, risk assessments and support for applicable compliance requirements.",
    cta: "Explore Compliance",
    href: "/services#compliance",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=80",
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Turn Environmental Goals into Practical Progress.",
    text: "Explore ways to address environmental priorities, sustainability requirements and resource efficiency.",
    cta: "Explore Sustainability",
    href: "/services#sustainability",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  wellbeing: {
    eyebrow: "Corporate Wellbeing",
    title: "Create a Healthier, More Supportive Workplace.",
    text: "Explore workplace wellbeing initiatives and support designed around employee and organizational needs.",
    cta: "Explore Corporate Wellbeing",
    href: "/services#wellbeing",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  },
};
const testimonials = [
  {
    quote:
      "Meridian transformed how our operational systems align with ISO compliance. Their practical approach saved us months of rework and created lasting consistency across our regional teams.",
    name: "Operational Excellence Director",
    role: "Industrial Manufacturing Group",
  },
  {
    quote:
      "The professional training programmes provided our auditors and technical managers with genuine, actionable competence. Their instructors bring real-world industry experience to every session.",
    name: "Head of Quality & Compliance",
    role: "Energy & Infrastructure Corporation",
  },
  {
    quote:
      "From gap assessment to successful certification readiness, Meridian guided us with clarity and rigor. We now operate with stronger controls and measurable performance improvements.",
    name: "VP of Quality & Risk",
    role: "Petrochemicals & Supply Chain Sector",
  },
];
export default function Home() {
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });
  const [activeTab, setActiveTab] = useState("training");
  const [isSwitchingTab, setIsSwitchingTab] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  useEffect(() => {
    if (isSliderPaused) {
      return;
    }
    const intervalId = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(intervalId);
  }, [isSliderPaused]);
  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };
  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  const goToSlide = (targetIndex) => {
    setSlideIndex(targetIndex);
  };
  const handlePointerMove = (event) => {
    if (window.innerWidth < 700) {
      return;
    }
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 16;
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 16;
    setPointer({
      x: offsetX,
      y: offsetY,
    });
  };
  const switchTab = (tab) => {
    if (tab !== activeTab) {
      setIsSwitchingTab(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsSwitchingTab(false);
      }, 180);
    }
  };
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const activeTabContent = tabContent[activeTab];
  const currentSlide = heroSlides[slideIndex];
  return (
    <div className="home-page" onPointerMove={handlePointerMove}>
      <section
        className="hero hero-slider-wrap"
        onMouseEnter={() => setIsSliderPaused(true)}
        onMouseLeave={() => setIsSliderPaused(false)}
        onFocus={() => setIsSliderPaused(true)}
        onBlur={() => setIsSliderPaused(false)}
        aria-roledescription="carousel"
        aria-label="Meridian highlights"
      >
        <div className="hero-slides-viewport">
          {heroSlides.map((heroSlide, index) => (
            <div
              key={heroSlide.id}
              className={`hero-slide-item ${index === slideIndex ? "active" : ""}`}
              aria-hidden={index !== slideIndex}
            >
              <img className="hero-slide-img" src={heroSlide.image} alt={heroSlide.label} />
            </div>
          ))}
        </div>
        <div className="hero-teal-overlay" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-stamp" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="stamp-svg">
              <path
                id="stampCirclePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text className="stamp-text">
                <textPath href="#stampCirclePath">
                  COMPLIANCE • SUSTAINABILITY • STRATEGY • QUALITY •
                </textPath>
              </text>
            </svg>
            <div className="stamp-arrow">↗</div>
          </div>
          <div key={`eyebrow-${slideIndex}`} className="eyebrow">
            {currentSlide.eyebrow}
          </div>
          <h1 key={`title-${slideIndex}`} className="hero-headline">
            {currentSlide.headlinePrefix}
            <span className="hero-headline-accent">{currentSlide.headlineAccent}</span>
            {currentSlide.headlineSuffix}
          </h1>
          <p key={`copy-${slideIndex}`} className="hero-copy">
            {currentSlide.copy}
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={currentSlide.ctaPrimary.href}>
              {currentSlide.ctaPrimary.text} <span>↗</span>
            </a>
            <a className="btn btn-outline" href={currentSlide.ctaSecondary.href}>
              {currentSlide.ctaSecondary.text} <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-center-indicators" role="tablist" aria-label="Slide indicators">
          {heroSlides.map((heroSlide, index) => (
            <button
              key={heroSlide.id}
              type="button"
              role="tab"
              aria-selected={index === slideIndex}
              aria-label={`Go to slide ${index + 1}`}
              className={`hero-pill-dot ${index === slideIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className="hero-slider-nav">
          <button
            type="button"
            className="slider-arrow prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="slider-arrow next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
        <div className="hero-bottom">
          <div>
            <span className="scroll-mark">↘</span>Scroll to explore
          </div>
          <span>Consulting · Training · Assurance</span>
          <span>Built around your next step</span>
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            {"Systems that work "}
            <b>✳</b>
            {" People who lead "}
            <b>✳</b>
            {" Standards that matter "}
            <b>✳</b>
            {" Performance that lasts "}
            <b>✳</b>
          </span>
          <span>
            {"Systems that work "}
            <b>✳</b>
            {" People who lead "}
            <b>✳</b>
            {" Standards that matter "}
            <b>✳</b>
            {" Performance that lasts "}
            <b>✳</b>
          </span>
        </div>
      </div>
      <section className="logos" aria-label="Clients and partners">
        <div className="logo-block">
          <div className="logo-head">
            <div>
              <div className="kicker">Our clients</div>
              <h2>Trusted by Organizations That Value Quality</h2>
            </div>
            <p>
              We work with organizations across industries to strengthen management systems, develop
              capabilities and improve business performance.
            </p>
          </div>
          <div className="logo-row">
            <div className="logo-slot">Saudi Aramco Vendors</div>
            <div className="logo-slot">SABIC Supply Chain</div>
            <div className="logo-slot">Industrial Mfg.</div>
            <div className="logo-slot">{"Energy & Utilities"}</div>
            <div className="logo-slot">Healthcare Networks</div>
            <div className="logo-slot">{"Engineering & EPC"}</div>
          </div>
        </div>
        <div className="logo-block partners">
          <div className="logo-head">
            <div>
              <div className="kicker">{"Our partners & accreditations"}</div>
              <h2>Strong Partnerships. Shared Commitment.</h2>
            </div>
            <p>
              Our partnerships help us bring relevant expertise and practical solutions to the
              organizations we serve.
            </p>
          </div>
          <div className="logo-row">
            <div className="logo-slot">TVTC Approved Centre</div>
            <div className="logo-slot">Highfield Qualifications</div>
            <div className="logo-slot">ISO 9001:2015 Certified</div>
            <div className="logo-slot">CQI / IRCA Network</div>
            <div className="logo-slot">GRI Standards Aligned</div>
            <div className="logo-slot">{"Mostadam & LEED Ready"}</div>
          </div>
        </div>
      </section>
      <section className="section" id="about">
        <div className="story">
          <div className="story-image-wrap">
            <img
              className="story-image"
              src={
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1300&q=85"
              }
              alt="Technical team working together on a management system project"
            />
            <div className="image-caption">Practical expertise. Real-world context.</div>
          </div>
          <div className="story-copy">
            <div className="kicker">Meridian Quality Management Professionals</div>
            <h2 className="section-title">
              {"Standards Are the Starting Point. "}
              <em>Performance Is the Goal.</em>
            </h2>
            <p>
              Since 2005, Meridian has helped organizations strengthen management systems, develop
              capabilities and improve business performance.
            </p>
            <p>
              Through advisory, training, compliance, sustainability and corporate wellbeing, we
              help businesses address challenges and turn requirements into practical progress.
            </p>
            <div className="markers" role="list">
              <div role="listitem">
                <strong data-counter="2005" data-prefix="Since " className="stat-counter">
                  Since 2005
                </strong>
                <span>Established expertise</span>
              </div>
              <div role="listitem">
                <strong data-counter="530" data-suffix="+" className="stat-counter">
                  530+
                </strong>
                <span>Consultancies</span>
              </div>
              <div role="listitem">
                <strong
                  data-counter="2500"
                  data-suffix="+"
                  data-comma="true"
                  className="stat-counter"
                >
                  2,500+
                </strong>
                <span>Training programmes</span>
              </div>
            </div>
            <Link className="text-link" to="/about-us">
              {"Get to Know Meridian "}
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section expertise dark" id="expertise">
        <div className="section-heading">
          <div className="kicker">What we do</div>
          <h2 className="section-title">
            {"The Right Expertise for "}
            <em>Your Next Step.</em>
          </h2>
          <p className="section-intro">
            Every organization has different priorities. We bring together complementary areas of
            expertise to help businesses strengthen performance, manage requirements and move
            forward with greater confidence.
          </p>
        </div>
        <div className="exp-grid">
          <article className="exp-card wide">
            <img
              src={
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80"
              }
              alt="Advisory"
              loading="lazy"
            />
            <span className="exp-num">01</span>
            <div>
              <h3>Advisory</h3>
              <h4>Make Better Decisions. Build Better Systems.</h4>
              <p>
                We help organizations improve processes, strengthen management systems, manage risk
                and align business activities with their objectives.
              </p>
              <Link className="exp-link" to="/services/advisory">
                Explore Advisory
              </Link>
            </div>
          </article>
          <article className="exp-card wide">
            <img
              src={
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
              }
              alt="Training"
              loading="lazy"
            />
            <span className="exp-num">02</span>
            <div>
              <h3>Training</h3>
              <h4>Build Skills That Make a Difference.</h4>
              <p>
                Develop the knowledge and practical capabilities your people need to perform
                effectively, meet requirements and support business goals.
              </p>
              <Link className="exp-link" to="/services/training">
                Explore Training
              </Link>
            </div>
          </article>
          <article className="exp-card">
            <img
              src={
                "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=80"
              }
              alt="Compliance"
              loading="lazy"
            />
            <span className="exp-num">03</span>
            <div>
              <h3>Compliance</h3>
              <h4>Strengthen Compliance. Reduce Uncertainty.</h4>
              <p>
                We help organizations identify gaps, assess risks and strengthen readiness through
                audits, inspections and compliance support.
              </p>
              <Link className="exp-link" to="/services/compliance">
                Explore Compliance
              </Link>
            </div>
          </article>
          <article className="exp-card">
            <img
              src={
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
              }
              alt="Sustainability"
              loading="lazy"
            />
            <span className="exp-num">04</span>
            <div>
              <h3>Sustainability</h3>
              <h4>Turn Sustainability Goals into Action.</h4>
              <p>
                We support organizations in addressing environmental priorities, understanding
                relevant requirements and integrating responsible practices into operations.
              </p>
              <Link className="exp-link" to="/services/sustainability">
                Explore Sustainability
              </Link>
            </div>
          </article>
          <article className="exp-card">
            <img
              src={
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              }
              alt="Corporate Wellbeing"
              loading="lazy"
            />
            <span className="exp-num">05</span>
            <div>
              <h3>Corporate Wellbeing</h3>
              <h4>Support Your People. Strengthen Performance.</h4>
              <p>
                We help organizations create healthier, more supportive workplaces through employee
                wellbeing programmes and tailored support.
              </p>
              <Link className="exp-link" to="/services/corporate-wellbeing">
                Explore Corporate Wellbeing
              </Link>
            </div>
          </article>
        </div>
        <div className="exp-cta">
          <Link className="btn" to="/services">
            {"Explore All Services "}
            <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="section path-section light" id="pathways">
        <div className="section-heading">
          <div className="kicker">Start with your priority</div>
          <h2 className="section-title">
            {"What Would You Like "}
            <em>to Improve?</em>
          </h2>
          <p className="section-intro">
            Tell us what you are working toward. Explore the area most relevant to your needs and
            find a practical next step with Meridian.
          </p>
        </div>
        <div className="path-layout">
          <div
            className="path-tabs"
            role="tablist"
            aria-label="Choose your priority"
            aria-orientation="vertical"
          >
            <button
              className={`path-tab ${activeTab === "training" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "training"}
              onClick={() => switchTab("training")}
            >
              {"Develop my team "}
              <span aria-hidden="true">↗</span>
            </button>
            <button
              className={`path-tab ${activeTab === "iso" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "iso"}
              onClick={() => switchTab("iso")}
            >
              {"Prepare for ISO certification "}
              <span aria-hidden="true">↗</span>
            </button>
            <button
              className={`path-tab ${activeTab === "performance" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "performance"}
              onClick={() => switchTab("performance")}
            >
              {"Improve business performance "}
              <span aria-hidden="true">↗</span>
            </button>
            <button
              className={`path-tab ${activeTab === "compliance" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "compliance"}
              onClick={() => switchTab("compliance")}
            >
              {"Strengthen compliance "}
              <span aria-hidden="true">↗</span>
            </button>
            <button
              className={`path-tab ${activeTab === "sustainability" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "sustainability"}
              onClick={() => switchTab("sustainability")}
            >
              {"Advance sustainability "}
              <span aria-hidden="true">↗</span>
            </button>
            <button
              className={`path-tab ${activeTab === "wellbeing" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "wellbeing"}
              onClick={() => switchTab("wellbeing")}
            >
              {"Improve employee wellbeing "}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div
            className="path-stage"
            role="tabpanel"
            aria-live="polite"
            style={{
              opacity: isSwitchingTab ? 0.3 : 1,
              transform: isSwitchingTab ? "translateY(6px)" : "none",
            }}
          >
            <img src={activeTabContent.image} alt={activeTabContent.title} />
            <div className="path-content">
              <small>{activeTabContent.eyebrow}</small>
              <h3>{activeTabContent.title}</h3>
              <p>{activeTabContent.text}</p>
              <Link className="btn" to={activeTabContent.href}>
                {activeTabContent.cta} <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section why" id="why">
        <div className="why-header-grid">
          <div className="why-intro-content">
            <div className="kicker">The Meridian approach</div>
            <h2 className="section-title">
              {"More Than Meeting Requirements. "}
              <em>Building Better Performance.</em>
            </h2>
            <p>
              Effective improvement requires more than understanding a standard or identifying a
              gap. It requires the right expertise, a clear direction and solutions that work in the
              context of your organization.
            </p>
            <div className="why-cta">
              <Link className="btn" to="/about-us">
                {"Discover Meridian "}
                <span>↗</span>
              </Link>
            </div>
          </div>
          <div className="why-img-featured">
            <img
              src={
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85"
              }
              alt="Meridian specialists reviewing technical processes"
              loading="lazy"
            />
          </div>
        </div>
        <div className="why-cards-grid">
          <div className="why-card">
            <span className="why-card-num">01</span>
            <h3>A Needs-Based Approach</h3>
            <p>
              We consider your objectives, challenges and operating environment before identifying a
              suitable way forward.
            </p>
          </div>
          <div className="why-card">
            <span className="why-card-num">02</span>
            <h3>Practical Expertise</h3>
            <p>
              We connect technical knowledge with real organizational needs and implementation
              priorities.
            </p>
          </div>
          <div className="why-card">
            <span className="why-card-num">03</span>
            <h3>A Focus on Improvement</h3>
            <p>
              Our work supports stronger systems, more consistent processes and better-informed
              decisions.
            </p>
          </div>
          <div className="why-card">
            <span className="why-card-num">04</span>
            <h3>Connected Areas of Support</h3>
            <p>
              Our complementary services help organizations address related priorities through one
              connected portfolio.
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="team">
        <div className="section-heading">
          <div className="kicker">The people behind Meridian</div>
          <h2 className="section-title">
            {"Expertise Is Personal. "}
            <em>Meet the People Behind the Work.</em>
          </h2>
          <p className="section-intro">
            Behind every effective solution are people who bring knowledge, experience and a
            practical understanding of business challenges. Get to know the team working to help
            organizations strengthen their systems, develop their people and improve performance.
          </p>
        </div>
        <div className="team-grid">
          <article className="member">
            <div className="member-photo">Senior Advisory Partner</div>
            <div className="member-body">
              <h3>Principal Consultant</h3>
              <div className="member-role">{"Management Systems & QHSE"}</div>
              <p>
                20+ years leading ISO compliance, operational excellence and process transformation
                across GCC industries.
              </p>
            </div>
          </article>
          <article className="member">
            <div className="member-photo">Lead Training Specialist</div>
            <div className="member-body">
              <h3>{"Lead Auditor & Trainer"}</h3>
              <div className="member-role">{"TVTC & Highfield Certified"}</div>
              <p>
                Delivered over 500 accredited auditor training courses across quality, occupational
                safety and environmental standards.
              </p>
            </div>
          </article>
          <article className="member">
            <div className="member-photo">Sustainability Director</div>
            <div className="member-body">
              <h3>{"ESG & Carbon Lead"}</h3>
              <div className="member-role">Sustainability Solutions</div>
              <p>
                Specializes in greenhouse gas accounting, ISO 50001 energy audits and corporate ESG
                disclosures.
              </p>
            </div>
          </article>
          <article className="member">
            <div className="member-photo">{"Wellbeing & Capability Lead"}</div>
            <div className="member-body">
              <h3>Workplace Psychologist</h3>
              <div className="member-role">Corporate Wellbeing</div>
              <p>
                Designing structured workplace mental health, resilience programmes and executive
                coaching frameworks.
              </p>
            </div>
          </article>
        </div>
        <div className="team-cta">
          <Link className="btn btn-dark" to="/about-us">
            {"Meet Our Full Team "}
            <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="section testi" id="experiences">
        <div className="testi-wrap">
          <div>
            <div className="kicker">Built through trust</div>
            <h2 className="section-title">
              {"Trusted Relationships. "}
              <em>Meaningful Work.</em>
            </h2>
            <p
              className="section-intro"
              style={{
                marginTop: "22px",
              }}
            >
              The value of our work is reflected in the experiences of the organizations and
              professionals we support.
            </p>
          </div>
          <div>
            <div className="t-stage" aria-live="polite">
              <figure className="t-slide">
                <blockquote>{testimonials[testimonialIndex].quote}</blockquote>
                <figcaption>
                  <strong>{testimonials[testimonialIndex].name}</strong>
                  {testimonials[testimonialIndex].role}
                </figcaption>
              </figure>
            </div>
            <div className="t-controls">
              <button type="button" onClick={prevTestimonial} aria-label="Previous testimonial">
                ←
              </button>
              <button type="button" onClick={nextTestimonial} aria-label="Next testimonial">
                →
              </button>
              <div className="t-dots">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    type="button"
                    className={index === testimonialIndex ? "active-dot" : ""}
                    onClick={() => setTestimonialIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="news">
        <div className="section-heading news-heading-wrap">
          <div>
            <div className="kicker">{"News & articles"}</div>
            <h2 className="section-title">
              {"Insights to Help You "}
              <em>Move Forward.</em>
            </h2>
          </div>
        </div>
        <div className="news-grid">
          <article className="post">
            <div className="post-img">
              <img
                src={
                  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
                }
                alt="Management systems insights"
                loading="lazy"
              />
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="tag">Article</span>
                <time dateTime="2026-10-01">October 2026</time>
              </div>
              <h3>How Management Systems Drive Measurable Operational ROI Beyond Compliance</h3>
              <p>
                A deep dive into why high-performing organizations treat international standards as
                competitive differentiators rather than mere audit checklists.
              </p>
              <Link className="text-link" to="/news">
                {"Read article "}
                <span>↗</span>
              </Link>
            </div>
          </article>
          <article className="post">
            <div className="post-img">
              <img
                src={
                  "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80"
                }
                alt="Audit preparation"
                loading="lazy"
              />
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="tag">Compliance</span>
                <time dateTime="2026-09-15">September 2026</time>
              </div>
              <h3>{"Preparing for Highfield & TVTC Accredited Audits"}</h3>
              <p>
                Key recommendations for training coordinators and quality assurance leads in the
                Gulf region.
              </p>
              <Link className="text-link" to="/news">
                {"Read article "}
                <span>↗</span>
              </Link>
            </div>
          </article>
          <article className="post">
            <div className="post-img">
              <img
                src={
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
                }
                alt="Sustainability guidance"
                loading="lazy"
              />
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="tag">Sustainability</span>
                <time dateTime="2026-09-01">September 2026</time>
              </div>
              <h3>{"Navigating Saudi Vision 2030 ESG & Carbon Accounting"}</h3>
              <p>
                Practical frameworks for calculating organizational greenhouse gas footprints and
                building supply chain transparency.
              </p>
              <Link className="text-link" to="/news">
                {"Read article "}
                <span>↗</span>
              </Link>
            </div>
          </article>
        </div>
        <div className="news-footer-wrap">
          <p className="news-footer-text">
            Updates, practical guidance and perspectives on quality management, standards,
            compliance, sustainability and workplace wellbeing.
          </p>
          <div className="news-cta">
            <Link className="btn btn-dark" to="/news">
              {"View All News & Articles "}
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="cta" id="contact">
        <div className="cta-inner">
          <div>
            <div className="eyebrow">Let's move forward</div>
            <h2 className="cta-title">Let's Talk About What You Want to Improve.</h2>
          </div>
          <div className="cta-aside">
            <p>
              Whether you are strengthening your systems, developing your people, addressing
              compliance requirements or advancing sustainability, start with the challenge you need
              to solve. Let's explore how Meridian can support your next step.
            </p>
            <div className="actions">
              <Link className="btn" to="/contact-us">
                {"Discuss Your Requirements "}
                <span>↗</span>
              </Link>
              <Link className="btn btn-outline" to="/services">
                {"Explore Our Services "}
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
