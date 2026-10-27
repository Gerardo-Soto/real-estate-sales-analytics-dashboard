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


type BuyerProfileChartProps = {
  data: BuyerProfile[];
};


const chartColors = [
  "#111827",
  "#4B5563",
  "#9CA3AF",
];


export default function BuyerProfileChart({
  data,
}: BuyerProfileChartProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Perfil del Comprador
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Distribución de clientes por segmento.
        </p>
      </div>

      <div className="h-72 w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="customers"
              nameKey="buyerSegment"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.buyerSegment}
                  fill={
                    chartColors[
                      index %
                        chartColors.length
                    ]
                  }
                />
              ))}
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
  );
}