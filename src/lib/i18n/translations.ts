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
    activeFilters: string;
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

executiveInsights: {
  cardTitle: string;
  title: string;
  subtitle: string;
  recommendationAction: string;

  repeatPurchaseTitle: string;
  repeatPurchaseDescription: string;
  repeatPurchaseRecommendation: string;

  firstTimeTitle: string;
  firstTimeDescription: string;
  firstTimeRecommendation: string;

  recurrenceTitle: string;
  recurrenceDescription: string;
  recurrenceRecommendation: string;

  segmentTitle: string;
  segmentDescription: string;
  segmentRecommendation: string;
};

    storytelling: {
        modalTitle: string;
        modalSubtitle: string;

        previous: string;
        next: string;
        close: string;
        slide: string;
        of: string;

        executiveSummaryTitle: string;
        executiveSummarySubtitle: string;

        commercialPerformanceTitle: string;
        commercialPerformanceSubtitle: string;

        buyerProfileTitle: string;
        buyerProfileSubtitle: string;

        cohortStoryTitle: string;
        cohortStorySubtitle: string;

        recommendationsTitle: string;
        recommendationsSubtitle: string;

        executiveSummary: {
            totalRevenue: string;
            totalSales: string;
            averageTicket: string;
            totalCommission: string;

            revenueTrendTitle: string;
            revenueTrendSubtitle: string;

            messageLabel: string;
            messageText: string;

            findingLabel: string;
            findingText: string;

            questionLabel: string;
            questionText: string;

            revenue: string;
            
        };
        commercialPerformance: {
          cityTitle: string;
          channelTitle: string;
          propertyTypeTitle: string;

          revenue: string;

          findingLabel: string;
          findingText: string;

          marketLabel: string;
          marketText: string;

          channelLabel: string;
          channelText: string;

          portfolioLabel: string;
          portfolioText: string;

          implicationLabel: string;
          implicationText: string;
        };
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
      activeFilters:
        "Filtros activos",
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

    executiveInsights: {
  cardTitle:
    "Análisis Ejecutivo",

  title:
    "Insights y Recomendaciones",

  subtitle:
    "Principales hallazgos identificados a partir del comportamiento de compra y el análisis estadístico.",

  recommendationAction:
    "Acción recomendada",

  repeatPurchaseTitle:
    "Alta recurrencia de clientes",

  repeatPurchaseDescription:
    "El 77.1% de los clientes realizó más de una compra durante el periodo analizado.",

  repeatPurchaseRecommendation:
    "Fortalecer estrategias de fidelización y seguimiento postventa para aprovechar la alta recurrencia observada.",

  firstTimeTitle:
    "Primera vez lidera la recompra",

  firstTimeDescription:
    "El segmento Primera vez presentó una tasa de recompra aproximada de 82.1%, superior a Inversionista y Alto patrimonio.",

  firstTimeRecommendation:
    "Priorizar campañas de seguimiento para compradores de primera vez después de su adquisición inicial.",

  recurrenceTitle:
    "Oleadas de recompra",

  recurrenceDescription:
    "Las cohortes muestran picos de recurrencia en determinados meses posteriores a la primera compra, en lugar de una recompra uniforme.",

  recurrenceRecommendation:
    "Programar campañas de reactivación antes de las ventanas históricas donde aumentan las recompras.",

  segmentTitle:
    "Segmento y recompra",

  segmentDescription:
    "Existe una relación estadísticamente significativa entre el segmento del comprador y la recompra, aunque su intensidad es relativamente débil.",

  segmentRecommendation:
    "Utilizar el segmento como una señal adicional dentro de modelos comerciales, evitando tratarlo como único predictor del comportamiento.",
},
storytelling: {
  modalTitle:
    "Data Storytelling",

  modalSubtitle:
    "Real Estate Sales Analytics",

  previous:
    "Anterior",

  next:
    "Siguiente",

  close:
    "Cerrar",

  slide:
    "Diapositiva",

  of:
    "de",

  executiveSummaryTitle:
    "Resumen Ejecutivo",

  executiveSummarySubtitle:
    "Una visión general del desempeño comercial.",

  commercialPerformanceTitle:
    "Desempeño Comercial",

  commercialPerformanceSubtitle:
    "¿Qué mercados, canales y propiedades impulsan los ingresos?",

  buyerProfileTitle:
    "Perfil del Comprador",

  buyerProfileSubtitle:
    "¿Quiénes son nuestros clientes y cómo se comportan?",

  cohortStoryTitle:
    "Oleadas de Recompra",

  cohortStorySubtitle:
    "¿Cuándo vuelven a comprar los clientes?",

  recommendationsTitle:
    "Conclusiones",

  recommendationsSubtitle:
    "Principales oportunidades y acciones recomendadas.",

    executiveSummary: {
  totalRevenue:
    "Ingreso Total",

  totalSales:
    "Ventas",

  averageTicket:
    "Ticket Promedio",

  totalCommission:
    "Comisión Total",

  revenueTrendTitle:
    "Evolución de ingresos",

        revenueTrendSubtitle:
  "Comportamiento mensual durante el periodo analizado.",

  messageLabel:
    "Mensaje principal",

  messageText:
    "El negocio generó un volumen sólido de ingresos durante el periodo analizado.",

  findingLabel:
    "Hallazgo",

  findingText:
    "Los ingresos presentan ciclos de crecimiento y desaceleración a lo largo del tiempo.",

  questionLabel:
    "Siguiente pregunta",

  questionText:
    "¿Qué ciudades, canales y tipos de propiedad explican mejor estos cambios?",

  revenue:
    "Ingresos",
},
commercialPerformance: {
  cityTitle:
    "Ingresos por Ciudad",

  channelTitle:
    "Ingresos por Canal",

  propertyTypeTitle:
    "Ingresos por Tipo de Propiedad",

  revenue:
    "Ingresos",

  findingLabel:
    "Hallazgo principal",

  findingText:
    "El desempeño comercial está concentrado en determinados mercados, canales y tipos de propiedad.",

  marketLabel:
    "Mercado líder",

  marketText:
    "La ciudad con mayores ingresos es",

  channelLabel:
    "Canal dominante",

  channelText:
    "El canal con mayor generación de ingresos es",

  portfolioLabel:
    "Portafolio",

  portfolioText:
    "El tipo de propiedad con mayor contribución a los ingresos es",

  implicationLabel:
    "Implicación",

  implicationText:
    "Estos resultados permiten identificar dónde concentrar recursos comerciales, presupuesto y capacidad operativa.",
},
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
        activeFilters:
        "Active filters",
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

    executiveInsights: {
  cardTitle:
    "Executive Analysis",

  title:
    "Insights and Recommendations",

  subtitle:
    "Key findings identified through purchasing behavior and statistical analysis.",

  recommendationAction:
    "Recommended action",

  repeatPurchaseTitle:
    "High customer recurrence",

  repeatPurchaseDescription:
    "77.1% of customers made more than one purchase during the analyzed period.",

  repeatPurchaseRecommendation:
    "Strengthen loyalty and post-sale follow-up strategies to take advantage of the high recurrence observed.",

  firstTimeTitle:
    "First-time buyers lead repurchases",

  firstTimeDescription:
    "The First-time segment showed an approximate repurchase rate of 82.1%, higher than Investor and High net worth customers.",

  firstTimeRecommendation:
    "Prioritize follow-up campaigns for first-time buyers after their initial purchase.",

  recurrenceTitle:
    "Repurchase waves",

  recurrenceDescription:
    "The cohort analysis shows peaks in customer recurrence during specific months after the first purchase, rather than a uniform repurchase pattern.",

  recurrenceRecommendation:
    "Schedule reactivation campaigns before historical periods where repurchases tend to increase.",

  segmentTitle:
    "Segment and repurchase behavior",

  segmentDescription:
    "There is a statistically significant relationship between buyer segment and repurchase behavior, although the strength of the association is relatively weak.",

  segmentRecommendation:
    "Use buyer segment as an additional signal in commercial models rather than treating it as the sole predictor of customer behavior.",
},
storytelling: {
  commercialPerformance: {
  cityTitle:
    "Revenue by City",

  channelTitle:
    "Revenue by Channel",

  propertyTypeTitle:
    "Revenue by Property Type",

  revenue:
    "Revenue",

  findingLabel:
    "Key finding",

  findingText:
    "Commercial performance is concentrated across specific markets, channels, and property types.",

  marketLabel:
    "Leading market",

  marketText:
    "The city generating the highest revenue is",

  channelLabel:
    "Leading channel",

  channelText:
    "The sales channel generating the highest revenue is",

  portfolioLabel:
    "Portfolio",

  portfolioText:
    "The property type contributing the most revenue is",

  implicationLabel:
    "Implication",

  implicationText:
    "These results help identify where commercial resources, budget, and operational capacity should be prioritized.",
},
  modalTitle:
    "Data Storytelling",

  modalSubtitle:
    "Real Estate Sales Analytics",

  previous:
    "Previous",

  next:
    "Next",

  close:
    "Close",

  slide:
    "Slide",

  of:
    "of",

  executiveSummaryTitle:
    "Executive Summary",

  executiveSummarySubtitle:
    "An overview of commercial performance.",

  commercialPerformanceTitle:
    "Commercial Performance",

  commercialPerformanceSubtitle:
    "Which markets, channels, and property types drive revenue?",

  buyerProfileTitle:
    "Buyer Profile",

  buyerProfileSubtitle:
    "Who are our customers and how do they behave?",

  cohortStoryTitle:
    "Repurchase Waves",

  cohortStorySubtitle:
    "When do customers come back to buy again?",

  recommendationsTitle:
    "Conclusions",

  recommendationsSubtitle:
    "Key opportunities and recommended actions.",

    executiveSummary: {
  totalRevenue:
    "Total Revenue",

  totalSales:
    "Sales",

  averageTicket:
    "Average Ticket",

  totalCommission:
    "Total Commission",

  revenueTrendTitle:
    "Revenue Trend",
    revenueTrendSubtitle:
  "Monthly performance during the analyzed period.",

  messageLabel:
    "Key message",

  messageText:
    "The business generated a solid level of revenue during the analyzed period.",

  findingLabel:
    "Finding",

  findingText:
    "Revenue shows periods of growth and slowdown over time.",

  questionLabel:
    "Next question",

  questionText:
    "Which cities, channels, and property types best explain these changes?",

  revenue:
    "Revenue",
},
},

  },
};