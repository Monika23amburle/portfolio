import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaBars,
  FaBriefcase,
  FaCog,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMoon,
  FaPhoneAlt,
  FaPlug,
  FaReact,
  FaServer,
  FaSun,
  FaTimes,
  FaTools,
  FaAdjust,
} from "react-icons/fa";

import dashboardImg from "./assets/dashboard.png";
import gripImg from "./assets/grip.png";
import profileImage from "./assets/ProfileImage.png";
import resume from "./assets/resume.pdf";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#education-skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

const themeOptions = [
  { label: "Light", value: "light", icon: FaSun },
  { label: "Dark", value: "dark", icon: FaMoon },
  { label: "Auto", value: "auto", icon: FaAdjust },
];

const workAreas = [
  {
    icon: FaServer,
    title: "Backend Development",
    subtitle: "Secure & Scalable APIs",
    description:
      "Building reliable REST APIs with Node.js, Express.js, JWT authentication, role-based access, validation, and performance-focused backend logic.",
    accent: "text-cyan-300",
  },
  {
    icon: FaReact,
    title: "Frontend Development",
    subtitle: "Modern & Responsive UI",
    description:
      "Creating responsive React interfaces with reusable components, Redux state management, clean dashboards, and smooth user workflows.",
    accent: "text-violet-300",
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    subtitle: "Efficient Data Handling",
    description:
      "Designing MongoDB data models, writing efficient queries, handling API data flow, and keeping application data structured and secure.",
    accent: "text-emerald-300",
  },
  {
    icon: FaPlug,
    title: "Third-Party Integrations",
    subtitle: "Cloud, Maps, APIs & Realtime",
    description:
      "Integrating AWS S3 uploads, Socket.IO realtime chat, Leaflet maps, authentication services, and external APIs into production features.",
    accent: "text-amber-300",
  },
];

const experience = [
  {
    company: "Rheal Software Pvt Ltd",
    role: "Software Developer",
    period: "July 2023 - Present",
    stack: "React JS, Node JS, Express JS, MongoDB",
    points: [
      "Developed and maintained responsive web applications using React, Node.js, and MongoDB.",
      "Implemented Redux for centralized state management and cleaner application data flow.",
      "Converted business requirements into functional features aligned with product goals.",
      "Built APIs, authentication, and validation flows to improve security and performance.",
    ],
  },
];

const education = [
  {
    school: "D.K.T.E. Institute of Technology",
    degree: "B.Tech - Computer Science and Engineering",
    location: "Ichalkaranji, Maharashtra",
    period: "Aug 2019 - Aug 2023",
  },
  {
    school: "Govindrao High School and Junior College",
    degree: "Higher Secondary Certificate",
    location: "Ichalkaranji, Maharashtra",
    period: "Jun 2018 - Feb 2019",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    items: ["React JS", "Node JS", "Express JS", "Socket.IO", "Redux"],
  },
  {
    title: "Database & Cloud",
    items: ["MongoDB", "SQL", "AWS S3"],
  },
  {
    title: "Developer Tools",
    items: ["VS Code", "Visual Studio", "Postman", "Git", "Jira"],
  },
];

