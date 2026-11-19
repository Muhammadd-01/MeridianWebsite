// Content for every course detail page, taken from the approved website content
// document. Each object is rendered by <CoursePage />.
//
// Sections render in this order unless a course sets its own `sections` list:
// intro → inside → journey → extra → audience → related → enquiry.

import { examCoursePages } from "./examCourseData";

const photo = (id, width = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

const IMG = {
  refinery: "1516937941344-00b4e0337589",
  sparks: "1504917595217-d4dc5ebe6122",
  officeTech: "1563986768609-322da13575f3",
  circuit: "1518770660439-4636190af475",
  towers: "1486406146926-c627a92ad1ab",
  officeInterior: "1497366216548-37526070297c",
  labEngineers: "1581091226825-a6a2a5aee158",
  electronics: "1581092918056-0c4c3acd3789",
  documents: "1554224155-6726b3ff858f",
  dashboard: "1551288049-bebda4e38f71",
  wind: "1466611653911-95081537e5b7",
  powerLines: "1473341304170-971dccb5ac1e",
  engineersLab: "1581092160607-ee22621dd758",
  construction: "1504307651254-35680f356dfd",
  warehouse: "1586528116311-ad8dd3c8310d",
  factory: "1567789884554-0b844b597180",
  building: "1545324418-cc1a3fa10c00",
  teamMeeting: "1531482615713-2afd69097998",
  kitchen: "1556910103-1c02745aae4d",
  food: "1504674900247-0877df9cc836",
  care: "1584515933487-779824d29309",
  training: "1517048676732-d65bc937f952",
  dataCentre: "1558494949-ef010cbdcc31",
  serverRoom: "1573164713988-8665fc963095",
};

const MEQMP_50001_HERO = "https://meqmp.com/wp-content/uploads/2025/07/ISO-50001-1024x680.webp";
const MEQMP_50001_AUDIT = "https://meqmp.com/wp-content/uploads/2025/07/ISO-50001-1-768x452.webp";

const NEXT_STEP = "Take the next step";
const DETAILS_LINE = "Contact Meridian for course dates, fees, delivery options and registration details.";

/* ------------------------------------------------------------------ */
/* LEAD AUDITOR                                                        */
/* ------------------------------------------------------------------ */

const leadAuditor50001 = {
  slug: "iso-50001-lead-auditor",
  category: "Lead Auditor",
  shortName: "ISO 50001 Lead Auditor",
  fullName: "ISO 50001:2018 Lead Auditor Training",
  seoTitle: "ISO 50001:2018 Lead Auditor Training Course | Meridian",
  metaDescription:
    "Learn to plan, lead and report Energy Management System audits with ISO 50001:2018 Lead Auditor Training from Meridian. Enquire about course details.",
  hero: {
    eyebrow: "Energy Management Systems / Professional Training",
    titleLead: "ISO",
    titleAccent: "50001:2018",
    subtitle: ["Energy Management Systems", "Lead Auditor Training"],
    description: [
      "Take responsibility for leading the audit. Auditing an Energy Management System takes more than knowing the requirements of ISO 50001. You need to know how to examine the system, lead the audit team and determine whether the organisation is managing its energy performance effectively.",
      "Meridian's ISO 50001:2018 Lead Auditor Training develops your understanding of the standard and the skills needed to plan, lead and report audits of Energy Management Systems. Whether you work in energy management, engineering, sustainability or auditing, this training helps you build the knowledge to take on the responsibilities of a Lead Auditor.",
    ],
    reference: [
      { label: "Standard", value: "ISO 50001:2018" },
      { label: "Subject", value: "Energy Management" },
      { label: "Training", value: "Lead Auditor" },
    ],
    image: MEQMP_50001_HERO,
    imageAlt: "Industrial energy management infrastructure",
    showCrumb: false,
  },
  // Section order requested: 1, 2 and 4 from preview 2; 3 and 5 from preview 1.
  sections: ["focus", "diagram", "journey", "audienceBand", "enquiry"],
  // Section 1 — preview 2
  focus: {
    kicker: "The focus",
    heading: "Look beyond the energy figures.",
    text: "An energy management system involves more than policies, targets and documented procedures. The real test is how well an organisation manages its energy use, monitors performance and acts when results fall short.",
    noteLabel: "The focus of this training",
    note: "This training focuses on auditing the system behind the results.",
    pointsHeading: "What should an auditor examine?",
    pointsIntro:
      "An effective audit looks at how the organisation identifies, controls and improves its energy performance.",
    points: [
      { title: "Energy reviews", desc: "How the organisation understands its energy use." },
      { title: "Significant energy uses", desc: "Which operations and equipment have the greatest impact." },
      { title: "Energy baselines and EnPIs", desc: "How energy performance is measured and compared." },
      { title: "Objectives and action plans", desc: "Whether improvement targets are supported by practical action." },
      { title: "Operational controls", desc: "How energy performance is managed in day-to-day operations." },
      { title: "Monitoring and evaluation", desc: "Whether results are measured, reviewed and acted upon." },
      { title: "Corrective action", desc: "How the organisation addresses problems and improves its system." },
    ],
    image: MEQMP_50001_AUDIT,
    imageAlt: "Industrial energy management and operations",
    captionNumber: "01—07",
    captionText: "Key areas an auditor needs to examine",
  },
  // Section 2 — preview 2
  diagram: {
    kicker: "Inside the system",
    heading: "What does effective energy management look like in practice?",
    text: [
      "An organisation may have energy targets and performance indicators in place. But do its processes support those targets? Are significant energy uses properly controlled? Can the organisation demonstrate improvement?",
      "The diagram explores the key elements an auditor needs to examine and how they connect to one another.",
    ],
    label: "ISO 50001 · Energy management system",
    hint: "Select an element to explore",
    nodes: [
      {
        title: "Energy review",
        summary: "Understand energy use and consumption.",
        detail:
          "Examine how the organisation analyses energy use and consumption, identifies opportunities and establishes a clear understanding of its energy performance.",
      },
      {
        title: "Significant energy uses",
        summary: "Identify where energy matters most.",
        detail:
          "Look at the equipment, systems and processes that account for significant energy consumption and how the organisation manages them.",
      },
      {
        title: "Energy objectives",
        summary: "Turn priorities into planned action.",
        detail:
          "Consider whether energy objectives and action plans are relevant, measurable and supported by responsibilities and resources.",
      },
      {
        title: "Operational controls",
        summary: "Manage energy in daily operations.",
        detail:
          "Assess how the organisation controls operations and maintenance activities that affect energy performance.",
      },
      {
        title: "Performance evaluation",
        summary: "Measure and review actual results.",
        detail:
          "Review monitoring, measurement and analysis to determine whether energy performance is being evaluated effectively.",
      },
      {
        title: "Continual improvement",
        summary: "Act on findings and improve.",
        detail:
          "Examine how the organisation responds to findings, corrects problems and improves its Energy Management System over time.",
      },
    ],
    footText:
      "The auditor looks at how these elements work together, not simply whether the required documents exist.",
    footLabel: "Explore each element ↗",
  },
  // Section 3 — preview 1
  journey: {
    kicker: "The auditor's role",
    heading: "Learn to lead the audit, not just take part in it.",
    text: "A Lead Auditor has responsibility for more than collecting evidence. The role involves organising the audit, guiding the team, evaluating findings and reaching clear conclusions.",
    image: MEQMP_50001_AUDIT,
    imageAlt: "Industrial energy management systems",
    label: "The audit process",
    captionPrefix: "Audit leadership",
    stages: [
      {
        tab: "Plan",
        title: "Plan the audit",
        text: "Set the audit objectives, scope and criteria. Review relevant documents and prepare an audit plan that gives the team a clear direction.",
      },
      {
        tab: "Lead",
        title: "Lead the team",
        text: "Coordinate the audit team, allocate responsibilities and manage communication with the organisation being audited.",
      },
      {
        tab: "Examine",
        title: "Examine the system",
        text: "Conduct interviews, observe activities, review records and gather evidence to determine whether the Energy Management System meets ISO 50001 requirements.",
      },
      {
        tab: "Report",
        title: "Report the findings",
        text: "Evaluate the evidence, identify nonconformities, communicate audit conclusions and establish the need for follow-up.",
      },
    ],
  },
  // Section 4 — preview 2
  audienceBand: {
    kicker: "Who should attend",
    heading: "If energy performance is part of your job, auditing should be too.",
    text: "This training is relevant to professionals who manage energy use, maintain facilities, oversee management systems or carry out audits. It helps connect their technical knowledge with the responsibilities involved in leading an ISO 50001 audit.",
    items: [
      "Energy managers and engineers",
      "Internal and management system auditors",
      "Environmental and sustainability professionals",
      "HSE and QHSE professionals",
      "Facility, utilities and maintenance managers",
      "EnMS consultants and implementation teams",
    ],
    foot: "For professionals working with energy systems, performance and assurance",
  },
  // Section 5 — preview 1
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to take the next step in energy management auditing?",
    paragraphs: [
      "Build the knowledge to plan, lead and report Energy Management System audits against ISO 50001:2018.",
      "Contact Meridian for course dates, fees, delivery options and registration details.",
    ],
    detailLabels: ["Course information", "Delivery options", "Registration support"],
    watermark: "50001",
  },
};

