import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-[#151E3E] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border border-[rgba(21,30,62,0.12)]">
      <div className="h-48 bg-[#151E3E] flex items-center justify-center">
        <div className="text-white text-4xl font-bold opacity-70">
          {title.charAt(0)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#151E3E] dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-[rgba(21,30,62,0.8)] dark:text-[rgba(255,255,255,0.9)] mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[rgba(0,0,255,0.08)] text-[#151E3E] dark:bg-[rgba(0,0,255,0.18)] dark:text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={link}
          className="text-[#0000FF] hover:text-[#151E3E] dark:text-[#0000FF] dark:hover:text-white font-semibold inline-flex items-center"
        >
          View Project
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
