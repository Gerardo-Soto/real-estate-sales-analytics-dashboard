module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/lib/i18n/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LANGUAGE_STORAGE_KEY = "dashboard-language";
const LANGUAGE_CHANGE_EVENT = "dashboard-language-change";
function getLanguageSnapshot() {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === "es" || savedLanguage === "en") {
        return savedLanguage;
    }
    return "es";
}
function getServerLanguageSnapshot() {
    return "es";
}
function subscribeToLanguage(callback) {
    function handleStorageChange() {
        callback();
    }
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleStorageChange);
    return ()=>{
        window.removeEventListener("storage", handleStorageChange);
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleStorageChange);
    };
}
function LanguageProvider({ children }) {
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToLanguage, getLanguageSnapshot, getServerLanguageSnapshot);
    function setLanguage(newLanguage) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
        window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
    }
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/i18n/LanguageContext.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }
    return context;
}
}),
"[project]/src/lib/i18n/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    es: {
        dashboard: {
            brand: "Real Estate Sales Analytics",
            title: "Desempeño Comercial",
            subtitle: "Análisis de ingresos, eficiencia comercial y desempeño de ventas.",
            storytelling: "Storytelling",
            annualComparison: "Comparación Anual",
            yoy: "Variación YoY",
            cohortExplanation: "M0 = primera compra · 0% = periodo observado sin recompra · — = periodo aún no observable"
        },
        filters: {
            city: "Ciudad",
            year: "Año",
            allCities: "Todas las ciudades",
            allYears: "Todos los años",
            reset: "Limpiar filtros",
            showingResults: "Mostrando resultados para"
        },
        kpis: {
            totalRevenue: "Ingreso Total",
            totalRevenueSubtitle: "Ingresos acumulados",
            totalSales: "Cantidad de Ventas",
            totalSalesSubtitle: "Operaciones realizadas",
            averageTicket: "Ticket Promedio",
            averageTicketSubtitle: "Ingreso promedio por venta",
            totalCommission: "Comisión Total",
            totalCommissionSubtitle: "Comisiones generadas"
        },
        charts: {
            monthlyRevenue: "Evolución de Ingresos Mensuales",
            monthlyRevenueSubtitle: "Ingresos generados por mes durante el periodo analizado.",
            revenueByCity: "Ingresos por Ciudad",
            revenueByCitySubtitle: "Distribución de ingresos entre las principales ciudades.",
            revenueByChannel: "Ingresos por Canal de Venta",
            revenueByChannelSubtitle: "Comparación del desempeño comercial por canal.",
            revenueByPropertyType: "Ingresos por Tipo de Propiedad",
            revenueByPropertyTypeSubtitle: "Desempeño del portafolio inmobiliario.",
            buyerProfile: "Perfil del Comprador",
            buyerProfileSubtitle: "Distribución de clientes por segmento.",
            cohortRetention: "Cohortes de Recompra",
            cohortRetentionSubtitle: "Recurrencia de clientes después de su primera compra.",
            revenue: "Ingresos",
            sales: "Ventas",
            customers: "Clientes",
            month: "Mes"
        },
        categories: {
            channels: {
                Corredor: "Corredor",
                Directo: "Directo"
            },
            propertyTypes: {
                Casa: "Casa",
                Departamento: "Departamento",
                Comercial: "Comercial"
            },
            buyerSegments: {
                "Primera vez": "Primera vez",
                Inversionista: "Inversionista",
                "Alto patrimonio": "Alto patrimonio"
            }
        },
        states: {
            noData: "No hay datos disponibles",
            noDataDescription: "No encontramos ventas para la combinación de ciudad y año seleccionada."
        }
    },
    en: {
        dashboard: {
            brand: "Real Estate Sales Analytics",
            title: "Commercial Performance",
            subtitle: "Revenue, commercial efficiency and sales performance analysis.",
            storytelling: "Storytelling",
            annualComparison: "Annual Comparison",
            yoy: "YoY Change",
            cohortExplanation: "M0 = first purchase · 0% = observed period without repurchase · — = period not yet observable"
        },
        filters: {
            city: "City",
            year: "Year",
            allCities: "All cities",
            allYears: "All years",
            reset: "Reset filters",
            showingResults: "Showing results for"
        },
        kpis: {
            totalRevenue: "Total Revenue",
            totalRevenueSubtitle: "Accumulated revenue",
            totalSales: "Total Sales",
            totalSalesSubtitle: "Completed transactions",
            averageTicket: "Average Ticket",
            averageTicketSubtitle: "Average revenue per sale",
            totalCommission: "Total Commission",
            totalCommissionSubtitle: "Generated commissions"
        },
        charts: {
            monthlyRevenue: "Monthly Revenue Trend",
            monthlyRevenueSubtitle: "Revenue generated by month during the analyzed period.",
            revenueByCity: "Revenue by City",
            revenueByCitySubtitle: "Revenue distribution across the main cities.",
            revenueByChannel: "Revenue by Sales Channel",
            revenueByChannelSubtitle: "Commercial performance comparison by sales channel.",
            revenueByPropertyType: "Revenue by Property Type",
            revenueByPropertyTypeSubtitle: "Performance of the real estate portfolio.",
            buyerProfile: "Buyer Profile",
            buyerProfileSubtitle: "Customer distribution by buyer segment.",
            cohortRetention: "Repurchase Cohorts",
            cohortRetentionSubtitle: "Customer recurrence after the first purchase.",
            revenue: "Revenue",
            sales: "Sales",
            customers: "Customers",
            month: "Month"
        },
        categories: {
            channels: {
                Corredor: "Broker",
                Directo: "Direct"
            },
            propertyTypes: {
                Casa: "House",
                Departamento: "Apartment",
                Comercial: "Commercial"
            },
            buyerSegments: {
                "Primera vez": "First-time",
                Inversionista: "Investor",
                "Alto patrimonio": "High net worth"
            }
        },
        states: {
            noData: "No data available",
            noDataDescription: "No sales were found for the selected city and year combination."
        }
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0kojtn5jeam7a._.js.map