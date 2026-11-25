"use client";

import type {
  CohortRetentionRow,
} from "@/lib/types";

type CohortStorySlideProps = {
  cohortRetention: CohortRetentionRow[];
};


type MonthPerformance = {
  monthIndex: number;
  retention: number;
};


function getCellStyle(
  value: number
): string {
  if (value >= 15) {
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


function calculateMonthPerformance(
  data: CohortRetentionRow[]
): MonthPerformance[] {
  const maxMonths = Math.max(
    0,
    ...data.map(
      (row) => row.retention.length
    )
  );

  const performance: MonthPerformance[] = [];

  for (
    let monthIndex = 1;
    monthIndex < maxMonths;
    monthIndex++
  ) {
    let weightedRetention = 0;
    let totalCustomers = 0;

    data.forEach((row) => {
      const retention =
        row.retention[monthIndex];

      if (
        retention === null ||
        retention === undefined
      ) {
        return;
      }

      weightedRetention +=
        retention * row.cohortSize;

      totalCustomers +=
        row.cohortSize;
    });

    if (totalCustomers > 0) {
      performance.push({
        monthIndex,
        retention:
          weightedRetention /
          totalCustomers,
      });
    }
  }

  return performance;
}


export default function CohortStorySlide({
  cohortRetention,
}: CohortStorySlideProps) {
  const monthPerformance =
    calculateMonthPerformance(
      cohortRetention
    );

  const topMonths = [
    ...monthPerformance,
  ]
    .sort(
      (a, b) =>
        b.retention -
        a.retention
    )
    .slice(0, 3);

  return (
    <div className="grid flex-1 gap-6 lg:grid-cols-[1.8fr_1fr]">

      {/* Heatmap */}
      <div className="min-w-0 rounded-xl border border-gray-200 p-5">

        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Recurrencia por Mes Después de la Primera Compra
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Promedio de recompra entre las cohortes observables.
          </p>
        </div>


        <div className="mt-5 overflow-x-auto">

          {/* Compact recurrence heat strip */}
          <div className="min-w-0 rounded-xl border border-gray-200 p-5">

            <div>
                <h3 className="font-semibold text-gray-900">
                  Recurrencia por Mes Después de la Primera Compra
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Promedio de recompra entre las cohortes observables.
                </p>
            </div>


            
            <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-8">

              {monthPerformance
                .slice(0, 16)
                .map((month) => {
                  const isTopMonth =
                    topMonths.some(
                      (top) =>
                        top.monthIndex ===
                        month.monthIndex
                    );

                  return (
                    <div
                      key={
                        month.monthIndex
                      }
                      className="text-center"
                    >

                      <p className="mb-2 text-xs font-medium text-gray-500">
                        M{month.monthIndex}
                      </p>

                      <div
                        className={`rounded-lg px-2 py-3 text-xs font-semibold ${
                          isTopMonth
                            ? "bg-gray-900 text-white ring-2 ring-gray-400 ring-offset-2"
                            : getCellStyle(
                                month.retention
                              )
                        }`}
                      >
                        {month.retention.toFixed(
                          1
                        )}
                        %
                      </div>

                    </div>
                  );
                })}

            </div>

          </div>


        </div>


        <p className="mt-4 text-[10px] text-gray-400">
          M0 = primera compra · 0% = periodo observado sin recompra ·
          — = periodo todavía no observable
        </p>

      </div>


      {/* Narrative */}
      <div className="flex flex-col gap-4">

        <div className="rounded-xl bg-gray-900 p-5 text-white">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Insight principal
          </p>

          <p className="mt-3 text-lg font-semibold leading-7">
            La recompra no ocurre de manera uniforme. El comportamiento de las cohortes muestra oleadas de mayor recurrencia en determinados meses.
          </p>

        </div>


        {topMonths.length > 0 && (
          <div className="rounded-xl border border-gray-200 p-5">

  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
    Ventanas destacadas
  </p>

  <p className="mt-2 text-sm leading-6 text-gray-700">
    Los meses con mayor recurrencia promedio son{" "}


    <span className="font-semibold text-gray-900">
      {topMonths
        .map(
          (month) =>
            `M${month.monthIndex}`
        )
        .join(", ")}
    </span>
  </p>

</div>
        )}


        <div className="rounded-xl border border-gray-200 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Interpretación
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            La recompra no ocurre de manera uniforme. El comportamiento de las cohortes muestra oleadas de mayor recurrencia en determinados meses.
          </p>

        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Acción recomendada
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            Programar campañas de CRM y reactivación antes de las ventanas con mayor recurrencia para aumentar la probabilidad de recompra.         
          </p>

        </div>
        <div className="rounded-xl border border-gray-200 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Siguiente pregunta
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            ¿Cómo podemos convertir estos hallazgos en prioridades y acciones comerciales?
          </p>

        </div>
      </div>
    </div>
  );
}