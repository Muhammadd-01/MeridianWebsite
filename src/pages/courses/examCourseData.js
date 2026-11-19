// Course pages from the "Exam Prep" content document: the two exam-preparation
// courses (PMP®, PMI-RMP®) and the five Leadership & Management courses.
// Rendered by <CoursePage /> using the section types listed in each `sections`.

const photo = (id, width = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

const IMG = {
  stickyNotes: "1552664730-d307ca884978",
  teamLaptops: "1522071820081-009f0129c71c",
  teamMeeting: "1531482615713-2afd69097998",
  meeting: "1517048676732-d65bc937f952",
  planning: "1581092160562-40aa08e78837",
  dashboard: "1551288049-bebda4e38f71",
  documents: "1554224155-6726b3ff858f",
  dataCentre: "1558494949-ef010cbdcc31",
  serverRoom: "1573164713988-8665fc963095",
  classroom: "1524178232363-1fb2b075b655",
  auditorium: "1540575467063-178a50c2df87",
  construction: "1504307651254-35680f356dfd",
  refinery: "1516937941344-00b4e0337589",
  sparks: "1504917595217-d4dc5ebe6122",
  factory: "1567789884554-0b844b597180",
  electronics: "1581092918056-0c4c3acd3789",
  engineersLab: "1581092160607-ee22621dd758",
  labEngineers: "1581091226825-a6a2a5aee158",
  warehouse: "1586528116311-ad8dd3c8310d",
};

const ENQUIRE = "Enquire about the course";
const enquiryTypes = [
  "Course details and schedule",
  "Training for my organization",
  "Course content",
  "Other enquiry",
];

/* ------------------------------------------------------------------ */
/* PMP® EXAM PREPARATION                                               */
/* ------------------------------------------------------------------ */
const pmp = {
  slug: "pmp-exam-preparation",
  category: "Exam Preparation Courses",
  shortName: "PMP® Exam Preparation",
  fullName: "PMP® Exam Preparation",
  seoTitle: "PMP® Exam Preparation | Meridian Professional Training",
  metaDescription:
    "Prepare for the current PMP® exam with training covering the People, Process and Business Environment domains, and the demands of modern project management.",
  sections: ["intro", "weights", "extra", "audience", "enquiry"],
  hero: {
    eyebrow: "Project Management / Professional Training",
    longTitle: true,
    titleLead: "PMP®",
    titleAccent: "Exam Preparation",
    subtitle: ["The PMP® exam tests how you make project decisions."],
    description: [
      "Knowing project management terms is not enough. The exam presents situations involving teams, stakeholders, deadlines, risks and changing priorities. You need to understand the problem, consider the options and choose the most appropriate response.",
      "Meridian's PMP® Exam Preparation is designed for professionals preparing for the current PMI examination.",
    ],
    cta: "Request Course Details",
    secondaryCta: "Explore the Preparation",
    image: photo(IMG.stickyNotes, 1800),
    imageAlt: "Project team planning work on a board of sticky notes",
  },
  intro: {
    kicker: "What makes the exam challenging?",
    aside:
      "A project falls behind schedule. A stakeholder changes their expectations. Two team members disagree over how to proceed. A new risk threatens delivery.",
    heading: "The question may be about a familiar problem. The answer depends on the situation.",
    paragraphs: [
      "These are the kinds of situations project managers encounter. The PMP® exam tests whether you can apply project management principles when faced with them.",
      "Simply memorising processes and definitions can leave you unprepared for questions that require you to judge what should happen next.",
    ],
    statement:
      "Preparation needs to cover both the knowledge behind project management and how to apply it.",
  },
  weights: {
    kicker: "The current PMP® exam",
    heading: "Know what PMI expects you to understand.",
    text: "The revised PMP® examination, introduced in July 2026, is organised around three domains. Together, they cover the responsibilities of a project professional, from leading people to managing delivery and understanding the wider business.",
    items: [
      {
        pct: 33,
        title: "People",
        desc: "Leading teams, working with stakeholders, handling conflict and supporting effective collaboration.",
      },
      {
        pct: 41,
        title: "Process",
        desc: "Managing project work, planning, delivery, resources, risks and performance.",
      },
      {
        pct: 26,
        title: "Business Environment",
        desc: "Understanding organisational priorities, governance, compliance and the effect of business changes on projects.",
      },
    ],
    note: "The revised examination also places more emphasis on AI, sustainability, stakeholder engagement and the value projects deliver to organisations. Predictive, agile and hybrid approaches remain relevant across the examination.",
  },
  extra: {
    kicker: "What your preparation needs to cover",
    heading: "Be ready to work through the questions, not just recognise the terminology.",
    text: "A good understanding of project management helps you see why one response is more appropriate than another. This matters when exam questions involve competing priorities or several possible courses of action. Your preparation should help you:",
    items: [
      "Understand the responsibilities of a project manager across different project environments.",
      "Apply predictive, agile and hybrid approaches where they are appropriate.",
      "Consider the effect of decisions on teams, stakeholders and project objectives.",
      "Work through questions involving risk, change, delivery and business priorities.",
      "Recognise what a question is asking before selecting an answer.",
    ],
  },
  audience: {
    kicker: "Who is this training for?",
    heading: "For professionals preparing to take the next step in project management.",
    text: "The programme is relevant to:",
    image: photo(IMG.teamMeeting, 1200),
    imageAlt: "Project professionals discussing a plan",
    tag: "For project professionals",
    items: [
      "Project managers and project leaders",
      "Project coordinators and programme professionals",
      "Engineers and technical professionals managing projects",
      "Business and operations professionals involved in project delivery",
      "Experienced professionals preparing for the PMP® examination",
    ],
    note: "Before applying, candidates should check that they meet PMI's experience and education requirements.",
  },
  enquiry: {
    kicker: "Enquire about the programme",
    heading: "Planning to take the PMP® exam?",
    paragraphs: [
      "Speak with Meridian about the preparation programme, upcoming training arrangements and the information you need before enrolling.",
    ],
    formTitle: "Request PMP® Course Details",
    enquiryTypes,
    notes: {
      title: "PMP® exam and training information",
      paragraphs: [
        "The PMP® certification is awarded by the Project Management Institute (PMI). Completing a preparation course does not award the certification. Candidates must meet PMI's eligibility requirements and pass the examination.",
        "PMI requires 35 hours of project management education for most applicants, unless an accepted exemption applies. From 1 December 2026, additional provider requirements apply to live instructor-led training used towards this requirement. Contact Meridian to confirm the programme's duration, delivery format and completion documentation, and whether it meets the applicable PMI requirements.",
      ],
    },
    watermark: "PMP",
  },
};

/* ------------------------------------------------------------------ */
/* PMI-RMP® EXAM PREPARATION                                           */
/* ------------------------------------------------------------------ */
const rmp = {
  slug: "pmi-rmp-exam-preparation",
  category: "Exam Preparation Courses",
  shortName: "PMI-RMP® Exam Preparation",
  fullName: "PMI-RMP® Exam Preparation",
  seoTitle: "PMI-RMP® Exam Preparation Course | Meridian",
  metaDescription:
    "Prepare for the PMI-RMP® exam with training in project risk identification, qualitative and quantitative analysis, risk response planning and monitoring.",
  sections: ["intro", "diagram", "intro2", "extra", "audience", "enquiry"],
  hero: {
    eyebrow: "Project Risk Management / Professional Training",
    longTitle: true,
    titleLead: "PMI-RMP®",
    titleAccent: "Exam Preparation",
    subtitle: ["Develop your risk management expertise. Prepare for the PMI-RMP® exam."],
    description: [
      "Projects face uncertainty at every stage. A change in requirements, a delayed supplier, an unexpected cost or a shortage of resources can affect delivery.",
      "Managing these situations requires more than identifying possible problems. It takes the ability to assess risks, understand their impact and decide how best to respond.",
      "Meridian's PMI-RMP® Exam Preparation course is designed for professionals who want to strengthen their project risk management knowledge and prepare for the PMI-RMP® certification examination.",
    ],
    cta: "Request Course Details",
    secondaryCta: "Explore the Preparation",
    image: photo(IMG.dashboard, 1800),
    imageAlt: "Project data and performance charts on a screen",
  },
  intro: {
    kicker: "Why specialist risk management matters",
    aside: "The PMI-RMP® certification recognises specialist knowledge in this area.",
    heading: "Identifying a risk is only the beginning.",
    paragraphs: [
      "Project teams need to know which risks matter most, how they could affect project objectives and what action should be taken.",
      "A risk that appears minor at the planning stage can become a serious delivery issue if it is not properly assessed. Equally, a well-planned response can help a team avoid unnecessary disruption.",
      "For project managers, risk analysts and PMO professionals, the ability to work through these decisions is an important part of managing projects effectively.",
    ],
  },
  diagram: {
    kicker: "What the preparation covers",
    heading: "From risk identification to response and monitoring.",
    text: "The course addresses the main stages of project risk management and the knowledge candidates need to prepare for the PMI-RMP® examination.",
    label: "PMI-RMP® · Project risk management",
    hint: "Select a stage to explore",
    nodes: [
      {
        title: "Risk Identification",
        detail: "Recognising threats and opportunities that may affect project objectives.",
      },
      {
        title: "Risk Analysis",
        detail: "Using qualitative and quantitative techniques to assess likelihood, impact and priority.",
      },
      {
        title: "Risk Response Planning",
        detail: "Evaluating response options and deciding how identified risks should be addressed.",
      },
      {
        title: "Risk Monitoring",
        detail: "Tracking risks, reviewing planned responses and identifying changes that require further action.",
      },
    ],
    footText:
      "Preparation also includes practice questions and exam simulations to help candidates become familiar with exam-style questions.",
    footLabel: "Explore each stage ↗",
  },
  intro2: {
    kicker: "Apply your knowledge",
    heading: "Risk decisions need sound judgement, not guesswork.",
    paragraphs: [
      "Project risk management involves assessing different situations and deciding what deserves attention. Candidates need to understand the techniques, but also how to apply them.",
      "The preparation focuses on helping participants work through risk scenarios, assess possible consequences, consider response options and understand how risk management continues throughout a project's life.",
    ],
  },
  extra: {
    kicker: "Course outcome",
    tone: "tint",
    heading: "Be better prepared to manage project risks and take the PMI-RMP® exam.",
    text: "By completing the preparation programme, participants should be better equipped to:",
    items: [
      "Identify and assess project threats and opportunities.",
      "Apply qualitative and quantitative risk analysis techniques.",
      "Evaluate and plan suitable risk responses.",
      "Monitor risks and review the effectiveness of responses.",
      "Approach the PMI-RMP® examination with a stronger understanding of project risk management and experience working through practice questions.",
    ],
    note: "The programme is intended to strengthen both examination preparation and the practical understanding of project risk management.",
  },
  audience: {
    kicker: "Who should attend?",
    heading: "For professionals involved in managing project risk.",
    text: "This course is suitable for:",
    image: photo(IMG.documents, 1200),
    imageAlt: "Reviewing project figures and documents",
    tag: "For project risk professionals",
    items: [
      "Project managers",
      "Risk analysts and risk management professionals",
      "PMO professionals",
      "Project controllers",
      "Candidates preparing for the PMI-RMP® examination",
    ],
    note: "Candidates should check PMI's experience and education requirements before applying for the certification.",
  },
  enquiry: {
    kicker: ENQUIRE,
    heading: "Planning to take the PMI-RMP® examination?",
    paragraphs: [
      "Find out about the course, preparation materials, upcoming schedules and available delivery options.",
      "Speak with Meridian about your training requirements.",
    ],
    formTitle: "Request Course Details",
    enquiryTypes,
    watermark: "RMP",
  },
};

/* ------------------------------------------------------------------ */
/* BUSINESS CONTINUITY MANAGEMENT                                      */
/* ------------------------------------------------------------------ */
const bcm = {
  slug: "business-continuity-management-course",
  category: "Leadership & Management",
  shortName: "Business Continuity Management",
  fullName: "Business Continuity Management Course",
  seoTitle: "Business Continuity Management Course | ISO 22301 Training",
  metaDescription:
    "Learn business continuity management based on ISO 22301, including business impact analysis, disruption risk assessment, recovery strategies and continuity planning.",
  sections: ["extra", "diagram", "intro", "extra2", "audienceBand", "enquiry"],
  hero: {
    eyebrow: "Business Resilience / Professional Training",
    longTitle: true,
    titleLead: "Business Continuity",
    titleAccent: "Management",
    subtitle: ["When an important business operation stops, how quickly can you restore it?"],
    description: [
      "A cyber incident, equipment failure, supplier disruption or loss of a key facility can interrupt business operations without warning. The consequences depend on what the organisation has prepared in advance.",
      "Business continuity management helps organisations identify which activities are essential, understand the consequences of losing them and establish arrangements to maintain or restore operations within acceptable time frames.",
      "This course introduces the requirements and practices of ISO 22301 and their application to business continuity planning and management.",
    ],
    cta: "Request Course Details",
    reference: [
      { label: "Standard", value: "ISO 22301" },
      { label: "Subject", value: "Business Continuity" },
    ],
    image: photo(IMG.dataCentre, 1800),
    imageAlt: "Network infrastructure in an operations centre",
  },
  extra: {
    kicker: "The business impact",
    heading: "Not every interruption has the same consequences.",
    text: "A few hours without access to an internal system may be manageable. The same interruption could have serious consequences if it affects customer services, production, financial transactions or safety-critical operations. Business continuity planning starts by understanding these differences. Organisations need to determine:",
    items: [
      "Which activities are essential to delivering products and services?",
      "What happens if those activities are interrupted?",
      "How long can each activity remain unavailable?",
      "Which people, facilities, systems and suppliers are needed for recovery?",
      "What arrangements must be in place to resume operations?",
    ],
    note: "These questions help establish realistic recovery priorities instead of relying on a generic emergency plan.",
  },
  diagram: {
    kicker: "Working with ISO 22301",
    heading: "Understand the requirements behind a Business Continuity Management System.",
    text: "ISO 22301 provides the framework for establishing, implementing, maintaining and improving a Business Continuity Management System (BCMS).",
    label: "ISO 22301 · Business continuity management system",
    hint: "Select an element to explore",
    nodes: [
      {
        title: "Organisational context and leadership",
        detail: "Establish the scope, understand relevant requirements and define responsibilities.",
      },
      {
        title: "Business impact analysis and risk assessment",
        detail: "Identify essential activities, assess disruption risks and determine recovery priorities.",
      },
      {
        title: "Continuity strategies and plans",
        detail: "Select suitable arrangements for maintaining and restoring prioritised activities.",
      },
      {
        title: "Exercising and evaluation",
        detail: "Test continuity arrangements, review performance and address weaknesses.",
      },
    ],
    footText:
      "The course introduces the main requirements and how they relate to an organisation's operations.",
    footLabel: "Explore each element ↗",
  },
  intro: {
    kicker: "From plans to recovery",
    heading: "A continuity plan must work when normal operations do not.",
    paragraphs: [
      "Documenting procedures is only part of business continuity. People must understand their responsibilities, recovery arrangements must be realistic and the organisation must know whether its plans can be carried out.",
      "The course addresses business impact analysis, disruption risk assessment, recovery strategies, business continuity plans, crisis management responsibilities and the testing and review of continuity arrangements.",
    ],
  },
  extra2: {
    kicker: "Course outcome",
    tone: "tint",
    heading: "Know how to assess disruption and plan for business recovery.",
    text: "Participants should develop the knowledge to:",
    items: [
      "Identify activities that are critical to business operations.",
      "Understand business impact analysis and recovery priorities.",
      "Assess risks that could interrupt essential activities.",
      "Contribute to business continuity and recovery planning.",
      "Understand how to exercise, review and improve continuity arrangements.",
    ],
    note: "They should leave with a clearer understanding of how ISO 22301 can be applied to an organisation's business continuity needs.",
  },
  audienceBand: {
    kicker: "Who should attend?",
    text: "The course is relevant to:",
    items: [
      "Business continuity planners and coordinators",
      "Risk managers",
      "IT disaster recovery professionals",
      "Senior operations managers",
      "Department heads responsible for critical activities",
      "Professionals involved in business resilience and emergency planning",
    ],
  },
  enquiry: {
    kicker: ENQUIRE,
    heading: "How prepared is your organisation for an interruption?",
    paragraphs: [
      "Discuss the Business Continuity Management Course with Meridian and find out about the course content, schedule and available training arrangements.",
    ],
    formTitle: "Request Course Details",
    enquiryTypes,
    watermark: "22301",
  },
};

/* ------------------------------------------------------------------ */
/* TRAIN THE TRAINER                                                   */
/* ------------------------------------------------------------------ */
const trainTheTrainer = {
  slug: "train-the-trainer",
  category: "Leadership & Management",
  shortName: "Train the Trainer",
  fullName: "Train the Trainer Course",
  seoTitle: "Train the Trainer Course | Professional Training Skills",
  metaDescription:
    "Develop the skills to plan, prepare and deliver effective training. Learn adult learning principles, presentation, facilitation and training evaluation.",
  sections: ["intro", "diagram", "extra", "intro2", "audienceBand", "enquiry"],
  hero: {
    eyebrow: "Professional Development / Training Skills",
    longTitle: true,
    titleLead: "Train the",
    titleAccent: "Trainer",
    subtitle: ["Knowing your subject is one thing. Knowing how to teach it is another."],
    description: [
      "A professional may have years of experience and strong technical knowledge, but that does not automatically make them an effective trainer.",
      "Training requires preparation, clear explanations, suitable teaching methods and the ability to keep participants involved. It also means knowing whether people have understood what was taught.",
      "The Train the Trainer course helps professionals develop the skills needed to plan, deliver and evaluate effective training sessions.",
    ],
    cta: "Request Course Details",
    image: photo(IMG.classroom, 1800),
    imageAlt: "Trainer leading a session with participants",
  },
  intro: {
    kicker: "The challenge of delivering training",
    aside: "The difference often comes down to how the session is prepared and delivered.",
    heading: "Can you explain a subject in a way people can actually use?",
    paragraphs: [
      "A presentation can contain all the right information and still leave participants unsure of what to do.",
      "A good trainer needs to understand the audience, organise the subject, explain difficult points clearly and make room for questions and discussion.",
    ],
  },
  diagram: {
    kicker: "From subject knowledge to training skills",
    heading: "Learn how to plan and lead a training session.",
    text: "The course addresses the main responsibilities involved in preparing and delivering training.",
    label: "Train the Trainer · From preparation to evaluation",
    hint: "Select a stage to explore",
    nodes: [
      {
        title: "Understand the learners",
        detail: "Consider participants' existing knowledge, training needs and learning expectations.",
      },
      {
        title: "Prepare the session",
        detail: "Set clear learning objectives, organise the material and plan the session structure.",
      },
      {
        title: "Deliver the training",
        detail: "Use appropriate presentation, explanation, questioning and facilitation techniques.",
      },
      {
        title: "Manage participation",
        detail: "Encourage discussion, respond to questions and deal with different learning needs.",
      },
      {
        title: "Evaluate the results",
        detail: "Check understanding, gather feedback and identify areas for improvement.",
      },
    ],
    footLabel: "Explore each stage ↗",
  },
  extra: {
    kicker: "What effective training looks like",
    heading: "Keep people involved. Make the subject clear. Check what they have learned.",
    text: "An effective trainer does more than deliver information. They help participants follow the subject, ask relevant questions and connect what they learn with their work. The course covers:",
    items: [
      "Adult learning principles and learner engagement.",
      "Training needs and learning objectives.",
      "Session planning and preparation.",
      "Presentation and communication techniques.",
      "Questioning, discussion and group facilitation.",
      "Managing participation and classroom challenges.",
      "Assessing learning and evaluating training effectiveness.",
    ],
  },
  intro2: {
    kicker: "Course outcome",
    heading: "Be better prepared to take responsibility for a training session.",
    paragraphs: [
      "Participants should develop the ability to organise training material, set suitable learning objectives, prepare a session, communicate information clearly and manage participant involvement.",
      "They should also understand how to check learning and use feedback to improve future sessions.",
    ],
  },
  audienceBand: {
    kicker: "Who should attend?",
    text: "This course is suitable for:",
    items: [
      "Professionals who deliver internal company training",
      "Subject matter experts expected to train colleagues",
      "Supervisors and team leaders",
      "Learning and development professionals",
      "Technical and operational instructors",
      "Professionals moving into a training role",
    ],
  },
  enquiry: {
    kicker: ENQUIRE,
    heading: "Ready to take the lead in the training room?",
    paragraphs: [
      "Find out how the Train the Trainer course can help you plan sessions, communicate more effectively and manage the learning experience.",
    ],
    formTitle: "Request Course Details",
    enquiryTypes,
    watermark: "TTT",
  },
};

/* ------------------------------------------------------------------ */
/* SAUDI ARAMCO SCHEDULE Q AWARENESS                                   */
/* ------------------------------------------------------------------ */
const scheduleQ = {
  slug: "saudi-aramco-schedule-q-awareness",
  category: "Leadership & Management",
  shortName: "Saudi Aramco Schedule Q Awareness",
  fullName: "Saudi Aramco Schedule Q Awareness",
  seoTitle: "Saudi Aramco Schedule Q Awareness Training | Meridian",
  metaDescription:
    "Understand Saudi Aramco Schedule Q project quality requirements, including project quality plans, inspection and testing, contractor responsibilities and quality documentation.",
  sections: ["intro", "diagram", "extra", "extra2", "audienceBand", "enquiry"],
  hero: {
    eyebrow: "Project Quality / Professional Training",
    longTitle: true,
    titleLead: "Saudi Aramco",
    titleAccent: "Schedule Q Awareness",
    subtitle: [
      "Working on a Saudi Aramco project? Know the quality requirements before the work begins.",
    ],
    description: [
      "Meeting project quality requirements involves more than following a company's ISO 9001 procedures. Contractors and their teams must understand the quality obligations set out in their project contract and know how these requirements apply to the work they perform.",
      "Saudi Aramco Schedule Q establishes project-specific quality requirements for contractors. These requirements can extend beyond the organisation's general quality management system and affect engineering, procurement, construction, inspection and project documentation.",
      "This awareness course introduces the purpose and key requirements of Schedule Q and their relevance to project personnel.",
    ],
    cta: "Request Course Details",
    image: photo(IMG.construction, 1800),
    imageAlt: "Workers on an industrial construction project",
  },
  intro: {
    kicker: "Why Schedule Q matters",
    heading: "Project quality requirements must be understood by the people carrying out the work.",
    paragraphs: [
      "A contractor may have an established quality management system, approved procedures and experienced personnel. However, project work must also comply with the quality requirements specified in the applicable contract.",
      "Misunderstanding these requirements can lead to incomplete documentation, inspection delays, rejected work, corrective actions and problems during project handover.",
    ],
    statement:
      "Schedule Q awareness helps project personnel understand the additional quality obligations that apply to their work and the importance of following approved project arrangements.",
  },
  diagram: {
    kicker: "Understanding the requirements",
    heading: "Know how project quality is planned, controlled and verified.",
    text: "Schedule Q is a project contractual requirement. Its applicable revision and supporting documents must be understood in the context of the specific Saudi Aramco contract. The awareness programme introduces key areas such as:",
    label: "Schedule Q · Project quality requirements",
    hint: "Select an area to explore",
    nodes: [
      {
        title: "Quality management system",
        detail: "The relationship between ISO 9001 and project-specific quality obligations.",
      },
      {
        title: "Project Quality Plan",
        detail:
          "The role of the project quality plan in defining responsibilities, processes, resources and controls.",
      },
      {
        title: "Inspection and testing",
        detail:
          "The importance of inspection and test plans, approved procedures, inspection activities and acceptance requirements.",
      },
      {
        title: "Contractors and suppliers",
        detail:
          "Quality responsibilities across subcontractors, vendors and other parties involved in project execution.",
      },
      {
        title: "Records and documentation",
        detail: "The control and retention of quality documents and evidence of completed work.",
      },
    ],
    footLabel: "Explore each area ↗",
  },
  extra: {
    kicker: "Where the requirements affect project work",
    heading: "Quality must be built into each stage of execution.",
    text: "Schedule Q requirements are relevant throughout project delivery, not just when an inspection takes place. Personnel need to understand how quality controls apply to:",
    items: [
      "Engineering and design activities.",
      "Procurement and vendor quality requirements.",
      "Construction and installation.",
      "Inspection and testing.",
      "Nonconformity reporting and corrective action.",
      "Pre-commissioning, completion and handover.",
    ],
    note: "Understanding these responsibilities helps project teams work to the approved requirements and maintain the records needed to demonstrate conformity.",
  },
  extra2: {
    kicker: "Course outcome",
    tone: "tint",
    heading: "Understand your role in meeting Saudi Aramco project quality requirements.",
    text: "After the awareness training, participants should have a clearer understanding of:",
    items: [
      "The purpose of Schedule Q and its relationship with ISO 9001.",
      "The importance of the project Quality Plan and approved procedures.",
      "Their responsibilities in inspection, testing and quality control.",
      "Quality requirements involving contractors, subcontractors and vendors.",
      "Documentation, records and nonconformity reporting.",
      "The need to follow the applicable project contract and its approved requirements.",
    ],
  },
  audienceBand: {
    kicker: "Who should attend?",
    text: "This course is relevant to personnel involved in Saudi Aramco projects, including:",
    items: [
      "Project managers and project engineers",
      "QA/QC managers, engineers and inspectors",
      "Construction and site supervisors",
      "Procurement and supplier quality personnel",
      "Contractors and subcontractor representatives",
      "Project document controllers and quality coordinators",
    ],
  },
  enquiry: {
    kicker: ENQUIRE,
    heading: "Make sure your project team understands its quality responsibilities.",
    paragraphs: [
      "Discuss the Saudi Aramco Schedule Q Awareness course with Meridian and find out about the programme, training schedule and delivery arrangements.",
    ],
    formTitle: "Request Course Details",
    enquiryTypes,
    watermark: "Q",
  },
};

/* ------------------------------------------------------------------ */
/* LEAN SIX SIGMA GREEN BELT                                           */
/* ------------------------------------------------------------------ */
const greenBelt = {
  slug: "lean-six-sigma-green-belt",
  category: "Leadership & Management",
  shortName: "Lean Six Sigma Green Belt",
  fullName: "Lean Six Sigma Green Belt",
  seoTitle: "Lean Six Sigma Green Belt Training | Meridian",
  metaDescription:
    "Develop Lean Six Sigma Green Belt skills in DMAIC, process measurement, root cause analysis, process improvement and performance control.",
  sections: ["intro", "diagram", "extra", "extra2", "audienceBand", "enquiry"],
  hero: {
    eyebrow: "Process Improvement / Professional Training",
    longTitle: true,
    titleLead: "Lean Six Sigma",
    titleAccent: "Green Belt",
    subtitle: [
      "Find out where the process is losing time, money and quality. Then work out how to improve it.",
    ],
    description: [
      "A process can look efficient on paper and still create delays, unnecessary work, errors and customer complaints.",
      "Lean Six Sigma gives professionals a structured way to investigate these problems, use data to understand their causes and make improvements based on evidence.",
      "The Green Belt programme develops the knowledge and skills needed to work on process improvement projects and contribute to measurable improvements within an organisation.",
    ],
    cta: "Request Course Details",
    image: photo(IMG.factory, 1800),
    imageAlt: "Automated production line in a manufacturing plant",
  },
  intro: {
    kicker: "The problem with inefficient processes",
    aside: "These problems often have causes that are not immediately obvious.",
    heading: "Repeated problems rarely disappear on their own.",
    paragraphs: [
      "A production line experiences recurring defects. An approval process takes longer than expected. Customers keep reporting the same service issue. Employees spend time correcting work that should have been done properly the first time.",
      "Improving a process requires more than asking people to work faster. It means understanding how the work is performed, finding the sources of waste and variation, and using evidence to decide what needs to change.",
    ],
  },
  diagram: {
    kicker: "The DMAIC approach",
    heading: "A structured way to solve process problems.",
    text: "Lean Six Sigma Green Belt training introduces DMAIC, the five-phase method used to improve existing processes.",
    label: "DMAIC · Five-phase improvement method",
    hint: "Select a phase to explore",
    nodes: [
      {
        title: "Define",
        detail: "Clarify the problem, identify customer requirements and establish the improvement project's scope.",
      },
      {
        title: "Measure",
        detail: "Understand current process performance and collect reliable data.",
      },
      {
        title: "Analyse",
        detail: "Investigate the causes of defects, delays and unwanted variation.",
      },
      {
        title: "Improve",
        detail: "Develop and evaluate changes that address the identified causes.",
      },
      {
        title: "Control",
        detail: "Put controls in place to maintain the improvements and monitor results.",
      },
    ],
    footLabel: "Explore each phase ↗",
  },
  extra: {
    kicker: "The tools behind better process performance",
    heading: "Use data to understand what is really happening.",
    text: "Green Belt practitioners need to understand the tools used to examine process performance and support improvement decisions. The programme addresses areas such as:",
    items: [
      "Process mapping and value stream analysis.",
      "Customer requirements and critical-to-quality characteristics.",
      "Data collection and process measurement.",
      "Pareto analysis and cause-and-effect analysis.",
      "Basic statistical analysis and process capability.",
      "Failure Mode and Effects Analysis (FMEA).",
      "Improvement planning and process control.",
    ],
    note: "These methods help practitioners move from assumptions about a problem to a clearer understanding of its causes and possible solutions.",
  },
  extra2: {
    kicker: "Course outcome",
    tone: "tint",
    heading: "Be ready to contribute to structured improvement projects.",
    text: "Participants should develop the ability to:",
    items: [
      "Define process problems and improvement opportunities.",
      "Collect and interpret process data.",
      "Use appropriate tools to investigate root causes.",
      "Contribute to the development and evaluation of process improvements.",
      "Understand how to maintain results through process controls.",
    ],
    note: "The Green Belt level is intended for professionals who participate in improvement projects and apply Lean Six Sigma methods within their area of responsibility.",
  },
  audienceBand: {
    kicker: "Who should attend?",
    text: "The programme is suitable for:",
    items: [
      "Quality and process improvement professionals",
      "Engineers and production supervisors",
      "Operations and manufacturing personnel",
      "Process analysts",
      "Team leaders and supervisors",
      "Professionals involved in continuous improvement projects",
    ],
  },
  enquiry: {
    kicker: ENQUIRE,
    heading: "Start improving the way work gets done.",
    paragraphs: [
      "Speak with Meridian about the Lean Six Sigma Green Belt programme, its course coverage, training arrangements and available schedules.",
    ],
    formTitle: "Request Course Details",
    enquiryTypes,
    watermark: "LSS",
  },
};

/* ------------------------------------------------------------------ */
/* LEAN SIX SIGMA BLACK BELT                                           */
/* ------------------------------------------------------------------ */
const blackBelt = {
  slug: "lean-six-sigma-black-belt",
  category: "Leadership & Management",
  shortName: "Lean Six Sigma Black Belt",
  fullName: "Lean Six Sigma Black Belt",
  seoTitle: "Lean Six Sigma Black Belt Training | Meridian",
  metaDescription:
    "Develop advanced Lean Six Sigma Black Belt skills in DMAIC, statistical analysis, Design of Experiments, process improvement and project leadership.",
  sections: ["intro", "diagram", "extra", "extra2", "intro2", "audienceBand", "enquiry"],
  hero: {
    eyebrow: "Advanced Process Improvement / Professional Training",
    longTitle: true,
    titleLead: "Lean Six Sigma",
    titleAccent: "Black Belt",
    subtitle: ["When process problems are complex, improvement needs more than a quick fix."],
    description: [
      "Some process problems cannot be solved by adjusting one step or correcting an isolated error. They involve several departments, multiple process variables, inconsistent performance and causes that are difficult to identify.",
      "Lean Six Sigma Black Belt training develops advanced process improvement knowledge for professionals expected to lead more complex improvement projects, analyse performance and guide teams through change.",
    ],
    cta: "Request Course Details",
    image: photo(IMG.engineersLab, 1800),
    imageAlt: "Engineers reviewing a process together",
  },
  intro: {
    kicker: "The role of a Black Belt",
    heading: "Lead improvement where the problem is bigger than one process.",
    paragraphs: [
      "Complex improvement projects require people who can define the business problem, examine the available data, identify the factors affecting performance and guide the team towards a workable solution.",
      "A Black Belt practitioner is expected to take a broader role than someone simply applying individual improvement tools.",
      "This includes selecting suitable projects, working with stakeholders, directing analysis, supporting improvement teams and helping ensure that results are sustained.",
    ],
  },
  diagram: {
    kicker: "Advanced DMAIC",
    heading: "Take process improvement from investigation to sustained results.",
    text: "Black Belt training builds on the DMAIC approach and develops greater depth in its application.",
    label: "Advanced DMAIC · Black Belt depth",
    hint: "Select a phase to explore",
    nodes: [
      {
        title: "Define",
        detail:
          "Select and frame improvement projects, establish business cases and connect project goals with organisational priorities.",
      },
      {
        title: "Measure",
        detail:
          "Develop reliable measurement systems, assess process performance and establish a sound baseline.",
      },
      {
        title: "Analyse",
        detail:
          "Use advanced analytical and statistical methods to investigate process relationships and validate root causes.",
      },
      {
        title: "Improve",
        detail: "Develop, test and evaluate solutions that address the causes of poor performance.",
      },
      {
        title: "Control",
        detail:
          "Establish process controls, monitor results and support the long-term effectiveness of improvements.",
      },
    ],
    footLabel: "Explore each phase ↗",
  },
  extra: {
    kicker: "Advanced analysis and improvement methods",
    heading: "Go beyond identifying problems. Establish why they occur.",
    text: "Black Belt practitioners need a deeper understanding of process behaviour and the methods used to test improvement decisions. The programme addresses advanced areas such as:",
    items: [
      "Advanced statistical analysis and hypothesis testing.",
      "Regression analysis and relationships between process variables.",
      "Design of Experiments (DOE).",
      "Measurement System Analysis (MSA).",
      "Process capability and performance.",
      "Failure Mode and Effects Analysis (FMEA).",
      "Lean methods and waste reduction.",
      "Project selection, business cases and improvement governance.",
      "Control planning and sustained performance.",
    ],
    note: "The emphasis is on selecting and applying appropriate methods to complex process problems, rather than relying on one tool for every situation.",
  },
  extra2: {
    kicker: "Leading improvement projects",
    tone: "tint",
    heading: "The work does not end with finding the cause.",
    text: "A successful improvement project requires coordination across people, processes and functions. Black Belt professionals need to understand how to manage project progress, communicate findings and help teams implement agreed changes. The course develops knowledge relevant to:",
    items: [
      "Leading cross-functional improvement projects.",
      "Working with stakeholders and project teams.",
      "Evaluating improvement opportunities and business benefits.",
      "Presenting analysis and recommendations.",
      "Managing implementation and monitoring results.",
    ],
  },
  intro2: {
    kicker: "Course outcome",
    heading: "Be prepared to lead more demanding process improvement work.",
    paragraphs: [
      "Participants should develop the knowledge to lead structured improvement projects, investigate complex process problems using appropriate analytical methods, evaluate proposed solutions and establish controls to maintain improvements.",
      "They should also gain a clearer understanding of how improvement projects connect with business performance, quality, cost and operational objectives.",
    ],
  },
  audienceBand: {
    kicker: "Who should attend?",
    text: "This programme is intended for professionals with process improvement experience or a strong foundation in Lean Six Sigma, including:",
    items: [
      "Lean Six Sigma Green Belt practitioners",
      "Quality and continuous improvement managers",
      "Process improvement specialists",
      "Manufacturing and operations managers",
      "Engineers and process analysts",
      "Professionals responsible for leading improvement projects",
    ],
  },
  enquiry: {
    kicker: ENQUIRE,
    heading: "Ready to take on more complex improvement projects?",
    paragraphs: [
      "Discuss the Lean Six Sigma Black Belt programme with Meridian and find out about the course coverage, training arrangements and upcoming schedules.",
    ],
    formTitle: "Request Course Details",
    enquiryTypes,
    watermark: "LSS",
  },
};

export const examCoursePages = [pmp, rmp, bcm, trainTheTrainer, scheduleQ, greenBelt, blackBelt];
