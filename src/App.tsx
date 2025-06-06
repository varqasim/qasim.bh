import { useState, useEffect } from "react";
import {
  Download,
  LinkedinIcon,
  Menu,
  X,
  SearchIcon,
  ZapIcon,
  RocketIcon,
  AlertCircleIcon,
  DollarSignIcon,
  UserIcon,
  GithubIcon,
  Mail,
  Globe,
  Calendar,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const companies = [
    { name: "Slack", logo: "slack" },
    { name: "Amazon", logo: "amazon" },
    { name: "Logitech", logo: "logitech" },
    { name: "Google", logo: "google" },
    { name: "Facebook", logo: "facebook" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-gray-200 rounded-full opacity-30"></div>
        <div className="absolute top-20 -right-20 w-60 h-60 border border-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 border border-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 border border-gray-200 rounded-full opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">
                qasim.bh
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>

            {/* Download CV Button */}
            <div className="hidden md:block">
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Download CV</span>
                <Download size={16} />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Contact Me
                </a>
                <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors w-full">
                  <span className="font-medium">Download CV</span>
                  <Download size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Social links */}
            <div className="hidden lg:flex flex-col space-y-6 absolute left-6 top-1/2 transform -translate-y-1/2">
              <button
                className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/qasim-albaqali-0000000000000000000000000000000000000000/",
                    "_blank"
                  )
                }
              >
                <LinkedinIcon size={20} />
              </button>
              <button
                className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
                onClick={() =>
                  window.open("https://github.com/varqasim", "_blank")
                }
              >
                <GithubIcon size={20} />
              </button>
            </div>

            {/* Center - Hero content */}
            <div className="lg:col-span-2 text-center relative">
              {/* Profile Image with decorative elements */}
              <div className="relative inline-block mb-8">
                <div className="w-80 h-80 mx-auto relative">
                  <img
                    src="/image.png"
                    alt="Qasim Albaqali"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Decorative green line */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 320 320">
                      <path
                        d="M160,40 Q280,80 280,160 Q280,240 160,280 Q40,240 40,160 Q40,80 160,40"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                </div>

                {/* "COME ON LET'S TALK" circular text */}
                <div className="absolute -top-4 -right-8 w-32 h-32">
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 128 128"
                  >
                    <defs>
                      <path
                        id="circle"
                        d="M 64,64 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      />
                    </defs>
                    <text className="text-xs fill-gray-600 font-medium">
                      <textPath href="#circle">
                        COME ON LET'S TALK • COME ON LET'S TALK •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Name and title */}
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                Qasim Albaqali
              </h1>
              <p className="text-4xl text-gray-600 font-medium tracking-wide">
                SOFTWARE ENGINEER // MVP SPECIALIST
              </p>
              <p className="text-sm text-gray-600">
                I help non-technical founders build MVPs that actually scale. No
                technical debt. No rebuilding later. Just solid engineering from
                day one.
              </p>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12"
              >
                <span className="text-2xl font-semibold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I create digital experiences that combine beautiful design with
              powerful functionality, helping businesses connect with their
              audiences in meaningful ways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Architecture Pitfalls",
                description:
                  "73% of startups rebuild their entire tech stack within the first year due to poor initial architecture.",
                icon: <AlertCircleIcon className="w-8 h-8 text-red-600" />,
                color: "red",
              },
              {
                title: "Technical Debt",
                description:
                  "Speed-to-market shouldn't mean technical shortcuts that cost you 6 months (and thousands of dollars) later.",
                icon: <ZapIcon className="w-8 h-8 text-yellow-600" />,
                color: "yellow",
              },
              {
                title: "Investor-Ready Scalability",
                description:
                  "Investors ask tough technical questions about scalability during funding rounds that can make or break your pitch.",
                icon: <DollarSignIcon className="w-8 h-8 text-green-600" />,
                color: "green",
              },
              {
                title: "First Hire Impressions",
                description:
                  "Your first technical hire will judge your startup based on the quality (or lack thereof) of your existing codebase.",
                icon: <UserIcon className="w-8 h-8 text-blue-600" />,
                color: "blue",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden hover:-translate-y-1"
              >
                {/* Subtle gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                    service.color === "red"
                      ? "from-red-500 to-pink-500"
                      : service.color === "blue"
                      ? "from-blue-500 to-cyan-500"
                      : service.color === "green"
                      ? "from-green-500 to-emerald-500"
                      : service.color === "yellow"
                      ? "from-yellow-500 to-red-500"
                      : service.color === "pink"
                      ? "from-pink-500 to-rose-500"
                      : "from-indigo-500 to-purple-500"
                  }`}
                ></div>

                {/* Icon container with color-coded background */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    service.color === "red"
                      ? "bg-red-50 group-hover:bg-red-100"
                      : service.color === "blue"
                      ? "bg-blue-50 group-hover:bg-blue-100"
                      : service.color === "green"
                      ? "bg-green-50 group-hover:bg-green-100"
                      : service.color === "yellow"
                      ? "bg-yellow-50 group-hover:bg-yellow-100"
                      : service.color === "pink"
                      ? "bg-pink-50 group-hover:bg-pink-100"
                      : "bg-indigo-50 group-hover:bg-indigo-100"
                  }`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${
                    service.color === "red"
                      ? "bg-red-500"
                      : service.color === "blue"
                      ? "bg-blue-500"
                      : service.color === "green"
                      ? "bg-green-500"
                      : service.color === "yellow"
                      ? "bg-yellow-500"
                      : service.color === "pink"
                      ? "bg-pink-500"
                      : "bg-indigo-500"
                  }`}
                  style={{
                    clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Most MVPs Fail Before They Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have a brilliant idea and the drive to make it happen. But
              here's what most non-technical founders discover too late
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Architecture Pitfalls",
                description:
                  "73% of startups rebuild their entire tech stack within the first year due to poor initial architecture.",
                icon: <AlertCircleIcon className="w-8 h-8 text-red-600" />,
              },
              {
                title: "Technical Debt",
                description:
                  "Speed-to-market shouldn't mean technical shortcuts that cost you 6 months (and thousands of dollars) later.",
                icon: <ZapIcon className="w-8 h-8 text-yellow-600" />,
              },
              {
                title: "Investor-Ready Scalability",
                description:
                  "Investors ask tough technical questions about scalability during funding rounds that can make or break your pitch.",
                icon: <DollarSignIcon className="w-8 h-8 text-green-600" />,
              },
              {
                title: "First Hire Impressions",
                description:
                  "Your first technical hire will judge your startup based on the quality (or lack thereof) of your existing codebase.",
                icon: <UserIcon className="w-8 h-8 text-blue-600" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              "I don't just build fast, I build smart. Every line of code is
              written with your Series A pitch in mind."
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Let's get in touch
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Ways We Help Startups Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focused solutions to accelerate your startup's journey from idea to
            impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* MVP Launch Package */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <RocketIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                MVP Launch Package
              </h3>
              <p className="text-purple-600 font-medium">From Zero to Launch</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Technical architecture design
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Core feature development</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Database optimization for growth
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Basic security & compliance setup
                </span>
              </li>
            </ul>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">
                  Starting at $15,000
                </span>
              </div>
              <p className="text-gray-500 text-sm">8-12 weeks</p>
            </div>
          </div>

          {/* Scale Readiness Assessment */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <SearchIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Scale Readiness Assessment
              </h3>
              <p className="text-blue-600 font-medium">
                Is Your Tech Ready for Growth?
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Complete codebase audit</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Performance bottleneck identification
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Security vulnerability assessment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Scalability roadmap with priorities
                </span>
              </li>
            </ul>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">$2,500</span>
              </div>
              <p className="text-gray-500 text-sm">1 week turnaround</p>
            </div>
          </div>

          {/* Engineering Excellence Upgrade */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <ZapIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Engineering Excellence Upgrade
              </h3>
              <p className="text-green-600 font-medium">
                From Technical Debt to Technical Asset
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Code refactoring for performance
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Automated testing implementation
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">CI/CD pipeline setup</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Documentation & knowledge transfer
                </span>
              </li>
            </ul>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">
                  Custom pricing
                </span>
              </div>
              <p className="text-gray-500 text-sm">4-8 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 border border-gray-300 rounded-full opacity-40"></div>
          <div className="absolute top-40 -right-32 w-80 h-80 border border-gray-300 rounded-full opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-gray-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-60 right-10 w-32 h-32 border border-gray-300 rounded-full opacity-35"></div>
          <div className="absolute top-20 left-1/3 w-24 h-24 border border-gray-300 rounded-full opacity-25"></div>
          <div className="absolute bottom-40 left-1/2 w-16 h-16 border border-gray-300 rounded-full opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Schedule a call or send me a
              message to get started.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendly Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Schedule a Quick Call
                  </h3>
                  <p className="text-gray-600">
                    Book a free 30-minute discovery call to discuss your project
                  </p>
                </div>
              </div>

              {/* Calendly Iframe */}
              <div className="w-full h-96 rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://calendly.com/qasim-albaqali/30min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a meeting"
                  className="w-full h-full"
                ></iframe>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Can't find a suitable time? Send me a message instead.
              </p>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">
                    Tell us about your project and we'll get back to you
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">
                  albaqali@qasim.bh
                </span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">
                  Available worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Q</span>
            </div>
            <span className="font-semibold text-gray-900">Qasim Albaqali</span>
          </div>
          <div className="flex space-x-6">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <LinkedinIcon size={20} />
            </button>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Qasim Albaqali. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
