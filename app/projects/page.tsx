import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
      image: "/project1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Material-UI"],
      image: "/project2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current conditions, forecasts, and interactive maps. Features location-based weather data.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      image: "/project3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics platform for social media metrics with data visualization, reporting, and insights. Helps businesses track their social presence.",
      technologies: ["React", "Python", "Django", "D3.js", "Redis"],
      image: "/project4.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "A comprehensive LMS with course creation, student enrollment, progress tracking, and assessment tools for educational institutions.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3"],
      image: "/project5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and achievements. Built with performance and SEO in mind.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/project6.jpg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-[var(--color-bg-soft)]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="My Projects"
          subtitle="A collection of my recent work and side projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
