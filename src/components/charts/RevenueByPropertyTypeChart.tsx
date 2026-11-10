"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type {
  RevenueByPropertyType,
} from "@/lib/types";

import {
  getRevenueBarColor,
} from "@/lib/chartStyles";

import {
  useLanguage,
} from "@/lib/i18n/LanguageContext";


type RevenueByPropertyTypeChartProps = {
  data: RevenueByPropertyType[];
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


export default function RevenueByPropertyTypeChart({
  data,
}: RevenueByPropertyTypeChartProps) {
  const maxRevenue = Math.max(
    ...data.map((item) => item.revenue),
    0
  );

  const { t } = useLanguage();

  const translatedData = data.map((item) => ({
    ...item,
    displayPropertyType: 
      t.categories.propertyTypes[item.propertyType] ?? item.propertyType,
  }));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          {t.charts.revenueByPropertyType}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {t.charts.revenueByPropertyTypeSubtitle}
        </p>
      </div>

      <div className="h-72 w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={translatedData}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="displayPropertyType"
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
                t.charts.revenue,
              ]}
            />

            <Bar
              dataKey="revenue"
              radius={[10, 10, 0, 0]}
            >
              {translatedData.map((item) => (
                <Cell
                  key={item.propertyType}
                  fill={getRevenueBarColor(
                    item.revenue,
                    maxRevenue
                  )}
                />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}