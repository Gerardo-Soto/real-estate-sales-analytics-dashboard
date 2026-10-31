"use client";

import {
  Cell,
  Legend,
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
            Distribución de Clientes
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Participación de clientes únicos por
            segmento de comprador.
          </p>
        </div>


        <div className="mt-4 h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>

              <Pie
                data={buyerProfiles}
                dataKey="customers"
                nameKey="buyerSegment"
                innerRadius={75}
                outerRadius={115}
                paddingAngle={3}
              >

                {buyerProfiles.map(
                  (profile, index) => (
                    <Cell
                      key={
                        profile.buyerSegment
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
                  name,
                  props
                ) => {
                  const percentage =
                    props.payload.percentage;

                  return [
                    `${Number(
                      value
                    ).toLocaleString()} clientes (${percentage.toFixed(
                      1
                    )}%)`,
                    name,
                  ];
                }}
              />

              <Legend />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>


      {/* Narrative */}
      <div className="flex flex-col gap-4">

        {topSegment && (
          <div className="rounded-xl bg-gray-900 p-5 text-white">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Segmento principal
            </p>

            <p className="mt-3 text-xl font-semibold leading-7">
              {topSegment.buyerSegment}
              {" "}
              representa el{" "}
              {topSegment.percentage.toFixed(
                1
              )}
              % de los clientes analizados.
            </p>

          </div>
        )}


        <div className="rounded-xl border border-gray-200 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Hallazgo
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            Los compradores de{" "}
            <strong>
              primera vez
            </strong>{" "}
            conforman el segmento más amplio
            de la base de clientes.
          </p>

        </div>


        <div className="rounded-xl border border-gray-200 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Análisis histórico completo
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            Este segmento también presentó
            una tasa de recompra aproximada de{" "}
            <strong>
              82.1%
            </strong>,
            superior a Inversionista y
            Alto patrimonio durante el
            periodo analizado.
          </p>

        </div>


        <div className="rounded-xl border-l-4 border-gray-900 bg-gray-50 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Oportunidad
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            El comprador de primera vez no
            debería tratarse únicamente como
            una adquisición inicial:
            representa una oportunidad
            relevante de fidelización y
            recompra.
          </p>

        </div>


        <div className="rounded-xl border border-gray-200 p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Siguiente pregunta
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            Si los clientes vuelven a comprar,
            ¿existen momentos específicos en
            los que la recurrencia aumenta?
          </p>

        </div>

      </div>

    </div>
  );
}