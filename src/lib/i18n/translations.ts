export type Language =
  | "es"
  | "en";


export type TranslationSchema = {
  dashboard: {
    brand: string;
    title: string;
    subtitle: string;
    storytelling: string;
    annualComparison: string;
    yoy: string;
    cohortExplanation: string;
  };

  filters: {
    city: string;
    year: string;
    allCities: string;
    allYears: string;
    reset: string;
    showingResults: string;
  };

  kpis: {
    totalRevenue: string;
    totalRevenueSubtitle: string;
    totalSales: string;
    totalSalesSubtitle: string;
    averageTicket: string;
    averageTicketSubtitle: string;
    totalCommission: string;
    totalCommissionSubtitle: string;
  };

  charts: {
    monthlyRevenue: string;
    monthlyRevenueSubtitle: string;
    revenueByCity: string;
    revenueByCitySubtitle: string;
    revenueByChannel: string;
    revenueByChannelSubtitle: string;
    revenueByPropertyType: string;
    revenueByPropertyTypeSubtitle: string;
    buyerProfile: string;
    buyerProfileSubtitle: string;
    cohortRetention: string;
    cohortRetentionSubtitle: string;
    revenue: string;
    sales: string;
    customers: string;
    month: string;
  };

  states: {
    noData: string;
    noDataDescription: string;
  };

  categories: {
    channels: Record<string, string>;
    propertyTypes: Record<string, string>;
    buyerSegments: Record<string, string>;
    };
};


export const translations: Record<
  Language,
  TranslationSchema
> = {
  es: {
    dashboard: {
      brand: "Real Estate Sales Analytics",
      title: "Desempeño Comercial",
      subtitle:
        "Análisis de ingresos, eficiencia comercial y desempeño de ventas.",
      storytelling: "Storytelling",
      annualComparison:
        "Comparación Anual",
      yoy: "Variación YoY",
      cohortExplanation:
  "M0 = primera compra · 0% = periodo observado sin recompra · — = periodo aún no observable",
    },

    filters: {
      city: "Ciudad",
      year: "Año",
      allCities:
        "Todas las ciudades",
      allYears:
        "Todos los años",
      reset:
        "Limpiar filtros",
      showingResults:
        "Mostrando resultados para",
    },

    kpis: {
      totalRevenue:
        "Ingreso Total",
      totalRevenueSubtitle:
        "Ingresos acumulados",

      totalSales:
        "Cantidad de Ventas",
      totalSalesSubtitle:
        "Operaciones realizadas",

      averageTicket:
        "Ticket Promedio",
      averageTicketSubtitle:
        "Ingreso promedio por venta",

      totalCommission:
        "Comisión Total",
      totalCommissionSubtitle:
        "Comisiones generadas",
    },

    charts: {
        monthlyRevenue:
            "Evolución de Ingresos Mensuales",
        monthlyRevenueSubtitle:
            "Ingresos generados por mes durante el periodo analizado.",

        revenueByCity:
            "Ingresos por Ciudad",
        revenueByCitySubtitle:
            "Distribución de ingresos entre las principales ciudades.",

        revenueByChannel:
            "Ingresos por Canal de Venta",
        revenueByChannelSubtitle:
            "Comparación del desempeño comercial por canal.",

        revenueByPropertyType:
            "Ingresos por Tipo de Propiedad",
        revenueByPropertyTypeSubtitle:
            "Desempeño del portafolio inmobiliario.",

        buyerProfile:
            "Perfil del Comprador",
        buyerProfileSubtitle:
            "Distribución de clientes por segmento.",

        cohortRetention:
            "Cohortes de Recompra",
        cohortRetentionSubtitle:
            "Recurrencia de clientes después de su primera compra.",

        revenue: "Ingresos",
        sales: "Ventas",
        customers: "Clientes",
        month: "Mes",
        },

        categories: {
        channels: {
            Corredor: "Corredor",
            Directo: "Directo",
        },

        propertyTypes: {
            Casa: "Casa",
            Departamento: "Departamento",
            Comercial: "Comercial",
        },

        buyerSegments: {
            "Primera vez": "Primera vez",
            Inversionista: "Inversionista",
            "Alto patrimonio": "Alto patrimonio",
        },
        },

    states: {
      noData:
        "No hay datos disponibles",
      noDataDescription:
        "No encontramos ventas para la combinación de ciudad y año seleccionada.",
    },
  },


  en: {
    dashboard: {
      brand: "Real Estate Sales Analytics",
      title: "Commercial Performance",
      subtitle:
        "Revenue, commercial efficiency and sales performance analysis.",
      storytelling: "Storytelling",
      annualComparison:
        "Annual Comparison",
      yoy: "YoY Change",
      cohortExplanation:
  "M0 = first purchase · 0% = observed period without repurchase · — = period not yet observable",
    },

    filters: {
      city: "City",
      year: "Year",
      allCities:
        "All cities",
      allYears:
        "All years",
      reset:
        "Reset filters",
      showingResults:
        "Showing results for",
    },

    kpis: {
      totalRevenue:
        "Total Revenue",
      totalRevenueSubtitle:
        "Accumulated revenue",

      totalSales:
        "Total Sales",
      totalSalesSubtitle:
        "Completed transactions",

      averageTicket:
        "Average Ticket",
      averageTicketSubtitle:
        "Average revenue per sale",

      totalCommission:
        "Total Commission",
      totalCommissionSubtitle:
        "Generated commissions",
    },

    charts: {
        monthlyRevenue:
            "Monthly Revenue Trend",
        monthlyRevenueSubtitle:
            "Revenue generated by month during the analyzed period.",

        revenueByCity:
            "Revenue by City",
        revenueByCitySubtitle:
            "Revenue distribution across the main cities.",

        revenueByChannel:
            "Revenue by Sales Channel",
        revenueByChannelSubtitle:
            "Commercial performance comparison by sales channel.",

        revenueByPropertyType:
            "Revenue by Property Type",
        revenueByPropertyTypeSubtitle:
            "Performance of the real estate portfolio.",

        buyerProfile:
            "Buyer Profile",
        buyerProfileSubtitle:
            "Customer distribution by buyer segment.",

        cohortRetention:
            "Repurchase Cohorts",
        cohortRetentionSubtitle:
            "Customer recurrence after the first purchase.",

        revenue: "Revenue",
        sales: "Sales",
        customers: "Customers",
        month: "Month",
        },

    categories: {
        channels: {
            Corredor: "Broker",
            Directo: "Direct",
        },

        propertyTypes: {
            Casa: "House",
            Departamento: "Apartment",
            Comercial: "Commercial",
        },

        buyerSegments: {
            "Primera vez": "First-time",
            Inversionista: "Investor",
            "Alto patrimonio": "High net worth",
        },
    },

    states: {
      noData: "No data available",
      noDataDescription:
        "No sales were found for the selected city and year combination.",
    },
  },
};