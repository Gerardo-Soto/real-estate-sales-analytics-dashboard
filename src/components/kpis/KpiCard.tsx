type KpiCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function KpiCard({
  title,
  value,
  subtitle,
}: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
        {value}
      </p>

      {subtitle && (
        <p className="mt-2 text-xs text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}