 "use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const activeRole = roles[activeRoleIndex];

  return (
    <section className="relative overflow-hidden border-b border-[rgba(21,30,62,0.15)] bg-[var(--color-bg)]">
      {/* Subtle background gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#0000FF]/10 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-[#151E3E]/12 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/4 h-96 w-96 rounded-full bg-[#0000FF]/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,255,0.08),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-28 pb-20 md:px-6 lg:flex-row lg:items-stretch lg:gap-10 lg:pt-32 lg:pb-24">
        {/* Left: intro text */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.06)] px-4 py-1 text-xs font-medium text-[#151E3E] shadow-sm backdrop-blur">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0000FF] text-[10px] font-semibold text-white">
              G
            </span>
            <span className="hidden sm:inline text-[#151E3E]">
              Godwin · Full Stack Developer · AI/ML Enthusiast
            </span>
            <span className="sm:hidden text-[#151E3E]">
              Godwin · Full Stack &amp; AI/ML
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#151E3E] dark:text-white sm:text-5xl lg:text-6xl">
            Crafting modern{" "}
            <span className="block text-[#0000FF]">
              web &amp; AI experiences
            </span>
          </h1>

          <div className="h-8">
            {mounted && (
              <p className="inline-flex items-center gap-2 text-sm font-medium text-[#0000FF] md:text-base">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#0000FF]" />
                <span className="text-[#151E3E] dark:text-white">
                  {activeRole}
                </span>
              </p>
            )}
          </div>

          <p className="max-w-xl text-balance text-sm leading-relaxed text-[rgba(21,30,62,0.8)] dark:text-[rgba(255,255,255,0.9)] sm:text-base">
            I&apos;m{" "}
            <span className="font-semibold text-[#0000FF]">Godwin</span>, a 3rd
            year CSE student at
            <span className="font-semibold text-[#151E3E] dark:text-white">
              {" "}
              Kamaraj College of Engineering and Technology
            </span>
            . I design and build end‑to‑end products that blend robust
            backends, polished UIs, and intelligent AI/ML systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-[rgba(21,30,62,0.8)] sm:justify-start">
            <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.06)] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0000FF]" />
              Open to internships &amp; projects
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.02)] px-3 py-1">
              <span className="text-xs">📍</span>
              Madurai, India
            </span>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0000FF] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(0,0,255,0.4)] transition hover:translate-y-0.5 hover:bg-white hover:text-[#151E3E]"
            >
              View projects
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5h10M19 5v10M19 5L5 19"
                />
              </svg>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#151E3E] bg-transparent px-5 py-2.5 text-sm font-medium text-[#151E3E] dark:text-white shadow-sm transition hover:bg-[#151E3E] hover:text-white"
              >
                Contact me
              </Link>
              <a
                href="#"
                className="hidden items-center gap-1 text-xs font-medium text-slate-400 hover:text-slate-200 sm:inline-flex"
              >
                Download résumé
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] text-[rgba(21,30,62,0.75)] sm:justify-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(21,30,62,0.7)]">
              Tech I work with
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Python",
                "TensorFlow",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.06)] px-3 py-1 text-[11px] text-[#151E3E]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: profile card / image container */}
        <div className="mt-10 flex flex-1 justify-center lg:mt-0">
          <div className="relative h-64 w-64 max-w-[18rem] rounded-3xl border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.02)] shadow-2xl shadow-[rgba(21,30,62,0.4)] backdrop-blur-lg lg:h-72 lg:w-72">
            {/* Accent ring */}
            <div className="pointer-events-none absolute -inset-[2px] rounded-3xl bg-gradient-to-tr from-blue-500/40 via-purple-500/30 to-pink-500/40 opacity-70" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 rounded-3xl bg-white dark:bg-[#151E3E] p-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[rgba(21,30,62,0.2)] bg-[#151E3E] shadow-lg shadow-[rgba(21,30,62,0.5)]">
                {/* Replace this with your real image: place godwin.jpg in public/ and update src */}
                <Image
                  src="/godwin.jpg"
                  alt="Godwin portrait"
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-center">
                <p className="text-sm font-semibold text-[#151E3E] dark:text-white">
                  Godwin
                </p>
                <p className="text-xs text-[rgba(21,30,62,0.7)] dark:text-[rgba(255,255,255,0.8)]">
                  Full Stack Developer · AI/ML Enthusiast
                </p>
              </div>

              <div className="mt-2 grid w-full grid-cols-3 gap-2 text-center text-[10px] text-[rgba(21,30,62,0.8)] dark:text-[rgba(255,255,255,0.9)]">
                <div className="rounded-xl border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.04)] px-2 py-1.5">
                  <p className="text-[11px] font-semibold text-[#151E3E] dark:text-white">
                    3rd Year
                  </p>
                  <p className="text-[10px] text-[rgba(21,30,62,0.7)] dark:text-[rgba(255,255,255,0.7)]">
                    CSE
                  </p>
                </div>
                <div className="rounded-xl border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.04)] px-2 py-1.5">
                  <p className="text-[11px] font-semibold text-[#151E3E] dark:text:white">
                    KCET
                  </p>
                  <p className="text-[10px] text-[rgba(21,30,62,0.7)] dark:text-[rgba(255,255,255,0.7)]">
                    Student
                  </p>
                </div>
                <div className="rounded-xl border border-[rgba(21,30,62,0.15)] bg-[rgba(0,0,255,0.04)] px-2 py-1.5">
                  <p className="text-[11px] font-semibold text-[#151E3E] dark:text:white">
                    AI/ML
                  </p>
                  <p className="text-[10px] text-[rgba(21,30,62,0.7)] dark:text-[rgba(255,255,255,0.7)]">
                    Focused
                  </p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-center gap-3 text-xs text-[rgba(21,30,62,0.75)] dark:text-[rgba(255,255,255,0.8)]">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0000FF]" />
                  Available for collaboration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

