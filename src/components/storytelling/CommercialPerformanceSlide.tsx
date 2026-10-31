"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type {
  RevenueByChannel,
  RevenueByCity,
  RevenueByPropertyType,
} from "@/lib/types";


type CommercialPerformanceSlideProps = {
  revenueByCity: RevenueByCity[];
  revenueByChannel: RevenueByChannel[];
  revenueByPropertyType: RevenueByPropertyType[];
};


function formatRevenue(
  value: number
): string {
  if (value >= 1_000_000_000) {
    return `$${(
      value / 1_000_000_000
    ).toFixed(2)}B`;
  }

  if (value >= 1_000_000) {
    return `$${(
      value / 1_000_000
    ).toFixed(0)}M`;
  }

  return `$${value.toLocaleString()}`;
}


export default function CommercialPerformanceSlide({
  revenueByCity,
  revenueByChannel,
  revenueByPropertyType,
}: CommercialPerformanceSlideProps) {

  const topCity =
    revenueByCity[0];

  const topChannel =
    revenueByChannel[0];

  const topPropertyType =
    revenueByPropertyType[0];


  return (
    <div className="grid flex-1 gap-6 lg:grid-cols-[1.7fr_1fr]">

      {/* Charts */}
      <div className="grid gap-4 sm:grid-cols-2">

        {/* City */}
        <div className="rounded-xl border border-gray-200 p-4">

          <h3 className="text-sm font-semibold text-gray-900">
            Ingresos por Ciudad
          </h3>

          <div className="mt-4 h-48">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={revenueByCity}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="city"
                  tick={{
                    fontSize: 10,
                  }}
                />

                <YAxis
                  tickFormatter={formatRevenue}
                  tick={{
                    fontSize: 9,
                  }}
                  width={55}
                />

                <Tooltip
                  formatter={(value) => [
                    formatRevenue(
                      Number(value)
                    ),
                    "Ingresos",
                  ]}
                />

                <Bar
                  dataKey="revenue"
                  fill="#111827"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>


        {/* Channel */}
        <div className="rounded-xl border border-gray-200 p-4">

          <h3 className="text-sm font-semibold text-gray-900">
            Ingresos por Canal
          </h3>

          <div className="mt-4 h-48">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={revenueByChannel}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="channel"
                  tick={{
                    fontSize: 10,
                  }}
                />

                <YAxis
                  tickFormatter={formatRevenue}
                  tick={{
                    fontSize: 9,
                  }}
                  width={55}
                />

                <Tooltip
                  formatter={(value) => [
                    formatRevenue(
                      Number(value)
                    ),
                    "Ingresos",
                  ]}
                />

                <Bar
                  dataKey="revenue"
                  fill="#374151"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>


        {/* Property type */}
        <div className="rounded-xl border border-gray-200 p-4 sm:col-span-2">

          <h3 className="text-sm font-semibold text-gray-900">
            Ingresos por Tipo de Propiedad
          </h3>

          <div className="mt-4 h-44">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={revenueByPropertyType}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="propertyType"
                  tick={{
                    fontSize: 10,
                  }}
                />

                <YAxis
                  tickFormatter={formatRevenue}
                  tick={{
                    fontSize: 9,
                  }}
                  width={55}
                />

                <Tooltip
                  formatter={(value) => [
                    formatRevenue(
                      Number(value)
                    ),
                    "Ingresos",
                  ]}
                />

                <Bar
                  dataKey="revenue"
                  fill="#6B7280"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* Story */}
      <div className="flex flex-col gap-4">

        <div className="rounded-xl bg-gray-900 p-5 text-white">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Hallazgo principal
          </p>

          <p className="mt-3 text-lg font-semibold leading-7">
            El desempeño comercial está
            concentrado en determinados mercados,
            canales y tipos de propiedad.
          </p>

        </div>


        {topCity && (
          <div className="rounded-xl border border-gray-200 p-4">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Mercado líder
            </p>

            <p className="mt-2 text-sm text-gray-700">
              <strong>
                {topCity.city}
              </strong>{" "}
              concentra el mayor volumen de ingresos
              con{" "}
              <strong>
                {formatRevenue(
                  topCity.revenue
                )}
              </strong>.
            </p>

          </div>
        )}


        {topChannel && (
          <div className="rounded-xl border border-gray-200 p-4">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Canal dominante
            </p>

            <p className="mt-2 text-sm text-gray-700">
              <strong>
                {topChannel.channel}
              </strong>{" "}
              es el canal con mayor contribución
              comercial.
            </p>

          </div>
        )}


        {topPropertyType && (
          <div className="rounded-xl border border-gray-200 p-4">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Portafolio
            </p>

            <p className="mt-2 text-sm text-gray-700">
              <strong>
                {topPropertyType.propertyType}
              </strong>{" "}
              lidera los ingresos dentro del
              portafolio inmobiliario.
            </p>

          </div>
        )}


        <div className="rounded-xl border-l-4 border-gray-900 bg-gray-50 p-4">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Implicación
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            La estrategia comercial puede priorizar
            los mercados y canales con mayor
            contribución, sin perder de vista
            oportunidades de crecimiento en los
            segmentos secundarios.
          </p>

        </div>

      </div>

    </div>
  );
}