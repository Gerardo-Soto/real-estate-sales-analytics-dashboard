"use client";

import { useEffect, useMemo, useState } from "react";

import KpiCard from "@/components/kpis/KpiCard";

import {
  calculateKPIs,
  calculateMonthlyRevenue,
  calculateRevenueByChannel,
  calculateRevenueByCity,
  calculateRevenueByPropertyType,
  formatCurrency,
} from "@/lib/analytics";

import { 
  loadSales, 
  loadProperties 
} from "@/lib/data";

import type {
  Property,
  RevenueByChannel,
  RevenueByCity,
  Sale,
} from "@/lib/types";

import MonthlyRevenueChart from "@/components/charts/MonthlyRevenueChart";
import RevenueByCityChart from "@/components/charts/RevenueByCityChart";
import RevenueByChannelChart from "@/components/charts/RevenueByChannelChart";
import RevenueByPropertyTypeChart from "@/components/charts/RevenueByPropertyTypeChart";

import DashboardFilters from "@/components/filters/DashboardFilters";

export default function Home() {
  const [sales, setSales] =
  useState<Sale[]>([]);

  const [properties, setProperties] =
    useState<Property[]>([]);

  const [selectedCity, setSelectedCity] =
    useState("all");

  const [selectedYear, setSelectedYear] =
    useState("all");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);


  useEffect(() => {
  async function fetchData() {
    try {
      const [
        salesData,
        propertiesData,
      ] = await Promise.all([
        loadSales(),
        loadProperties(),
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
        "First sale:",
        salesData[0]
      );

      setSales(salesData);
      setProperties(propertiesData);

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

  console.log(
  "Sales state:",
  sales.length
);

console.log(
  "Years:",
  years
);

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


  if (loading) {
    return (
      <main className="p-8">
        Loading dashboard...
      </main>
    );
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

        <header>
          <p className="text-sm font-medium text-gray-500">
            Real Estate Sales Analytics
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
            Desempeño Comercial
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Análisis de ingresos, eficiencia comercial
            y desempeño de ventas.
          </p>
        </header>

        <DashboardFilters
          cities={cities}
          years={years}
          selectedCity={selectedCity}
          selectedYear={selectedYear}
          onCityChange={setSelectedCity}
          onYearChange={setSelectedYear}
        />

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
            value={
              kpis.totalSales.toLocaleString()
            }
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
        <section className="mt-6">
          <RevenueByPropertyTypeChart
            data={revenueByPropertyType}
          />
        </section>

      </div>
    </main>
  );
}