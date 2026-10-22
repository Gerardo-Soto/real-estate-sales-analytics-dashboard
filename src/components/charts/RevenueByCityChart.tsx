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
  RevenueByCity,
} from "@/lib/types";


type RevenueByCityChartProps = {
  data: RevenueByCity[];
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


export default function RevenueByCityChart({
  data,
}: RevenueByCityChartProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Ingresos por Ciudad
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Distribución de ingresos entre las principales sedes.
        </p>
      </div>

      <div className="h-72 w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="city"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tickFormatter={formatRevenue}
              tick={{ fontSize: 12 }}
              width={70}
            />

            <Tooltip
              formatter={(value) => [
                formatRevenue(Number(value)),
                "Ingresos",
              ]}
            />

            <Bar
              dataKey="revenue"
              fill="#111827"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}