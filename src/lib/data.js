// ─────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — all site content lives here.
//  Components only read from this file, so you never touch JSX
//  to update content. Search "TODO" to find what to personalize.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Subhashini Konda",
  firstName: "Subhashini",
  roles: ["Full-Stack Developer", "ML Enthusiast", "B.Tech CSE @ GPREC"],
  tagline:
    "Final-year B.Tech CSE student at G. Pulla Reddy Engineering College (CGPA 9.4) who loves turning ideas into working products — from campus platforms to AI agents.",
  email: "subhashinikonda008@gmail.com",
  location: "Kurnool, India",
  resumeUrl: "/resume.pdf",
  socials: [
    // TODO 1: put your real GitHub + LinkedIn URLs here
    { label: "GitHub", url: "https://github.com/KONDA-SUBHASHINI", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/subhashini-konda-012228387/", icon: "linkedin" },
    { label: "YouTube", url: "https://www.youtube.com/@subhashini_speaks", icon: "youtube" },
    { label: "Instagram", url: "https://www.instagram.com/subhashini_speaks", icon: "instagram" },
  ],
};

export const stats = [
  { value: "4+", label: "Internships completed" },
  { value: "13", label: "Featured projects" },
  { value: "5", label: "Hackathons" },
  { value: "9.4", label: "CGPA at GPREC" },
];

export const about = {
  paragraphs: [
    "I'm Subhashini, a Computer Science undergraduate at G. Pulla Reddy Engineering College, Kurnool, holding a 9.4 CGPA. My journey began with a diploma in computer engineering at Sri Venkateswara Govt. Polytechnic, Tirupati, which I completed with 95%, and it's where I first fell in love with building software that real people actually use. Before that, I finished my schooling at Sri Sai Vidyanikethan High School with a perfect 100% in SSC. Today I work across the stack — React and Node.js on the product side, Python and machine learning on the intelligence side.",    
    "What drives me is shipping. I'm a member of AVM Smart, a startup my friends and I run to deliver digital services for clients — I build premium demos like a junior-college platform and an e-commerce storefront that we use to win real contracts. Alongside that, I've automated HR workflows with n8n, trained ML models, and completed four internships.",
    "Right now I'm looking for opportunities where I can contribute to production-grade products, keep sharpening my full-stack and ML skills, and grow under strong mentors. If your team is building something people depend on, I'd love to talk.",
  ],
  education: [
    // TODO 2: fill in your school names exactly as you want them shown
    {
      school: "G. Pulla Reddy Engineering College, Kurnool",
      degree: "B.Tech — Computer Science & Engineering",
      period: "2024 — 2027",
      score: "CGPA 9.4",
    },
    {
      school: "Sri Venkateswara Govt. Polytechnic, Tirupati",
      degree: "Diploma in Computer Engineering",
      period: "2021 — 2024",
      score: "95%",
    },
    {
      school: "Sri Sai Vidyanikethan High School",
      degree: "SSC (10th)",
      period: "Graduated 2021",
      score: "100%",
    },
  ],
};

