type SectionProps = {
  titleElement: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ titleElement, children }: SectionProps) {


  return (
    <div className="flex flex-col gap-4 min-w-64">
      <header
        className="relative w-full flex justify-center"
      >
        {titleElement}
      </header>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}
