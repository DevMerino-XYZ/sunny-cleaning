interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-3">{subtitle}</p>
      )}
    </div>
  );
}
