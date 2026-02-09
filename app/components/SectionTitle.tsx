interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-[#151E3E] dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[rgba(21,30,62,0.8)] dark:text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-[#0000FF] mx-auto mt-4"></div>
    </div>
  );
}
