"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  formatCurrency,
} from "@/lib/analytics";

import type {
  KPIs,
  MonthlyRevenue,
} from "@/lib/types";


type ExecutiveSummarySlideProps = {
  kpis: KPIs;
  monthlyRevenue: MonthlyRevenue[];
};


function formatRevenue(
  value: number
): string {
  if (value >= 1_000_000_000) {
    return `$${(
      value / 1_000_000_000
    ).toFixed(1)}B`;
  }

  if (value >= 1_000_000) {
    return `$${(
      value / 1_000_000
    ).toFixed(0)}M`;
  }

  return `$${value.toLocaleString()}`;
}


function formatMonth(
  month: string
): string {
  const [
    year,
    monthNumber,
  ] = month.split("-");

  const date = new Date(
    Number(year),
    Number(monthNumber) - 1
  );

  return date.toLocaleDateString(
    "es-MX",
    {
      month: "short",
      year: "2-digit",
    }
  );
}


export default function ExecutiveSummarySlide({
  kpis,
  monthlyRevenue,
}: ExecutiveSummarySlideProps) {
  return (
    <div className="flex flex-1 flex-col">

      {/* KPIs */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            Ingreso Total
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {formatCurrency(
              kpis.totalRevenue
            )}
          </p>
        </div>


        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            Ventas
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {kpis.totalSales.toLocaleString()}
          </p>
        </div>


        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            Ticket Promedio
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {formatCurrency(
              kpis.averageTicket
            )}
          </p>
        </div>


        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            Comisión Total
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {formatCurrency(
              kpis.totalCommission
            )}
          </p>
        </div>

      </div>


      {/* Main storytelling area */}
      <div className="mt-6 grid flex-1 gap-6 lg:grid-cols-[1.7fr_1fr]">

        {/* Chart */}
        <div className="rounded-xl border border-gray-200 p-5">

          <div>
            <h3 className="font-semibold text-gray-900">
              Evolución de Ingresos
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Comportamiento mensual durante el periodo analizado.
            </p>
          </div>


          <div className="mt-5 h-64">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart
                data={monthlyRevenue}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  tickFormatter={formatMonth}
                  tick={{
                    fontSize: 10,
                  }}
                />

                <YAxis
                  tickFormatter={formatRevenue}
                  tick={{
                    fontSize: 10,
                  }}
                  width={60}
                />

                <Tooltip
                  labelFormatter={(label) =>
                    formatMonth(
                      String(label)
                    )
                  }
                  formatter={(value) => [
                    formatRevenue(
                      Number(value)
                    ),
                    "Ingresos",
                  ]}
                />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#111827"
                  strokeWidth={2}
                  dot={false}
                />

              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>


        {/* Narrative */}
        <div className="flex flex-col gap-4">

          <div className="rounded-xl bg-gray-900 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Mensaje clave
            </p>

            <p className="mt-3 text-xl font-semibold leading-7">
              El negocio generó más de
              {" "}
              {formatCurrency(
                kpis.totalRevenue
              )}
              {" "}
              durante el periodo analizado.
            </p>
          </div>


          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Hallazgo
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              Los ingresos muestran ciclos de
              crecimiento y desaceleración a lo
              largo del periodo, indicando que
              el desempeño comercial no es
              uniforme mes a mes.
            </p>
          </div>


          <div className="rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Pregunta de negocio
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              ¿Qué ciudades, canales y tipos de
              propiedad explican estos cambios
              en los ingresos?
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}