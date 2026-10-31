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
          <h3 className="font-semibold text-gray-900">
            Recurrencia por Cohorte
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Porcentaje de clientes que vuelve a comprar
            después de su primera adquisición.
          </p>
        </div>


        <div className="mt-5 overflow-x-auto">

          {/* Compact recurrence heat strip */}
            <div className="min-w-0 rounded-xl border border-gray-200 p-5">

            <div>
                <h3 className="font-semibold text-gray-900">
                ¿Cuándo vuelven a comprar?
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                Recurrencia promedio ponderada por mes
                después de la primera compra.
                </p>
            </div>


            <div className="mt-8">

                <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">

                {monthPerformance
                    .slice(0, 16)
                    .map((month) => {

                    const isTopMonth =
                        topMonths.some(
                        (topMonth) =>
                            topMonth.monthIndex ===
                            month.monthIndex
                        );

                    return (
                        <div
                        key={month.monthIndex}
                        className="text-center"
                        >

                        <p className="mb-2 text-[10px] font-semibold text-gray-400">
                            M{month.monthIndex}
                        </p>

                        <div
                            className={`flex h-14 items-center justify-center rounded-lg text-xs font-semibold ${
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


            <div className="mt-8 rounded-xl bg-gray-50 p-4">

                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Patrón observado
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-700">
                Los meses destacados muestran los
                mayores niveles de recurrencia agregada,
                evidenciando que las recompras aparecen
                en ventanas específicas y no de forma
                uniforme.
                </p>

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

          <p className="mt-3 text-xl font-semibold leading-7">
            La recompra no ocurre de manera uniforme:
            aparecen oleadas de recurrencia en momentos
            específicos posteriores a la primera compra.
          </p>

        </div>


        {topMonths.length > 0 && (
          <div className="rounded-xl border border-gray-200 p-5">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Ventanas destacadas
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {topMonths.map(
                (month) => (
                  <span
                    key={month.monthIndex}
                    className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-800"
                  >
                    M{month.monthIndex}
                    {" · "}
                    {month.retention.toFixed(
                      1
                    )}
                    %
                  </span>
                )
              )}

            </div>

            <p className="mt-3 text-xs leading-5 text-gray-500">
              Meses con mayor recurrencia agregada
              entre las cohortes observables.
            </p>

          </div>
        )}


        <div className="rounded-xl border border-gray-200 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Interpretación
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            El patrón sugiere que existen ventanas
            temporales donde aumenta la probabilidad
            de que un cliente realice otra compra.
          </p>

        </div>


        <div className="rounded-xl border-l-4 border-gray-900 bg-gray-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Acción recomendada
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            Programar campañas de reactivación,
            seguimiento comercial y nuevas propuestas
            de inversión antes de las ventanas
            históricas de mayor recurrencia.
          </p>

        </div>


        <div className="rounded-xl border border-gray-200 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Siguiente pregunta
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            ¿Cómo convertimos todos estos hallazgos
            en prioridades comerciales concretas?
          </p>

        </div>

      </div>

    </div>
  );
}