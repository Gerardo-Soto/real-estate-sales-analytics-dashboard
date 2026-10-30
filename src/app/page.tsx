"use client";

import { useEffect, useMemo, useState } from "react";

import KpiCard from "@/components/kpis/KpiCard";

import {
  calculateBuyerProfiles,
  calculateCohortRetention,
  calculateKPIs,
  calculateMonthlyRevenue,
  calculateRevenueByChannel,
  calculateRevenueByCity,
  calculateRevenueByPropertyType,
  calculateRevenueComparison,
  formatCurrency,
} from "@/lib/analytics";

import { 
  loadCustomers,
  loadSales, 
  loadProperties 
} from "@/lib/data";

import type {
  Customer,
  Property,
  Sale,
} from "@/lib/types";

import MonthlyRevenueChart from "@/components/charts/MonthlyRevenueChart";
import RevenueByCityChart from "@/components/charts/RevenueByCityChart";
import RevenueByChannelChart from "@/components/charts/RevenueByChannelChart";
import RevenueByPropertyTypeChart from "@/components/charts/RevenueByPropertyTypeChart";
import BuyerProfileChart from "@/components/charts/BuyerProfileChart";
import CohortRetentionHeatmap from "@/components/charts/CohortRetentionHeatmap";
import ExecutiveInsights from "@/components/insights/ExecutiveInsights";
import EmptyState from "@/components/ui/EmptyState";
import DashboardSkeleton from "@/components/ui/DashboardSkeleton";

import DashboardFilters from "@/components/filters/DashboardFilters";

