import {useLanguage} from "@/lib/i18n/LanguageContext";

type DashboardFiltersProps = {
  cities: string[];
  years: string[];
  propertyTypes: string[];

  selectedCity: string;
  selectedYear: string;
  selectedPropertyType: string;
  
  onCityChange: (city: string) => void;
  onYearChange: (year: string) => void;
  onPropertyTypeChange: (propertyType: string) => void;
  
  onResetFilters: () => void;
};

export default function DashboardFilters({
  cities,
  years,
  propertyTypes,
  selectedCity,
  selectedYear,
  selectedPropertyType,
  onCityChange,
  onYearChange,
  onPropertyTypeChange,
  onResetFilters
}: DashboardFiltersProps) {
  const { t } = useLanguage();
  return (
    <section className="mt-6 flex flex-wrap gap-4">
      <div>
        <label
          htmlFor="city"
          className="mb-1 block text-sm font-medium text-gray-600"
        >
          {t.filters.city}
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
            {t.filters.allCities}
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
        <label className="mb-1 block text-sm font-medium text-gray-600">
          {t.filters.propertyType}
        </label>

        <select
          value={
            selectedPropertyType
          }
          onChange={(event) =>
            onPropertyTypeChange(
              event.target.value
            )
          }
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900"
        >
          <option value="all">
            {
              t.filters
                .allPropertyTypes
            }
          </option>

          {propertyTypes.map(
            (propertyType) => (
              <option
                key={propertyType}
                value={propertyType}
              >
                {propertyType}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label
          htmlFor="year"
          className="mb-1 block text-sm font-medium text-gray-600"
        >
          {t.filters.year}
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
            {t.filters.allYears}
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

        <button
          type="button"
          onClick={onResetFilters}
          disabled={
            selectedCity === "all" &&
            selectedYear === "all"
          }
          className="self-end ml-5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t.filters.reset}
        </button>
      </div>
    </section>
  );
}