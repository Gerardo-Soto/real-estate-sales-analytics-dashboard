"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import type {
  BuyerProfile,
} from "@/lib/types";

type BuyerProfileSlideProps = {
  buyerProfiles: BuyerProfile[];
};


const chartColors = [
  "#111827",
  "#4B5563",
  "#9CA3AF",
];


export default function BuyerProfileSlide({
  buyerProfiles,
}: BuyerProfileSlideProps) {
  
  const topSegment =
    buyerProfiles[0];
  

  return (
    <div className="grid flex-1 gap-6 lg:grid-cols-[1.5fr_1fr]">

      {/* Visualization */}
      <div className="rounded-xl border border-gray-200 p-5">

        <div>
          <h3 className="font-semibold text-gray-900">
            Distribución por Segmento
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Participación de clientes únicos por
            segmento de comprador.
          </p>
        </div>


        <div className="mt-5 h-85">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>

              <Pie
                data={buyerProfiles}
                dataKey="customers"
                nameKey="buyerSegment"
                cx="50%"
                cy="45%"
                innerRadius={75}
                outerRadius={115}
                paddingAngle={2}
                labelLine={false}
                label={(props) => {
                  const percentage =
                    Number(
                      props.payload?.percentage ??
                        0
                    );

                  return `${percentage.toFixed(
                    1
                  )}%`;
                }}
              >
                {buyerProfiles.map(
                  (item, index) => (
                    <Cell
                      key={
                        item.buyerSegment
                      }
                      fill={
                        chartColors[
                          index %
                            chartColors.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>


              <Tooltip
                formatter={(
                  value,
                  _name,
                  props
                ) => {
                  const percentage =
                    Number(
                      props.payload
                        ?.percentage ?? 0
                    );

                  return [
                    `${Number(
                      value
                    ).toLocaleString(
                      "es-MX"
                    )} clientes (${percentage.toFixed(
                      1
                    )}%)`,
                    props.payload
                      ?.buyerSegment,
                  ];
                }}
              />

            </PieChart>
          </ResponsiveContainer>

        </div>
<div className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2">

  {buyerProfiles.map(
    (item, index) => (
      <div
        key={item.buyerSegment}
        className="flex items-center gap-2"
      >

        <span
          className="h-3 w-3 rounded-sm"
          style={{
            backgroundColor:
              chartColors[
                index %
                  chartColors.length
              ],
          }}
        />

        <span className="text-sm text-gray-600">
          {item.buyerSegment}
        </span>

        <span className="text-sm font-semibold text-gray-900">
          {item.percentage.toFixed(
            1
          )}
          %
        </span>

      </div>
    )
  )}

</div>
      </div>


      {/* Narrative */}
      <div className="flex flex-col gap-4">

        {topSegment && (
          <div className="rounded-xl bg-gray-900 p-5 text-white">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Segmento principal
            </p>

            {topSegment && (
              <p className="mt-3 text-lg font-semibold leading-7">
                El segmento con mayor participación es{" "}

                <span>
                  {topSegment.buyerSegment}
                </span>
              </p>
            )}
          </div>
        )}

        <div className="rounded-xl border border-gray-200 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Comportamiento de recompra
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            Los compradores de primera vez presentan una tasa de recompra aproximada del 82.1%, superior a los demás segmentos.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Oportunidad
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            Los compradores de primera vez representan una oportunidad relevante para estrategias de fidelización, seguimiento postventa y recompra.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Siguiente pregunta
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            ¿En qué momento después de la primera compra tienen mayor probabilidad de volver a comprar?
          </p>

        </div>
      </div>
    </div>
  );
}