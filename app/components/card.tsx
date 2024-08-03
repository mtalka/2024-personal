type CardProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Card({ title, subtitle, children }: CardProps) {
  return (
    <div
      id="card"
      className="shadow flex flex-col gap-4 p-4 rounded-lg bg-white"
    >
      <div>
        <h3 className="font-bold">{title}</h3>
        {subtitle && 
        <span className="text-sm">{subtitle}</span>}
      </div>
      <div className="text-zinc-600 text-sm">{children}</div>
    </div>
  );
}