// 6 skill groups — edit items freely, cards render automatically
export const skills = [
  { title: "Languages", items: ["Python", "JavaScript", "Java", "C", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"] },
  { title: "Backend & Databases", items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"] },
  { title: "ML & AI", items: ["scikit-learn", "pandas", "NumPy", "n8n", "AI", "ML"] },
  { title: "Tools & Platforms", items: ["Git & GitHub", "VS Code", "Postman", "Vercel", "Framer Motion"] },
  { title: "CS Fundamentals", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Networks"] },
];

// Experience — shown on the home section and the /experience page.
// Every entry gets its own detail page at /experience/:slug.
// relatedProjects = slugs from featuredProjects, shown on the detail page.
export const experience = [
  {
    slug: "avm-smart-startup",
    role: "Founding Member — Full-Stack & AI/ML Developer",
    company: "AVM Smart",
    period: "2025 — Present",
    current: true,
    location: "Kurnool, India",
    certificate: "", // a startup — no certificate, left empty on purpose
    summary:
      "A digital-services startup I co-founded with my friends — we've moved from demos to real clients: our first client project is delivered, and our second is in progress.",
    points: [
      "Co-founded a digital-services startup that delivers websites and web platforms to local businesses and institutions.",
      "Built our flagship junior-college platform — public website, multi-step admissions workflow, and four role-based portals.",
      "Delivered our first real client project for Aruna's Home Kitchen — a home-based food business — adapting our ready food-store demo to her brand and products.",
      "Currently building the RRV Green Basket project — our second client engagement, now in progress.",
      "Run the live demos when we approach clients, and shape each product's design, features, and story.",
    ],
    overview: [
      "AVM Smart started with a simple observation: local businesses and institutions around Kurnool — colleges, shops, home-based food brands — were running with no real digital presence, and the agencies around them were quoting premium prices for template work. So my friends and I started our own digital-services startup, with me as the founding developer handling everything technical — full-stack builds and the AI/ML features our clients need.",
      "My role covers everything technical. For the AVM Smart Junior College platform — our flagship demo — I built the full product: the public website, the multi-step admissions workflow, and the four role-based portals with JWT authentication. That demo is what opened the door to real client conversations.",
      "And the clients came. Our first client, Aruna's Home Kitchen — a home-based food business — is delivered. I didn't build a new project from zero: I took our ready food-store demo and made the changes her business needed — her branding, products, and content — and that customized version became her live store. Right now we're building for our second client, RRV Green Basket.",
      "What makes this different from an internship is ownership. These aren't tasks handed to me — they're products I scope, design, build, and then present to real decision-makers. Walking a client through a live demo and watching them picture their own business in it taught me more about products than any tutorial ever could.",
      "The startup runs alongside my B.Tech, and it's where my best work lives — flagship demos that open doors, and client projects that prove we can deliver.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS"],
    relatedProjects: ["avm-smart-junior-college", "shyamala-home-made-foods"],
  },
  {
    slug: "talentlync-fullstack-intern",
    role: "Full-Stack Development Intern",
    company: "TalentLync",
    period: "Aug 2026 — Present",
    current: true,
    location: "Remote",
    certificate: "", // TODO: add your TalentLync certificate here once the internship completes
    summary:
      "A six-month internship I earned through a build-based selection drive — now in the structured training phase, logging every day publicly until I move onto a real-time project.",
    points: [
      "Selected through a three-stage recruitment drive: a Smart Event Organizer build task, a VidyaSetu problem-statement round, and technical + HR interviews.",
      "Maintaining a public day-by-day internship log on GitHub — every day's notes, practice code, and tools explored, documented and pushed.",
      "Currently in structured online training: HTML, forms, tables, CSS with Bootstrap and Tailwind, and JavaScript from variables to functions.",
      "Building CRUD-style mini-apps with browser Local Storage — storing form data, fetching it into tables, and updating records without a backend.",
      "Moving into a real-time project next, where the training concepts get applied to actual production work.",
    ],
    overview: [
      "TalentLync's recruitment was a build-your-way-in drive rather than a single interview. Round one asked for a Smart Event Organizer — a working event-management build. Round two handed us problem statements, and I built VidyaSetu, a tuition-platform solution, in response. Clearing both build rounds took me through technical and HR interviews, and I qualified for the six-month internship.",
      "The internship opened with a structured training phase — daily online classes rebuilding web fundamentals from the ground up. I treat it seriously precisely because it is fundamentals: HTML structure, forms, tables, iframes, CSS with Bootstrap and Tailwind, and then JavaScript — variables, data types, arrays, objects, functions, and browser Local Storage. Every single day is documented in my public internship-logs repository: notes, practice code, and the tools and AI helpers I explored, day by day.",
      "The training is hands-on, not slides. By the second week I was building CRUD-style mini-apps — storing form data in Local Storage, fetching it into tables, and updating records — small exercises that quietly teach the state-management ideas behind every frontend framework.",
      "The next phase is a real-time project, where the fundamentals get applied to actual production work. The internship runs alongside my final year at GPREC, and the public log keeps me accountable: twelve days in, every one documented, and counting.",
    ],
    stack: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "Local Storage", "Git & GitHub"],
    relatedProjects: ["vidyasetu-tuition-platform", "rsvp-iq-smart-event-organizer"],
  },
  {
    slug: "codenow-web-intern",
    role: "Web Development Intern (MERN)",
    company: "CodeNow Academy",
    period: "May 2026 — Jun 2026",
    current: false,
    location: "Remote",
    certificate: "/certificates/codenow-certificate.pdf", // put the file in public/certificates/
    summary:
      "A summer MERN internship where a four-developer team and I shipped a complete role-based gym management system.",
    points: [
      "Developed responsive web interfaces with React and modern CSS, focusing on clean component structure.",
      "Shipped the Prime Fitness Gym MERN system in a four-developer team — member dashboard, landing page, and role-based routing.",
      "Integrated REST APIs and improved page performance and accessibility.",
    ],
    overview: [
      "CodeNow Academy's summer internship puts interns on a real codebase instead of toy exercises. I joined a four-developer team building Prime Fitness Gym — a full MERN stack gym management platform with separate Admin and Member worlds.",
      "My slice of the product was the member-side experience and the routing backbone: the user dashboard with BMI-driven workout and diet plans, the landing page with membership plans and testimonials, and the role-based routing layer that keeps Admin and Member routes guarded on both the client and the server.",
      "Working in a shared repository for the first time taught me the unglamorous half of engineering — pulling before pushing, resolving merge conflicts, writing commits other people can read, and reviewing teammates' code without breaking their flow. Authentication was another first: bcryptjs hashing and JWT tokens wired into protected routes.",
      "The finished system is deployed live — my first internship project that anyone can open and click through.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "Bootstrap 5"],
    relatedProjects: ["gym-management-system"],
  },
  {
    slug: "slashmark-ml-intern",
    role: "Machine Learning Intern",
    company: "Slash Mark",
    period: "May 2026 — Jun 2026",
    current: false,
    location: "Remote",
    certificate: "/certificates/slashmark-certificate.pdf", // put the file in public/certificates/
    lor: "/certificates/slashmark-lor.pdf", // Letter of Recommendation — put the file in public/certificates/
    summary:
      "Six machine-learning projects across classical ML, deep learning, and recommender systems — from a 99.31% CNN on MNIST to a three-approach music recommender.",
    points: [
      "Completed 6 ML projects spanning classical ML, deep learning, data engineering, and recommender systems — every one a full pipeline from raw data to evaluated, documented results.",
      "Trained a TensorFlow/Keras CNN to 99.31% accuracy on 70,000 MNIST digits — ahead of KNN, SVM, and Random Forest (best classical model: 97.64%).",
      "Tuned XGBoost past two linear baselines: house prices (R² 0.70 → 0.88 on 21,613 King County records) and Black Friday sales (RMSE ≈ 2879 on 550,068 transactions).",
      "Learned data cleaning the hard way — 215 duplicate rows (28.7% of the dataset) were silently capping the blood-donation model; removing them lifted donor recall from 11% to 35%.",
      "Applied SHAP explainability on the Black Friday model, surfacing Product_Category_1, Occupation, and Age as the strongest purchase drivers.",
      "Built a music recommender three ways — TF-IDF content-based on 57,650 lyrics, KNN collaborative filtering with fuzzy matching, and SVD with grid search and 5-fold cross-validation.",
    ],
    overview: [
      "Slash Mark's Machine Learning internship was my structured deep-dive into the complete ML workflow — six projects progressing from beginner to advanced, covering classical algorithms, deep learning, data engineering, and recommender systems. Every project was a full pipeline: clean the data, engineer features, train and tune models, evaluate honestly, and document the result in its own README.",
      "The biggest lessons came from the data itself. I learned that data quality beats model complexity — a careful cleaning step often improved my models more than any algorithm change — and that choosing the right metric matters as much as choosing the right model. The internship also drilled one habit into me: never ship a single model. Comparing alternatives before picking a winner became my default way of working.",
      "Beyond the models, it taught me reproducibility — every project ships with its own README, requirements file, and notebooks, so anyone can clone the repository and run every pipeline end to end. That discipline, plus the habit of benchmarking and explaining results, is the foundation I build on for every AI project since.",
    ],
    stack: ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost", "TensorFlow", "Keras", "SHAP", "scipy"],
    relatedProjects: ["slashmark-ml-projects"],
  },
  {
    slug: "codeon-web-intern",
    role: "Web Development Intern",
    company: "Codeon Technologies",
    period: "Jun 2023 — Dec 2023",
    current: false,
    location: "Kurnool, India",
    certificate: "/certificates/codeon-certificate.pdf", // put the file in public/certificates/
    summary:
      "My first internship, during my diploma — six months focused on learning the web fundamentals: Figma design, HTML, CSS, JavaScript, PHP, and SQL.",
    points: [
      "My first internship — taken during my diploma, focused completely on learning the fundamentals of web development.",
      "Designed page layouts in Figma first, then built them — learning how a design turns into real code.",
      "Learned HTML, CSS, and JavaScript to build complete, responsive web pages.",
      "Learned PHP and SQL — server-side basics, database queries, and how forms talk to a database.",
    ],
    overview: [
      "Codeon Technologies was my first ever internship, taken during my diploma in computer engineering. I wasn't working with clients here — this internship was purely about learning, and it's where web development stopped being theory and became something my hands could actually do.",
      "It began with design. I learned Figma and practised shaping ideas into page layouts — wireframes, spacing, colors, and components — before writing any code. Designing first and building second is a habit that stuck with me: every project I've built since, from the diploma portal to the startup products, starts as a layout before it becomes code.",
      "Then came the core stack. HTML, CSS, and JavaScript gave me structure, styling, and interactivity — learned deliberately through assigned tasks and practice pages, not copied from tutorials. After the frontend, I moved to the server side with PHP and SQL: writing queries, connecting forms to a database, and understanding how a dynamic web page actually works end to end.",
      "Six months of fundamentals here is what made everything after possible. The diploma final-year portal, the MERN work at CodeNow, and the full-stack startup products I build today all stand on what this internship quietly taught me.",
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "PHP", "SQL"],
    relatedProjects: ["computer-department-portal"],
  },
];

// The projects shown on the /projects page and the home preview.
// categories = ARRAY — one project can appear under multiple filter chips.
// type = context you built it in: "Startup" | "Internship" | "Hackathon" | "Personal" | "College"
// tag = short label shown on the card beside the year — e.g. "NETRIK Hackathon", "CodeNow Internship"
//       (falls back to type when tag is missing)
// detail fields: tagline (one-liner), overview (paragraphs), features (detailed list)
export const featuredProjects = [
  {
    slug: "avm-smart-junior-college",
    title: "AVM Smart Junior College",
    categories: ["Next.js"],
    whenBuilt: "2025",
    type: "Startup",
    tag: "Startup",
    tagline: "Premium junior college digital platform — public website, multi-step admissions workflow, and role-based portals.",
    description:
      "A premium digital platform for junior colleges — public website, multi-step admissions workflow, and role-based portals for Admin, Faculty, Students, and Parents. The flagship demo of our startup's digital-services work.",
    overview: [
      "AVM Smart is a startup I'm a member of, started with my friends to deliver digital services to local businesses and institutions. This platform is our flagship demo: a premium junior-college platform built to show prospective clients exactly what their institution's digital presence could look like. We walk colleges through the live demo and use it to open conversations that turn into real contracts.",
      "The platform covers the complete digital needs of a junior college. The public website presents courses, faculty, gallery, and notices with a premium feel. A guided multi-step admissions workflow takes applicants from enquiry to application to confirmation. And a secure, role-based portal gives Admin, Faculty, Students, and Parents each their own view — every role sees only what it should.",
      "Under the hood, JWT authentication guards every portal action with server-side role verification, and an Express + MongoDB API keeps admissions data, notices, and profiles structured in one backend.",
    ],
    features: [
      "Public website with courses, faculty, gallery, and notices",
      "Multi-step admissions workflow — enquiry → application → confirmation",
      "Role-based portals: separate Admin, Faculty, Student, and Parent experiences",
      "JWT authentication with server-side role verification",
      "Admin dashboard to manage applications, notices, and site content",
      "Fully responsive design, tuned for parents browsing on phones",
    ],
    contribution:
      "I'm a founding member of the startup and built this demo end-to-end — the Next.js frontend, the Express/MongoDB API, the JWT auth flows, and the role-based portal logic. I also prepared the demo walkthrough we use when approaching college clients.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "JWT Auth"],
    status: "Live",
    screenshot: "/screenshots/avm-home.jpeg",
    live: "https://avm-smart-junior-college.vercel.app",
    github: "https://github.com/KONDA-SUBHASHINI/avm-smart-junior-college",
  },
  {
    slug: "shyamala-home-made-foods",
    title: "Shyamala Homemade — E-Commerce Storefront",
    categories: ["Next.js"],
    whenBuilt: "2026",
    type: "Startup",
    tag: "Startup",
    tagline: "Full-stack e-commerce for a home-made food business — complete storefront plus store-owner dashboard.",
    description:
      "A premium, animated e-commerce website for a home-based food business selling pickles, sweets, and snacks — complete customer storefront plus a store-owner dashboard to manage products, orders, categories, and customers.",
    overview: [
      "Shyamala Homemade is the second demo built under AVM Smart, made for the kind of client we want to serve: small home-based food businesses. It's a premium online shop for a business selling pickles, sweets, and snacks — polished and commercial enough that a shop owner can immediately picture it as their own store.",
      "It's two products in one. The customer-facing storefront has an animated home page, a searchable shop with filters and sorting, product pages with image galleries and pack-size variants, a slide-out cart, a wishlist, checkout with Cash-on-Delivery or online payment, and live order tracking from Pending to Delivered. The store owner gets a dedicated dashboard to manage products, categories, orders, customers, and store settings.",
      "The whole store runs on a global data layer backed by localStorage — cart, wishlist, orders, and dashboard data all persist across refreshes with no backend needed. Framer Motion powers the smooth animations and micro-interactions throughout, while a warm color palette and food-first imagery keep the experience feeling homemade rather than corporate.",
    ],
    features: [
      "Animated home page with hero banner, featured products, and category highlights",
      "Shop page with search, category filters, and price / popularity / newest sorting",
      "Product pages with image galleries, pack-size variants, stock status, and ratings",
      "Slide-out cart drawer, wishlist, and checkout with COD / online payment choice",
      "Order tracking — Pending → Confirmed → Preparing → Out for Delivery → Delivered",
      "Store-owner dashboard to manage products, categories, orders, and customers",
      "Sales overview with key stats on the dashboard home",
      "WhatsApp click-to-chat support and policy pages",
    ],
    contribution:
      "Built the complete storefront and store-owner dashboard — component structure, a global store backed by localStorage powering the cart, wishlist, and order flow, and the full checkout experience. I designed the animations with Framer Motion and shaped the warm, food-first visual identity myself.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lucide Icons"],
    status: "Live",
    screenshot: "/screenshots/shyamala-home.jpeg",
    live: "https://homemade.avmsmart.in/",
    github: "https://github.com/KONDA-SUBHASHINI/Shyamala-Home-Made-Food-Products",
  },
  {
    slug: "vidyasetu-tuition-platform",
    title: "VidyaSetu — AI Tuition Platform",
    categories: ["Vibe Coding", "AI"],
    whenBuilt: "2026",
    type: "Internship",
    tag: "TalentLync Recruitment Drive",
    tagline: "Every student deserves the right tutor — an AI-powered learning ecosystem that goes beyond discovery and booking.",
    description:
      "An AI-powered online & offline tuition platform — AI tutor matching, dropout prediction, parent dashboards, and smart study planning. My TalentLync full-stack selection task; it won me a 6-month internship.",
    overview: [
      "VidyaSetu began as my submission for the TalentLync full-stack selection process — an assessment of product thinking, UI/UX, and AI-assisted development. It did its job: that submission got me selected for a six-month internship at TalentLync. The problem I picked is real — existing tuition platforms stop at discovery and booking, while students keep struggling after joining tuition: wrong-fit tutors, poor study planning, zero parent visibility, missed classes, and gradual disengagement.",
      "VidyaSetu answers with intelligent, student-centric support. An AI Tutor Match Score builds a compatibility rating from each student's learning profile — subject, grade, budget, preferred language, learning style, online/offline preference, and exam goal — with personalized explanations for every recommendation. Engagement monitoring tracks attendance, assignments, homework, test scores, and participation so tutors get early dropout-risk alerts, while parents get a dedicated transparency dashboard with study hours, teacher feedback, weak subjects, and monthly progress.",
      "The AI Study Planner turns exam dates, subjects, weak topics, and available hours into daily plans, weekly plans, and a revision calendar with smart reminders. When a student misses a class, Missed Class Recovery bundles the teacher summary, notes, homework, recordings, and a catch-up checklist automatically. Every doubt goes through a Smart Priority Doubt Queue — ranked by upcoming exam date, waiting time, difficulty, and tutor availability — and an AI Doubt Assistant handles concept explanations, practice questions, and chapter summaries, escalating complex doubts to tutors.",
      "A unified Student Success Score ties it together, combining attendance, assignment completion, test scores, study-plan completion, learning consistency, tutor feedback, participation, and doubt resolution into one holistic metric. I built the entire platform solo with AI-assisted (vibe-coding) development — React and TypeScript, Tailwind CSS, Framer Motion animations, and Recharts analytics across three role-based dashboards: Student, Tutor, and Parent.",
    ],
    features: [
      "AI Tutor Match Score — compatibility-based tutor recommendations with personalized explanations",
      "Student engagement monitoring with early dropout-risk alerts for tutors",
      "Parent Transparency Dashboard — attendance, study hours, feedback, and monthly progress",
      "AI Study Planner — daily and weekly plans, revision calendar, and smart reminders",
      "Missed Class Recovery — teacher summary, notes, homework, recordings, and a catch-up checklist",
      "AI Doubt Assistant — explanations, practice questions, chapter summaries, and tutor escalation",
      "Smart Priority Doubt Queue — doubts ranked by exam date, waiting time, and difficulty",
      "Unified Student Success Score across attendance, scores, and consistency",
      "Language-friendly tutor discovery — English, Telugu, Hindi, Tamil, Kannada, Malayalam",
      "Three role-based dashboards: Student, Tutor, and Parent",
    ],
    contribution:
      "Sole developer — designed the product, the match-score logic, the dropout-risk signals, the Student Success Score model, and all three role dashboards, and built it with AI-assisted development as my TalentLync selection submission.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "Recharts"],
    status: "Live",
    screenshot: "/screenshots/vidyasetu-home.jpeg",
    live: "https://vidyasetu-tuition-platform.vercel.app",
    github: "https://github.com/KONDA-SUBHASHINI/vidyasetu-tuition-platform",
  },
  {
    slug: "rsvp-iq-smart-event-organizer",
    title: "RSVP IQ — Smart Event Organizer",
    categories: ["Vibe Coding"],
    whenBuilt: "2026",
    type: "Internship",
    tag: "TalentLync Recruitment Drive",
    tagline: "Predicts who will actually show up — weighted RSVPs turn 40% no-show chaos into confident planning.",
    description:
      "An event-organizing platform that predicts real attendance instead of just collecting RSVPs — weighted RSVP model, invite calculator, smart waitlist, and event-day check-in. My second TalentLync selection build.",
    overview: [
      "Events average around a 40% no-show rate, and traditional RSVP tools simply count yes/no responses — leaving organizers guessing on seating, catering, and logistics. RSVP IQ, my second TalentLync full-stack exercise, is built around one question: how many people will actually be in the room?",
      "The answer is a weighted RSVP model. Instead of a plain yes or no, attendees answer Definitely Coming, Probably Coming, Not Sure, or Can't Attend — weighted 0.95, 0.60, 0.25, and 0 — and the dashboard continuously combines those into a live expected-attendance estimate that is far more realistic than a raw RSVP count.",
      "Planning starts earlier too: an invite calculator computes how many invitations to send given a target attendance and expected no-show rate (80 target guests at 40% no-show means 133 invites). During the event, a smart waitlist auto-promotes attendees when cancellations happen, and the event-day check-in view compares expected vs actual attendance so organizers can see how the prediction held up.",
      "I built it with React, TypeScript, Tailwind CSS, and Vite around mock data, focusing the effort on prediction clarity — the organizer dashboard puts Expected Attendance, target, capacity, RSVP distribution, prediction confidence, and waitlist overview in one view.",
    ],
    features: [
      "Weighted RSVP system — 0.95 / 0.60 / 0.25 / 0 confidence weights",
      "Live attendance prediction — Definitely × 0.95 + Probably × 0.60 + Not Sure × 0.25",
      "Invite calculator — optimal invites from target attendance and no-show rate",
      "Event creation with target attendance and expected no-show configuration",
      "Smart waitlist with automatic promotion on cancellations",
      "Event-day check-in tracking expected vs actual attendance",
      "Organizer dashboard — capacity, RSVP distribution, and prediction confidence",
      "Analytics centered on the single metric that matters: Expected Attendance",
    ],
    contribution:
      "Sole developer for the TalentLync intern home exercise — designed the weighted-RSVP prediction model and the invite formula, and built the full organizer experience from event creation to event-day check-in.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    status: "Live",
    screenshot: "/screenshots/rsvpiq-home.jpeg",
    live: "https://smart-event-organizer.vercel.app",
    github: "https://github.com/KONDA-SUBHASHINI/smart-event-organizer",
  },
  {
    slug: "ai-hr-agent",
    title: "AI HR Agent",
    categories: ["AI"],
    whenBuilt: "2026",
    type: "Hackathon",
    tag: "NETRIK Hackathon",
    tagline: "An 8-stage AI hiring pipeline — 1,200 resumes in, onboarding plans out, zero manual steps.",
    description:
      "A fully connected AI HR pipeline that screens 1,200 resumes with a 9-layer offline screener, schedules interviews, generates candidate-specific questions, manages leaves, issues offer letters, and orchestrates onboarding. Built at the NETRIK Hackathon, IIITDM Kurnool.",
    overview: [
      "This was my team's build for the NETRIK Hackathon conducted by IIITDM Kurnool — Track: AI HR Agent. The task: automate the entire hiring journey end-to-end. Our pipeline takes 1,200 candidate resumes as input and pushes them through eight connected stages — screening, scheduling, question generation, leave management, offer letters, onboarding, escalation handling, and result export — with zero manual intervention.",
      "Screening is the heart of it: a 9-layer AI scorer that runs fully offline using sentence-transformers semantic similarity — no API cost, no rate limits, no internet needed. Every candidate is matched to their best-fit job description from 50 available JDs, so a data scientist is never scored against a DevOps role. The layers cover skill-depth scoring, green and red flags, timeline fraud detection, career trajectory, missing-skill risk, resume consistency, persona classification, and an interview-readiness score — ending with the top 5 candidates.",
      "The pipeline then keeps moving: interviews are scheduled against interviewer preferences and calendars with conflict-free slot booking; 10 questions per candidate — technical, behavioral, situational, role-specific — are generated against each candidate's actual skill gaps via OpenRouter LLM with a rule-based fallback; leave requests are processed against policy with an emergency override; offer letters are auto-drafted with role, CTC, and joining date; and onboarding runs as an 8-task dependency chain with human checkpoints at offer acceptance and day-one orientation.",
      "Every stage writes a transition log, and the run exports a schema-validated JSON with all eight judge sections. The design choices I'm proudest of: offline AI for screening instead of paid GPT calls, fair per-JD semantic matching instead of one JD for everyone, and graceful fallbacks so the pipeline never breaks without an API key.",
    ],
    features: [
      "9-layer offline AI resume screener with semantic best-fit JD matching",
      "Timeline fraud detection, persona classification, and interview-readiness scoring",
      "Conflict-free interview scheduling from interviewer preferences and calendars",
      "10 candidate-specific interview questions via LLM with rule-based fallback",
      "Policy-based leave management with emergency override logic",
      "Auto-generated offer letters with role, CTC, and joining date",
      "Checkpoint-based onboarding orchestration — 8-task dependency chain",
      "Keyword-based escalation handler for sensitive HR queries",
      "Schema-validated JSON export with full pipeline transition logs",
    ],
    contribution:
      "A team hackathon build — my part was the interview scheduling stage: reading interviewer preferences, blocking busy calendar slots, and booking conflict-free interviews for the top candidates, plus the related stage hand-offs. The shared repo includes the full 1,200-resume dataset and the judge-format export the organizers specified.",
    stack: ["Python", "sentence-transformers", "scikit-learn", "OpenRouter LLM", "pandas", "openpyxl"],
    status: "Completed",
    screenshot: "/screenshots/aihr-home.jpeg",
    live: "",
    github: "https://github.com/Google-Developers-Group-IIITDMK/Netrik_Terminators_track1",
  },
  {
    slug: "synthia",
    title: "SYNTHIA",
    categories: ["Vibe Coding", "n8n"],
    whenBuilt: "2025",
    type: "Hackathon",
    tag: "OUTSYSLAYER Hackathon",
    tagline: "One prompt in — text, images, audio, code, mind maps, and presentations out.",
    description:
      "A multimodal AI content platform that generates text, images, audio, code, mind maps, and presentations from a single prompt — orchestrated with n8n workflows and integrated AI models. Built at the OUTSYSLAYER Hackathon.",
    overview: [
      "SYNTHIA, my build for the OUTSYSLAYER Hackathon, started from a simple frustration: creating good learning material means juggling six different tools. SYNTHIA collapses that into one flow — a single prompt in, and the platform generates text, images, audio, code, mind maps, and presentations.",
      "Under the hood it's an automation story: n8n workflows coordinate the integrated AI models, so each content type is generated, refined, and delivered through scalable, automated pipelines rather than one-off scripts. My part was the front-facing home page and the image-generation workflow — wiring the n8n nodes that take a prompt, call the AI model, and return generated images into the platform.",
      "The hackathon version is deployed live, and the roadmap goes further — video generation and AI tutoring are the next capabilities on the list.",
    ],
    features: [
      "Single-prompt generation across six content types",
      "Text, image, and audio generation with integrated AI models",
      "Code generation for snippets and starter implementations",
      "Mind maps and presentations built from the same source prompt",
      "n8n workflow orchestration for scalable, automated pipelines",
      "Built for education and productivity use cases",
    ],
    contribution:
      "A hackathon team build — I designed and built the home page, and helped with the n8n nodes for image generation: the user's prompt flows into the AI model and the generated images come back into the app, ready to use.",
    stack: ["n8n", "AI Models", "Workflow Automation", "Prompt Design"],
    status: "Live",
    screenshot: "/screenshots/synthia-home.jpeg",
    live: "https://konda-subhashini.github.io/OUTSYSLAYER_HACKATHON/",
    github: "https://github.com/KONDA-SUBHASHINI/OUTSYSLAYER_HACKATHON",
  },
    {
    slug: "sih-2025-transit-tracker",
    title: "TransitTracker — Real-Time Bus Tracking",
    categories: ["Web", "AI"],
    whenBuilt: "2025",
    type: "Hackathon",
    tag: "Smart India Hackathon 2025",
    tagline: "Real-time bus tracking for small cities — GPS arrivals, SMS alerts for low-network areas, and crowd-aware planning, with a live simulation.",
    description:
      "Our Smart India Hackathon 2025 solution (PS 25013 — Real-Time Public Transport Tracking for Small Cities): GPS-enabled buses, an app + SMS hybrid for low-network areas, crowd prediction, and emergency alerts — backed by a live TransitTracker simulation.",
    overview: [
      "Commuters in Punjab's small cities were the brief: unreliable bus schedules, no real-time tracking, overcrowding with poor visibility, limited buses, weak network coverage, and no quick emergency response. Team Smart_gprec took problem statement 25013 under Transportation & Logistics and designed around one question — what still works when neither the network nor the buses are reliable?",
      "Our answer is a hybrid model. GPS-enabled buses with a Smart Route Finder give real-time arrivals and the best route options; a mobile app serves tech-savvy users while SMS alerts keep rural and low-network commuters equally informed; and crowd-based analysis predicts crowding before it happens, so authorities can deploy buses by real-time demand. Emergency alerts are wired in from day one, because safety was part of the problem, not an extra feature.",
      "To make the idea tangible we built TransitTracker — a live simulation of the commuter experience. Search buses from a departure point to a destination and you get live tracking with real-time positioning, accurate arrival and departure predictions, and complete route details with passenger capacity. The production system would add IoT GPS units on buses and an ML ETA model — the simulation demonstrates the product layer we designed.",
    ],
    features: [
      "Live Tracking — real-time bus locations with accurate positioning",
      "Find Your Bus — search by departure and destination",
      "Accurate Timing — precise departure and arrival predictions",
      "Route Information — full route details and passenger capacity",
      "SMS alerts so low-network and rural commuters stay informed",
      "Crowd prediction with demand-based bus deployment",
      "Emergency alert system for quick response",
    ],
    contribution:
      "A team submission for Smart India Hackathon 2025 — the problem research, the hybrid app + SMS design, and the feature set were shaped together, and the live TransitTracker simulation demonstrates the commuter experience we designed.",
    stack: ["React", "Node.js", "FastAPI", "PostgreSQL", "Redis", "ML for ETA", "SMS Gateway", "IoT GPS"],
    status: "Live",
    screenshot: "/screenshots/sih-2025-home.jpeg", // when ready: screenshot the live sim, save it as public/screenshots/transit-tracker-home.jpeg and put "/screenshots/transit-tracker-home.jpeg" here
    live: "https://sih-tracker-sim.lovable.app/",
    github: "",
  },
  {
    slug: "slashmark-ml-projects",
    title: "Slashmark ML Internship Projects",
    categories: ["ML"],
    whenBuilt: "2026",
    type: "Internship",
    tag: "Slash Mark Internship",
    tagline: "Six ML projects across classical ML, deep learning, and recommender systems — 99.31% CNN accuracy, R² 0.88 XGBoost, and a 3-way music recommender.",
    description:
      "A collection of 6 machine-learning projects completed during the Slash Mark Machine Learning internship — classical ML, deep learning, data engineering, and recommender systems, progressing from beginner to advanced. Every project is a full pipeline: data cleaning, modelling, honest evaluation, and a documented README.",
    overview: [
      "This repository is the complete output of my Slash Mark Machine Learning internship — six projects that escalate from a beginner CLI task manager to an advanced three-approach music recommender. Together they cover the four pillars of practical ML: classical algorithms, deep learning, data engineering, and recommender systems.",
      "The highlights: a house-price regressor where XGBoost beat Linear Regression (R² 0.70 → 0.88 on 21,613 King County records); MNIST digit recognition where a TensorFlow/Keras CNN reached 99.31% against 97.64% for the best classical model; and a Black Friday sales model trained on 550,068 transactions — EDA, outlier analysis, hyperparameter tuning, and SHAP explainability showing Product_Category_1, Occupation, and Age as the top purchase drivers — with XGBoost landing at RMSE ≈ 2879.",
      "The quieter lessons were the most valuable. In the blood-donation project, 215 duplicate rows (28.7% of the data) were silently hurting the model — removing them lifted donor recall from 11% to 35%. Choosing the right metric mattered everywhere: AUC-ROC over accuracy for imbalanced donor data, RMSE for regression. And the music recommender exists in three flavours — TF-IDF content-based on 57,650 song lyrics, KNN collaborative filtering with fuzzy matching, and SVD matrix factorization with grid search and 5-fold cross-validation.",
      "Every project ships with its own README, requirements file, and notebooks — fixed and reproducible. Along the way I repaired library compatibility issues (fuzzywuzzy, deprecated seaborn calls, broken data URLs) so anyone can clone the repo and run every pipeline.",
    ],
    features: [
      "Task Management App — CLI task manager with a Naive Bayes priority classifier and rule-based recommendations, CSV persistence",
      "House Price Prediction — Linear Regression vs XGBoost on 21,613 King County records — best R² = 0.88, MAE ≈ $67,000",
      "Handwritten Digit Recognition — KNN, SVM, Random Forest, and CNN on 70,000 MNIST images — best accuracy 99.31% (CNN)",
      "Blood Donation Forecast — binary classification on 748 donor records — best AUC = 0.7577; duplicate cleanup lifted recall 11% → 35%",
      "Black Friday Sales Prediction — 550,068 transactions with EDA, outlier analysis, SHAP explainability, and tuning — XGBoost RMSE ≈ 2879",
      "Music Recommender System — three approaches: TF-IDF content-based, KNN collaborative filtering, and SVD matrix factorization",
      "Per-project READMEs, requirements files, and run instructions — clone and reproduce any pipeline",
    ],
    subProjects: [
      {
        name: "Task Management App",
        desc: "CLI task manager that classifies task priority with a Naive Bayes model and recommends what to do next. CSV persistence.",
        metric: "Naive Bayes priority classifier",
        link: "https://github.com/KONDA-SUBHASHINI/Slash-Mark-ML-Projects/tree/main/Project_1_Simple_Task_List",
      },
      {
        name: "House Price Prediction",
        desc: "Linear Regression vs XGBoost on 21,613 King County records — feature engineering, outlier handling, and honest metric comparison.",
        metric: "Best R² = 0.88 · MAE ≈ $67,000",
        link: "https://github.com/KONDA-SUBHASHINI/Slash-Mark-ML-Projects/tree/main/Project_2_XGBoost_Home_Price_Prediction",
      },
      {
        name: "Handwritten Digit Recognition",
        desc: "KNN, SVM, Random Forest, and a TensorFlow/Keras CNN trained on 70,000 MNIST images — classical vs deep learning, side by side.",
        metric: "99.31% accuracy — CNN beats all 3 classical models",
        link: "https://github.com/KONDA-SUBHASHINI/Slash-Mark-ML-Projects/tree/main/Project_3_MNIST_Digit_Classification",
      },
      {
        name: "Blood Donation Forecast",
        desc: "Binary classification on 748 donor records — imbalanced-data handling where removing 28.7% duplicate rows lifted recall from 11% to 35%.",
        metric: "AUC 0.7577 · recall 11% → 35%",
        link: "https://github.com/KONDA-SUBHASHINI/Slash-Mark-ML-Projects/tree/main/Project_4_Blood_Donation_Forecast",
      },
      {
        name: "Black Friday Sales Prediction",
        desc: "550,068 transactions — EDA, outlier analysis, hyperparameter tuning, and SHAP explainability of the top purchase drivers.",
        metric: "XGBoost RMSE ≈ 2,879",
        link: "https://github.com/KONDA-SUBHASHINI/Slash-Mark-ML-Projects/tree/main/Project_5_Black_Friday_Sales_Prediction",
      },
      {
        name: "Music Recommender System",
        desc: "Three recommenders in one project — TF-IDF content-based on 57,650 song lyrics, KNN collaborative filtering, and SVD matrix factorization.",
        metric: "3 approaches · 57,650 lyrics",
        link: "https://github.com/KONDA-SUBHASHINI/Slash-Mark-ML-Projects/tree/main/Project_6_Music_Recommendation_Master",
      },
    ],
    contribution:
      "Solo work across all six projects — data cleaning, feature engineering, model training and tuning, evaluation, and every README. I also fixed library compatibility issues (fuzzywuzzy, surprise, deprecated seaborn functions, broken data URLs) to keep every notebook reproducible.",
    stack: ["Python", "scikit-learn", "XGBoost", "TensorFlow", "Keras", "pandas", "NumPy", "SHAP", "scipy"],
    status: "Completed",
    screenshot: "/screenshots/slashmark-home.jpeg", // when your banner is ready: save it as public/screenshots/slashmark-home.jpeg and put "/screenshots/slashmark-home.jpeg" here
    live: "", // no live demo — the notebooks and the repo are the deliverable
    github: "https://github.com/KONDA-SUBHASHINI/Slash-Mark-ML-Projects",
  },
  {
    slug: "gym-management-system",
    title: "Prime Fitness Gym — MERN System",
    categories: ["MERN"],
    whenBuilt: "2026",
    type: "Internship",
    tag: "CodeNow Internship",
    tagline: "Role-based MERN gym platform — BMI-driven workout and diet plans for members, full control for admins.",
    description:
      "A full-stack MERN gym management system with separate Admin and Member dashboards — BMI-based fitness goals, 7-day workout plans, daily diet plans, and complete membership management. Built with my team during the CodeNow Academy summer internship.",
    overview: [
      "Prime Fitness Gym is the project I built during my summer technical internship at CodeNow Academy, working as part of a four-developer team on a real full-stack MERN codebase. My role covered the member-side experience and the routing backbone: the user dashboard, the landing page, and the role-based routing that keeps Admin and Member areas cleanly separated.",
      "The member experience is personalization-driven. A BMI calculator classifies members as underweight, normal, overweight, or obese and recommends a fitness goal — weight loss, weight gain, or fitness. Confirming the goal unlocks a personalized 7-day workout plan and a full daily diet plan with calorie, protein, and water targets, plus a dashboard that surfaces membership status, today's workout, and a diet snapshot.",
      "Administrators get complete membership control: adding, viewing, editing, and deleting member records, and tracking membership status — Active, Inactive, or Cancelled — across Standard, Premium, and VIP plans. Authentication uses bcryptjs password hashing and JWT tokens with role-based access control, protected on both the client and the server.",
      "The codebase is split into a React (Vite) client with nested routing and an Express + MongoDB server exposing a documented REST API — my first internship experience of working in a shared repository with structured commits and code review.",
    ],
    features: [
      "BMI calculator with category classification and fitness-goal recommendation",
      "Personalized 7-day workout plans for three goal types",
      "Daily diet plans with calorie, protein, and water targets",
      "Separate Admin and Member dashboards with role-based routing",
      "Member CRUD management with Standard / Premium / VIP plans",
      "JWT authentication with bcryptjs hashing, protected on client and server",
      "Member profiles with photo upload and editable health details",
      "Landing page with membership plans, trainers, and testimonials",
    ],
    contribution:
      "A four-developer team project — I built the member user dashboard, the landing page, and the role-based routing layer that guards Admin and Member routes on both sides of the app.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "Bootstrap 5"],
    status: "Live",
    screenshot: "/screenshots/gym-home.jpeg",
    live: "https://prime-gym-management-system.vercel.app",
    github: "https://github.com/CodeNow-MERN-Internship-Batch/gym-management-system",
  },
  {
    slug: "computer-department-portal",
    title: "Computer Department Portal",
    categories: ["Web"],
    whenBuilt: "2024",
    type: "College",
    tag: "Diploma Final Year Project",
    tagline: "My diploma final-year project — a complete department website I led a five-member team to build.",
    description:
      "A fully functional Computer Department website built in my diploma final year — department info, technology explainers, project ideas, semester question papers, sports events with dynamic player management, and alumni details.",
    overview: [
      "This was my diploma final-year project (2024) and my first experience leading a team — five of us built the complete web presence for our Computer Department, and I served as team leader, splitting the sections, reviewing the work, and owning the integration.",
      "The portal is organized around what students actually need. A Technology page explains trending fields — AI, cloud computing, blockchain, data science, robotics — in student-friendly language. A Projects page curates final-year project ideas across IoT, software, and hardware. A Semester page gives quick access to previous year question papers by semester and subject, with view and download.",
      "The most dynamic part is the Sports page: it covers college games and events like IPSGM and Aadudam Andhra, and admins can add players dynamically — name, event, and result (winner or runner) — with the winners list updating automatically along with each player's participation history. An Alumni page rounds it out with responsibilities, meet updates, and a gallery.",
      "We built it with HTML, CSS, and JavaScript on the front, PHP for backend logic, and MySQL for the database, running on XAMPP — a classic stack, and the project where I learned how server-side code and a database actually connect.",
    ],
    features: [
      "Department home, About Us, faculty, and mission / vision pages",
      "Technology page — trending fields explained for students",
      "Project ideas library for IoT, software, and hardware projects",
      "Semester-wise previous question paper browsing and download",
      "Sports section covering college games, IPSGM, and Aadudam Andhra",
      "Dynamic player management — admins add players and results, winners update automatically",
      "Alumni page with meet updates and gallery",
    ],
    contribution:
      "Team leader of five — planned the section split, reviewed everyone's work, and built core sections end-to-end, including the PHP + MySQL dynamic sports and player management.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    status: "Completed",
    screenshot: "/screenshots/computer-portal-home.jpeg",
    live: "",
    github: "https://github.com/KONDA-SUBHASHINI/computer-department-portal",
  },
  {
    slug: "portfolio",
    title: "My Portfolio — This Website",
    categories: ["Portfolio"],
    whenBuilt: "2026",
    type: "Personal",
    tag: "Personal",
    tagline: "The site you're browsing right now — designed and built from scratch, no templates.",
    description:
      "This portfolio — a multi-page React site with a custom design system, an animated home page, a filterable project archive, and detailed case-study pages for every project.",
    overview: [
      "With internship applications and our startup's client pitches coming up, I needed a home for my work that made the projects easy to explore and hard to forget. So I designed and built this portfolio from scratch — no templates, no page builders.",
      "The design is intentionally mine: a warm biscuit canvas alternating with clean stone sections, deep navy for emphasis, serif display headings, and quiet shadows instead of loud gradients. Every project gets a real case-study page — overview story, full feature list, my role, stack, and links — because screenshots alone don't explain how a product thinks.",
      "Under the hood it's React with Vite and Tailwind CSS, multi-page routing with smooth scroll handling, and every piece of content living in one data file — so adding a project means editing data, never touching components. That's how new projects show up here within minutes of being finished.",
    ],
    features: [
      "Custom design system — biscuit and navy palette, serif display headings",
      "Multi-page routing: home, project archive with filters, and case-study pages",
      "Detailed project pages — overview, features, role, and links",
      "Content driven by a single data file, no component edits needed",
      "Fully responsive from phones to desktops",
    ],
    contribution:
      "Everything — visual design, component architecture, the data-driven content layer, and this very case study you're reading.",
    stack: ["React", "Vite", "Tailwind CSS", "React Router", "Lucide Icons"],
    status: "Completed",
    screenshot: "/screenshots/portfolio-home.jpeg", 
    live: "https://subhashini-konda-portfolio.vercel.app/", 
    github: "https://github.com/KONDA-SUBHASHINI/portfolio", 
  },
  {
    slug: "gmail-auto-labeller",
    title: "Gmail Auto-Labeller — n8n Workflow",
    categories: ["n8n"],
    whenBuilt: "2026",
    type: "Personal",
    tag: "Personal",
    tagline: "3 nodes that make sure I never miss an interview email buried in my inbox again.",
    description:
      "A 3-node n8n workflow that watches my inbox and auto-labels career-critical emails — built after I realized an interview call could slip past me under hundreds of mails.",
    overview: [
      "We've all been there — an inbox flooded with hundreds of emails, and somewhere buried in there is an interview call or a shortlisting notice. That almost happened to me, and instead of hoping it wouldn't, I automated the fix.",
      "The workflow is deliberately minimal — just 3 nodes. A Gmail Trigger fires whenever a new email arrives, an If node checks the subject for keywords like 'shortlisted' and 'interview', and on a match the email is automatically labelled so all career-critical mail groups under one label.",
      "Now my career-related emails sit neatly organized, ready to review and act on instantly — no scrolling, no missed opportunities. It's a small workflow with very real impact, and it's what got me seriously hooked on n8n.",
    ],
    features: [
      "Gmail Trigger that fires on every incoming email",
      "Subject-line keyword matching — 'shortlisted', 'interview', and more",
      "Automatic labelling of matched emails under one career label",
      "Just 3 nodes — minimal, maintainable, and easy to extend",
    ],
    contribution:
      "Designed and built the workflow myself — chose the trigger, wrote the keyword conditions, and tuned the labelling rules.",
    stack: ["n8n", "Gmail Trigger", "IF Node", "Automation"],
    status: "Completed",
    screenshot: "/screenshots/gmail-labeller-home.jpeg",
    live: "",
    github: "",
  },
  {
    slug: "daily-email-summariser",
    title: "Daily Email Summariser — n8n Workflow",
    categories: ["n8n"],
    whenBuilt: "2026",
    type: "Personal",
    tag: "Personal",
    tagline: "One clean digest of my entire day's inbox — delivered to Gmail and Telegram every evening.",
    description:
      "An n8n workflow that sends an end-of-day summary of every email received — total count, domain breakdown, and a brief on each mail — straight to Gmail and Telegram.",
    overview: [
      "Drowning in emails is a daily experience, so I built a Daily Email Summariser with n8n: at a set time every evening it collects every mail I received that day and sends me one clean digest instead of a messy inbox.",
      "The flow: a Schedule Trigger runs daily, a Get Many Messages node pulls all of that day's emails, and a JavaScript Code node processes them into a structured summary — the date and total mail count, a breakdown by domain, and a brief line about each mail received.",
      "The digest lands in two places at once: my Gmail and a Telegram push, so it reaches me wherever I am. No more endless inbox scrolling — one clean summary, delivered where I actually look.",
    ],
    features: [
      "Daily Schedule Trigger with a fixed evening run time",
      "Fetches all emails received during the day",
      "JavaScript Code node builds the summary — date, count, domain breakdown",
      "Brief per-mail digest so nothing is missed",
      "Delivered to both Gmail and Telegram",
    ],
    contribution:
      "Built end-to-end — the schedule, the retrieval node, and the JavaScript processing logic that shapes the digest before it's sent.",
    stack: ["n8n", "JavaScript", "Gmail", "Telegram API"],
    status: "Completed",
    screenshot: "/screenshots/email-summariser-home.jpeg",
    live: "",
    github: "",
  },
];

// Smaller / older one-liner projects — shown at the bottom of the
// Projects page when non-empty. Same shape as featured.
export const archiveProjects = [];

// Competed hackathons — the section auto-hides while this is empty.
// TODO 5: add your 8 hackathons, e.g.:
// { title: "Smart India Hackathon — Internal Round", period: "2024", role: "Team lead",
//   build: "Built a crop-price predictor in 24 hours", outcome: "Top 10 of 40 teams",
//   highlight: "First time presenting to real judges" },
export const hackathons = [
  {
    slug: "netrik",
    title: "NETRIK Hackathon — IIITDM Kurnool",
    period: "2026",
    role: "Team 'Terminators'",
    location: "IIITDM Kurnool",
    build: "As Team Terminators we built an 8-stage AI HR pipeline — resume parsing, offline semantic screening, scoring, and ranking — that processed 1,200 resumes entirely offline",
    outcome: "All 8 stages working with judge-format export",
    highlight: "Offline AI screening — zero API dependency",
    summary: "At NETRIK, IIITDM Kurnool's hackathon, our team Terminators built an 8-stage AI HR pipeline that screens 1,200 resumes with offline semantic AI — no APIs and no internet needed, so it worked anywhere.",
    overview: [
      "NETRIK at IIITDM Kurnool was a full-team build: as Terminators, we designed an AI HR agent that takes hiring from raw resumes to a judge-ready shortlist in one pipeline. Eight stages, each with a clear job — parsing, semantic screening, scoring, ranking, and a final export formatted the way judges wanted to read it.",
      "The engineering bet we made: run the AI completely offline. No external APIs meant no cost, no rate limits, and no internet dependency at the venue — semantic screening happened on our own machine. All 8 stages were working end to end by demo time, and the pipeline handled 1,200 resumes in the demo run. The complete build lives on the AI HR Agent project page.",
    ],
    points: [
      "8-stage pipeline from raw resume upload to judge-ready shortlist",
      "Offline semantic AI screening of 1,200 resumes — zero API dependency",
      "Semantic matching beyond keywords — meaning, not just exact words",
      "Ranking and shortlisting with scores at every stage",
      "Export formatted for the judges",
    ],
    stack: ["React", "Python", "Semantic AI", "NLP"],
    project: "ai-hr-agent",
  },
  {
    slug: "sih-2025",
    title: "Smart India Hackathon 2025",
    period: "2025",
    role: "Team 'Smart_gprec'",
    location: "Smart India Hackathon 2025 · PS 25013",
    build: "Real-time bus tracking for small cities — GPS arrivals, SMS alerts for low-network areas, crowd prediction, and emergency response (PS 25013)",
    outcome: "Backed the idea with a live TransitTracker simulation",
    highlight: "App + SMS hybrid designed for rural users",
    summary: "Team Smart_gprec took problem statement 25013 — real-time public transport tracking for small cities — and designed a hybrid bus tracking system that works even where the network is weak, backed by a live TransitTracker simulation.",
    overview: [
      "Commuters in Punjab's small cities were the brief: unreliable bus schedules, no real-time tracking, overcrowding with poor visibility, limited buses, weak network coverage, and no quick emergency response. Team Smart_gprec took problem statement 25013 under Transportation & Logistics and designed around one question — what still works when neither the network nor the buses are reliable?",
      "Our answer is a hybrid model. GPS-enabled buses with a Smart Route Finder give real-time arrivals and the best route options; a mobile app serves tech-savvy users while SMS alerts keep rural and low-network commuters equally informed; and crowd-based analysis predicts crowding before it happens, so authorities can deploy buses by real-time demand. Emergency alerts were part of the design from day one, because safety was in the problem statement itself.",
      "To make the idea tangible we built TransitTracker — a live simulation of the commuter experience: search a bus from departure point to destination and get live tracking, accurate arrival predictions, and full route details. The complete build story lives on the TransitTracker project page.",
    ],
    points: [
      "Live GPS tracking with accurate arrival and departure predictions",
      "Find your bus — search by departure point and destination",
      "SMS alerts so low-network and rural commuters stay equally informed",
      "Crowd prediction with demand-based bus deployment for authorities",
      "Emergency alert system designed in from day one",
      "Backed the idea with a live TransitTracker simulation",
    ],
    stack: ["React", "Node.js", "FastAPI", "PostgreSQL", "Redis", "ML for ETA", "SMS Gateway", "IoT GPS"],
    project: "sih-2025-transit-tracker",
  },
  {
    slug: "aqvh-2025",
    title: "Amaravati Quantum Valley Hackathon 2025",
    period: "2025",
    role: "Team 'Bit By Bit'",
    location: "Amaravati Quantum Valley · PS AQVH919",
    build: "Quantum path planning for delivery vehicles — VRP as QUBO, solved with QAOA and hybrid quantum–classical solvers in Qiskit (PS AQVH919)",
    outcome: "Solution design targeting 20–30% fuel and cost savings",
    highlight: "Our first quantum computing hackathon",
    summary: "Our first quantum hackathon. Team Bit By Bit took problem statement AQVH919 — quantum path planning for delivery vehicles — and redesigned delivery routing as a quantum optimization problem solved with QAOA in Qiskit.",
    overview: [
      "The Amaravati Quantum Valley Hackathon was our first quantum computing hackathon. Team Bit By Bit took problem statement AQVH919 — Quantum path planning for delivery vehicles, under Logistics: Fleet Optimization. The brief: traditional routing methods struggle with large, dynamic logistics networks, and quantum approaches promise what classical shortest-path algorithms cannot — optimization of the whole system, not just the shortest route.",
      "Our approach formulates the vehicle routing problem as QUBO and solves it with QAOA through Qiskit, paired with hybrid quantum–classical solvers so the design works within today's limited quantum hardware. GPS and mapping APIs feed live traffic into the model, machine learning handles demand prediction and dynamic rerouting, and deliveries stay balanced across the fleet — one unified model serving logistics, e-commerce, and even emergency vehicles.",
      "The impact case we pitched: 20–30% savings in fuel and operations, lower emissions, faster and more reliable deliveries, and a model that scales to any city. Our risk table was honest about the field — limited quantum hardware means hybrid methods for now, and real-time data integration starts with small pilots before scaling.",
    ],
    points: [
      "Vehicle routing formulated as QUBO — quantum-ready optimization",
      "QAOA with hybrid quantum–classical solvers built on Qiskit",
      "GPS and mapping APIs for live traffic and location data",
      "Machine learning for demand prediction and dynamic rerouting",
      "Load balancing across the whole fleet, not just per vehicle",
      "Target of 20–30% fuel and operations cost savings",
    ],
    stack: ["Qiskit", "QAOA", "QUBO", "Python", "Machine Learning", "GPS APIs"],
    project: "",
  },
  {
    slug: "outsyslayer",
    title: "OUTSYSLAYER Hackathon",
    period: "2025",
    role: "Team member",
    location: "OUTSYSLAYER Hackathon",
    build: "As a team we built SYNTHIA — a multimodal AI content platform where n8n workflows orchestrate AI models to generate ready-to-use learning and marketing content",
    outcome: "Deployed live",
    highlight: "One prompt generated six content types",
    summary: "As a team we built SYNTHIA — a multimodal AI content platform that turns one prompt into text, images, audio, code, mind maps, and presentations, all orchestrated through n8n workflows. The hackathon version is deployed live.",
    overview: [
      "SYNTHIA started from a simple frustration our team kept feeling: creating good learning material means juggling six different tools. So at OUTSYSLAYER we built one flow instead — a single prompt in, and the platform generates text, images, audio, code, mind maps, and presentations.",
      "Under the hood it's an automation story: n8n workflows coordinate the integrated AI models, so each content type is generated, refined, and delivered through scalable pipelines rather than one-off scripts. My part in the team was the front-facing home page and the image-generation workflow — wiring the n8n nodes that take a prompt, call the AI model, and return generated images into the platform.",
      "The hackathon version is deployed live, and the roadmap goes further — video generation and AI tutoring are the next capabilities on the list. The complete build story lives on the SYNTHIA project page.",
    ],
    points: [
      "One prompt in — six content types out: text, images, audio, code, mind maps, presentations",
      "n8n workflows coordinate AI models into scalable, automated pipelines",
      "My part in the team: the home page and the image-generation workflow in n8n",
      "Built for education and productivity use cases",
      "Deployed live at the hackathon",
    ],
    stack: ["n8n", "AI Models", "Workflow Automation", "Prompt Design"],
    project: "synthia",
  },
  {
    slug: "sih-2024",
    title: "Smart India Hackathon 2024",
    period: "2024",
    role: "Team 'Coding Wizards'",
    location: "Smart India Hackathon 2024 · PS 1586",
    build: "Smart Digital Learning — distraction-free courses, animated lessons, adaptive learning paths, and a doubt-solving chatbot (PS 1586)",
    outcome: "Full idea deck — features, tech plan, and feasibility built on student surveys",
    highlight: "Our first Smart India Hackathon idea round",
    summary: "Our first Smart India Hackathon. Team Coding Wizards took problem statement 1586 — Smart Education — and designed Smart Digital Learning, a distraction-free learning platform shaped by a real student survey we ran before writing a single feature.",
    overview: [
      "Smart India Hackathon 2024 was our team Coding Wizards' first SIH idea round, and we chose problem statement 1586 — Student Innovation, under Smart Education. Before designing anything we ran a student survey over Google Forms and collected real study pain points, then shaped every feature around what came back: distraction is the enemy, and one-size-fits-all content doesn't work.",
      "The concept is a distraction-free digital learning platform. A customizable notification control and focus timer protect study time. Enhanced search returns results you can turn into images, videos, real-world applications, and related projects. Animated educational videos use movie and cartoon characters matched to your interests, and study groups share one link to discuss doubts, attend video classes, and swap resources.",
      "Courses adapt to the learner: slow learners get extra content, assignments, and quizzes, while fast learners get accelerated material — and everyone earns a certificate on completion, backed by an NLP chatbot for instant doubt-solving. The tech plan we pitched: React on the front, Django (Python) behind it, PostgreSQL, AWS hosting, and strong data-privacy practices — with NPTEL's course structure and Infosys Springboard's chatbot as our references.",
    ],
    points: [
      "Ran a student survey first and shaped every feature around real pain points",
      "Distraction-free mode — customizable notification control and focus timer",
      "Enhanced search — results convert to images, videos, real-world uses, related projects",
      "Animated lessons with movie / cartoon characters matched to student interests",
      "Study groups — one link to discuss doubts, attend video classes, share resources",
      "Adaptive courses — extra content for slow learners, accelerated for fast learners",
      "NLP chatbot for instant doubt resolution",
    ],
    stack: ["React", "Django", "Python", "PostgreSQL", "AWS", "NLP"],
    project: "",
  },
];
export const certifications = [
  // TODO 6: replace with your 4 real certifications (title, issuer, year, url)
  { title: "AI — Advanced Level", issuer: "HEX", year: "2026", url: "/certificates/hex-2026-ai-advanced.pdf" },
  { title: "AI — Foundation Level", issuer: "HEX", year: "2026", url: "/certificates/hex-2026-ai-foundation.pdf" },
  { title: "CCNA — Introduction to Networks", issuer: "Cisco Networking Academy", year: "", url: "/certificates/ccna-introduction-to-networks.pdf" },
  { title: "Ethical Hacking Certification", issuer: "", year: "", url: "/certificates/ethical-hacking.pdf" },
  { title: "Python Certification", issuer: "NPTEL", year: "", url: "/certificates/nptel-python.pdf" },
  { title: "Java Certification", issuer: "NPTEL", year: "", url: "/certificates/nptel-java.pdf" },
];

export const beyondCode = [
  // TODO 7: your real beyond-code activities
    {
    title: "Startup member — AVM Smart",
    text: "With my friends, I run AVM Smart, a digital-services startup — I am the founding full-stack and AI/ML developer. I built our premium demos — a junior-college platform and an e-commerce storefront — that we use to win client deals, and our first live client site, Aruna's Home Foods, came out of that same pipeline.",
    stats: ["Founding member", "2 premium demos", "1 live client site"],
  },
];

export const codingProfiles = [
  // TODO 8: your real profile URLs
  { label: "LeetCode", url: "https://leetcode.com/u/KONDA_SUBHASHINI/" },
  { label: "CodeChef", url: "https://www.codechef.com/users/subhashini_5u8" },
  { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/249x5a0cj4f" },
];

// ---- Beyond Code: athletics medals (certificates available for all) ----
export const sports = [
  {
    meet: "Udaan",
    where: "GPREC · B.Tech annual sports meet",
    period: "B.Tech",
    medals: [
      { place: "1st", event: "800 m run" },
      { place: "1st", event: "4 × 100 m relay" },
      { place: "2nd", event: "400 m run" },
      { place: "2nd", event: "100 m run" },
      { place: "3rd", event: "200 m run" },
    ],
  },
  {
    meet: "IPSGM",
    where: "Diploma annual sports meet",
    period: "Diploma",
    medals: [
      { place: "3rd", event: "400 m run" },
      { place: "3rd", event: "4 × 100 m relay" },
    ],
  },
];

// ---- Beyond Code: service & campus life ----
export const campusLife = [
  {
    icon: "video",
    title: "subhashini_speaks",
    tag: "Tech channel · Instagram + YouTube",
    text: "My own tech channel where I share what I learn — concepts, builds and behind-the-scenes of my projects, explained in a way beginners can follow. So far I have published a complete Git & GitHub series of 20 videos, taking viewers from zero to confident with version control.",
    wide: true,
    links: [
      { label: "YouTube", url: "https://www.youtube.com/@subhashini_speaks" },
      { label: "Instagram", url: "https://www.instagram.com/subhashini_speaks" },
    ],
    stats: ["Git & GitHub series", "20 videos", "Beginner-friendly"],
  },
  {
    icon: "heart",
    title: "National Service Scheme (NSS)",
    tag: "Diploma · 3 years of service",
    text: "For all 3 years of my diploma I served as an NSS volunteer — a national program where students give time to community service and social-awareness activities. It taught me discipline, teamwork and showing up for people outside the classroom.",
    stats: [],
  },
  {
    icon: "store",
    title: "Ruby Jubilee food stall",
    tag: "B.Tech 2nd year · team of 6",
    text: "During my 2nd year of B.Tech, for our college's Ruby Jubilee celebrations, our team of 6 ran a food stall for 3 days — panipuri, borugulu and papad. We handled stock, pricing and sales ourselves and closed the celebration in profit.",
    stats: ["Team of 6", "3 days", "₹30,000 sales", "₹7,000 profit"],
  },
];
