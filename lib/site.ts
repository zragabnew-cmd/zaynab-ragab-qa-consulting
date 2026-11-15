export const SITE = {
  name: "Zaynab Ragab",
  descriptor: "AI-Powered QA Consulting",
  title: "Zaynab Ragab | AI-Powered QA Consulting",
  description:
    "QA consultant helping engineering teams find gaps in their testing process and improve regression, API testing, and AI-assisted QA.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  // Hosted payment link for the paid consultation (Paymob / Fawry / any provider)
  paymentUrl: process.env.NEXT_PUBLIC_PAYMENT_URL ?? "",
  // WhatsApp number in international format, digits only (e.g. 201001234567)
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
};

export const whatsappHref = (text = "Hello, I'd like to ask about a QA consultation.") =>
  SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}` : "";

export const CONSULTATION = {
  title: "1-Hour QA Consultation",
  price: "300 EGP",
  duration: "1 hour",
  blurb:
    "A focused one-on-one session to look at your testing challenge, answer your questions, and leave with clear next steps.",
  includes: [
    "Walk through your current QA setup and the problem you want to solve",
    "Honest feedback on your regression, API testing, or automation approach",
    "Practical guidance on where AI can help your testers (and where it will not)",
    "Prioritized next steps you can act on right away",
  ],
  note: "Need a deeper engagement? Use the discovery call to discuss scope, and we'll decide together.",
};

export const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#health-check", label: "QA Health Check" },
  { href: "/#ai-for-qa", label: "AI for QA" },
  { href: "/#about", label: "About" },
  { href: "/#speaking", label: "Speaking" },
  { href: "/#contact", label: "Contact" },
];

export const PROBLEMS = [
  "Regression takes too long",
  "Critical bugs still reach production",
  "Test coverage is unclear",
  "The QA process is inconsistent",
  "API testing is weak or manual",
  "Test cases are low quality or duplicated",
  "Automation exists, but it is flaky",
  "QA teams are not using AI effectively",
  "Ad hoc ChatGPT / Claude use, no shared workflow",
  "Releases are delayed by testing",
  "There is no clear QA strategy",
  "Leadership has no QA metrics",
  "QA can't scale with the team",
  "You want AI in QA but don't know where to start",
];

export const PROCESS = [
  { n: "01", title: "Discover", text: "Understand your product, team, release process, and where testing hurts most." },
  { n: "02", title: "Assess", text: "Review strategy, coverage, regression, APIs, defects, and automation to find the real gaps." },
  { n: "03", title: "Improve", text: "Prioritize quick wins and structural fixes into a practical, sequenced plan." },
  { n: "04", title: "Enable", text: "Equip your team with the workflows, templates, and skills to keep the gains." },
];

export const HEALTH_CHECK = {
  review: [
    "Test strategy",
    "Regression process",
    "Test coverage",
    "API testing",
    "Defect trends",
    "Test design",
    "Automation opportunities",
    "AI opportunities",
    "Release process",
    "QA metrics",
  ],
  deliverables: [
    "Current-state assessment",
    "Key gaps",
    "Risk analysis",
    "Quick wins",
    "Prioritized recommendations",
    "30/60/90-day roadmap",
  ],
};

export const AI_PAIRS = [
  ["Requirement", "Test Scenarios"],
  ["API Spec", "API Test Ideas"],
  ["Bug Report", "Root Cause Investigation Support"],
  ["Test Suite", "Optimization Suggestions"],
  ["User Story", "Risk Analysis"],
  ["Test Data Requirements", "Generated Test Data"],
  ["Manual Workflow", "Automation Starting Point"],
];

export const OUTCOMES = [
  "Shorter regression cycles",
  "Better test coverage",
  "Earlier defect detection",
  "Clearer QA ownership",
  "Stronger API coverage",
  "More reliable automation",
  "Faster test analysis",
  "Smarter use of QA resources",
  "Practical AI adoption",
];

export const GOOD_FIT = [
  "Engineering teams that feel testing is slowing releases",
  "Leaders who want an outside, objective view of their QA process",
  "Teams that want to adopt AI in QA with a clear plan",
  "Companies with manual-heavy API testing or a bloated regression suite",
  "Teams ready to act on prioritized recommendations",
];

export const NOT_FIT = [
  "Looking for someone to simply execute test cases",
  "Wanting a quick fix without changing the process",
  "Expecting AI to replace your whole QA team",
  "Not able to share access, context, or time with the team",
];

export const SPEAKING = [
  "AI for Software Testing",
  "AI-assisted Test Analysis & Design",
  "AI for API Testing",
  "Practical Claude / ChatGPT workflows for testers",
  "Modern QA practices for growing teams",
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  problem: string;
  solution: string;
  outcome: string;
  hero: string;
  problems: string[];
  assess: string[];
  does: string[];
  deliverables: string[];
  outcomes: string[];
  forWho: string[];
  process: string[];
  faq: { q: string; a: string }[];
};

const commonProcess = [
  "Discovery call to understand context and goals",
  "Access to relevant artifacts (requirements, tests, defects, pipelines)",
  "Assessment and analysis",
  "Findings and recommendations walkthrough",
  "Support during the first steps of implementation",
];

export const SERVICES: Service[] = [
  {
    slug: "qa-health-check",
    name: "QA Health Check",
    short: "Diagnosis and a prioritized roadmap",
    problem: "You know something is wrong with testing, but not exactly where.",
    solution: "A structured review of your QA process with clear findings and a 30/60/90-day plan.",
    outcome: "A shared, honest picture of your QA and a plan to improve it.",
    hero: "Understand where your testing process is leaking time, coverage, and quality.",
    problems: [
      "Releases feel risky and nobody can say why",
      "Regression keeps growing and nobody owns it",
      "Bugs found late are costly and repeated",
      "Leadership asks for QA status and there is no clear answer",
    ],
    assess: [
      "Test strategy", "Regression process", "Test coverage", "API testing", "Defect trends",
      "Test design", "Automation opportunities", "AI opportunities", "Release process", "QA metrics",
    ],
    does: [
      "Review your artifacts and talk with the team",
      "Identify the biggest gaps and risks",
      "Separate quick wins from structural changes",
      "Turn findings into a sequenced roadmap",
    ],
    deliverables: [
      "Current-state assessment", "Key gaps", "Risk analysis", "Quick wins",
      "Prioritized recommendations", "30/60/90-day roadmap",
    ],
    outcomes: ["Clarity on where quality is at risk", "A prioritized improvement plan", "Alignment between QA and leadership"],
    forWho: ["CTOs and Engineering Managers", "Heads of QA and QA Managers", "Founders scaling a product team"],
    process: commonProcess,
    faq: [
      { q: "How long does a Health Check take?", a: "It depends on team size and product complexity. We agree the scope and timeline on the discovery call." },
      { q: "Do you need access to our code?", a: "Not necessarily. Requirements, test assets, defect data, and conversations with the team are usually the most useful inputs." },
      { q: "What happens after the report?", a: "You can act on the roadmap yourselves, or we can discuss support for specific improvements." },
    ],
  },
  {
    slug: "qa-strategy",
    name: "QA Strategy & Process Improvement",
    short: "A clear, consistent way of testing",
    problem: "Testing depends on individuals, and the process differs from team to team.",
    solution: "A QA and test strategy with risk-based testing, defect management, and release quality gates.",
    outcome: "Consistent quality decisions and clearer QA ownership.",
    hero: "Replace ad hoc testing with a strategy your whole team can follow.",
    problems: [
      "No written QA or test strategy",
      "Different teams test in different ways",
      "Unclear definition of done and release criteria",
      "Defects are tracked but not learned from",
    ],
    assess: ["Current QA roles and ownership", "Risk areas", "Defect lifecycle", "Release criteria", "Metrics in use"],
    does: [
      "Define QA and test strategy aligned to your product risk",
      "Introduce risk-based testing",
      "Shape the defect management process",
      "Set release quality gates",
      "Choose QA metrics leadership can actually use",
    ],
    deliverables: ["QA / test strategy document", "Regression strategy", "Defect management guidelines", "Release quality gates", "QA metrics set"],
    outcomes: ["Consistent testing approach", "Clear release criteria", "Metrics leadership can trust"],
    forWho: ["Engineering Managers", "QA Managers", "Teams growing past informal testing"],
    process: commonProcess,
    faq: [
      { q: "Will this add heavy bureaucracy?", a: "No. The goal is the lightest process that gives your team consistent, risk-aware decisions." },
      { q: "Can it fit Agile teams?", a: "Yes. The strategy is designed around your delivery model, not the other way around." },
    ],
  },
  {
    slug: "api-testing",
    name: "API Testing Improvement",
    short: "Stronger, smarter API coverage",
    problem: "API testing is manual, shallow, or limited to happy paths.",
    solution: "Better scenarios, negative and integration testing, and a sound API regression approach.",
    outcome: "Stronger API coverage and earlier defect detection.",
    hero: "Move API testing beyond happy paths and manual checks.",
    problems: [
      "API tests cover only the happy path",
      "Integration issues appear late",
      "API regression is manual or missing",
      "Contracts change and tests break silently",
    ],
    assess: ["API test coverage", "Scenario quality", "Negative testing", "Integration points", "API regression approach", "Tooling in use"],
    does: [
      "Map API risks and coverage gaps",
      "Design scenarios, including negative and edge cases",
      "Introduce contract-oriented thinking",
      "Plan API regression and automation priorities",
    ],
    deliverables: ["API coverage assessment", "Scenario and test design guidance", "API regression plan", "Automation priorities"],
    outcomes: ["Stronger API coverage", "Fewer integration surprises", "A reusable API testing approach"],
    forWho: ["Backend-heavy teams", "QA Leads", "Teams with microservices or third-party integrations"],
    process: commonProcess,
    faq: [
      { q: "Which tools do you work with?", a: "I stay tool-flexible. The focus is on coverage and design, then on whatever tooling suits your stack." },
      { q: "Do you write the automation?", a: "The focus is diagnosis, design, and enablement. Implementation scope can be discussed on the call." },
    ],
  },
  {
    slug: "regression-optimization",
    name: "Regression Optimization",
    short: "Smarter, shorter regression",
    problem: "Regression takes too long and still misses important issues.",
    solution: "Risk-based regression, suite optimization, duplicate removal, and smarter test selection.",
    outcome: "Shorter regression cycles without losing confidence.",
    hero: "Cut regression time by testing what matters, not everything.",
    problems: [
      "Regression delays every release",
      "Suites keep growing with duplicated tests",
      "No priority between critical and low-risk tests",
      "Automation exists but is flaky or hard to trust",
    ],
    assess: ["Regression suite structure", "Duplicates and overlap", "Risk and priority", "Automation candidates", "Flaky areas"],
    does: [
      "Analyze the suite against product risk",
      "Remove duplicates and low-value tests",
      "Prioritize and tier the regression",
      "Recommend what to automate first",
    ],
    deliverables: ["Regression analysis", "Optimized suite structure", "Risk-based prioritization", "Automation opportunity list"],
    outcomes: ["Shorter regression cycles", "More reliable automation", "Smarter use of QA resources"],
    forWho: ["QA Managers", "Release Managers", "Teams with large manual or flaky regression suites"],
    process: commonProcess,
    faq: [
      { q: "Will we lose coverage?", a: "The aim is to protect risk coverage while removing waste. Every change is justified by risk." },
      { q: "Can we start without automation?", a: "Yes. Optimizing the suite first often makes automation cheaper and more effective." },
    ],
  },
  {
    slug: "ai-for-qa",
    name: "AI for QA Transformation",
    short: "Practical AI adoption in testing",
    problem: "Testers use AI ad hoc, or the team wants AI but doesn't know where to start.",
    solution: "A clear view of where AI removes repetitive work and a workflow your team can follow.",
    outcome: "Practical AI adoption that saves time and improves coverage.",
    hero: "Use AI where it creates value, not everywhere.",
    problems: [
      "Individual testers use AI in inconsistent ways",
      "No guidance on quality or data safety",
      "Unclear which QA tasks benefit most",
      "Leadership wants AI results without a plan",
    ],
    assess: [
      "Current AI usage", "Repetitive QA tasks", "Requirements and test analysis flow",
      "Test data needs", "Defect analysis", "Documentation effort",
    ],
    does: [
      "Identify the highest-value AI use cases in your QA flow",
      "Design practical workflows and prompts",
      "Set review rules so AI output stays trustworthy",
      "Pilot with your team and refine",
    ],
    deliverables: ["AI opportunity map", "Workflow and prompt guidelines", "Review and safety guidelines", "Pilot plan"],
    outcomes: ["Faster test analysis", "Better test coverage", "Practical AI adoption"],
    forWho: ["Heads of QA", "CTOs exploring AI in engineering", "QA teams ready to experiment responsibly"],
    process: commonProcess,
    faq: [
      { q: "Will AI replace our testers?", a: "No. The goal is to remove repetitive work so testers can focus on judgment, risk, and exploration." },
      { q: "Is our data safe?", a: "We define clear rules on what may and may not be shared with AI tools as part of the engagement." },
    ],
  },
  {
    slug: "qa-workshops",
    name: "QA Team Workshops",
    short: "Hands-on team enablement",
    problem: "Your team needs new skills, but generic training doesn't fit your product.",
    solution: "Hands-on corporate workshops built around practical QA and AI workflows.",
    outcome: "A team that can apply modern QA practices right away.",
    hero: "Practical workshops that turn ideas into daily team habits.",
    problems: [
      "Training is theoretical and quickly forgotten",
      "Team skills are uneven",
      "AI tools are available but poorly used",
      "New practices don't stick after rollout",
    ],
    assess: ["Team skill levels", "Current tools and workflow", "Learning goals", "Product context"],
    does: [
      "Tailor content to your product and team",
      "Run hands-on exercises with realistic material",
      "Provide templates and workflows to reuse",
      "Follow up so practices stick",
    ],
    deliverables: ["Workshop session(s)", "Exercises and templates", "Reusable prompt and workflow guides"],
    outcomes: ["Stronger team skills", "Consistent practices", "Practical AI adoption"],
    forWho: ["QA teams", "Engineering teams", "Companies investing in team enablement"],
    process: [
      "Discovery call to define goals and audience",
      "Tailor content to your context",
      "Deliver the workshop",
      "Share materials and follow-up guidance",
    ],
    faq: [
      { q: "Which topics are available?", a: "AI for Software Testing, AI-assisted Test Analysis & Design, AI for API Testing, practical Claude/ChatGPT workflows for testers, and modern QA practices." },
      { q: "Can workshops be delivered in Arabic or English?", a: "Yes. Language is agreed on the discovery call." },
    ],
  },
];