const projects = [
  {
    title: "Emergency Assistance Admin Portal",
    image: dashboardImg,
    period: "Mar 2024 - Present",
    role: "Full Stack Developer",
    summary:
      "Admin-facing portal for emergency assistance operations with secure access control, structured data workflows, and responsive management screens.",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Redux", "JWT"],
    skills: [
      "Authentication flow",
      "Role-based access control",
      "Reusable React components",
      "API validation",
      "Git collaboration",
    ],
    outcomes: [
      "Built scalable admin modules for managing operational data and user actions.",
      "Implemented secure JWT authentication and role-specific authorization checks.",
      "Improved dashboard usability with cleaner state handling and responsive layouts.",
    ],
  },
  {
    title: "Emergency Assistance Dashboard",
    image: dashboardImg,
    period: "Mar 2024 - Present",
    role: "Full Stack Developer",
    summary:
      "Realtime operations dashboard designed to help teams monitor emergency requests, communicate quickly, and work with live operational data.",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Socket.IO"],
    skills: [
      "Realtime communication",
      "MERN architecture",
      "Dashboard UX",
      "API development",
      "Database design",
    ],
    outcomes: [
      "Developed Socket.IO powered chat and live dashboard behavior for operational users.",
      "Designed backend APIs and MongoDB schemas to support dynamic modules.",
      "Connected frontend workflows with reliable server-side data handling.",
    ],
  },
  {
    title: "Quick Assist 911",
    image: dashboardImg,
    period: "Mar 2024 - Present",
    role: "MERN Stack Developer",
    summary:
      "Interactive emergency assistance product with location-based workflows, map layers, Redux-managed application state, and responsive user journeys.",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Redux", "Leaflet JS"],
    skills: [
      "Map integration",
      "Location markers",
      "Redux state management",
      "Responsive UI",
      "Team delivery",
    ],
    outcomes: [
      "Integrated Leaflet maps with markers and layers for location-focused features.",
      "Managed complex UI data through Redux for predictable application behavior.",
      "Delivered responsive screens that support field and desktop usage.",
    ],
  },
  {
    title: "GRIP - Globe Roof Inspection Program",
    image: gripImg,
    period: "Nov 2023 - Mar 2024",
    role: "Software Developer",
    summary:
      "Inspection management platform for roof assessment workflows with media uploads, secured modules, and TypeScript-based full-stack development.",
    tech: ["React TS", "Node TS", "Express TS", "MongoDB", "AWS S3", "JWT"],
    skills: [
      "TypeScript development",
      "CRUD modules",
      "AWS S3 uploads",
      "RBAC authorization",
      "Agile workflow",
    ],
    outcomes: [
      "Created inspection modules with create, update, read, and delete workflows.",
      "Implemented JWT and RBAC patterns for protected application areas.",
      "Connected AWS S3 media uploads with modular Fuse Material UI layouts.",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });
  const [resolvedTheme, setResolvedTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [contactStatus, setContactStatus] = useState("");
  const [contactStatusType, setContactStatusType] = useState("success");
  const [isSending, setIsSending] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleNavClick = (href) => {
    setActiveSection(href.replace("#", ""));
    closeMenu();
  };

  const changeTheme = (nextTheme) => {
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    setThemeMenuOpen(false);
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setContactStatusType("error");
      setContactStatus("Please fill in all fields before sending.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:monikaamburle11@gmail.com?subject=${subject}&body=${body}`;
      setContactStatusType("success");
      setContactStatus("Message ready. Please click send in your email app.");
      form.reset();
      return;
    }

    setIsSending(true);
    setContactStatus("");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: name,
            from_email: email,
            message,
            reply_to: email,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("EmailJS request failed");
      }

      setContactStatusType("success");
      setContactStatus("Message sent successfully. I will get back to you soon.");
      form.reset();
    } catch {
      setContactStatusType("error");
      setContactStatus("Message could not be sent. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateResolvedTheme = () => {
      setResolvedTheme(theme === "auto" ? (mediaQuery.matches ? "dark" : "light") : theme);
    };

    updateResolvedTheme();
    mediaQuery.addEventListener("change", updateResolvedTheme);
    return () => mediaQuery.removeEventListener("change", updateResolvedTheme);
  }, [theme]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      const currentSection =
        sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean)
          .findLast((section) => section.offsetTop <= scrollPosition)?.id ||
        "home";

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <div
      data-theme={resolvedTheme}
      className="min-h-screen overflow-x-hidden bg-[#050816] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.14),transparent_30%)] text-white transition-colors duration-300"
    >
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/85 shadow-[0_16px_50px_rgba(2,6,23,0.22)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Monika Amburle
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            <ul className="flex items-center gap-4 text-sm text-slate-200">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`rounded-full px-3 py-2 transition duration-300 hover:text-cyan-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-cyan-300/10 text-cyan-300"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative border-l border-white/10 pl-4">
              <button
                type="button"
                aria-label="Choose theme"
                className="grid h-10 w-10 place-items-center rounded-lg text-lg text-slate-300 transition duration-300 hover:bg-white/10 hover:text-violet-300"
                onClick={() => setThemeMenuOpen((open) => !open)}
              >
                <FaCog />
              </button>

              {themeMenuOpen && (
                <div className="absolute right-0 top-12 w-32 overflow-hidden rounded-lg border border-white/10 bg-[#11182c] py-1 shadow-2xl">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        className={`flex w-full items-center gap-3 px-4 py-2 text-left transition duration-300 hover:bg-violet-400 hover:text-slate-950 ${
                          theme === option.value
                            ? "bg-violet-500 text-white"
                            : "text-slate-300"
                        }`}
                        onClick={() => changeTheme(option.value)}
                      >
                        <Icon />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-xl lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b1022] px-5 py-5 lg:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-200">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 transition duration-300 hover:text-cyan-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-cyan-300/10 text-cyan-300"
                        : ""
                    }`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-5 grid max-w-7xl grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-[#11182c]">
              {themeOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={`flex items-center justify-center gap-2 px-3 py-3 text-sm transition duration-300 ${
                      theme === option.value
                        ? "bg-violet-500 text-white"
                        : "text-slate-300"
                    }`}
                    onClick={() => changeTheme(option.value)}
                  >
                    <Icon />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center px-5 pt-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mx-auto mb-5 w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 lg:mx-0"
              >
                Software Developer at Rheal Software Pvt Ltd
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl"
              >
                Hi, I&apos;m{" "}
                <span className="text-violet-300">Monika Amburle</span>
              </motion.h1>

              <h2 className="mt-6 min-h-12 text-2xl text-slate-200 md:text-4xl">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "React Developer",
                    "Node JS Developer",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                />
              </h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300 lg:mx-0"
              >
                Full Stack Developer with 2+ years of experience building
                responsive React applications, secure Node.js APIs,
                MongoDB-backed systems, realtime dashboards, and
                cloud-integrated product features.
              </motion.p>

              <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#projects"
                  className="rounded-lg bg-violet-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-violet-300"
                >
                  View Projects
                </a>
                <a
                  href={resume}
                  download
                  className="rounded-lg border border-cyan-300/60 px-7 py-3 font-semibold text-cyan-100 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:text-slate-950"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-12 flex justify-center gap-7 text-3xl lg:justify-start">
                <a
                  href="https://github.com/Monika23amburle"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-200 transition duration-300 hover:text-cyan-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/monikaamburle"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-200 transition duration-300 hover:text-cyan-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative mx-auto w-full max-w-md lg:max-w-xl"
            >
              <div className="absolute -left-8 top-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-violet-300/20 blur-3xl" />
              <div className="hero-art-frame relative overflow-hidden rounded-lg p-4 shadow-[0_30px_90px_rgba(2,6,23,0.22)] ring-1 ring-white/15">
                <img
                  src={profileImage}
                  alt="Female developer working on a laptop"
                  className="hero-profile-art w-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                About Me
              </p>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                I build clean full-stack products from idea to working feature.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l border-white/10 pl-0 lg:pl-10"
            >
              <p className="text-lg leading-9 text-slate-300">
                I am a Full Stack Developer focused on React JS, Node JS,
                Express JS, and MongoDB. My work includes secure REST APIs,
                realtime dashboards, JWT authentication, Redux state management,
                AWS S3 integrations, and responsive user interfaces.
              </p>
              <p className="mt-6 text-lg leading-9 text-slate-400">
                I enjoy turning business requirements into reliable features,
                improving application performance, and collaborating through
                Agile workflows with clear communication and ownership.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  ["2+", "Years Experience"],
                  ["4", "Major Projects"],
                  ["MERN", "Primary Stack"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg bg-white/[0.06] p-5 shadow-[0_18px_60px_rgba(2,6,23,0.18)] ring-1 ring-white/10"
                  >
                    <p className="text-3xl font-bold text-violet-300">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="what-i-do" className="bg-white/[0.035] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                What I Do
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Full-stack development services I work on.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {workAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.article
                    key={area.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="rounded-lg bg-[#11182c]/85 p-7 shadow-[0_18px_70px_rgba(2,6,23,0.22)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-white/20"
                  >
                    <div
                      className={`mb-6 grid h-12 w-12 place-items-center rounded-lg bg-white/10 text-2xl ${area.accent}`}
                    >
                      <Icon />
                    </div>
                    <h3 className="text-2xl font-bold">{area.title}</h3>
                    <p className={`mt-2 font-semibold ${area.accent}`}>
                      {area.subtitle}
                    </p>
                    <p className="mt-4 leading-7 text-slate-300">
                      {area.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Experience
                </p>
                <h2 className="text-4xl font-bold md:text-5xl">
                  Professional work history.
                </h2>
              </div>
              <a
                href={resume}
                download
                className="inline-flex w-fit items-center gap-3 rounded-lg border border-white/15 px-5 py-3 font-semibold text-slate-100 transition duration-300 hover:border-amber-300 hover:text-amber-200"
              >
                Download CV <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>

            <div className="space-y-6">
              {experience.map((job) => (
                <motion.article
                  key={job.company}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="rounded-lg bg-[#0b1022]/80 p-7 shadow-[0_22px_80px_rgba(2,6,23,0.24)] ring-1 ring-white/10 md:p-8"
                >
                  <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                    <div>
                      <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-amber-300/10 text-2xl text-amber-300">
                        <FaBriefcase />
                      </div>
                      <h3 className="text-2xl font-bold">{job.company}</h3>
                      <p className="mt-2 text-lg font-semibold text-violet-300">
                        {job.role}
                      </p>
                      <p className="mt-3 text-slate-400">{job.period}</p>
                      <p className="mt-4 text-sm leading-6 text-cyan-200">
                        {job.stack}
                      </p>
                    </div>

                    <ul className="space-y-4 text-slate-300">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-7">
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="education-skills" className="bg-white/[0.035] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Education & Skills
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Technical foundation with practical MERN stack delivery.
              </h2>
            </div>

            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="relative pl-8">
                <span className="absolute left-[11px] top-2 h-full w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent" />
                {education.map((item, index) => (
                  <motion.article
                    key={item.school}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <span className="absolute -left-[31px] top-1 grid h-6 w-6 place-items-center rounded-full bg-cyan-300 text-[10px] text-slate-950 ring-8 ring-[#0b1022]">
                      <FaGraduationCap />
                    </span>
                    <p className="mb-2 text-sm font-semibold text-cyan-200">
                      {item.period}
                    </p>
                    <h3 className="text-2xl font-bold leading-tight">
                      {item.school}
                    </h3>
                    <p className="mt-2 text-lg text-violet-200">
                      {item.degree}
                    </p>
                    <p className="mt-3 text-slate-400">{item.location}</p>
                  </motion.article>
                ))}
              </div>

              <div className="space-y-7">
                {skillGroups.map((group, index) => (
                  <motion.article
                    key={group.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.07 }}
                    className="border-b border-white/10 pb-7 last:border-b-0 last:pb-0"
                  >
                    <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet-300/10 text-violet-300">
                          {index === 0 ? <FaCode /> : <FaTools />}
                        </span>
                        <h3 className="text-xl font-bold">{group.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Projects
                </p>
                <h2 className="text-4xl font-bold md:text-5xl">
                  Selected full-stack work.
                </h2>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 lg:justify-self-end">
                Each project below is presented as a focused case study with the
                product goal, technology stack, key skills, and implementation
                highlights.
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="overflow-hidden rounded-lg bg-[#0b1022]/85 shadow-[0_26px_90px_rgba(2,6,23,0.28)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-white/20"
                >
                  <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="flex min-h-72 items-center justify-center bg-white p-8 lg:p-10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-h-56 w-full max-w-md object-contain"
                      />
                    </div>
                    <div className="p-6 md:p-8 lg:p-10">
                      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                            {project.role}
                          </p>
                          <h3 className="max-w-3xl text-3xl font-bold leading-tight text-violet-300">
                            {project.title}
                          </h3>
                        </div>
                        <span className="rounded-md bg-cyan-300/10 px-3 py-2 text-sm text-cyan-200">
                          {project.period}
                        </span>
                      </div>

                      <p className="max-w-4xl text-lg leading-8 text-slate-300">
                        {project.summary}
                      </p>

                      <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                            Project Highlights
                          </h4>
                          <ul className="mt-4 space-y-3 text-slate-300">
                            {project.outcomes.map((outcome) => (
                              <li key={outcome} className="flex gap-3 leading-7">
                                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-violet-300" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-5">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                              Tech Stack
                            </h4>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.tech.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-md bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                              Key Skills
                            </h4>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded-md bg-white/10 px-3 py-2 text-sm text-slate-200"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0b1022] px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Contact
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
                Let&apos;s build something useful.
              </h2>
              <div className="mt-8 space-y-4 text-slate-300">
                <a
                  href="tel:+918080472541"
                  className="flex items-center gap-4 transition duration-300 hover:text-emerald-300"
                >
                  <FaPhoneAlt className="text-emerald-300" />
                  +91 8080472541
                </a>
                <a
                  href="mailto:monikaamburle11@gmail.com"
                  className="flex items-center gap-4 transition duration-300 hover:text-emerald-300"
                >
                  <FaEnvelope className="text-emerald-300" />
                  monikaamburle11@gmail.com
                </a>
                <p className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-emerald-300" />
                  Pune, Maharashtra
                </p>
              </div>
            </div>

            <form
              className="grid gap-5 rounded-lg border border-white/10 bg-[#11182c] p-6 md:p-8"
              onSubmit={handleContactSubmit}
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="rounded-lg border border-white/10 bg-[#080d1d] p-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-emerald-300"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="rounded-lg border border-white/10 bg-[#080d1d] p-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-emerald-300"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="resize-none rounded-lg border border-white/10 bg-[#080d1d] p-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-emerald-300"
              />
              <button
                type="submit"
                disabled={isSending}
                className="rounded-lg bg-emerald-300 px-6 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-emerald-200"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {contactStatus && (
                <p
                  className={`text-sm font-medium ${
                    contactStatusType === "success"
                      ? "text-emerald-300"
                      : "text-amber-300"
                  }`}
                >
                  {contactStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-slate-500">
        (c) 2026 Monika Amburle | Full Stack Developer
      </footer>
    </div>
  );
}

export default App;