export default function Home() {
  const [sales, setSales] =
    useState<Sale[]>([]);

  const [properties, setProperties] =
    useState<Property[]>([]);

  const [customers, setCustomers] =
    useState<Customer[]>([]);

  const [selectedCity, setSelectedCity] =
    useState("all");

  const [selectedYear, setSelectedYear] =
    useState("all");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  function resetFilters() {
    setSelectedCity("all");
    setSelectedYear("all");
  }


  useEffect(() => {
  async function fetchData() {
    try {
      const [
        salesData,
        propertiesData,
        customersData,
      ] = await Promise.all([
        loadSales(),
        loadProperties(),
        loadCustomers(),
      ]);

      console.log(
        "Sales loaded:",
        salesData.length
      );

      console.log(
        "Properties loaded:",
        propertiesData.length
      );

      console.log(
        "Customers loaded:",
        customersData.length
      );

      setSales(salesData);
      setProperties(propertiesData);
      setCustomers(customersData);

    } catch (err) {
      console.error(
        "Dashboard loading error:",
        err
      );

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Failed to load dashboard data."
        );
      }

    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, []);

  useEffect(() => {
  console.log(
    "Sales state updated:",
    sales.length
  );

  if (sales.length > 0) {
    console.log(
      "First sale for cohort:",
      sales[0]
    );

    const testCohorts =
      calculateCohortRetention(sales);

    console.log(
      "Test cohort count:",
      testCohorts.length
    );

    console.table(
      testCohorts.map((row) => ({
        cohort: row.cohort,
        cohortSize: row.cohortSize,
        month0: row.retention[0],
        month1: row.retention[1],
      }))
    );
  }
}, [sales]);

  const cities = useMemo(() => {
    return Array.from(
      new Set(
        properties.map(
          (property) => property.city
        )
      )
    ).sort();
  }, [properties]);

  const years = useMemo(() => {
  const uniqueYears = sales
    .map((sale) =>
      sale.saleDate?.slice(0, 4)
    )
    .filter(
      (year): year is string =>
        Boolean(year)
    );

  return Array.from(
    new Set(uniqueYears)
  ).sort();
}, [sales]);

  /*console.log(
  "Sales state:",
  sales.length
);*/

/*console.log(
  "Years:",
  years
);*/

  const propertyMap = useMemo(() => {
    return new Map(
      properties.map((property) => [
        property.propertyId,
        property,
      ])
    );
  }, [properties]);

  const filteredSales = useMemo(() => {
    return sales.filter((sale) => {
      const property =
        propertyMap.get(sale.propertyId);

      if (!property) {
        return false;
      }

      const saleYear =
        sale.saleDate.slice(0, 4);

      const cityMatches =
        selectedCity === "all" ||
        property.city === selectedCity;

      const yearMatches =
        selectedYear === "all" ||
        saleYear === selectedYear;

      return cityMatches && yearMatches;
    });
  }, [
    sales,
    propertyMap,
    selectedCity,
    selectedYear,
  ]);

  const kpis = useMemo(() => {
    return calculateKPIs(filteredSales);
  }, [filteredSales]);

  const monthlyRevenue = useMemo(() => {
    return calculateMonthlyRevenue(
      filteredSales
    );
  }, [filteredSales]);

  const revenueByChannel = useMemo(() => {
    return calculateRevenueByChannel(
      filteredSales
    );
  }, [filteredSales]);

  const revenueByCity = useMemo(() => {
    return calculateRevenueByCity(
      filteredSales,
      properties
    );
  }, [filteredSales, properties]);

  const revenueByPropertyType = useMemo(
    () =>
      calculateRevenueByPropertyType(
        filteredSales,
        properties
      ),
    [
      filteredSales,
      properties,
    ]
  );

  const buyerProfiles = useMemo(
    () =>
      calculateBuyerProfiles(
        filteredSales,
        customers
      ),
    [
      filteredSales,
      customers,
    ]
  );

  /*const cohortRetention = useMemo(
    () =>
      calculateCohortRetention(
        filteredSales
      ),
    [filteredSales]
  );*/

  const hasResults =
  filteredSales.length > 0;

  const cohortRetention = useMemo(
    () =>
      calculateCohortRetention(
        sales
      ),
    [sales]
  );

  const revenueComparison = useMemo(
    () =>
      calculateRevenueComparison(
        sales
      ),
    [sales]
  );

  useEffect(() => {
  if (sales.length === 0) {
    return;
  }

  console.log(
    "Sales for cohorts:",
    sales.length
  );

  console.log(
    "Cohort rows:",
    cohortRetention.length
  );

  console.table(
    cohortRetention.slice(0, 5).map(
      (row) => ({
        cohort: row.cohort,
        cohortSize: row.cohortSize,
        month0: row.retention[0],
        month1: row.retention[1],
        month2: row.retention[2],
      })
    )
  );
}, [sales, cohortRetention]);


  
  if (loading) {
    return <DashboardSkeleton />;
  }


  if (error) {
    return (
      <main className="p-8">
        <p className="text-red-600">
          {error}
        </p>
      </main>
    );
  }


  if (!kpis) {
    return null;
  }


  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">

  <header>
    <p className="text-sm font-medium text-gray-500">
      Real Estate Sales Analytics
    </p>

    <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
      Desempeño Comercial
    </h1>

    <p className="mt-2 text-sm text-gray-500">
      Análisis de ingresos, eficiencia comercial y desempeño de ventas.
    </p>
  </header>


  {revenueComparison && (
    <section className="min-w-[360px] rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        Comparación Anual
      </p>

      <div className="mt-3 flex items-end gap-6">

        <div>
          <p className="text-xs text-gray-400">
            {revenueComparison.currentYear}
          </p>

          <p className="text-xl font-semibold text-gray-900">
            {formatCurrency(
              revenueComparison.currentRevenue
            )}
          </p>
        </div>


        <div>
          <p className="text-xs text-gray-400">
            {revenueComparison.previousYear}
          </p>

          <p className="text-xl font-semibold text-gray-900">
            {formatCurrency(
              revenueComparison.previousRevenue
            )}
          </p>
        </div>


        <div>
          <p className="text-xs text-gray-400">
            YoY
          </p>

          <p
            className={`text-xl font-semibold ${
              revenueComparison.changePercentage >= 0
                ? "text-emerald-600"
                : "text-red-600"
            }`}
          >
            {revenueComparison.changePercentage >= 0
              ? "+"
              : ""}
            {revenueComparison.changePercentage.toFixed(1)}
            %
          </p>
        </div>

      </div>

    </section>
  )}

</div>

        <DashboardFilters
          cities={cities}
          years={years}
          selectedCity={selectedCity}
          selectedYear={selectedYear}
          onCityChange={setSelectedCity}
          onYearChange={setSelectedYear}
          onResetFilters={resetFilters}
        />


        {!hasResults ? (
  <EmptyState
    onResetFilters={resetFilters}
  />
) : (
  <>
    <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <KpiCard
        title="Ingreso Total"
        value={formatCurrency(
          kpis.totalRevenue
        )}
        subtitle="Ingresos acumulados"
      />

      <KpiCard
        title="Cantidad de Ventas"
        value={kpis.totalSales.toLocaleString()}
        subtitle="Operaciones realizadas"
      />

      <KpiCard
        title="Ticket Promedio"
        value={formatCurrency(
          kpis.averageTicket
        )}
        subtitle="Ingreso promedio por venta"
      />

      <KpiCard
        title="Comisión Total"
        value={formatCurrency(
          kpis.totalCommission
        )}
        subtitle="Comisiones generadas"
      />
    </section>

    <section className="mt-6">
      <MonthlyRevenueChart
        data={monthlyRevenue}
      />
    </section>

    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <RevenueByCityChart
        data={revenueByCity}
      />

      <RevenueByChannelChart
        data={revenueByChannel}
      />
    </section>

    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <RevenueByPropertyTypeChart
        data={revenueByPropertyType}
      />

      <BuyerProfileChart
        data={buyerProfiles}
      />
    </section>
  </>
)}

        <section className="mt-6">
          <CohortRetentionHeatmap
            data={cohortRetention}
          />
        </section>

        <section className="mt-6">
          <ExecutiveInsights />
        </section>
      </div>
    </main>
  );
}