import SectionTitle from "../components/SectionTitle";

export default function AchievementsPage() {
  const achievements = [
    {
      year: "2024",
      title: "Best Project Award",
      description: "Won first place in the annual coding competition for innovative web application design.",
      category: "Competition",
    },
    {
      year: "2023",
      title: "Open Source Contributor",
      description: "Contributed to major open-source projects with 100+ merged pull requests.",
      category: "Open Source",
    },
    {
      year: "2023",
      title: "Tech Conference Speaker",
      description: "Presented at TechConf 2023 on 'Modern Web Development Practices'.",
      category: "Speaking",
    },
    {
      year: "2022",
      title: "Certified Developer",
      description: "Earned professional certification in Full Stack Web Development.",
      category: "Certification",
    },
    {
      year: "2022",
      title: "Hackathon Winner",
      description: "Led team to victory in 48-hour hackathon, building a solution for social good.",
      category: "Competition",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
    },
    {
      name: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "2022",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-[var(--color-bg-soft)]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Achievements"
          subtitle="Milestones and accomplishments in my career"
        />

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-8">
            Notable Achievements
          </h3>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-4 border-[#0000FF]"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#0000FF] rounded-full"></div>
                <div className="bg-white dark:bg-[#151E3E] p-6 rounded-lg border border-[rgba(21,30,62,0.12)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#0000FF]">
                      {achievement.year}
                    </span>
                    <span className="text-xs px-3 py-1 bg-[rgba(0,0,255,0.08)] text-[#151E3E] rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#151E3E] dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)]">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#151E3E] p-6 rounded-lg border border-[rgba(21,30,62,0.12)] hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold text-[#151E3E] dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-[rgba(21,30,62,0.8)] dark:text-[rgba(255,255,255,0.8)] mb-1">
                  {cert.issuer}
                </p>
                <p className="text-sm text-[rgba(21,30,62,0.6)] dark:text-[rgba(255,255,255,0.6)]">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
