import { useState } from "react";
import { Link } from "react-router-dom";
const focusAreas = [
  "Counselling",
  "Wellbeing assessments",
  "Multilingual employee support",
  "Workplace training",
  "Technology-enabled solutions",
];
const goals = [
  "Support employees' mental, emotional and physical wellbeing.",
  "Identify workplace stress and psychosocial risks.",
  "Improve access to professional support.",
  "Strengthen employee engagement and workplace relationships.",
  "Give HR and leadership better insight into workforce wellbeing.",
  "Build healthier and more supportive working environments.",
];
const wellbeingServices = [
  {
    id: "counselling",
    num: "01",
    title: "Counselling & ",
    em: "Employee Support",
    intro:
      "Accessible professional support for employees dealing with personal, emotional or workplace challenges.",
    details: [
      {
        title: "Video Counselling Sessions",
        desc: "Individual 50-minute video counselling sessions with trained and appropriately qualified therapists.",
      },
      {
        title: "Multilingual Counselling",
        desc: "Support available in Arabic, English, Urdu, Hindi, Tamil, Punjabi, French, Pashto, Malayalam, Sinhala and other languages, subject to service availability.",
      },
      {
        title: "Dedicated Access Platforms",
        desc: "Separate white-labelled portals for employees and contractors.",
      },
      {
        title: "Employee Support Hotlines",
        desc: "Multilingual toll-free support and WhatsApp chat assistance.",
      },
    ],
  },
  {
    id: "assessments",
    num: "02",
    title: "Wellbeing Assessments & ",
    em: "HR Insights",
    intro:
      "Understand workforce needs through structured assessments, employee feedback and organizational reporting.",
    details: [
      {
        title: "1. Resilience Checkpoint",
        desc: "Understand employee resilience and identify areas where additional support may be useful.",
      },
      {
        title: "2. Psychological Wellbeing Index",
        desc: "Assess psychological wellbeing across the workforce.",
      },
      {
        title: "3. Stress@Work Survey",
        desc: "Identify workplace stress factors and psychosocial risks.",
      },
      {
        title: "4. Financial Wellbeing Checkpoint",
        desc: "Explore employee financial wellbeing and related support needs.",
      },
    ],
    listTitle: "Organizational reporting includes:",
    list: [
      "Quarterly workforce wellbeing reports.",
      "Insights into absenteeism and stress trends.",
      "Identification of workforce concerns.",
      "Recommendations for workplace improvement.",
    ],
  },
  {
    id: "learning",
    num: "03",
    title: "Training, Workshops & ",
    em: "Learning",
    intro:
      "Develop awareness, practical skills and healthier workplace behaviours through tailored learning programmes.",
    details: [
      {
        title: "Workplace Training",
        items: [
          "Driver Safety and Anti-Bullying.",
          "Mental Health First Responder Training.",
          "HR Best Practices and Leadership Psychology.",
          "Nutrition Guidance for Office and Operational Workers.",
        ],
      },
      {
        title: "Wellbeing Workshops",
        items: [
          "Parenting and Relationship Health.",
          "Mindfulness and Stress Management.",
          "Guided Meditation.",
          "Sleep Hygiene and Daily Stress Relief.",
        ],
      },
      {
        title: "Digital Learning",
        desc: "LMS-ready e-learning modules for internal Learning and Development platforms. Topics include:",
        items: [
          "Emotional Resilience.",
          "Financial Wellness.",
          "Workplace Safety.",
          "Active Listening.",
        ],
      },
    ],
  },
  {
    id: "technology",
    num: "04",
    title: "Technology-Enabled ",
    em: "Wellbeing",
    intro:
      "Use digital tools and emerging technologies to support workplace health, safety and employee wellbeing.",
    details: [
      {
        title: "Light Metrics",
        desc: "AI-powered fleet and driver safety systems.",
      },
      {
        title: "BiomarkX",
        desc: "Multilingual physical health management technology.",
      },
      {
        title: "Sonde Health",
        desc: "Voice-based respiratory and mental fitness assessment technology.",
      },
    ],
  },
];
const programTabs = [
  {
    id: "t1",
    num: "01",
    label: "Assess",
    step: "First step",
    title: "Assess",
    desc: "Understand the wellbeing needs of your workforce through employee feedback, wellbeing audits, stress indicators, absenteeism trends and psychosocial risk assessments.",
  },
  {
    id: "t2",
    num: "02",
    label: "Develop",
    step: "Second step",
    title: "Develop",
    desc: "Create a tailored wellbeing strategy based on workforce demographics, organizational priorities, working conditions and identified risks.",
  },
  {
    id: "t3",
    num: "03",
    label: "Implement",
    step: "Third step",
    title: "Implement",
    desc: "Put the strategy into practice through appropriate initiatives, including counselling and employee support, multilingual hotlines, on-site and virtual training, workshops and mindfulness programmes, and e-learning and worker wellbeing initiatives.",
  },
  {
    id: "t4",
    num: "04",
    label: "Measure & Improve",
    step: "Fourth step",
    title: "Measure & Improve",
    desc: "Review programme participation, employee feedback, behavioural indicators and available organizational data. Use these findings to identify opportunities for improvement and refine future initiatives.",
  },
];
const outcomes = [
  "Lower turnover and absenteeism.",
  "Better alignment with ESG reporting.",
  "Improved team energy and innovation.",
  "Stronger workplace culture and inclusion.",
  "Higher employee satisfaction and engagement.",
];
const whyChooseUs = [
  {
    title: "One Connected Offering",
    desc: "Counselling, assessments, training, workshops and technology-enabled solutions brought together through a coordinated approach.",
  },
  {
    title: "Workforce-Wide Accessibility",
    desc: "Programmes designed to address the needs of both office-based and operational employees.",
  },
  {
    title: "Multilingual Delivery",
    desc: "Support designed for culturally and linguistically diverse workforces, with services available in multiple languages.",
  },
  {
    title: "Dedicated Access",
    desc: "Separate employee and contractor platforms to support different workforce requirements.",
  },
  {
    title: "Organizational Insight",
    desc: "Wellbeing assessments and reporting that help HR and leadership understand workforce needs and identify improvement priorities.",
  },
  {
    title: "Professional Expertise",
    desc: "Access to qualified practitioners, specialist trainers and wellbeing service providers.",
  },
];
export default function CorporateWellbeing() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="cwb-page">
      <section className="cwb-hero" id="top">
        <div className="cwb-hero-bg" aria-hidden="true" />
        <p className="cwb-crumb">
          <Link to="/">Home</Link>
          {" / "}
          <b>Corporate Wellbeing</b>
        </p>
        <h1>
          {"Where People Thrive, "}
          <em>Performance Follows.</em>
        </h1>
        <p className="cwb-lead">
          Workplace wellbeing requires more than individual initiatives. It takes accessible
          support, an understanding of workforce needs and programmes that work across different
          roles and working environments.
        </p>
        <div className="cwb-acts">
          <Link className="cwb-btn" to="/contact">
            {"Discuss Your Wellbeing Requirements "}
            <i>↗</i>
          </Link>
          <a className="cwb-btn o" href="#framework">
            {"See our framework "}
            <i>↓</i>
          </a>
        </div>
      </section>
      <section className="cwb-row" id="what">
        <h2>
          {"What is "}
          <em>corporate wellbeing?</em>
        </h2>
        <div>
          <p className="cwb-def">
            Meridian brings these elements together through counselling, wellbeing assessments,
            multilingual employee support, workplace training and technology-enabled solutions.
          </p>
          <ul className="cwb-four">
            {focusAreas.map((focusArea, index) => (
              <li key={index}>{focusArea}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="cwb-row cwb-why" id="why">
        <h2>
          {"A Better Workplace "}
          <em>Starts with People.</em>
        </h2>
        <div>
          <p
            className="cwb-def"
            style={{
              marginBottom: "36px",
            }}
          >
            Employee wellbeing influences workplace culture, engagement and organizational
            performance. A structured wellbeing approach helps organizations understand employee
            needs and respond to challenges before they affect the wider workforce. Our services
            help organizations to:
          </p>
          <ul className="cwb-pts">
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="cwb-row" id="services">
        <h2>
          {"Wellbeing Support for "}
          <em>Every Part of Your Workforce.</em>
        </h2>
        <div>
          <p className="cwb-def">
            Meridian brings together professional support, workforce assessment, learning programmes
            and technology to address different aspects of workplace wellbeing.
          </p>
        </div>
      </section>
      {wellbeingServices.map((service, index) => (
        <section
          key={service.id}
          className={`cwb-row ${index % 2 === 0 ? "cwb-why" : ""}`}
          id={service.id}
        >
          <h2>
            {`${service.num} · ${service.title}`}
            <em>{service.em}</em>
          </h2>
          <div>
            <p
              className="cwb-def"
              style={{
                marginBottom: "36px",
              }}
            >
              {service.intro}
            </p>
            <div className="cwb-cg">
              {service.details.map((detail) => (
                <div key={detail.title}>
                  <h3>{detail.title}</h3>
                  {detail.desc && <p>{detail.desc}</p>}
                  {detail.items &&
                    detail.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                </div>
              ))}
            </div>
            {service.list && (
              <>
                <p
                  className="cwb-def"
                  style={{
                    margin: "44px 0 20px",
                  }}
                >
                  {service.listTitle}
                </p>
                <ul className="cwb-pts">
                  {service.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      ))}
      <section className="cwb-row cwb-fw" id="framework">
        <h2>
          {"From Understanding Needs to "}
          <em>Measuring Progress.</em>
        </h2>
        <div>
          <p
            className="cwb-def"
            style={{
              marginBottom: "36px",
            }}
          >
            Every workforce has different wellbeing priorities. Our approach helps organizations
            identify those priorities, develop suitable programmes and review their effectiveness
            over time.
          </p>
          <div className="cwb-tabs" role="tablist" aria-label="Framework steps">
            {programTabs.map((programTab, index) => (
              <button
                key={programTab.id}
                role="tab"
                id={programTab.id}
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
              >
                {programTab.label}
              </button>
            ))}
          </div>
          <div className="cwb-pn" role="tabpanel" aria-labelledby={programTabs[activeTab].id}>
            <div className="n">{programTabs[activeTab].num}</div>
            <div>
              <small>{programTabs[activeTab].step}</small>
              <h3>{programTabs[activeTab].title}</h3>
              <p>{programTabs[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cwb-row cwb-ben" id="benefits">
        <h2>
          {"Key "}
          <em>benefits</em>
        </h2>
        <ul className="cwb-bl">
          {outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>
      <section className="cwb-row" id="choose">
        <h2>
          {"Designed Around Your People. "}
          <em>Adapted to Your Workplace.</em>
        </h2>
        <div>
          <p
            className="cwb-def"
            style={{
              marginBottom: "36px",
            }}
          >
            Meridian combines professional expertise, accessible support and practical workplace
            solutions to help organizations make wellbeing part of their working culture.
          </p>
          <div className="cwb-cg">
            {whyChooseUs.map((whyChooseU, index) => (
              <div key={index}>
                <h3>{whyChooseU.title}</h3>
                <p>{whyChooseU.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cwb-role" aria-label="Role of wellbeing consultants">
        <p>
          We bridge strategy and human capital — shaping resilient, healthy, and high-performing
          cultures.
        </p>
      </section>
      <section className="cwb-row cwb-cta" id="contact">
        <h2>
          {"Ready to Strengthen "}
          <em>Workplace Wellbeing?</em>
        </h2>
        <div>
          <p className="t">
            Whether you are introducing a new wellbeing programme or improving existing employee
            support, Meridian can help you explore the right approach for your workforce. Speak with
            our team about your organization's requirements.
          </p>
          <Link className="cwb-btn dk" to="/contact">
            {"Discuss Your Wellbeing Requirements "}
            <i>↗</i>
          </Link>
          <dl className="cwb-ct">
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
              <dd>
                Saudi Arabia
                <br />
                Bahrain
                <br />
                Canada
                <br />
                Pakistan
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
