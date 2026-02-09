import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with cutting-edge technologies.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/project1.jpg",
      link: "/projects",
    },
    {
      id: 2,
      title: "Project Two",
      description: "An innovative solution solving real-world problems.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project2.jpg",
      link: "/projects",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A beautiful and responsive design implementation.",
      technologies: ["Vue.js", "Firebase", "CSS3"],
      image: "/project3.jpg",
      link: "/projects",
    },
  ];

  return (
    <div className="w-full">
      <Hero />
      
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <SectionTitle title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-[#0000FF] text-white rounded-full hover:bg-white hover:text-[#151E3E] border border-[#0000FF] transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto bg-[rgba(0,0,255,0.03)] dark:bg-[#151E3E]">
        <SectionTitle title="About Me" />
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-lg text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] leading-relaxed mb-6">
            I'm <strong className="text-[#0000FF]">Godwin</strong>, a Full Stack Developer and AI/ML Enthusiast currently studying 3rd year CSE at Kamaraj College of Engineering and Technology. 
            I love building innovative solutions that combine modern web technologies with artificial intelligence, bringing ideas to life through code.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-[#0000FF] text-white rounded-full hover:bg-white hover:text-[#151E3E] border border-[#0000FF] transition-colors duration-300"
          >
            Learn More About Me
          </Link>
        </div>
      </section>
    </div>
  );
}
