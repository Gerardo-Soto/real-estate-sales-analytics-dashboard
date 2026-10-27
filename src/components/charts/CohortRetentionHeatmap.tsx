"use client";

import type {
  CohortRetentionRow,
} from "@/lib/types";


type CohortRetentionHeatmapProps = {
  data: CohortRetentionRow[];
};


function formatCohort(
  cohort: string
): string {
  const [year, month] =
    cohort.split("-");

  const date = new Date(
    Number(year),
    Number(month) - 1
  );

  return date.toLocaleDateString(
    "es-MX",
    {
      month: "short",
      year: "numeric",
    }
  );
}


function getCellStyle(
  value: number | null
): string {
  if (value === null) {
    return "bg-gray-50 text-gray-300";
  }

  if (value >= 75) {
    return "bg-gray-900 text-white";
  }

  if (value >= 20) {
    return "bg-gray-700 text-white";
  }

  if (value >= 10) {
    return "bg-gray-500 text-white";
  }

  if (value >= 5) {
    return "bg-gray-300 text-gray-900";
  }

  return "bg-gray-100 text-gray-600";
}


export default function CohortRetentionHeatmap({
  data,
}: CohortRetentionHeatmapProps) {
  if (data.length === 0) {
    return null;
  }

  const maxMonths = Math.max(
    ...data.map(
      (row) => row.retention.length
    )
  );

  const monthIndexes =
    Array.from(
      {
        length: maxMonths,
      },
      (_, index) => index
    );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Cohortes de Recompra
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Porcentaje de clientes que vuelve a comprar
          en los meses posteriores a su primera compra.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-max border-separate border-spacing-1">

          <thead>
            <tr>
              <th className="sticky left-0 bg-white px-3 py-2 text-left text-xs font-semibold text-gray-500">
                Cohorte
              </th>

              <th className="px-3 py-2 text-center text-xs font-semibold text-gray-500">
                Clientes
              </th>

              {monthIndexes.map(
                (monthIndex) => (
                  <th
                    key={monthIndex}
                    className="px-3 py-2 text-center text-xs font-semibold text-gray-500"
                  >
                    M{monthIndex}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.cohort}>

                <td className="sticky left-0 bg-white px-3 py-2 text-sm font-medium text-gray-700">
                  {formatCohort(
                    row.cohort
                  )}
                </td>

                <td className="px-3 py-2 text-center text-sm text-gray-600">
                  {row.cohortSize.toLocaleString()}
                </td>

                {monthIndexes.map(
                  (monthIndex) => {
                    const value =
                      row.retention[
                        monthIndex
                      ] ?? null;

                    return (
                      <td
                        key={
                          monthIndex
                        }
                        className={`min-w-16 rounded-md px-3 py-2 text-center text-xs font-medium ${getCellStyle(
                          value
                        )}`}
                      >
                        {value === null
                          ? "—"
                          : `${value.toFixed(
                              1
                            )}%`}
                      </td>
                    );
                  }
                )}

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        M0 representa el mes de la primera compra.
        Los valores posteriores representan recurrencia mensual.
      </p>
      <p className="mt-4 text-xs text-gray-400">
        <span className="font-medium text-gray-600">
          0%
        </span>{" "}
        significa que el periodo sí fue observable,
        pero ningún cliente volvió a comprar.
      </p>

      <p className="mt-4 text-xs text-gray-400">
        <span className="font-medium text-gray-600">
          —
        </span>{" "}
        significa que ese periodo todavía no había transcurrido
        para esa cohorte.
      </p>

    </div>
  );
}