const leadAuditor9001 = {
  slug: "iso-9001-lead-auditor",
  category: "Lead Auditor",
  shortName: "ISO 9001 Lead Auditor",
  fullName: "ISO 9001:2026 Lead Auditor Training",
  seoTitle: "ISO 9001:2026 Lead Auditor Training | Meridian",
  metaDescription:
    "Develop the knowledge to examine quality management processes, lead audit teams and report findings against ISO 9001:2026 with Meridian's Lead Auditor Training.",
  hero: {
    eyebrow: "Quality Management Systems / Professional Training",
    titleLead: "ISO",
    titleAccent: "9001:2026",
    subtitle: ["Quality Management Systems", "Lead Auditor Training"],
    description:
      "Develop the knowledge to examine how an organization manages quality, evaluates its processes, leads audit teams and reports findings against ISO 9001:2026 requirements.",
    reference: [
      { label: "Standard", value: "ISO 9001:2026" },
      { label: "Subject", value: "Quality Management" },
      { label: "Training", value: "Lead Auditor" },
    ],
    image: photo(IMG.labEngineers, 1800),
    imageAlt: "Engineers reviewing a production process",
  },
  intro: {
    kicker: "The system behind quality",
    aside: "An effective quality audit looks beyond individual errors.",
    heading: "Quality Is More Than Checking the Final Product.",
    paragraphs: [
      "An organization can inspect finished products and still miss the reasons behind recurring problems. Quality depends on how requirements are understood, work is planned, processes are controlled and results are reviewed.",
      "An effective quality audit examines whether the management system helps the organization deliver what customers and other relevant parties need, consistently.",
    ],
    statement: "This training focuses on examining the processes and controls that support quality performance.",
    points: [
      {
        title: "Customer Requirements and Leadership",
        desc: "Understanding how customer expectations, organizational direction and responsibilities shape the quality management system.",
      },
      {
        title: "Process Control and Performance",
        desc: "Examining how processes are planned, managed, measured and evaluated to achieve intended results.",
      },
      {
        title: "Corrective Action and Improvement",
        desc: "Evaluating how problems are addressed, their causes investigated and improvements carried through the organization.",
      },
    ],
  },
  inside: {
    kicker: "Inside the quality management system",
    heading: "Follow the Process.\nUnderstand the Result.",
    text: "ISO 9001:2026 uses a process-based approach to quality management. An auditor needs to understand how processes connect, how their performance is evaluated and whether they achieve the results the organization intends.",
    result:
      "Customer needs provide an important starting point. Leadership, resources and operational controls support delivery. Monitoring and evaluation show whether the system is working, while corrective action and improvement address what needs to change.",
    visual: {
      labelLeft: "Quality management system",
      labelRight: "ISO 9001:2026",
      core: ["QUALITY", "PERFORMANCE"],
      nodes: [
        ["ORGANIZATIONAL", "CONTEXT"],
        ["LEADERSHIP", "& PLANNING"],
        ["OPERATIONAL", "CONTROL"],
        ["PERFORMANCE", "EVALUATION"],
      ],
    },
    topics: [
      {
        title: "Organizational Context",
        desc: "How internal and external issues, interested parties and customer requirements influence the quality management system.",
      },
      {
        title: "Leadership and Planning",
        desc: "How management establishes quality objectives, responsibilities and plans to address risks and opportunities.",
      },
      {
        title: "Operational Control",
        desc: "How processes, resources, external providers and operational activities are managed to meet requirements.",
      },
      {
        title: "Performance Evaluation",
        desc: "How monitoring, measurement, analysis, internal audits and management reviews are used to evaluate results.",
      },
      {
        title: "Improvement",
        desc: "How nonconformities are addressed, corrective actions are evaluated and opportunities for improvement are identified.",
      },
    ],
  },
  journey: {
    kicker: "From audit planning to reporting",
    heading: "Lead the Audit. Follow the Evidence.",
    text: "A quality audit requires more than checking requirements against a list. The audit team needs a clear plan, an understanding of the organization's processes and evidence that supports its conclusions.",
    image: photo(IMG.electronics, 1200),
    imageAlt: "Close-up of a quality inspection on an electronic assembly",
    label: "The audit process",
    captionPrefix: "Audit leadership",
    stages: [
      {
        tab: "Direction",
        title: "Set the Audit Direction",
        text: "Establish audit objectives, scope and criteria. Review relevant information, understand the organization and prepare the audit plan.",
      },
      {
        tab: "Coordinate",
        title: "Coordinate the Audit Team",
        text: "Allocate responsibilities, brief team members and manage communication with the organization throughout the audit.",
      },
      {
        tab: "Evaluate",
        title: "Follow Processes and Evaluate Evidence",
        text: "Use interviews, observation and documented information to examine how processes operate, how results are measured and whether requirements are being met.",
      },
      {
        tab: "Report",
        title: "Report and Follow Up",
        text: "Evaluate audit evidence, document findings, present conclusions and verify the status of corrective actions where required.",
      },
    ],
  },
  audience: {
    kicker: "Professional development",
    heading: "For Professionals Responsible for Quality, Processes and Performance.",
    text: "This training is suited to people who manage quality systems, evaluate business processes or lead audit activities. It is relevant to both manufacturing and service organizations.",
    image: photo(IMG.engineersLab, 1200),
    imageAlt: "Engineers reviewing a process in a laboratory",
    tag: "For quality and audit professionals",
    items: [
      "Quality managers and quality professionals",
      "Internal auditors and management system auditors",
      "Process owners and operational managers",
      "Compliance and assurance professionals",
      "Consultants supporting quality management systems",
      "Professionals preparing to lead or coordinate quality audits",
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to Lead Quality Management System Audits?",
    paragraphs: [
      "Build the knowledge to examine processes, evaluate evidence and lead audit teams against ISO 9001:2026 requirements.",
      DETAILS_LINE,
    ],
    watermark: "9001",
  },
};

const leadAuditor14001 = {
  slug: "iso-14001-lead-auditor",
  category: "Lead Auditor",
  shortName: "ISO 14001 Lead Auditor",
  fullName: "ISO 14001:2026 Lead Auditor Training",
  seoTitle: "ISO 14001:2026 Lead Auditor Training | Meridian",
  metaDescription:
    "Develop the knowledge to examine environmental impacts, evaluate compliance and lead Environmental Management System audits against ISO 14001:2026.",
  hero: {
    eyebrow: "Environmental Management Systems / Professional Training",
    titleLead: "ISO",
    titleAccent: "14001:2026",
    subtitle: ["Environmental Management Systems", "Lead Auditor Training"],
    description:
      "Develop the knowledge to examine how an organization manages its environmental impacts, evaluates compliance, leads audit teams and reports findings against ISO 14001:2026 requirements.",
    reference: [
      { label: "Standard", value: "ISO 14001:2026" },
      { label: "Subject", value: "Environmental Management" },
      { label: "Training", value: "Lead Auditor" },
    ],
    image: photo(IMG.refinery, 1800),
    imageAlt: "Industrial facility with emissions stacks",
  },
  intro: {
    kicker: "The work behind environmental performance",
    aside:
      "An effective environmental audit examines how these arrangements work in practice, not simply whether an environmental policy exists.",
    heading: "Environmental Performance Is Shaped by Everyday Operations.",
    paragraphs: [
      "Materials are used, resources are consumed, waste is generated and emissions are released through everyday business activities.",
      "An environmental management system helps an organization understand these impacts, establish appropriate controls and evaluate whether its actions are making a difference.",
    ],
    points: [
      {
        title: "Environmental Aspects and Impacts",
        desc: "Understanding how organizational activities, products and services affect the environment.",
      },
      {
        title: "Compliance and Operational Control",
        desc: "Examining how environmental obligations are managed and significant impacts are controlled.",
      },
      {
        title: "Monitoring and Improvement",
        desc: "Evaluating environmental performance, identifying gaps and examining how improvements are implemented.",
      },
    ],
  },
  inside: {
    kicker: "Inside the environmental management system",
    heading: "Trace the Impact.\nExamine the Controls.",
    text: "An organization needs to understand how its activities affect the environment before it can manage those impacts effectively.",
    result:
      "An auditor follows this relationship from identifying environmental aspects to evaluating controls, compliance obligations and actual environmental performance.",
    visual: {
      labelLeft: "Environmental management system",
      labelRight: "ISO 14001:2026",
      core: ["ENVIRONMENTAL", "PERFORMANCE"],
      nodes: [
        ["ENVIRONMENTAL", "ASPECTS"],
        ["COMPLIANCE", "OBLIGATIONS"],
        ["OPERATIONAL", "CONTROL"],
        ["MONITORING", "& IMPROVEMENT"],
      ],
    },
    topics: [
      {
        title: "Environmental Context",
        desc: "How internal and external issues, interested parties and relevant environmental conditions are understood.",
      },
      {
        title: "Environmental Aspects and Impacts",
        desc: "How activities, products and services are assessed for their actual or potential environmental impacts.",
      },
      {
        title: "Compliance Obligations",
        desc: "How applicable legal and other requirements are identified, maintained and evaluated.",
      },
      {
        title: "Operational Control",
        desc: "How significant environmental aspects are managed through operational procedures and controls.",
      },
      {
        title: "Monitoring and Improvement",
        desc: "How environmental performance is measured, incidents are addressed and corrective actions are evaluated.",
      },
    ],
  },
  journey: {
    kicker: "From site inspection to audit reporting",
    heading: "Lead the Audit Where Environmental Impacts Occur.",
    text: "Environmental audits often involve several operational areas, records and people. The Lead Auditor needs to coordinate the team, understand the site's activities and follow evidence across the environmental management system.",
    image: photo(IMG.powerLines, 1200),
    imageAlt: "Power transmission lines at an industrial site",
    label: "The audit process",
    captionPrefix: "Audit leadership",
    stages: [
      {
        tab: "Prepare",
        title: "Prepare the Audit",
        text: "Define objectives, scope and criteria. Review environmental information, identify relevant operations and prepare the audit plan.",
      },
      {
        tab: "Organize",
        title: "Organize the Team",
        text: "Allocate audit responsibilities and coordinate the review of operational activities, compliance processes and environmental controls.",
      },
      {
        tab: "Examine",
        title: "Examine Controls and Performance",
        text: "Observe site activities, interview personnel and review records. Examine environmental aspects, compliance obligations, operational controls, monitoring and emergency preparedness.",
      },
      {
        tab: "Report",
        title: "Evaluate and Report",
        text: "Assess evidence against audit criteria, document findings, communicate conclusions and identify matters requiring corrective action or follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Professional development",
    heading: "For Professionals Working with Environmental Performance and Compliance.",
    text: "This training is relevant to people responsible for environmental management systems, operational controls, regulatory obligations or environmental auditing across industrial, commercial and service settings.",
    image: photo(IMG.wind, 1200),
    imageAlt: "Wind turbines at sunset",
    tag: "For environmental and audit professionals",
    items: [
      "Environmental managers and environmental officers",
      "Internal auditors and management system auditors",
      "HSE and QHSE professionals",
      "Compliance and regulatory affairs professionals",
      "Operations and facilities managers",
      "Consultants supporting environmental management systems",
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to Lead Environmental Management System Audits?",
    paragraphs: [
      "Develop the knowledge to examine environmental impacts, evaluate operational controls and lead audit teams against ISO 14001:2026 requirements.",
      DETAILS_LINE,
    ],
    watermark: "14001",
  },
};

const leadAuditor45001 = {
  slug: "iso-45001-lead-auditor",
  category: "Lead Auditor",
  shortName: "ISO 45001 Lead Auditor",
  fullName: "ISO 45001:2018 Lead Auditor Training",
  seoTitle: "ISO 45001:2018 Lead Auditor Training | Meridian",
  metaDescription:
    "Develop the knowledge to examine workplace hazards, evaluate health and safety controls and lead OH&S management system audits against ISO 45001.",
  hero: {
    eyebrow: "Occupational Health and Safety / Professional Training",
    titleLead: "ISO",
    titleAccent: "45001:2018",
    subtitle: ["Occupational Health and Safety", "Lead Auditor Training"],
    description:
      "Develop the knowledge to examine how an organization identifies workplace hazards, manages health and safety risks, leads audit teams and reports findings against ISO 45001 requirements.",
    reference: [
      { label: "Standard", value: "ISO 45001:2018" },
      { label: "Subject", value: "Occupational Health and Safety" },
      { label: "Training", value: "Lead Auditor" },
    ],
    image: photo(IMG.factory, 1800),
    imageAlt: "Automated production line in a manufacturing plant",
  },
  intro: {
    kicker: "The system behind a safer workplace",
    aside:
      "An effective audit examines whether these arrangements are understood, implemented and working in practice.",
    heading: "A Safe Workplace Depends on More Than Written Procedures.",
    paragraphs: [
      "Safety procedures matter, but they only work when hazards are recognized, risks are assessed and controls are followed where work actually happens.",
      "An occupational health and safety management system brings together leadership, worker participation, risk controls and performance evaluation to help prevent work-related injury and ill health.",
    ],
    points: [
      {
        title: "Hazard Identification and Risk Assessment",
        desc: "Examining how workplace hazards are recognized and OH&S risks are evaluated.",
      },
      {
        title: "Operational Controls and Worker Participation",
        desc: "Understanding how risks are controlled and how workers are involved in health and safety decisions.",
      },
      {
        title: "Incident Learning and Improvement",
        desc: "Evaluating how incidents are investigated, corrective actions are taken and prevention is strengthened.",
      },
    ],
  },
  inside: {
    kicker: "Inside the OH&S management system",
    heading: "Follow the Hazard.\nExamine the Control.",
    text: "An organization needs to understand where people may be exposed to harm, how serious the risks could be and whether the controls in place are suitable.",
    result: "An auditor follows this chain from the work activity to the evidence that controls are effective.",
    visual: {
      labelLeft: "OH&S management system",
      labelRight: "ISO 45001:2018",
      core: ["OH&S", "PERFORMANCE"],
      nodes: [
        ["LEADERSHIP", "& PARTICIPATION"],
        ["HAZARD", "IDENTIFICATION"],
        ["RISK", "CONTROLS"],
        ["INCIDENT", "INVESTIGATION"],
      ],
    },
    topics: [
      {
        title: "Leadership and Worker Participation",
        desc: "How management demonstrates commitment and how workers are consulted and involved.",
      },
      {
        title: "Hazard Identification",
        desc: "How routine and non-routine activities, people, equipment and changing conditions are considered.",
      },
      {
        title: "Risk Assessment and Controls",
        desc: "How OH&S risks are evaluated and controls are selected using the hierarchy of controls.",
      },
      {
        title: "Operational Planning",
        desc: "How work activities, contractors, procurement and outsourced processes are controlled.",
      },
      {
        title: "Emergency Preparedness and Incident Investigation",
        desc: "How emergency situations are anticipated and how incidents are investigated to prevent recurrence.",
      },
      {
        title: "Performance Evaluation",
        desc: "How inspections, monitoring, audits and management reviews assess OH&S performance.",
      },
    ],
  },
  journey: {
    kicker: "From workplace observation to audit conclusions",
    heading: "Lead the Audit Where the Work Takes Place.",
    text: "OH&S audits need to connect management-system arrangements with real working conditions. A Lead Auditor coordinates the team, considers the risks of the activities being audited and gathers evidence from people, processes and records.",
    image: photo(IMG.construction, 1200),
    imageAlt: "Workers on an active construction site",
    label: "The audit process",
    captionPrefix: "Audit leadership",
    stages: [
      {
        tab: "Plan",
        title: "Plan the Audit",
        text: "Establish objectives, scope and criteria. Review the organization's activities, locations, risk profile and relevant OH&S information.",
      },
      {
        tab: "Coordinate",
        title: "Coordinate the Team",
        text: "Allocate responsibilities and organize the audit so that relevant work areas, shifts, contractors and processes can be examined appropriately.",
      },
      {
        tab: "Examine",
        title: "Examine Workplace Controls",
        text: "Observe work activities, speak with workers and review risk assessments, procedures, training, inspections and incident records. Evaluate whether controls are implemented and effective.",
      },
      {
        tab: "Report",
        title: "Report and Follow Up",
        text: "Assess evidence, document findings, communicate conclusions and examine how corrective actions address the causes of identified problems.",
      },
    ],
  },
  audience: {
    kicker: "Professional development",
    heading: "For Professionals Responsible for Workplace Health and Safety.",
    text: "This training is relevant to professionals who manage OH&S arrangements, oversee workplace risks, support compliance or carry out management system audits.",
    image: photo(IMG.sparks, 1200),
    imageAlt: "Metalworking in an industrial workshop",
    tag: "For health and safety professionals",
    items: [
      "OH&S managers and safety professionals",
      "HSE and QHSE professionals",
      "Internal auditors and management system auditors",
      "Operations, production and site managers",
      "Contractor and facilities management professionals",
      "Consultants supporting OH&S management systems",
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to Lead Occupational Health and Safety Audits?",
    paragraphs: [
      "Develop the knowledge to examine workplace risks, evaluate controls and lead audit teams against ISO 45001 requirements.",
      DETAILS_LINE,
    ],
    watermark: "45001",
  },
};

const leadAuditor41001 = {
  slug: "iso-41001-lead-auditor",
  category: "Lead Auditor",
  shortName: "ISO 41001 Lead Auditor",
  fullName: "ISO 41001:2018 Lead Auditor Training",
  seoTitle: "ISO 41001:2018 Lead Auditor Training | Meridian",
  metaDescription:
    "Develop the knowledge to examine facility services, evaluate operational performance and lead Facility Management System audits against ISO 41001.",
  hero: {
    eyebrow: "Facility Management / Professional Training",
    titleLead: "ISO",
    titleAccent: "41001:2018",
    subtitle: ["Facility Management", "Lead Auditor Training"],
    description:
      "Develop the knowledge to examine how an organization plans and delivers facility management, evaluates service performance, leads audit teams and reports findings against ISO 41001 requirements.",
    reference: [
      { label: "Standard", value: "ISO 41001:2018" },
      { label: "Subject", value: "Facility Management" },
      { label: "Training", value: "Lead Auditor" },
    ],
    image: photo(IMG.towers, 1800),
    imageAlt: "Modern commercial buildings",
  },
  intro: {
    kicker: "The services that keep a facility working",
    aside:
      "An effective audit examines whether services are planned, delivered and evaluated in a way that supports those needs.",
    heading: "A Building Can Look Impressive and Still Be Poorly Managed.",
    paragraphs: [
      "Facilities are judged by how well they serve the people and organizations that depend on them. Maintenance, cleaning, security, utilities, space and supplier services all need to work together.",
      "Facility management connects these services with the needs of the organization and its users.",
    ],
    points: [
      {
        title: "Facility Planning and Strategy",
        desc: "Understanding how facility management objectives, user needs and organizational priorities are translated into plans.",
      },
      {
        title: "Service Delivery and Operational Control",
        desc: "Examining how facility services, assets, resources and external providers are managed.",
      },
      {
        title: "Performance and User Experience",
        desc: "Evaluating service quality, operational results, feedback and opportunities for improvement.",
      },
    ],
  },
  inside: {
    kicker: "Inside the facility management system",
    heading: "Connect the Building, the Services\nand the People Who Use Them.",
    text: "Facility management sits between an organization's needs and the services that support its workplace or built environment. An auditor needs to understand how those needs are translated into service requirements and how delivery is monitored.",
    result:
      "A maintenance schedule alone does not show whether a facility is meeting user needs. The audit should examine planning, responsibilities, supplier performance, asset information, feedback and improvement.",
    visual: {
      labelLeft: "Facility management system",
      labelRight: "ISO 41001:2018",
      core: ["FACILITY", "EXPERIENCE"],
      nodes: [
        ["SERVICE", "DELIVERY"],
        ["RESOURCES", "& COMPETENCE"],
        ["SUPPLIERS", "& CONTRACTS"],
        ["PERFORMANCE", "& IMPROVEMENT"],
      ],
    },
    topics: [
      {
        title: "Organizational Context",
        desc: "How facility management needs, interested parties and service expectations are understood.",
      },
      {
        title: "Leadership and Planning",
        desc: "How facility management policy, objectives, responsibilities and plans support organizational priorities.",
      },
      {
        title: "Service Delivery",
        desc: "How facility services are specified, coordinated and controlled.",
      },
      {
        title: "Resources and Competence",
        desc: "How people, infrastructure, knowledge and service providers are managed.",
      },
      {
        title: "Supplier and Contract Management",
        desc: "How outsourced services, contractors and service-level expectations are controlled.",
      },
      {
        title: "Performance and Improvement",
        desc: "How service quality, asset condition, availability and user experience are monitored and improved.",
      },
    ],
  },
  journey: {
    kicker: "From facility review to audit reporting",
    heading: "Audit the Services That Keep the Facility Working.",
    text: "Facility management audits cross teams, service providers and operational activities. A Lead Auditor needs to understand the organization's service model and follow how requirements are translated into day-to-day delivery.",
    image: photo(IMG.officeInterior, 1200),
    imageAlt: "Modern office interior",
    label: "The audit process",
    captionPrefix: "Audit leadership",
    stages: [
      {
        tab: "Context",
        title: "Understand the Facility Context",
        text: "Establish audit objectives, scope and criteria. Understand the facilities, users, services, operating arrangements and relevant outsourced activities.",
      },
      {
        tab: "Coordinate",
        title: "Plan and Coordinate the Audit",
        text: "Organize the audit team, allocate responsibilities and plan access to relevant departments, service providers, sites and records.",
      },
      {
        tab: "Examine",
        title: "Examine Service Delivery",
        text: "Review service specifications, contracts, work orders, maintenance records, inspections, performance measures and user feedback. Observe how services are delivered in practice.",
      },
      {
        tab: "Report",
        title: "Evaluate and Report",
        text: "Compare evidence with audit criteria, document findings, communicate conclusions and identify opportunities or actions for improving service performance.",
      },
    ],
  },
  audience: {
    kicker: "Professional development",
    heading: "For Professionals Responsible for Facilities, Assets and Service Delivery.",
    text: "This training is relevant to people who manage facilities, coordinate service providers, oversee workplace operations or audit management systems in organizations that depend on reliable facility services.",
    image: photo(IMG.building, 1200),
    imageAlt: "Contemporary building facade",
    tag: "For facility and audit professionals",
    items: [
      "Facility and facilities management professionals",
      "FM service providers and contract managers",
      "Property, estate and workplace managers",
      "Maintenance and operations managers",
      "Internal auditors and management system auditors",
      "Consultants supporting facility management systems",
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to Lead Facility Management System Audits?",
    paragraphs: [
      "Develop the knowledge to examine facility services, evaluate operational performance and lead audit teams against ISO 41001 requirements.",
      DETAILS_LINE,
    ],
    watermark: "41001",
  },
};

const leadAuditor27001 = {
  slug: "iso-27001-lead-auditor",
  category: "Lead Auditor",
  shortName: "ISO/IEC 27001 Lead Auditor",
  fullName: "ISO/IEC 27001:2022 Lead Auditor Training",
  seoTitle: "ISO/IEC 27001:2022 Lead Auditor Training | Meridian",
  metaDescription:
    "Develop the knowledge to examine information security risks, evaluate controls and lead Information Security Management System audits against ISO/IEC 27001.",
  hero: {
    eyebrow: "Information Security Management Systems / Professional Training",
    titleLead: "ISO/IEC",
    titleAccent: "27001:2022",
    subtitle: ["Information Security Management Systems", "Lead Auditor Training"],
    description:
      "Develop the knowledge to examine how an organization protects information, assesses security risks, evaluates controls, leads audit teams and reports findings against ISO/IEC 27001 requirements.",
    reference: [
      { label: "Standard", value: "ISO/IEC 27001:2022" },
      { label: "Subject", value: "Information Security" },
      { label: "Training", value: "Lead Auditor" },
    ],
    image: photo(IMG.dataCentre, 1800),
    imageAlt: "Network cabling in a data centre",
  },
  intro: {
    kicker: "The system behind information security",
    aside: "A security policy alone cannot show whether information is properly protected.",
    heading: "Information Security Is Tested Where Information Is Handled.",
    paragraphs: [
      "Information can be exposed through systems, people, suppliers, devices and everyday business processes.",
      "An information security management system helps an organization identify security risks, select appropriate controls and evaluate whether its arrangements remain effective.",
      "An effective audit examines how these measures work across the organization.",
    ],
    points: [
      {
        title: "Information Security Risks",
        desc: "Understanding how information assets, threats, vulnerabilities and business requirements influence security decisions.",
      },
      {
        title: "Security Controls and Implementation",
        desc: "Examining how selected controls protect information and address identified risks.",
      },
      {
        title: "Monitoring and Incident Response",
        desc: "Evaluating how security performance is monitored, incidents are handled and improvements are implemented.",
      },
    ],
  },
  inside: {
    kicker: "Inside the information security management system",
    heading: "Follow the Information.\nExamine How It Is Protected.",
    text: "An information security management system connects business information and risks with the controls used to protect confidentiality, integrity and availability. An auditor needs to understand why controls were selected and whether they are working as intended.",
    result:
      "The audit should not become a checklist of technical safeguards. It should examine the organization's risk assessment, treatment decisions, Statement of Applicability, control implementation and evidence of performance.",
    visual: {
      labelLeft: "Confidentiality · Integrity · Availability",
      labelRight: "ISO/IEC 27001:2022",
      core: ["PROTECTED", "INFORMATION"],
      nodes: [
        ["RISK", "ASSESSMENT"],
        ["STATEMENT OF", "APPLICABILITY"],
        ["ACCESS", "MANAGEMENT"],
        ["INCIDENT", "MANAGEMENT"],
      ],
    },
    topics: [
      {
        title: "Information Security Context",
        desc: "How internal and external issues, interested parties and information security requirements are understood.",
      },
      {
        title: "Risk Assessment and Treatment",
        desc: "How information security risks are identified, analysed, evaluated and treated.",
      },
      {
        title: "Statement of Applicability",
        desc: "How selected controls, exclusions and their justifications are documented and maintained.",
      },
      {
        title: "Access and Identity Management",
        desc: "How access to information and systems is authorized, reviewed and controlled.",
      },
      {
        title: "People and Supplier Security",
        desc: "How responsibilities, awareness and external-provider risks are addressed.",
      },
      {
        title: "Incident Management and Improvement",
        desc: "How security events are reported, assessed and addressed, and how the system is monitored and improved.",
      },
    ],
  },
  journey: {
    kicker: "From risk assessment to audit conclusions",
    heading: "Lead the Audit Without Losing Sight of the Business Risk.",
    text: "Information security audits involve business processes, people, technology and external providers. The Lead Auditor needs to coordinate the audit team and understand how security arrangements support the organization's actual information risks.",
    image: photo(IMG.serverRoom, 1200),
    imageAlt: "Professional walking through a secure server room",
    label: "The audit process",
    captionPrefix: "Audit leadership",
    stages: [
      {
        tab: "Scope",
        title: "Define the Audit Scope",
        text: "Establish objectives, scope and criteria. Understand the organization's information assets, locations, systems, services and relevant dependencies.",
      },
      {
        tab: "Coordinate",
        title: "Coordinate the Audit Team",
        text: "Allocate responsibilities and plan discussions with business owners, IT, security, HR, procurement and relevant service providers.",
      },
      {
        tab: "Examine",
        title: "Examine Risk and Control Evidence",
        text: "Review risk assessments, treatment plans, the Statement of Applicability and relevant records. Use interviews, observation and documented information to evaluate whether selected controls are implemented and effective.",
      },
      {
        tab: "Report",
        title: "Report the Findings",
        text: "Evaluate evidence against audit criteria, document findings, communicate conclusions and identify required corrective action or follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Professional development",
    heading: "For Professionals Responsible for Information Security and Assurance.",
    text: "This training is relevant to professionals who manage information security, assess technology and business risks, oversee controls or conduct management system audits.",
    image: photo(IMG.officeTech, 1200),
    imageAlt: "Professional working on a laptop and phone",
    tag: "For information security professionals",
    items: [
      "Information security managers and professionals",
      "IT and cybersecurity managers",
      "Internal auditors and management system auditors",
      "Risk, compliance and governance professionals",
      "Data protection and business continuity professionals",
      "Consultants supporting information security management systems",
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to Lead Information Security Management System Audits?",
    paragraphs: [
      "Develop the knowledge to examine information security risks, evaluate controls and lead audit teams against ISO/IEC 27001 requirements.",
      DETAILS_LINE,
    ],
    watermark: "27001",
  },
};

const leadAuditor31000 = {
  slug: "iso-31000-lead-auditor",
  category: "Lead Auditor",
  shortName: "ISO 31000 Lead Auditor",
  fullName: "ISO 31000:2018 Lead Auditor Training",
  seoTitle: "ISO 31000:2018 Lead Auditor Training | Meridian",
  metaDescription:
    "Develop the knowledge to examine how organisations identify, assess and manage risks, lead the audit process and report findings against ISO 31000 guidelines.",
  hero: {
    eyebrow: "Risk Management / Professional Training",
    titleLead: "ISO",
    titleAccent: "31000:2018",
    subtitle: ["Risk Management", "Lead Auditor Training"],
    description:
      "Develop the knowledge to examine how organisations identify, assess and manage risks, lead the audit process and report findings against ISO 31000 guidelines.",
    reference: [
      { label: "Standard", value: "ISO 31000:2018" },
      { label: "Subject", value: "Risk Management" },
      { label: "Training", value: "Lead Auditor" },
    ],
    image: photo(IMG.dashboard, 1800),
    imageAlt: "Analytics dashboard showing performance data",
  },
  intro: {
    kicker: "The thinking behind better risk decisions",
    aside:
      "The real test is whether risk management informs decisions across the organisation, rather than sitting in a document that is reviewed once in a while.",
    heading: "A Risk Register Does Not Tell the Whole Story.",
    paragraphs: [
      "Recording risks is only one part of risk management. An organisation also needs to understand what could affect its objectives, evaluate the significance of those risks and decide how to respond.",
    ],
    statement:
      "This training focuses on examining how risk management is understood, applied and integrated into organisational activities.",
    points: [
      {
        title: "Risk Identification and Analysis",
        desc: "Understanding how risks are identified, their causes and consequences examined, and their likelihood and impact evaluated.",
      },
      {
        title: "Risk Evaluation and Treatment",
        desc: "Examining how organisations assess the significance of risks, select appropriate responses and determine whether those responses are suitable.",
      },
      {
        title: "Monitoring and Communication",
        desc: "Evaluating how risk information is communicated, reviewed and used to support decisions and improve risk management.",
      },
    ],
  },
  inside: {
    kicker: "Principles, framework and process",
    heading: "How Does an Organisation\nActually Manage Risk?",
    text: "ISO 31000:2018 brings together three connected elements: principles, a framework and a risk management process. The principles guide how risk management should work. The framework connects it with leadership, governance and organisational activities. The process provides a structured way to identify, analyse, evaluate and treat risks.",
    result: "An auditor needs to examine how these elements work together in practice.",
    visual: {
      labelLeft: "Risk management",
      labelRight: "ISO 31000:2018",
      core: ["RISK", "DECISIONS"],
      nodes: [["PRINCIPLES"], ["FRAMEWORK"], ["RISK", "ASSESSMENT"], ["RISK", "TREATMENT"]],
    },
    topics: [
      {
        title: "Principles of Risk Management",
        desc: "How risk management is integrated, structured, adapted to the organisation and informed by the best available information.",
      },
      {
        title: "Leadership and Framework",
        desc: "How leadership, governance, responsibilities and organisational arrangements support risk management.",
      },
      {
        title: "Scope, Context and Criteria",
        desc: "How the organisation defines the purpose of its risk assessment, understands its context and establishes criteria for evaluating risks.",
      },
      {
        title: "Risk Assessment",
        desc: "How risks are identified, analysed and evaluated in relation to organisational objectives.",
      },
      {
        title: "Risk Treatment",
        desc: "How response options are selected, planned, implemented and reviewed.",
      },
      {
        title: "Monitoring and Communication",
        desc: "How risk information is shared, monitored, recorded and used to support decisions.",
      },
    ],
  },
  journey: {
    kicker: "From risk review to audit conclusions",
    heading: "Examine How Risk Influences Decisions.",
    text: "Reviewing risk management requires more than checking whether a risk register exists. An auditor needs to understand how risks are identified, how decisions are made and whether the organisation's approach is appropriate to its objectives and circumstances.",
    image: photo(IMG.documents, 1200),
    imageAlt: "Reviewing documents and figures at a desk",
    label: "The audit process",
    captionPrefix: "Audit leadership",
    stages: [
      {
        tab: "Plan",
        title: "Plan the Audit",
        text: "Establish audit objectives, scope and criteria. Understand the organisation, its activities and the risk management arrangements being examined.",
      },
      {
        tab: "Coordinate",
        title: "Coordinate the Audit Team",
        text: "Allocate responsibilities, plan audit activities and manage communication with relevant personnel.",
      },
      {
        tab: "Examine",
        title: "Examine Risk Management Practices",
        text: "Review the framework and process. Gather evidence through interviews, records and discussions to understand how risks are identified, analysed, evaluated and treated.",
      },
      {
        tab: "Report",
        title: "Evaluate and Report",
        text: "Assess evidence against the audit criteria, document findings, communicate conclusions and identify matters requiring follow-up or improvement.",
      },
    ],
  },
  audience: {
    kicker: "Professional development",
    heading: "For Professionals Involved in Managing Risk and Making Decisions.",
    text: "This training is relevant to professionals who oversee risk, support organisational governance, manage business processes or conduct management system audits.",
    image: photo(IMG.teamMeeting, 1200),
    imageAlt: "Team discussing priorities in a meeting",
    tag: "For risk and audit professionals",
    items: [
      "Risk managers and risk management professionals",
      "Internal auditors and management system auditors",
      "Quality, HSE and QHSE professionals",
      "Compliance and governance professionals",
      "Business continuity and operational risk professionals",
      "Consultants involved in risk management implementation",
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to Examine Risk Management in Practice?",
    paragraphs: [
      "Develop the knowledge to review risk management practices, lead audit activities and report findings with clarity.",
      DETAILS_LINE,
    ],
    watermark: "31000",
  },
};

/* ------------------------------------------------------------------ */
/* INTERNAL AUDITOR                                                    */
/* ------------------------------------------------------------------ */

const internalEnquiryTypes = [
  "Course dates and fees",
  "Training for my organization",
  "Course content",
  "Other enquiry",
];

const internalAuditor22000 = {
  slug: "iso-22000-internal-auditor",
  category: "Internal Auditor",
  shortName: "ISO 22000 Internal Auditor",
  fullName: "ISO 22000:2018 Internal Auditor Course",
  seoTitle: "ISO 22000:2018 Internal Auditor Course | Meridian",
  metaDescription:
    "Develop the knowledge and auditing skills to assess a Food Safety Management System with the ISO 22000:2018 Internal Auditor Course from Meridian.",
  hero: {
    eyebrow: "Internal Auditor Training / Food Safety",
    titleLead: "ISO",
    titleAccent: "22000:2018",
    subtitle: ["Food Safety Management Systems", "Internal Auditor Course"],
    description:
      "The ISO 22000:2018 Internal Auditor Course develops the knowledge and auditing skills to assess a Food Safety Management System, evaluate its implementation and report findings that deserve attention.",
    cta: "Enquire about this course",
    secondaryCta: "Explore the curriculum",
    reference: [
      { label: "Standard", value: "ISO 22000:2018" },
      { label: "Subject", value: "Food Safety" },
      { label: "Training", value: "Internal Auditor" },
    ],
    image: photo(IMG.kitchen, 1800),
    imageAlt: "Food being prepared in a professional kitchen",
  },
  intro: {
    kicker: "The purpose of an audit",
    aside: "Can you identify when those controls are not working?",
    heading: "A Food Safety System Is Only as Strong as Its Controls.",
    paragraphs: [
      "An effective internal auditor needs to do more than check documents. They need to understand the food safety process, examine how controls are applied and recognize where things are going wrong.",
      "Food safety procedures may be documented. HACCP plans may be in place. Records may be complete. But are employees following the procedures? Are hazards being controlled? Are the established processes delivering the intended results?",
      "An internal audit examines these questions. It helps an organization see where its Food Safety Management System is working and where corrective action may be needed.",
    ],
    statement: "The real test is what happens on the production floor.",
  },
  inside: {
    kicker: "Learning outcomes",
    heading: "What You Will\nLearn to Do",
    text: "This course introduces the requirements of ISO 22000:2018 alongside the practical methods used to examine an FSMS.",
    visual: {
      labelLeft: "Food safety management system",
      labelRight: "ISO 22000:2018",
      core: ["FOOD SAFETY", "CONTROLS"],
      nodes: [
        ["HAZARD", "ANALYSIS"],
        ["HACCP", "CONTROLS"],
        ["PREREQUISITE", "PROGRAMMES"],
        ["AUDIT", "EVIDENCE"],
      ],
    },
    topics: [
      {
        title: "Understand the requirements",
        desc: "Interpret ISO 22000:2018 and understand how its requirements apply to food safety operations.",
      },
      {
        title: "Examine food safety controls",
        desc: "Review hazard analysis, HACCP-based controls, prerequisite programmes and operational procedures.",
      },
      {
        title: "Plan and conduct audits",
        desc: "Prepare audit plans, develop checklists, interview personnel and examine documented information.",
      },
      {
        title: "Evaluate audit evidence",
        desc: "Identify gaps, assess findings against audit criteria and recognize nonconformities.",
      },
      {
        title: "Report audit results",
        desc: "Document findings clearly and understand the follow-up required to address nonconformities.",
      },
    ],
  },
  journey: {
    kicker: "Inside the course",
    heading: "From understanding the standard to conducting an internal audit.",
    image: photo(IMG.food, 1200),
    imageAlt: "Prepared food dishes ready for service",
    label: "Course curriculum",
    captionPrefix: "Module",
    stages: [
      {
        tab: "FSMS",
        title: "Food Safety Management Systems",
        text: "Understand the purpose of an FSMS, its application across the food chain and the role of ISO 22000:2018.",
      },
      {
        tab: "Requirements",
        title: "ISO 22000:2018 Requirements",
        text: "Explore the structure of the standard and its requirements for establishing, implementing and maintaining a Food Safety Management System.",
      },
      {
        tab: "HACCP",
        title: "HACCP and Food Safety Hazards",
        text: "Examine biological, chemical and physical hazards, hazard analysis and the principles used to determine appropriate control measures.",
      },
      {
        tab: "PRPs",
        title: "Prerequisite Programmes and Operational Controls",
        text: "Understand the role of prerequisite programmes, operational prerequisite programmes and critical control points in food safety management.",
      },
      {
        tab: "Planning",
        title: "Internal Audit Planning and Preparation",
        text: "Learn to establish audit scope and criteria, review relevant documentation and prepare audit plans and checklists.",
      },
      {
        tab: "Conducting",
        title: "Conducting an Internal Audit",
        text: "Explore interviewing, observation, document review, sampling and the collection of objective evidence.",
      },
      {
        tab: "Reporting",
        title: "Audit Findings and Reporting",
        text: "Learn to identify and document nonconformities, prepare audit reports and follow up on corrective actions.",
      },
    ],
  },
  extra: {
    kicker: "Auditing skills",
    heading: "What Makes a Good Internal Auditor?",
    text: "Knowing the standard is important. Knowing how to apply it during an audit is what makes the difference. An effective internal auditor must be able to:",
    items: [
      "Ask relevant questions and follow up on the answers.",
      "Examine actual practices rather than rely only on documented procedures.",
      "Recognize when food safety controls are not being followed.",
      "Support findings with objective evidence.",
      "Communicate nonconformities clearly and professionally.",
    ],
    note: "These are the skills this course is designed to develop.",
  },
  audience: {
    kicker: "Who should attend",
    heading: "Who Should Attend?",
    text: "This course is relevant to professionals responsible for food safety, quality assurance and the implementation or maintenance of food safety management systems.",
    image: photo(IMG.kitchen, 1200),
    imageAlt: "Food preparation in a professional kitchen",
    tag: "For food safety professionals",
    items: [
      "Food Safety Officers and Coordinators",
      "Quality Assurance and Quality Control Professionals",
      "Internal Auditors",
      "Food Production and Processing Supervisors",
      "FSMS Implementation and Management Personnel",
    ],
    note: "It is also suitable for professionals looking to develop their knowledge of food safety management system auditing.",
  },
  related: {
    kicker: "Related training",
    heading: "Continue Your Food Safety Training",
    text: "Build on your knowledge with related professional training.",
    items: [
      {
        title: "ISO 22000:2018 Lead Auditor Course",
        desc: "Take the next step towards leading and managing Food Safety Management System audits.",
      },
      {
        title: "HACCP Training",
        desc: "Develop a deeper understanding of food safety hazards, hazard analysis and critical control points.",
      },
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to Develop Your Auditing Skills?",
    paragraphs: [
      "Take the next step with Meridian. Speak with our training team about the ISO 22000:2018 Internal Auditor Course. We'll help you with course availability, schedules, fees and registration.",
    ],
    formTitle: "Enquire about this course",
    enquiryTypes: internalEnquiryTypes,
    watermark: "22000",
  },
};

const internalAuditor14001 = {
  slug: "iso-14001-internal-auditor",
  category: "Internal Auditor",
  shortName: "ISO 14001 Internal Auditor",
  fullName: "ISO 14001:2026 Internal Auditor Course",
  seoTitle: "ISO 14001:2026 Internal Auditor Course | Meridian",
  metaDescription:
    "Develop the knowledge and auditing skills to examine an Environmental Management System with the ISO 14001:2026 Internal Auditor Course from Meridian.",
  hero: {
    eyebrow: "Internal Auditor Training / Environmental Management",
    titleLead: "ISO",
    titleAccent: "14001:2026",
    subtitle: ["Environmental Management Systems", "Internal Auditor Course"],
    description:
      "The ISO 14001:2026 Internal Auditor Course develops the knowledge and auditing skills to examine an Environmental Management System, assess how environmental requirements are applied and identify where improvements are needed.",
    cta: "Enquire about this course",
    secondaryCta: "Explore the curriculum",
    reference: [
      { label: "Standard", value: "ISO 14001:2026" },
      { label: "Subject", value: "Environmental Management" },
      { label: "Training", value: "Internal Auditor" },
    ],
    image: photo(IMG.powerLines, 1800),
    imageAlt: "Power lines across an industrial landscape at sunset",
  },
  intro: {
    kicker: "The purpose of an audit",
    aside: "Can you see the difference between an environmental policy and environmental performance?",
    heading: "Environmental Performance Is Measured in What an Organization Actually Does.",
    paragraphs: [
      "An organization may have environmental objectives, identified risks and documented procedures. The real question is whether these translate into action across its operations.",
      "Waste generation, energy consumption, emissions, water use and other environmental aspects need to be managed where they occur.",
      "An internal auditor examines how an organization identifies these aspects, determines their significance, manages its compliance obligations and evaluates its environmental performance.",
    ],
    statement: "An environmental impact does not disappear because it is documented.",
  },
  inside: {
    kicker: "Learning outcomes",
    heading: "Know what to examine.\nKnow what the evidence should show.",
    text: "This course introduces the requirements of ISO 14001:2026 and the methods used to assess whether an Environmental Management System is properly implemented. Develop the ability to:",
    visual: {
      labelLeft: "Environmental management system",
      labelRight: "ISO 14001:2026",
      core: ["ENVIRONMENTAL", "PERFORMANCE"],
      nodes: [
        ["ENVIRONMENTAL", "ASPECTS"],
        ["OPERATIONAL", "CONTROLS"],
        ["COMPLIANCE", "OBLIGATIONS"],
        ["AUDIT", "FINDINGS"],
      ],
    },
    topics: [
      {
        title: "Interpret the standard",
        desc: "Understand ISO 14001:2026 requirements and their application to an organization's activities, products and services.",
      },
      {
        title: "Examine environmental aspects",
        desc: "Evaluate how environmental aspects and impacts are identified, assessed and managed.",
      },
      {
        title: "Check operational controls",
        desc: "Examine controls relating to waste, emissions, resource use, environmental risks and emergency preparedness.",
      },
      {
        title: "Assess compliance and performance",
        desc: "Review compliance obligations, environmental objectives, monitoring and performance evaluation.",
      },
      {
        title: "Conduct and report audits",
        desc: "Plan audits, gather objective evidence, identify nonconformities and communicate findings.",
      },
    ],
  },
  journey: {
    kicker: "Course curriculum",
    heading: "What an environmental auditor needs to understand.",
    image: photo(IMG.refinery, 1200),
    imageAlt: "Industrial facility with emissions stacks",
    label: "Course curriculum",
    captionPrefix: "Module",
    stages: [
      {
        tab: "EMS",
        title: "Environmental Management Systems",
        text: "The purpose, scope and structure of an EMS and its role in managing environmental performance.",
      },
      {
        tab: "Requirements",
        title: "ISO 14001:2026 Requirements",
        text: "The standard's requirements, including organizational context, leadership, planning, support, operation, performance evaluation and improvement.",
      },
      {
        tab: "Aspects",
        title: "Environmental Aspects and Impacts",
        text: "Identification and evaluation of environmental aspects, significant impacts, lifecycle perspective and environmental risks and opportunities.",
      },
      {
        tab: "Compliance",
        title: "Compliance Obligations and Operational Controls",
        text: "Environmental legal and other requirements, operational planning, control of externally provided processes and emergency preparedness.",
      },
      {
        tab: "Performance",
        title: "Environmental Performance Evaluation",
        text: "Environmental objectives, monitoring, measurement, analysis and evaluation of environmental performance.",
      },
      {
        tab: "Planning",
        title: "Internal Audit Planning and Preparation",
        text: "Audit scope, criteria, audit programmes, document review, audit plans and checklists.",
      },
      {
        tab: "Reporting",
        title: "Conducting Audits and Reporting Findings",
        text: "Interviewing, observation, evidence collection, nonconformity reporting and corrective action follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Who should attend",
    heading: "For professionals responsible for environmental management and compliance.",
    image: photo(IMG.wind, 1200),
    imageAlt: "Wind turbines at sunset",
    tag: "For environmental professionals",
    items: [
      "Environmental Managers, Officers and Coordinators",
      "HSE and Sustainability Professionals",
      "Quality and Management System Professionals",
      "Internal Auditors",
      "Operations and Compliance Personnel",
      "Employees involved in implementing or maintaining an EMS",
    ],
  },
  related: {
    kicker: "Related training",
    heading: "Continue your environmental training.",
    items: [
      {
        title: "ISO 14001:2026 Lead Auditor Course",
        desc: "Develop your auditing knowledge further and explore the responsibilities involved in leading Environmental Management System audits.",
        link: "/services/training/iso-14001-lead-auditor",
      },
      {
        title: "ISO 50001:2018 Internal Auditor Course",
        desc: "Explore the management of energy use, consumption and performance through an Energy Management System.",
        link: "/services/training/iso-50001-internal-auditor",
      },
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Ready to develop your environmental auditing skills?",
    paragraphs: [
      "Speak with Meridian's training team about the ISO 14001:2026 Internal Auditor Course.",
    ],
    formTitle: "Enquire about this course",
    enquiryTypes: internalEnquiryTypes,
    watermark: "14001",
  },
};

const internalAuditor50001 = {
  slug: "iso-50001-internal-auditor",
  category: "Internal Auditor",
  shortName: "ISO 50001 Internal Auditor",
  fullName: "ISO 50001:2018 Internal Auditor Course",
  seoTitle: "ISO 50001:2018 Internal Auditor Course | Meridian",
  metaDescription:
    "Develop the skills to examine an Energy Management System and assess energy performance with the ISO 50001:2018 Internal Auditor Course from Meridian.",
  hero: {
    eyebrow: "Internal Auditor Training / Energy Management",
    titleLead: "ISO",
    titleAccent: "50001:2018",
    subtitle: ["Energy Management Systems", "Internal Auditor Course"],
    description:
      "The ISO 50001:2018 Internal Auditor Course develops the skills to examine an Energy Management System, review how energy performance is managed and assess whether the organization is meeting its energy objectives.",
    cta: "Enquire about this course",
    secondaryCta: "Explore the curriculum",
    reference: [
      { label: "Standard", value: "ISO 50001:2018" },
      { label: "Subject", value: "Energy Management" },
      { label: "Training", value: "Internal Auditor" },
    ],
    image: photo(IMG.wind, 1800),
    imageAlt: "Wind turbines generating energy at sunset",
  },
  intro: {
    kicker: "The purpose of an audit",
    aside: "An energy policy is a starting point. The real test is energy performance.",
    heading: "Where Is Your Energy Going? And What Is Being Done About It?",
    paragraphs: [
      "Organizations consume energy across buildings, equipment, production processes and daily operations. Without reliable information and effective controls, opportunities to improve energy performance can easily go unnoticed.",
      "An organization may introduce energy-saving initiatives, replace equipment or establish consumption targets. But are these actions making a measurable difference?",
      "An internal auditor needs to understand how energy is reviewed, where significant energy uses occur, how performance is measured and whether improvement actions are delivering results.",
    ],
    statement: "Energy savings need evidence, not assumptions.",
  },
  inside: {
    kicker: "Learning outcomes",
    heading: "Learn to follow the energy data,\nexamine the controls and assess performance.",
    text: "This course explores the requirements of ISO 50001:2018 and the auditing methods used to examine an Energy Management System.",
    visual: {
      labelLeft: "Energy management system",
      labelRight: "ISO 50001:2018",
      core: ["ENERGY", "PERFORMANCE"],
      nodes: [
        ["ENERGY", "REVIEW"],
        ["SIGNIFICANT", "ENERGY USES"],
        ["BASELINES", "& EnPIs"],
        ["OPERATIONAL", "CONTROLS"],
      ],
    },
    topics: [
      {
        title: "Understand the standard",
        desc: "Interpret ISO 50001:2018 requirements and understand their application to energy management.",
      },
      {
        title: "Examine energy use",
        desc: "Review energy reviews, significant energy uses and opportunities for improving energy performance.",
      },
      {
        title: "Evaluate measurement systems",
        desc: "Understand energy baselines, energy performance indicators and the data used to monitor performance.",
      },
      {
        title: "Check operational controls",
        desc: "Examine how energy-related processes, equipment, maintenance, design and procurement are managed.",
      },
      {
        title: "Audit and report",
        desc: "Plan and conduct internal audits, evaluate evidence, identify nonconformities and report findings.",
      },
    ],
  },
  journey: {
    kicker: "Course curriculum",
    heading: "From energy review to audit findings.",
    image: MEQMP_50001_AUDIT,
    imageAlt: "Industrial energy management systems",
    label: "Course curriculum",
    captionPrefix: "Module",
    stages: [
      {
        tab: "EnMS",
        title: "Introduction to Energy Management Systems",
        text: "The purpose of an EnMS, energy management principles and the structure of ISO 50001:2018.",
      },
      {
        tab: "Requirements",
        title: "ISO 50001:2018 Requirements",
        text: "The requirements for establishing, implementing, maintaining and improving an Energy Management System.",
      },
      {
        tab: "Energy review",
        title: "Energy Review and Significant Energy Uses",
        text: "Energy sources, consumption analysis, significant energy uses and opportunities for energy performance improvement.",
      },
      {
        tab: "Baselines",
        title: "Energy Baselines and Performance Indicators",
        text: "Energy baselines, energy performance indicators (EnPIs), relevant variables and the importance of reliable energy data.",
      },
      {
        tab: "Controls",
        title: "Operational Controls and Performance Improvement",
        text: "Operational planning, maintenance, design, procurement and controls affecting energy performance.",
      },
      {
        tab: "Planning",
        title: "Internal Audit Planning and Preparation",
        text: "Audit scope, criteria, planning, documentation review and checklist preparation.",
      },
      {
        tab: "Reporting",
        title: "Conducting Audits and Reporting Findings",
        text: "Audit interviews, observation, evidence collection, nonconformities, reporting and corrective action follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Who should attend",
    heading: "For people responsible for managing, monitoring or improving energy use.",
    image: MEQMP_50001_HERO,
    imageAlt: "Industrial energy infrastructure",
    tag: "For energy professionals",
    items: [
      "Energy Managers and Energy Officers",
      "Facility and Maintenance Managers",
      "Engineers and Technical Professionals",
      "HSE and Sustainability Professionals",
      "Quality and Management System Auditors",
      "Personnel responsible for energy performance and EnMS implementation",
    ],
  },
  related: {
    kicker: "Related training",
    heading: "Continue your energy management training.",
    items: [
      {
        title: "ISO 50001:2018 Lead Auditor Course",
        desc: "Build on your internal auditing knowledge and explore the skills required to lead Energy Management System audits.",
        link: "/services/training/iso-50001-lead-auditor",
      },
      {
        title: "ISO 14001:2026 Internal Auditor Course",
        desc: "Develop your understanding of environmental management system auditing and its relationship with resource and environmental performance.",
        link: "/services/training/iso-14001-internal-auditor",
      },
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Make energy performance something you can measure and assess.",
    paragraphs: ["Contact Meridian to enquire about the ISO 50001:2018 Internal Auditor Course."],
    formTitle: "Enquire about this course",
    enquiryTypes: internalEnquiryTypes,
    watermark: "50001",
  },
};

const internalAuditor41001 = {
  slug: "iso-41001-internal-auditor",
  category: "Internal Auditor",
  shortName: "ISO 41001 Internal Auditor",
  fullName: "ISO 41001:2018 Internal Auditor Course",
  seoTitle: "ISO 41001:2018 Internal Auditor Course | Meridian",
  metaDescription:
    "Develop the knowledge and auditing skills to assess a Facility Management System with the ISO 41001:2018 Internal Auditor Course from Meridian.",
  hero: {
    eyebrow: "Internal Auditor Training / Facility Management",
    titleLead: "ISO",
    titleAccent: "41001:2018",
    subtitle: ["Facility Management Systems", "Internal Auditor Course"],
    description:
      "The ISO 41001:2018 Internal Auditor Course develops the knowledge and auditing skills to assess a Facility Management System, examine service delivery and evaluate whether facility management processes meet organizational and stakeholder requirements.",
    cta: "Enquire about this course",
    secondaryCta: "Explore the curriculum",
    reference: [
      { label: "Standard", value: "ISO 41001:2018" },
      { label: "Subject", value: "Facility Management" },
      { label: "Training", value: "Internal Auditor" },
    ],
    image: photo(IMG.officeInterior, 1800),
    imageAlt: "Modern office interior",
  },
  intro: {
    kicker: "The purpose of an audit",
    aside: "Clean buildings and functioning equipment tell only part of the story.",
    heading: "A Facility Can Look Well Managed. Is the Service Behind It?",
    paragraphs: [
      "Effective facility management brings together people, processes, workplaces, assets and service providers. The real measure is whether these services support the organization's needs and deliver the expected results.",
      "Poorly coordinated maintenance, unclear service responsibilities, ineffective contractor management and recurring facility issues can affect safety, productivity, costs and the experience of building users.",
      "An internal audit looks beyond individual maintenance records. It examines whether facility management is planned, delivered, monitored and improved in line with the organization's requirements.",
    ],
    statement: "When facility services fall short, the impact reaches the whole organization.",
  },
  inside: {
    kicker: "Learning outcomes",
    heading: "Examine how facility management\nworks across the organization.",
    text: "This course introduces ISO 41001:2018 and the audit methods used to evaluate a Facility Management System.",
    visual: {
      labelLeft: "Facility management system",
      labelRight: "ISO 41001:2018",
      core: ["FACILITY", "SERVICES"],
      nodes: [
        ["FM", "SYSTEM"],
        ["SERVICE", "DELIVERY"],
        ["RESOURCES", "& ROLES"],
        ["SUPPLIERS", "& PROCESSES"],
      ],
    },
    topics: [
      {
        title: "Understand the FM system",
        desc: "Interpret ISO 41001:2018 requirements and understand the purpose of a Facility Management System.",
      },
      {
        title: "Evaluate service delivery",
        desc: "Examine how facility services are planned, coordinated and delivered against organizational needs.",
      },
      {
        title: "Review resources and responsibilities",
        desc: "Assess roles, competence, communication, documented information and the coordination of FM activities.",
      },
      {
        title: "Examine suppliers and operational processes",
        desc: "Review outsourced services, contractor arrangements, operational controls and service performance.",
      },
      {
        title: "Audit and report",
        desc: "Plan audits, gather evidence, evaluate findings and report opportunities for corrective action and improvement.",
      },
    ],
  },
  journey: {
    kicker: "Course curriculum",
    heading: "Seven areas of facility management auditing.",
    image: photo(IMG.towers, 1200),
    imageAlt: "Modern commercial buildings",
    label: "Course curriculum",
    captionPrefix: "Module",
    stages: [
      {
        tab: "FM systems",
        title: "Introduction to Facility Management Systems",
        text: "The purpose of facility management, its relationship with organizational objectives and the scope of ISO 41001:2018.",
      },
      {
        tab: "Requirements",
        title: "ISO 41001:2018 Requirements",
        text: "The structure and requirements of the standard, including organizational context, leadership, planning, support, operation and improvement.",
      },
      {
        tab: "FM needs",
        title: "Understanding Facility Management Needs",
        text: "Interested parties, facility management policies, objectives, service requirements and the relationship between the demand organization and FM function.",
      },
      {
        tab: "Resources",
        title: "Resources, Competence and Communication",
        text: "Roles, responsibilities, resources, competence, awareness, communication and documented information.",
      },
      {
        tab: "Delivery",
        title: "Operational Planning and Service Delivery",
        text: "Operational controls, facility service arrangements, external providers, performance monitoring and the evaluation of service delivery.",
      },
      {
        tab: "Planning",
        title: "Internal Audit Planning and Preparation",
        text: "Audit scope, criteria, planning, documentation review and preparation of audit checklists.",
      },
      {
        tab: "Reporting",
        title: "Conducting Audits and Reporting Findings",
        text: "Interviewing, observation, evidence gathering, evaluation of findings, reporting and corrective action follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Who should attend",
    heading: "For professionals responsible for facilities, workplaces and support services.",
    image: photo(IMG.building, 1200),
    imageAlt: "Contemporary building facade",
    tag: "For facility professionals",
    items: [
      "Facility Managers and FM Coordinators",
      "Building and Property Managers",
      "Maintenance and Engineering Professionals",
      "Facilities Operations Supervisors",
      "Service Provider and Contractor Managers",
      "Internal Auditors and Management System Professionals",
    ],
  },
  related: {
    kicker: "Related training",
    heading: "Continue your facility management training.",
    items: [
      {
        title: "ISO 41001:2018 Lead Auditor Course",
        desc: "Explore the requirements and responsibilities involved in leading Facility Management System audits.",
        link: "/services/training/iso-41001-lead-auditor",
      },
      {
        title: "ISO 50001:2018 Internal Auditor Course",
        desc: "Examine how energy management can be assessed within buildings and facility operations.",
        link: "/services/training/iso-50001-internal-auditor",
      },
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Give your facility management system the attention it deserves.",
    paragraphs: [
      "Speak with Meridian's training team about the ISO 41001:2018 Internal Auditor Course.",
    ],
    formTitle: "Enquire about this course",
    enquiryTypes: internalEnquiryTypes,
    watermark: "41001",
  },
};

const internalAuditor9001 = {
  slug: "iso-9001-internal-auditor",
  category: "Internal Auditor",
  shortName: "ISO 9001 Internal Auditor",
  fullName: "ISO 9001:2026 Internal Auditor Course",
  seoTitle: "ISO 9001:2026 Internal Auditor Course | Meridian",
  metaDescription:
    "Develop the knowledge and auditing skills to assess a Quality Management System with the ISO 9001:2026 Internal Auditor Course from Meridian.",
  hero: {
    eyebrow: "Internal Auditor Training / Quality Management",
    titleLead: "ISO",
    titleAccent: "9001:2026",
    subtitle: ["Quality Management Systems", "Internal Auditor Course"],
    description:
      "The ISO 9001:2026 Internal Auditor Course develops the knowledge and auditing skills to assess a Quality Management System against the latest edition of the standard, examine how processes perform and identify where the system needs attention.",
    cta: "Enquire about this course",
    secondaryCta: "Explore the curriculum",
    reference: [
      { label: "Standard", value: "ISO 9001:2026" },
      { label: "Subject", value: "Quality Management" },
      { label: "Training", value: "Internal Auditor" },
    ],
    image: photo(IMG.engineersLab, 1800),
    imageAlt: "Engineers reviewing a process in a laboratory",
  },
  intro: {
    kicker: "The purpose of an audit",
    aside:
      "An effective quality audit looks at what the process delivers, not just what the paperwork says.",
    heading: "A Process Can Follow the Procedure and Still Fail the Customer.",
    paragraphs: [
      "Customer requirements, operational processes, suppliers, performance measures and corrective actions all influence the quality of an organization's products and services.",
      "A procedure may be followed exactly, yet customers may still experience delays, inconsistent service or recurring problems.",
      "Internal auditing should examine how processes interact, whether requirements are being met and whether the organization is using its performance information to make improvements.",
    ],
    statement: "Passing an audit checklist does not automatically mean a process is working.",
  },
  inside: {
    kicker: "Learning outcomes",
    heading: "Learn to assess the system\nbehind the result.",
    text: "This course introduces ISO 9001:2026 and the practical methods used to evaluate a Quality Management System.",
    visual: {
      labelLeft: "Quality management system",
      labelRight: "ISO 9001:2026",
      core: ["QUALITY", "PERFORMANCE"],
      nodes: [
        ["PROCESS", "INTERACTIONS"],
        ["RISK &", "OPPORTUNITIES"],
        ["CUSTOMER", "REQUIREMENTS"],
        ["AUDIT", "FINDINGS"],
      ],
    },
    topics: [
      {
        title: "Interpret the requirements",
        desc: "Understand ISO 9001:2026 and its application to the organization's Quality Management System.",
      },
      {
        title: "Follow the process",
        desc: "Examine process interactions, responsibilities, documented information and controls.",
      },
      {
        title: "Evaluate risk and performance",
        desc: "Review risks and opportunities, quality objectives, monitoring and performance evaluation.",
      },
      {
        title: "Assess conformity",
        desc: "Examine customer requirements, supplier controls, operational processes and product or service conformity.",
      },
      {
        title: "Report meaningful findings",
        desc: "Gather objective evidence, identify nonconformities and communicate audit results.",
      },
    ],
  },
  journey: {
    kicker: "Course curriculum",
    heading: "What goes into an effective quality management system audit?",
    image: photo(IMG.electronics, 1200),
    imageAlt: "Close-up of a quality inspection on an electronic assembly",
    label: "Course curriculum",
    captionPrefix: "Module",
    stages: [
      {
        tab: "QMS",
        title: "Introduction to Quality Management Systems",
        text: "Quality management principles, the process approach, risk-based thinking and the purpose of ISO 9001.",
      },
      {
        tab: "Requirements",
        title: "ISO 9001:2026 Requirements",
        text: "The structure and requirements of the latest edition, including context, leadership, planning, support, operation, performance evaluation and improvement.",
      },
      {
        tab: "Leadership",
        title: "Leadership, Planning and Risk-Based Thinking",
        text: "Organizational direction, quality policy, responsibilities, risks, opportunities and quality objectives.",
      },
      {
        tab: "Operations",
        title: "Operational Processes and Customer Requirements",
        text: "Customer communication, operational planning, design and development where applicable, external providers, production and service provision.",
      },
      {
        tab: "Performance",
        title: "Performance Evaluation and Improvement",
        text: "Monitoring, measurement, customer satisfaction, nonconformities, corrective action and continual improvement.",
      },
      {
        tab: "Planning",
        title: "Internal Audit Planning and Preparation",
        text: "Audit programmes, scope, criteria, audit plans, documentation review and checklist development.",
      },
      {
        tab: "Reporting",
        title: "Conducting Audits and Reporting Findings",
        text: "Audit interviews, process-based auditing, evidence collection, nonconformity reporting and follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Who should attend",
    heading: "For professionals involved in quality, operations and process performance.",
    image: photo(IMG.labEngineers, 1200),
    imageAlt: "Engineer working on equipment in a laboratory",
    tag: "For quality professionals",
    items: [
      "Quality Managers and Quality Officers",
      "Quality Assurance and Quality Control Professionals",
      "Internal Auditors",
      "Process and Operations Managers",
      "Management System Coordinators",
      "Professionals involved in implementing or maintaining a QMS",
    ],
  },
  related: {
    kicker: "Related training",
    heading: "Continue your quality training.",
    items: [
      {
        title: "ISO 9001:2026 Lead Auditor Course",
        desc: "Build on your internal auditing knowledge and explore the responsibilities involved in leading quality management system audits.",
        link: "/services/training/iso-9001-lead-auditor",
      },
      {
        title: "ISO 14001:2026 Internal Auditor Course",
        desc: "Develop your auditing knowledge across environmental management and integrated management systems.",
        link: "/services/training/iso-14001-internal-auditor",
      },
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Be ready to examine quality where it matters: in the process.",
    paragraphs: ["Contact Meridian to enquire about the ISO 9001:2026 Internal Auditor Course."],
    formTitle: "Enquire about this course",
    enquiryTypes: internalEnquiryTypes,
    watermark: "9001",
  },
};

const internalAuditor45001 = {
  slug: "iso-45001-internal-auditor",
  category: "Internal Auditor",
  shortName: "ISO 45001 Internal Auditor",
  fullName: "ISO 45001:2018 Internal Auditor Course",
  seoTitle: "ISO 45001:2018 Internal Auditor Course | Meridian",
  metaDescription:
    "Develop the knowledge and auditing skills to assess an Occupational Health and Safety Management System with the ISO 45001:2018 Internal Auditor Course.",
  hero: {
    eyebrow: "Internal Auditor Training / Occupational Health & Safety",
    titleLead: "ISO",
    titleAccent: "45001:2018",
    subtitle: ["Occupational Health and Safety", "Internal Auditor Course"],
    description:
      "The ISO 45001:2018 Internal Auditor Course develops the knowledge and auditing skills to assess an Occupational Health and Safety Management System and report where controls, responsibilities or processes need attention.",
    cta: "Enquire about this course",
    secondaryCta: "Explore the curriculum",
    reference: [
      { label: "Standard", value: "ISO 45001:2018" },
      { label: "Subject", value: "Occupational Health & Safety" },
      { label: "Training", value: "Internal Auditor" },
    ],
    image: photo(IMG.construction, 1800),
    imageAlt: "Workers on an active construction site",
  },
  intro: {
    kicker: "The purpose of an audit",
    aside: "What happens when work does not go according to plan?",
    heading: "A Safety Procedure Is Not Proof of a Safe Workplace.",
    paragraphs: [
      "Hazards, changing work conditions, contractor activities and operational pressures can expose employees and others to occupational health and safety risks.",
      "An internal auditor needs to examine whether hazards are identified, risks are controlled, workers are involved and the organization's OH&S arrangements are working in practice.",
      "A risk assessment may be approved. Training may be recorded. Personal protective equipment may be issued. But are safe working arrangements followed? Are workers consulted? Are contractors properly controlled? Are incidents investigated and corrective actions effective?",
    ],
    statement: "Safety management must reach the people doing the work.",
  },
  inside: {
    kicker: "Learning outcomes",
    heading: "Learn to examine how\nworkplace risks are managed.",
    text: "This course introduces ISO 45001:2018 and the practical techniques used to audit occupational health and safety management systems.",
    visual: {
      labelLeft: "OH&S management system",
      labelRight: "ISO 45001:2018",
      core: ["OH&S", "PERFORMANCE"],
      nodes: [
        ["HAZARD", "IDENTIFICATION"],
        ["RISK", "EVALUATION"],
        ["WORKPLACE", "CONTROLS"],
        ["WORKER", "PARTICIPATION"],
      ],
    },
    topics: [
      {
        title: "Understand OH&S requirements",
        desc: "Interpret ISO 45001:2018 and understand its application to occupational health and safety management.",
      },
      {
        title: "Identify hazards and evaluate risks",
        desc: "Examine hazard identification, risk assessment and the planning of actions to address OH&S risks and opportunities.",
      },
      {
        title: "Evaluate workplace controls",
        desc: "Review operational controls, safe working arrangements, contractor management and emergency preparedness.",
      },
      {
        title: "Examine worker participation and performance",
        desc: "Assess consultation, participation, competence, incident investigation and OH&S performance evaluation.",
      },
      {
        title: "Conduct and report audits",
        desc: "Plan audits, gather evidence, identify nonconformities and report findings.",
      },
    ],
  },
  journey: {
    kicker: "Course curriculum",
    heading: "From workplace hazards to audit findings.",
    image: photo(IMG.factory, 1200),
    imageAlt: "Automated production line in a manufacturing plant",
    label: "Course curriculum",
    captionPrefix: "Module",
    stages: [
      {
        tab: "OH&S systems",
        title: "Occupational Health and Safety Management Systems",
        text: "The purpose of an OH&S management system, its principles and the structure of ISO 45001:2018.",
      },
      {
        tab: "Requirements",
        title: "ISO 45001:2018 Requirements",
        text: "Organizational context, leadership, worker participation, planning, support, operation, performance evaluation and improvement.",
      },
      {
        tab: "Hazards",
        title: "Hazard Identification and Risk Assessment",
        text: "Hazard identification, assessment of OH&S risks and opportunities, legal requirements and planning of actions.",
      },
      {
        tab: "Controls",
        title: "Operational Control and Emergency Preparedness",
        text: "Hierarchy of controls, management of change, procurement, contractors, outsourced processes and emergency response.",
      },
      {
        tab: "Incidents",
        title: "Incident Investigation and Performance Evaluation",
        text: "Incident reporting, investigation, monitoring, measurement, compliance evaluation and corrective action.",
      },
      {
        tab: "Planning",
        title: "Internal Audit Planning and Preparation",
        text: "Audit scope, criteria, planning, documentation review and checklist preparation.",
      },
      {
        tab: "Reporting",
        title: "Conducting Audits and Reporting Findings",
        text: "Interviewing, observation, evidence collection, evaluation of findings, reporting and follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Who should attend",
    heading: "For people responsible for workplace health and safety.",
    image: photo(IMG.sparks, 1200),
    imageAlt: "Metalworking in an industrial workshop",
    tag: "For health and safety professionals",
    items: [
      "HSE Managers, Officers and Coordinators",
      "Occupational Health and Safety Professionals",
      "Safety Supervisors and Engineers",
      "Internal Auditors",
      "Operations and Site Managers",
      "Personnel involved in implementing or maintaining an OH&S management system",
    ],
  },
  related: {
    kicker: "Related training",
    heading: "Continue your health and safety training.",
    items: [
      {
        title: "ISO 45001:2018 Lead Auditor Course",
        desc: "Develop your auditing knowledge further and explore the responsibilities involved in leading OH&S management system audits.",
        link: "/services/training/iso-45001-lead-auditor",
      },
      {
        title: "ISO 14001:2026 Internal Auditor Course",
        desc: "Build your knowledge of environmental management system auditing and integrated management systems.",
        link: "/services/training/iso-14001-internal-auditor",
      },
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "A safer workplace starts with controls that work.",
    paragraphs: [
      "Speak with Meridian's training team about the ISO 45001:2018 Internal Auditor Course.",
    ],
    formTitle: "Enquire about this course",
    enquiryTypes: internalEnquiryTypes,
    watermark: "45001",
  },
};

const internalAuditor27001 = {
  slug: "iso-27001-internal-auditor",
  category: "Internal Auditor",
  shortName: "ISO/IEC 27001 Internal Auditor",
  fullName: "ISO/IEC 27001:2022 Internal Auditor Course",
  seoTitle: "ISO/IEC 27001:2022 Internal Auditor Course | Meridian",
  metaDescription:
    "Develop the knowledge and auditing skills to examine an Information Security Management System with the ISO/IEC 27001:2022 Internal Auditor Course.",
  hero: {
    eyebrow: "Internal Auditor Training / Information Security",
    titleLead: "ISO/IEC",
    titleAccent: "27001:2022",
    subtitle: ["Information Security Management Systems", "Internal Auditor Course"],
    description:
      "The ISO/IEC 27001:2022 Internal Auditor Course develops the knowledge and auditing skills to examine an Information Security Management System, evaluate how information security risks are managed and assess whether the required controls are working.",
    cta: "Enquire about this course",
    secondaryCta: "Explore the curriculum",
    reference: [
      { label: "Standard", value: "ISO/IEC 27001:2022" },
      { label: "Subject", value: "Information Security" },
      { label: "Training", value: "Internal Auditor" },
    ],
    image: photo(IMG.circuit, 1800),
    imageAlt: "Close-up of a circuit board",
  },
  intro: {
    kicker: "The purpose of an audit",
    aside:
      "Policies may be documented. Access may be restricted. But are information security risks actually being managed?",
    heading: "Your Information Security Is Only as Strong as the Controls You Can Prove.",
    paragraphs: [
      "Organizations depend on information, systems, networks, people and external service providers. A weakness in any of these areas can expose sensitive information and disrupt business operations.",
      "Who can access sensitive information? How are security incidents handled? Are suppliers assessed? Are risks reviewed when systems, technologies or business processes change?",
      "An internal audit examines whether the organization's information security arrangements are implemented, maintained and appropriate to the risks it faces.",
    ],
    statement: "Information security cannot be assessed by reading a policy alone.",
  },
  inside: {
    kicker: "Learning outcomes",
    heading: "Learn to examine the controls\nprotecting organizational information.",
    text: "This course introduces the requirements of ISO/IEC 27001:2022, including the relationship between the Information Security Management System and its information security controls.",
    visual: {
      labelLeft: "Information security management system",
      labelRight: "ISO/IEC 27001:2022",
      core: ["PROTECTED", "INFORMATION"],
      nodes: [["ISMS"], ["RISK", "TREATMENT"], ["SECURITY", "CONTROLS"], ["INCIDENT", "MANAGEMENT"]],
    },
    topics: [
      {
        title: "Understand the ISMS",
        desc: "Interpret ISO/IEC 27001:2022 requirements and understand the purpose and structure of an Information Security Management System.",
      },
      {
        title: "Examine information security risks",
        desc: "Review risk assessment, risk treatment, risk acceptance and the Statement of Applicability.",
      },
      {
        title: "Evaluate security controls",
        desc: "Understand how organizational, people, physical and technological controls are selected and implemented.",
      },
      {
        title: "Assess system effectiveness",
        desc: "Examine access management, supplier security, incident management, monitoring and documented information.",
      },
      {
        title: "Conduct and report audits",
        desc: "Plan audits, gather evidence, identify nonconformities and report findings.",
      },
    ],
  },
  journey: {
    kicker: "Course curriculum",
    heading: "Seven areas of information security auditing.",
    image: photo(IMG.dataCentre, 1200),
    imageAlt: "Network cabling in a data centre",
    label: "Course curriculum",
    captionPrefix: "Module",
    stages: [
      {
        tab: "ISMS",
        title: "Introduction to Information Security Management Systems",
        text: "Information security principles, the purpose of an ISMS and the structure of ISO/IEC 27001:2022.",
      },
      {
        tab: "Requirements",
        title: "ISO/IEC 27001:2022 Requirements",
        text: "Organizational context, leadership, planning, support, operation, performance evaluation and improvement.",
      },
      {
        tab: "Risk",
        title: "Information Security Risk Assessment and Treatment",
        text: "Information security risks, risk evaluation, risk treatment, risk acceptance and the Statement of Applicability.",
      },
      {
        tab: "Controls",
        title: "Information Security Controls",
        text: "An overview of Annex A controls covering organizational, people, physical and technological security.",
      },
      {
        tab: "Operation",
        title: "ISMS Operation and Performance Evaluation",
        text: "Access management, supplier relationships, incident management, monitoring, measurement and continual improvement.",
      },
      {
        tab: "Planning",
        title: "Internal Audit Planning and Preparation",
        text: "Audit scope, criteria, planning, documentation review and preparation of audit checklists.",
      },
      {
        tab: "Reporting",
        title: "Conducting Audits and Reporting Findings",
        text: "Audit interviews, evidence collection, control evaluation, nonconformity reporting and corrective action follow-up.",
      },
    ],
  },
  audience: {
    kicker: "Who should attend",
    heading: "For professionals responsible for information security and organizational risk.",
    image: photo(IMG.serverRoom, 1200),
    imageAlt: "Professional walking through a secure server room",
    tag: "For information security professionals",
    items: [
      "Information Security Managers and Officers",
      "IT Managers and IT Professionals",
      "Cybersecurity and Risk Professionals",
      "ISMS Coordinators",
      "Internal Auditors",
      "Professionals involved in information security implementation and governance",
    ],
  },
  related: {
    kicker: "Related training",
    heading: "Continue your information security training.",
    items: [
      {
        title: "ISO/IEC 27001:2022 Lead Auditor Course",
        desc: "Build on your internal auditing knowledge and explore the responsibilities involved in leading Information Security Management System audits.",
        link: "/services/training/iso-27001-lead-auditor",
      },
      {
        title: "ISO 9001:2026 Internal Auditor Course",
        desc: "Develop auditing knowledge across another core management system and understand the common principles behind integrated management systems.",
        link: "/services/training/iso-9001-internal-auditor",
      },
    ],
  },
  enquiry: {
    kicker: NEXT_STEP,
    heading: "Make information security something you can assess, not just assume.",
    paragraphs: [
      "Contact Meridian to enquire about the ISO/IEC 27001:2022 Internal Auditor Course.",
    ],
    formTitle: "Enquire about this course",
    enquiryTypes: internalEnquiryTypes,
    watermark: "27001",
  },
};

/* ------------------------------------------------------------------ */
/* SAFETY & ENVIRONMENT                                                */
/* ------------------------------------------------------------------ */

const trainingEnquiryTypes = [
  "Training for my organization",
  "Course dates and fees",
  "Delivery options",
  "Other enquiry",
];

const fireSafety = {
  slug: "fire-safety-awareness-and-fire-fighting",
  category: "Safety & Environment",
  shortName: "Fire Safety Awareness and Fire Fighting",
  fullName: "Fire Safety Awareness and Fire Fighting Training",
  seoTitle: "Fire Safety Awareness and Fire Fighting Training | Meridian MEQMP",
  metaDescription:
    "Prepare your workforce with Fire Safety Awareness and Fire Fighting Training. Build awareness of workplace fire risks, emergency procedures and firefighting equipment.",
  hero: {
    eyebrow: "Workplace Safety / Professional Training",
    longTitle: true,
    titleLead: "Fire Safety Awareness",
    titleAccent: "and Fire Fighting",
    subtitle: ["When a Fire Breaks Out, Will Your People Know What to Do?"],
    description:
      "Fire safety equipment and emergency procedures matter. But they only work when people know how to respond. Prepare your employees to recognise fire risks, understand their responsibilities and take the right action when an emergency occurs.",
    cta: "Request training details",
    reference: [
      { label: "Focus", value: "Fire Prevention" },
      { label: "Focus", value: "Emergency Response" },
      { label: "Focus", value: "Firefighting Awareness" },
    ],
    image: photo(IMG.sparks, 1800),
    imageAlt: "Sparks in an industrial workshop",
  },
  intro: {
    kicker: "The importance of being prepared",
    aside: "Preparedness begins before the alarm sounds.",
    heading: "A Small Fire Safety Oversight Can Become a Serious Workplace Emergency.",
    paragraphs: [
      "An unnoticed hazard, an obstructed escape route or an employee unsure how to raise the alarm can make an emergency harder to manage.",
      "Having safety equipment in place is not enough. Employees need to understand the precautions their workplace requires and what is expected of them when a fire occurs.",
    ],
    statement:
      "Fire safety training helps turn workplace procedures into something people understand and are better prepared to follow.",
  },
  inside: {
    kicker: "What your people gain",
    heading: "A Workforce Better Prepared to\nRecognise, Prevent and Respond.",
    text: "The value of fire safety training is not simply knowing where the equipment is. It is understanding what to do, when to do it and when personal safety must come first. Participants should be better prepared to:",
    result:
      "The intended result: Employees who understand their fire safety responsibilities and are better prepared to respond appropriately during a workplace fire emergency.",
    visual: {
      labelLeft: "Fire safety readiness",
      labelRight: "Workplace training",
      core: ["PREPARED", "WORKFORCE"],
      nodes: [
        ["RECOGNISE", "FIRE RISKS"],
        ["RESPOND TO AN", "EMERGENCY"],
        ["FIREFIGHTING", "EQUIPMENT"],
        ["SAFER", "DECISIONS"],
      ],
      caption: "ILLUSTRATIVE TRAINING OUTCOMES",
    },
    topics: [
      {
        title: "Recognise Fire Risks",
        desc: "Identify common workplace fire hazards and understand the importance of prevention.",
      },
      {
        title: "Respond to an Emergency",
        desc: "Know how to raise the alarm, follow emergency instructions and use designated evacuation routes.",
      },
      {
        title: "Understand Firefighting Equipment",
        desc: "Recognise different types of firefighting equipment and understand their appropriate applications and limitations.",
      },
      {
        title: "Make Safer Decisions",
        desc: "Understand when an initial response may be appropriate and when to withdraw and leave firefighting to emergency personnel.",
      },
    ],
  },
  audience: {
    kicker: "Training for everyday workplace readiness",
    heading: "Fire Safety Is Everyone's Responsibility.",
    text: "Whether your employees work in an office, factory, warehouse, commercial facility or industrial environment, they need to understand the fire risks around them and the procedures that protect people at work. This training is relevant for:",
    image: photo(IMG.factory, 1200),
    imageAlt: "Workers in a manufacturing facility",
    tag: "For every workplace team",
    items: [
      "Employees and workplace teams",
      "Supervisors and department managers",
      "Health and safety personnel",
      "Fire wardens and emergency response teams",
      "Facility, maintenance and operations personnel",
    ],
    note: "If your organisation wants its people to be more aware of fire risks and better prepared for emergencies, this training is a practical place to start.",
  },
  enquiry: {
    kicker: "Prepare your people before an emergency",
    heading: "Give Your Team More Than a Fire Extinguisher. Give Them the Knowledge to Respond.",
    paragraphs: [
      "Help your employees understand fire safety, recognise workplace risks and respond more responsibly when an emergency occurs.",
      "Talk to Meridian about fire safety awareness and firefighting training for your organisation. Contact our team for course availability, fees, delivery options and registration.",
    ],
    formTitle: "Discuss your training requirements",
    formLabel: "Training enquiry",
    enquiryTypes: trainingEnquiryTypes,
    watermark: "FIRE",
  },
};

const firstAid = {
  slug: "first-aid-cpr-aed",
  category: "Safety & Environment",
  shortName: "First Aid, CPR & AED",
  fullName: "First Aid, CPR & AED Training",
  seoTitle: "First Aid, CPR & AED Training for Workplaces | Meridian MEQMP",
  metaDescription:
    "Prepare your workforce with First Aid, CPR and AED training. Build practical awareness of medical emergencies, initial response and workplace first-aid responsibilities.",
  hero: {
    eyebrow: "First Aid & Emergency Response / Professional Training",
    longTitle: true,
    titleLead: "First Aid,",
    titleAccent: "CPR & AED",
    subtitle: ["When Someone Needs Help, Would Your People Know How to Respond?"],
    description:
      "A medical emergency can happen anywhere, at any time. The first response can make a critical difference while professional medical assistance is on its way. Prepare your employees to recognise emergencies and provide an appropriate first response when it matters most.",
    cta: "Request training details",
    reference: [
      { label: "Focus", value: "First Aid" },
      { label: "Focus", value: "CPR" },
      { label: "Focus", value: "Automated External Defibrillator (AED)" },
    ],
    image: photo(IMG.care, 1800),
    imageAlt: "One person holding another person's hand in support",
  },
  intro: {
    kicker: "The first response can matter most",
    aside: "Knowing what to do can make a difference before help arrives.",
    heading: "An Emergency Is Not the Time to Wonder What to Do.",
    paragraphs: [
      "A colleague suddenly collapses. Someone suffers a serious cut. Another person begins choking.",
      "These situations demand more than concern. People nearby need to recognise what is happening, know how to seek emergency assistance and understand what they can safely do before professional help arrives.",
      "Without preparation, hesitation and uncertainty can cost valuable time.",
    ],
    statement:
      "First Aid, CPR and AED training helps people become better prepared to respond when someone needs immediate assistance.",
  },
  inside: {
    kicker: "What your people gain",
    heading: "People Better Prepared to\nAct When It Matters.",
    text: "The value of this training goes beyond recognising a medical emergency. Participants develop practical knowledge and a clearer understanding of how to respond while waiting for professional medical assistance.",
    result:
      "The intended result: Employees who are better prepared to recognise a medical emergency, provide an appropriate initial response and support the affected person until professional help takes over.",
    visual: {
      labelLeft: "Emergency readiness",
      labelRight: "Workplace training",
      core: ["FIRST", "RESPONSE"],
      nodes: [
        ["RECOGNISE AN", "EMERGENCY"],
        ["CARDIAC", "EMERGENCIES"],
        ["INITIAL", "ASSISTANCE"],
        ["ACT SAFELY", "UNTIL HELP"],
      ],
      caption: "ILLUSTRATIVE TRAINING OUTCOMES",
    },
    topics: [
      {
        title: "Recognise an Emergency",
        desc: "Identify situations that may require immediate first aid or emergency medical attention.",
      },
      {
        title: "Respond to Cardiac Emergencies",
        desc: "Understand the role of CPR and AEDs and how they are used in an emergency, within the scope of their training.",
      },
      {
        title: "Provide Initial Assistance",
        desc: "Develop an understanding of how to respond to common injuries and medical situations, including bleeding, burns, choking and fractures.",
      },
      {
        title: "Act Safely Until Help Arrives",
        desc: "Understand personal safety, infection prevention and the importance of seeking professional emergency assistance.",
      },
    ],
  },
  audience: {
    kicker: "Training for people, not just positions",
    heading: "Every Workplace Can Face a Medical Emergency.",
    text: "From offices and commercial facilities to industrial sites and construction environments, employees may be the first people present when someone needs help. This training is relevant for:",
    image: photo(IMG.training, 1200),
    imageAlt: "Colleagues in a workplace training session",
    tag: "For every workplace",
    items: [
      "Employees and workplace teams",
      "Supervisors and department managers",
      "Health and safety personnel",
      "First-aid representatives and emergency response teams",
      "Facility and operations personnel",
      "Organisations looking to strengthen workplace emergency preparedness",
    ],
  },
  enquiry: {
    kicker: "Help your people be ready",
    heading: "Give Your Team the Knowledge to Respond When Someone Needs Help.",
    paragraphs: [
      "Prepare your employees to recognise medical emergencies, understand first-aid responsibilities and respond more effectively while professional assistance is on its way.",
      "Speak with Meridian about First Aid, CPR and AED training for your organisation. Contact our team for course availability, fees, delivery options and registration.",
    ],
    formTitle: "Discuss your training requirements",
    formLabel: "Training enquiry",
    enquiryTypes: trainingEnquiryTypes,
    watermark: "CPR",
  },
};

const osha = {
  slug: "osha-10-30-hours-gi-ci-compliance",
  category: "Safety & Environment",
  shortName: "OSHA 10 & 30 Hours",
  fullName: "OSHA 10 & 30 Hours GI/CI Compliance Training",
  seoTitle: "OSHA 10 & 30-Hour Training | General & Construction Industry | Meridian MEQMP",
  metaDescription:
    "Explore OSHA 10-Hour and 30-Hour training for General Industry and Construction. Build workplace hazard awareness and strengthen occupational safety knowledge.",
  sections: ["intro", "journey", "inside", "enquiry"],
  hero: {
    eyebrow: "Occupational Health & Safety / Professional Training",
    titleLead: "OSHA",
    titleAccent: "10 & 30 Hours",
    subtitle: [
      "General Industry & Construction Industry",
      "A Safer Workplace Starts with People Who Recognise the Risks.",
    ],
    description:
      "Workplace hazards do not always announce themselves. Employees need to recognise unsafe conditions, understand their responsibilities and know how safe work practices apply to their jobs. OSHA 10-Hour and 30-Hour training helps build that foundation across General Industry and Construction.",
    cta: "Request training details",
    reference: [
      { label: "Training option", value: "General Industry (GI)" },
      { label: "Training option", value: "Construction Industry (CI)" },
    ],
    image: photo(IMG.construction, 1800),
    imageAlt: "Workers on an active construction site",
  },
  intro: {
    kicker: "Safety knowledge that reaches the workplace",
    aside:
      "A worker exposed to an unprotected fall. An unsafe machine operation. A chemical hazard that goes unnoticed.",
    heading: "Recognising a Hazard Is the First Step. Knowing What to Do About It Matters.",
    paragraphs: [
      "Workplace incidents often involve risks that could have been recognised earlier. But safety procedures only work when people understand the hazards around them and the responsibilities that come with their roles.",
    ],
    statement:
      "OSHA 10 and 30-Hour training helps employees and supervisors build a stronger understanding of workplace safety expectations and hazard prevention.",
  },
  journey: {
    kicker: "Two training pathways. Different responsibilities.",
    heading: "The Right Level of Training Depends on the Work and the Role.",
    text: "Both programmes focus on workplace health and safety, but they serve different audiences. Choose the level, then select the industry that matches your workplace.",
    image: photo(IMG.warehouse, 1200),
    imageAlt: "Large warehouse with stacked goods",
    label: "Training pathways",
    captionPrefix: "Pathway",
    stages: [
      {
        tab: "10-Hour",
        title: "OSHA 10-Hour: For Entry-Level Workers",
        text: "Designed to introduce workers to essential occupational safety and health awareness. It helps participants recognise common workplace hazards and understand basic safety responsibilities.",
      },
      {
        tab: "30-Hour",
        title: "OSHA 30-Hour: For Supervisors and Safety Personnel",
        text: "Designed for people with greater workplace safety responsibilities. It provides broader and more in-depth exposure to occupational safety and health topics relevant to their industry.",
      },
      {
        tab: "General Industry",
        title: "General Industry (GI)",
        text: "For workplaces such as manufacturing facilities, warehouses, processing operations and other general industry environments.",
      },
      {
        tab: "Construction",
        title: "Construction Industry (CI)",
        text: "For construction projects, contractors, site personnel and professionals working in construction environments.",
      },
    ],
  },
  inside: {
    kicker: "Build a stronger safety foundation",
    heading: "From Understanding Workplace Hazards\nto Taking Greater Responsibility.",
    text: "The value of OSHA training is its relevance to everyday work. Participants develop a stronger understanding of workplace risks, safe practices and the responsibilities involved in maintaining safer working conditions.",
    result:
      "The intended result: Workers and supervisors with a stronger understanding of occupational safety, better awareness of workplace hazards and greater readiness to contribute to accident prevention.",
    visual: {
      labelLeft: "Workplace safety",
      labelRight: "OSHA 10 & 30 Hours",
      core: ["SAFER", "WORKPLACES"],
      nodes: [
        ["WORKPLACE", "HAZARDS"],
        ["SAFE WORK", "PRACTICES"],
        ["WORKPLACE", "RESPONSIBILITIES"],
        ["SAFETY", "DECISIONS"],
      ],
      caption: "ILLUSTRATIVE TRAINING OUTCOMES",
    },
    topics: [
      {
        title: "Recognise Workplace Hazards",
        desc: "Become more aware of common occupational risks and unsafe working conditions.",
      },
      {
        title: "Understand Safe Work Practices",
        desc: "Develop a better understanding of protective measures, hazard communication and safe equipment use.",
      },
      {
        title: "Understand Workplace Responsibilities",
        desc: "Gain awareness of employer and employee responsibilities and the importance of following established safety procedures.",
      },
      {
        title: "Support Better Safety Decisions",
        desc: "Build the knowledge to identify concerns, communicate hazards and contribute to safer working practices.",
      },
    ],
  },
  enquiry: {
    kicker: "Invest in workplace safety knowledge",
    heading: "Are Your Workers and Supervisors Prepared for the Risks They Face?",
    paragraphs: [
      "The right safety knowledge helps people recognise hazards, understand their responsibilities and make safer decisions at work.",
      "Speak with Meridian about OSHA 10-Hour or 30-Hour training for General Industry or Construction. Contact our team for programme availability, fees, delivery options and registration.",
    ],
    formTitle: "Discuss your training requirements",
    formLabel: "Training enquiry",
    enquiryTypes: [
      "OSHA 10-Hour · General Industry",
      "OSHA 10-Hour · Construction",
      "OSHA 30-Hour · General Industry",
      "OSHA 30-Hour · Construction",
      "Not sure yet",
    ],
    watermark: "OSHA",
  },
};

export const coursePages = [
  internalAuditor9001,
  internalAuditor14001,
  internalAuditor22000,
  internalAuditor27001,
  internalAuditor41001,
  internalAuditor45001,
  internalAuditor50001,
  leadAuditor9001,
  leadAuditor14001,
  leadAuditor27001,
  leadAuditor31000,
  leadAuditor41001,
  leadAuditor45001,
  leadAuditor50001,
  fireSafety,
  firstAid,
  osha,
  ...examCoursePages,
];

export const coursePath = (slug) => `/services/training/${slug}`;
