import SectionTitle from "../components/SectionTitle";

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "FastAPI"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "VS Code"] },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-[var(--color-bg-soft)]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] leading-relaxed mb-4">
              Hi! I'm <strong className="text-[#0000FF]">Godwin</strong>, a passionate Full Stack Developer and AI/ML Enthusiast currently pursuing my 3rd year in Computer Science and Engineering at <strong className="text-[#151E3E] dark:text-white">Kamaraj College of Engineering and Technology</strong>.
            </p>
            <p className="text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] leading-relaxed mb-4">
              I'm deeply fascinated by the intersection of web development and artificial intelligence. My journey in software development started with curiosity about how things work behind the scenes, and it has evolved into a passion for building innovative solutions that combine cutting-edge web technologies with intelligent systems.
            </p>
            <p className="text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] leading-relaxed">
              I believe in writing code that is not only functional but also maintainable, scalable, and intelligent. Whether it's building responsive web applications or exploring machine learning models, I'm always excited to learn and implement new technologies.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-white dark:bg-[#151E3E] p-6 rounded-lg border border-[rgba(21,30,62,0.1)]"
                >
                  <h4 className="text-xl font-semibold text-[#151E3E] dark:text-white mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[rgba(0,0,255,0.08)] text-[#151E3E] dark:bg-[rgba(0,0,255,0.18)] dark:text-white rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-4">
              What I Do
            </h3>
            <ul className="list-disc list-inside text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] space-y-2">
              <li>Build responsive and modern web applications</li>
              <li>Design and implement RESTful APIs</li>
              <li>Optimize performance and user experience</li>
              <li>Collaborate with teams to deliver high-quality products</li>
              <li>Stay updated with the latest technologies and best practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
