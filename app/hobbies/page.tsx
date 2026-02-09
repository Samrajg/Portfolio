import SectionTitle from "../components/SectionTitle";

export default function HobbiesPage() {
  const hobbies = [
    {
      title: "Photography",
      description: "I love capturing moments and exploring different perspectives through the lens. Landscape and street photography are my favorites.",
      icon: "📷",
    },
    {
      title: "Reading",
      description: "Avid reader of tech blogs, programming books, and science fiction. Always learning something new.",
      icon: "📚",
    },
    {
      title: "Gaming",
      description: "Enjoy playing strategy games and indie titles. It's a great way to unwind and get inspired.",
      icon: "🎮",
    },
    {
      title: "Hiking",
      description: "Love exploring nature trails and mountains. It helps me clear my mind and stay active.",
      icon: "⛰️",
    },
    {
      title: "Cooking",
      description: "Experimenting with new recipes and cuisines. Cooking is both creative and therapeutic for me.",
      icon: "🍳",
    },
    {
      title: "Music",
      description: "Playing guitar and listening to various genres. Music is a big part of my daily routine.",
      icon: "🎸",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-[var(--color-bg-soft)]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Hobbies & Interests"
          subtitle="What I enjoy doing in my free time"
        />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#151E3E] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border border-[rgba(21,30,62,0.12)]"
            >
              <div className="text-5xl mb-4 text-center">{hobby.icon}</div>
              <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-4 text-center">
                {hobby.title}
              </h3>
              <p className="text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] text-center leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[rgba(0,0,255,0.04)] dark:bg-[#151E3E] p-8 rounded-lg border border-[rgba(21,30,62,0.1)]">
          <h3 className="text-2xl font-bold text-[#151E3E] dark:text-white mb-4 text-center">
            Life Beyond Code
          </h3>
          <p className="text-[rgba(21,30,62,0.9)] dark:text-[rgba(255,255,255,0.9)] text-center max-w-3xl mx-auto leading-relaxed">
            While I'm passionate about coding and technology, I believe in maintaining
            a healthy work-life balance. These hobbies help me stay creative, relaxed,
            and bring fresh perspectives to my work. They remind me that there's a
            whole world of inspiration beyond the screen.
          </p>
        </div>
      </div>
    </div>
  );
}
