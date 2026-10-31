import type {
  BuyerProfile,
  RevenueByChannel,
  RevenueByCity,
  RevenueByPropertyType,
} from "@/lib/types";


type RecommendationsSlideProps = {
  revenueByCity: RevenueByCity[];
  revenueByChannel: RevenueByChannel[];
  revenueByPropertyType: RevenueByPropertyType[];
  buyerProfiles: BuyerProfile[];
};


export default function RecommendationsSlide({
  revenueByCity,
  revenueByChannel,
  revenueByPropertyType,
  buyerProfiles,
}: RecommendationsSlideProps) {
  const topCity = revenueByCity[0];
  const topChannel = revenueByChannel[0];
  const topPropertyType =
    revenueByPropertyType[0];

  const topBuyerSegment =
    buyerProfiles[0];


  return (
    <div className="flex flex-1 flex-col">

      {/* Main conclusion */}
      <div className="rounded-2xl bg-gray-900 p-6 text-white">

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Conclusión ejecutiva
        </p>

        <p className="mt-3 max-w-4xl text-2xl font-semibold leading-9">
          El crecimiento comercial puede fortalecerse
          combinando los mercados de mayor rendimiento,
          la fidelización de compradores y campañas de
          reactivación basadas en los ciclos de recompra.
        </p>

      </div>


      {/* Priorities */}
      <div className="mt-6 grid flex-1 gap-4 lg:grid-cols-3">

        {/* Priority 1 */}
        <article className="rounded-xl border border-gray-200 p-5">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
            1
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Prioridad comercial
          </p>

          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            Concentrar recursos donde ya existe tracción
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Priorizar{" "}
            <strong>
              {topCity?.city ?? "los mercados líderes"}
            </strong>
            , el canal{" "}
            <strong>
              {topChannel?.channel ?? "de mayor rendimiento"}
            </strong>{" "}
            y propiedades tipo{" "}
            <strong>
              {topPropertyType?.propertyType ?? "líder"}
            </strong>{" "}
            como principales motores de ingresos.
          </p>

          <div className="mt-5 rounded-lg bg-gray-50 p-3">
            <p className="text-xs font-semibold text-gray-500">
              Acción
            </p>

            <p className="mt-1 text-sm text-gray-700">
              Asignar presupuesto y capacidad comercial
              priorizando los segmentos de mayor contribución.
            </p>
          </div>

        </article>


        {/* Priority 2 */}
        <article className="rounded-xl border border-gray-200 p-5">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
            2
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Fidelización
          </p>

          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            Convertir compradores en clientes recurrentes
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            El segmento{" "}
            <strong>
              {topBuyerSegment?.buyerSegment ??
                "principal"}
            </strong>{" "}
            representa una oportunidad relevante para
            desarrollar relaciones comerciales de largo plazo.
          </p>

          <div className="mt-5 rounded-lg bg-gray-50 p-3">
            <p className="text-xs font-semibold text-gray-500">
              Acción
            </p>

            <p className="mt-1 text-sm text-gray-700">
              Implementar seguimiento postventa,
              recomendaciones personalizadas y programas
              de fidelización.
            </p>
          </div>

        </article>


        {/* Priority 3 */}
        <article className="rounded-xl border border-gray-200 p-5">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
            3
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Reactivación
          </p>

          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            Aprovechar las ventanas de recompra
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Las cohortes muestran que la recurrencia
            aparece en oleadas y no de manera uniforme
            después de la primera adquisición.
          </p>

          <div className="mt-5 rounded-lg bg-gray-50 p-3">
            <p className="text-xs font-semibold text-gray-500">
              Acción
            </p>

            <p className="mt-1 text-sm text-gray-700">
              Programar campañas de CRM y seguimiento
              comercial antes de los meses históricos
              de mayor recurrencia.
            </p>
          </div>

        </article>

      </div>


      {/* Closing message */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-5">

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            De datos a decisiones
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Priorizar · Fidelizar · Reactivar
          </p>
        </div>

        <p className="max-w-lg text-right text-sm font-medium text-gray-900">
          El valor del análisis no termina en explicar qué ocurrió:
          está en definir qué hacer después.
        </p>

      </div>

    </div>
  );
}