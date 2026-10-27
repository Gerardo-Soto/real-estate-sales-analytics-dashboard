type DashboardFiltersProps = {
  cities: string[];
  years: string[];
  selectedCity: string;
  selectedYear: string;
  onCityChange: (city: string) => void;
  onYearChange: (year: string) => void;
};

export default function DashboardFilters({
  cities,
  years,
  selectedCity,
  selectedYear,
  onCityChange,
  onYearChange,
}: DashboardFiltersProps) {
  return (
    <section className="mt-6 flex flex-wrap gap-4">
      <div>
        <label
          htmlFor="city"
          className="mb-1 block text-sm font-medium text-gray-600"
        >
          Ciudad
        </label>

        <select
          id="city"
          value={selectedCity}
          onChange={(event) =>
            onCityChange(event.target.value)
          }
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900"
        >
          <option value="all">
            Todas las ciudades
          </option>

          {cities.map((city) => (
            <option
              key={city}
              value={city}
            >
              {city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="year"
          className="mb-1 block text-sm font-medium text-gray-600"
        >
          Año
        </label>

        <select
          id="year"
          value={selectedYear}
          onChange={(event) =>
            onYearChange(event.target.value)
          }
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900"
        >
          <option value="all">
            Todos los años
          </option>

          {years.map((year) => (
            <option
              key={year}
              value={String(year)}
            >
              {year}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}