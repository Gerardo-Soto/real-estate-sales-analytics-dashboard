type Insight = {
  title: string;
  description: string;
  recommendation: string;
};

const insights: Insight[] = [
  {
    title: "Alta recurrencia de clientes",
    description:
      "El 77.1% de los clientes realizó más de una compra durante el periodo analizado.",
    recommendation:
      "Fortalecer estrategias de fidelización y seguimiento postventa para aprovechar la alta recurrencia observada.",
  },
  {
    title: "Primera vez lidera la recompra",
    description:
      "El segmento Primera vez presentó una tasa de recompra aproximada de 82.1%, superior a Inversionista y Alto patrimonio.",
    recommendation:
      "Priorizar campañas de seguimiento para compradores de primera vez después de su adquisición inicial.",
  },
  {
    title: "Oleadas de recompra",
    description:
      "Las cohortes muestran picos de recurrencia en determinados meses posteriores a la primera compra, en lugar de una recompra uniforme.",
    recommendation:
      "Programar campañas de reactivación antes de las ventanas históricas donde aumentan las recompras.",
  },
  {
    title: "Segmento y recompra",
    description:
      "Existe una relación estadísticamente significativa entre el segmento del comprador y la recompra, aunque su intensidad es relativamente débil.",
    recommendation:
      "Utilizar el segmento como una señal adicional dentro de modelos comerciales, evitando tratarlo como único predictor del comportamiento.",
  },
];

export default function ExecutiveInsights() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-500">
          Hallazgos del periodo completo
        </p>

        <h2 className="mt-1 text-xl font-semibold text-gray-900">
          Insights Ejecutivos
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Principales hallazgos y oportunidades identificadas
          a partir del análisis comercial y de clientes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {insights.map((insight, index) => (
          <article
            key={insight.title}
            className="rounded-xl border border-gray-200 bg-gray-50 p-5"
          >
            <div className="flex items-start gap-4">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {insight.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {insight.description}
                </p>

                <div className="mt-4 border-l-2 border-gray-300 pl-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Acción recomendada
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    {insight.recommendation}
                  </p>
                </div>
              </div>

            </div>
          </article>
        ))}

      </div>

    </section>
  );
}