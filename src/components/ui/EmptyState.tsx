import { useLanguage } from "@/lib/i18n/LanguageContext";

type EmptyStateProps = {
  onResetFilters: () => void;
};

export default function EmptyState({
  onResetFilters,
}: EmptyStateProps) {
  const { t } = useLanguage();
  return (
    <section className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-gray-900">
        {t.states.noData}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
        {t.states.noDataDescription}
      </p>

      <button
        type="button"
        onClick={onResetFilters}
        className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
      >
        {t.filters.reset}
      </button>
    </section>
  );
}