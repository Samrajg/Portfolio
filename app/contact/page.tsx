"use client";

import SectionTitle from "../components/SectionTitle";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "godwinsamraj16@gmail.com",
      link: "mailto:godwinsamraj16@gmail.com",
      icon: "✉️",
    },
    {
      label: "GitHub",
      value: "github.com/Samrajg",
      link: "https://github.com/Samrajg",
      icon: "💻",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/godwin-samraj-70b324300",
      link: "https://www.linkedin.com/in/godwin-samraj-70b324300/",
      icon: "🔗",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-[var(--color-bg-soft)]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="I'd love to hear from you. Send me a message and I'll respond as soon as possible."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#151E3E] p-8 rounded-lg shadow-lg border border-[rgba(21,30,62,0.12)]">
            <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#151E3E] dark:text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[rgba(21,30,62,0.2)] rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent bg-white dark:bg-[#151E3E] text-[#151E3E] dark:text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#151E3E] dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[rgba(21,30,62,0.2)] rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent bg-white dark:bg-[#151E3E] text-[#151E3E] dark:text-white"
                  placeholder="godwinsamraj16@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#151E3E] dark:text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[rgba(21,30,62,0.2)] rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent bg-white dark:bg-[#151E3E] text-[#151E3E] dark:text-white"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#151E3E] dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-[rgba(21,30,62,0.2)] rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent bg-white dark:bg-[#151E3E] text-[#151E3E] dark:text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-[rgba(0,0,255,0.06)] text-[#151E3E] dark:bg-[#151E3E] dark:text-white rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-[rgba(255,0,0,0.06)] text-[#151E3E] dark:bg-[#151E3E] dark:text-white rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#0000FF] text-white rounded-lg hover:bg-white hover:text-[#151E3E] border border-[#0000FF] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-[#151E3E] rounded-lg hover:bg-[rgba(0,0,255,0.04)] dark:hover:bg-[#151E3E] transition-colors border border-[rgba(21,30,62,0.08)]"
                >
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <p className="font-semibold text-[#151E3E] dark:text-white">
                      {info.label}
                    </p>
                    <p className="text-[rgba(21,30,62,0.8)] dark:text-[rgba(255,255,255,0.8)]">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-[rgba(0,0,255,0.04)] dark:bg-[#151E3E] p-6 rounded-lg border border-[rgba(21,30,62,0.1)]">
              <h4 className="text-lg font-semibold text-[#151E3E] dark:text-white mb-3">
                Let's Connect
              </h4>
              <p className="text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] mb-4">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Samrajg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#151E3E] dark:text-white hover:text-[#0000FF] dark:hover:text-[#0000FF] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/godwin-samraj-70b324300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#151E3E] dark:text-white hover:text-[#0000FF] dark:hover:text-[#0000FF] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:godwinsamraj16@gmail.com"
                  className="text-[#151E3E] dark:text-white hover:text-[#0000FF] dark:hover:text-[#0000FF] transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V9l-8 7-8-7v9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
