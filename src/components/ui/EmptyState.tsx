type EmptyStateProps = {
  onResetFilters: () => void;
};

export default function EmptyState({
  onResetFilters,
}: EmptyStateProps) {
  return (
    <section className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-gray-900">
        No hay datos disponibles
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
        No encontramos ventas para la combinación de ciudad y año seleccionada.
        Prueba con otros filtros o restablece la selección.
      </p>

      <button
        type="button"
        onClick={onResetFilters}
        className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
      >
        Limpiar filtros
      </button>
    </section>
  );
}