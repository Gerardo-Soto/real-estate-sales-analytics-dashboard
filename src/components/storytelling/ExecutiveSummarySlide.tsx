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
  useLanguage,
} from "@/lib/i18n/LanguageContext";

import {
  formatCurrency,
} from "@/lib/analytics";

import type {
  Language,
} from "@/lib/i18n/translations";

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
  month: string,
  language: Language
): string {
  const [
    year,
    monthNumber,
  ] = month.split("-");

  const date = new Date(
    Number(year),
    Number(monthNumber) - 1
  );

  const locale =
    language === "en"
      ? "en-US"
      : "es-MX";

  return date.toLocaleDateString(
    locale,
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
  const {
    t,
    language,
  } = useLanguage();

  const copy =
    t.storytelling.executiveSummary;


  return (
    <div className="flex flex-1 flex-col">

      {/* KPIs */}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            {copy.totalRevenue}
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {formatCurrency(
              kpis.totalRevenue
            )}
          </p>
        </div>


        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            {copy.totalSales}
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {kpis.totalSales.toLocaleString(
              language === "en"
                ? "en-US"
                : "es-MX"
            )}
          </p>
        </div>


        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            {copy.averageTicket}
          </p>

          <p className="mt-1 text-2xl font-bold text-gray-900">
            {formatCurrency(
              kpis.averageTicket
            )}
          </p>
        </div>


        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-500">
            {copy.totalCommission}
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
              {copy.revenueTrendTitle}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {
                copy.revenueTrendSubtitle
              }
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
                  tickFormatter={(
                    value
                  ) =>
                    formatMonth(
                      String(value),
                      language
                    )
                  }
                  tick={{
                    fontSize: 10,
                  }}
                />


                <YAxis
                  tickFormatter={
                    formatRevenue
                  }
                  tick={{
                    fontSize: 10,
                  }}
                  width={60}
                />


                <Tooltip
                  labelFormatter={(
                    label
                  ) =>
                    formatMonth(
                      String(label),
                      language
                    )
                  }
                  formatter={(
                    value
                  ) => [
                    formatRevenue(
                      Number(value)
                    ),
                    copy.revenue,
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
              {copy.messageLabel}
            </p>


            <p className="mt-3 text-xl font-semibold leading-7">
              {copy.messageText}{" "}

              <span>
                {formatCurrency(
                  kpis.totalRevenue
                )}
              </span>
            </p>

          </div>


          <div className="rounded-xl border border-gray-200 p-5">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {copy.findingLabel}
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              {copy.findingText}
            </p>

          </div>


          <div className="rounded-xl border border-gray-200 p-5">

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {copy.questionLabel}
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              {copy.questionText}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}