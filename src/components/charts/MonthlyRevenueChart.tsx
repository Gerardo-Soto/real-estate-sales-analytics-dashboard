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

import type {
  MonthlyRevenue,
} from "@/lib/types";


type MonthlyRevenueChartProps = {
  data: MonthlyRevenue[];
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
  const [year, monthNumber] =
    month.split("-");

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


export default function MonthlyRevenueChart({
  data,
}: MonthlyRevenueChartProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Evolución de Ingresos Mensuales
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Ingresos generados por mes durante el periodo analizado.
        </p>
      </div>

      <div className="h-80 w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickFormatter={formatMonth}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tickFormatter={formatRevenue}
              tick={{ fontSize: 12 }}
              width={70}
            />

            <Tooltip
              labelFormatter={(label) =>
                formatMonth(String(label))
              }
              formatter={(value) => [
                formatRevenue(Number(value)),
                "Ingresos",
              ]}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#111827"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}