import type {
  BuyerProfile,
  CohortRetentionRow,
  Customer,
  KPIs,
  MonthlyRevenue,
  Property,
  RevenueByChannel,
  RevenueByCity,
  RevenueByPropertyType,
  Sale,
} from "./types";

export function calculateKPIs(
  sales: Sale[]
): KPIs {

  const totalSales = sales.length;

  const totalRevenue = sales.reduce(
    (sum, sale) => sum + sale.salePrice,
    0
  );

  const totalCommission = sales.reduce(
    (sum, sale) => sum + sale.commissionAmount,
    0
  );

  const averageTicket =
    totalSales > 0
      ? totalRevenue / totalSales
      : 0;

  return {
    totalRevenue,
    totalSales,
    averageTicket,
    totalCommission,
  };
}

/* funstion to conveert large numbers into a more readable format with suffixes (K, M, B) for thousands, millions, and billions. 
For example:
6000000000 → $6.00B
707350     → $707.35K
200630000  → $200.63M
*/
export function formatCurrency(
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
    ).toFixed(2)}M`;
  }

  if (value >= 1_000) {
    return `$${(
      value / 1_000
    ).toFixed(2)}K`;
  }

  return `$${value.toFixed(2)}`;
}

export function calculateMonthlyRevenue(
  sales: Sale[]
): MonthlyRevenue[] {
  const revenueByMonth = new Map<string, number>();

  sales.forEach((sale) => {
    const month = sale.saleDate.slice(0, 7);

    const currentRevenue =
      revenueByMonth.get(month) ?? 0;

    revenueByMonth.set(
      month,
      currentRevenue + sale.salePrice
    );
  });

  return Array.from(
    revenueByMonth.entries()
  )
    .map(([month, revenue]) => ({
      month,
      revenue,
    }))
    .sort((a, b) =>
      a.month.localeCompare(b.month)
    );
}

export function calculateRevenueByCity(
  sales: Sale[],
  properties: Property[]
): RevenueByCity[] {
  const propertyMap = new Map(
    properties.map((property) => [
      property.propertyId,
      property,
    ])
  );

  const cityData = new Map<
    string,
    {
      revenue: number;
      sales: number;
    }
  >();

  sales.forEach((sale) => {
    const property = propertyMap.get(
      sale.propertyId
    );

    if (!property) {
      return;
    }

    const current = cityData.get(
      property.city
    ) ?? {
      revenue: 0,
      sales: 0,
    };

    cityData.set(property.city, {
      revenue:
        current.revenue + sale.salePrice,

      sales:
        current.sales + 1,
    });
  });

  return Array.from(
    cityData.entries()
  )
    .map(([city, values]) => ({
      city,
      revenue: values.revenue,
      sales: values.sales,
    }))
    .sort(
      (a, b) =>
        b.revenue - a.revenue
    );
}

export function calculateRevenueByChannel(
  sales: Sale[]
): RevenueByChannel[] {
  const channelData = new Map<
    string,
    {
      revenue: number;
      sales: number;
    }
  >();

  sales.forEach((sale) => {
    const current = channelData.get(
      sale.salesChannel
    ) ?? {
      revenue: 0,
      sales: 0,
    };

    channelData.set(
      sale.salesChannel,
      {
        revenue:
          current.revenue + sale.salePrice,

        sales:
          current.sales + 1,
      }
    );
  });

  return Array.from(
    channelData.entries()
  )
    .map(([channel, values]) => ({
      channel,
      revenue: values.revenue,
      sales: values.sales,
    }))
    .sort(
      (a, b) =>
        b.revenue - a.revenue
    );
}

export function calculateRevenueByPropertyType(
  sales: Sale[],
  properties: Property[]
): RevenueByPropertyType[] {
  const propertyMap = new Map(
    properties.map((property) => [
      property.propertyId,
      property,
    ])
  );

  const propertyTypeData = new Map<
    string,
    {
      revenue: number;
      sales: number;
    }
  >();

  sales.forEach((sale) => {
    const property = propertyMap.get(
      sale.propertyId
    );

    if (!property) {
      return;
    }

    const current =
      propertyTypeData.get(
        property.propertyType
      ) ?? {
        revenue: 0,
        sales: 0,
      };

    propertyTypeData.set(
      property.propertyType,
      {
        revenue:
          current.revenue + sale.salePrice,
        sales:
          current.sales + 1,
      }
    );
  });

  return Array.from(
    propertyTypeData.entries()
  )
    .map(([propertyType, values]) => ({
      propertyType,
      revenue: values.revenue,
      sales: values.sales,
    }))
    .sort(
      (a, b) =>
        b.revenue - a.revenue
    );
}

export function calculateBuyerProfiles(
  sales: Sale[],
  customers: Customer[]
): BuyerProfile[] {
  const customerMap = new Map(
    customers.map((customer) => [
      customer.customerId,
      customer,
    ])
  );

  const customerIdsBySegment =
    new Map<string, Set<string>>();

  sales.forEach((sale) => {
    const customer =
      customerMap.get(sale.customerId);

    if (!customer) {
      return;
    }

    const segment =
      customer.buyerSegment;

    if (!segment) {
      return;
    }

    if (!customerIdsBySegment.has(segment)) {
      customerIdsBySegment.set(
        segment,
        new Set<string>()
      );
    }

    customerIdsBySegment
      .get(segment)!
      .add(customer.customerId);
  });

  const totalCustomers =
    Array.from(
      customerIdsBySegment.values()
    ).reduce(
      (sum, customerIds) =>
        sum + customerIds.size,
      0
    );

  return Array.from(
    customerIdsBySegment.entries()
  )
    .map(
      ([
        buyerSegment,
        customerIds,
      ]) => ({
        buyerSegment,
        customers:
          customerIds.size,

        percentage:
          totalCustomers > 0
            ? (
                customerIds.size /
                totalCustomers
              ) * 100
            : 0,
      })
    )
    .sort(
      (a, b) =>
        b.customers -
        a.customers
    );
}

export function calculateCohortRetention(
  sales: Sale[]
): CohortRetentionRow[] {
  if (sales.length === 0) {
    return [];
  }

  const salesByCustomer = new Map<
    string,
    Sale[]
  >();

  for (const sale of sales) {
    const customerSales =
      salesByCustomer.get(
        sale.customerId
      ) ?? [];

    customerSales.push(sale);

    salesByCustomer.set(
      sale.customerId,
      customerSales
    );
  }

  const cohortData = new Map<
    string,
    {
      customers: Set<string>;
      activity: Map<
        number,
        Set<string>
      >;
    }
  >();

  for (
    const [
      customerId,
      customerSales,
    ] of salesByCustomer
  ) {
    const sortedSales = [
      ...customerSales,
    ].sort((a, b) =>
      a.saleDate.localeCompare(
        b.saleDate
      )
    );

    const firstSale =
      sortedSales[0];

    if (!firstSale) {
      continue;
    }

    const cohort =
      firstSale.saleDate.slice(0, 7);

    if (!cohortData.has(cohort)) {
      cohortData.set(cohort, {
        customers: new Set(),
        activity: new Map(),
      });
    }

    const cohortInfo =
      cohortData.get(cohort)!;

    cohortInfo.customers.add(
      customerId
    );

    for (const sale of sortedSales) {
      const saleMonth =
        sale.saleDate.slice(0, 7);

      const monthIndex =
        getMonthDifference(
          cohort,
          saleMonth
        );

      if (
        !cohortInfo.activity.has(
          monthIndex
        )
      ) {
        cohortInfo.activity.set(
          monthIndex,
          new Set()
        );
      }

      cohortInfo.activity
        .get(monthIndex)!
        .add(customerId);
    }
  }

  const lastObservedMonth = sales
    .map((sale) =>
      sale.saleDate.slice(0, 7)
    )
    .sort()
    .at(-1);

  if (!lastObservedMonth) {
    return [];
  }

  const firstCohort =
    Array.from(
      cohortData.keys()
    )
      .sort()
      .at(0);

  if (!firstCohort) {
    return [];
  }

  const maxMonthIndex =
    getMonthDifference(
      firstCohort,
      lastObservedMonth
    );

  return Array.from(
    cohortData.entries()
  )
    .sort(([a], [b]) =>
      a.localeCompare(b)
    )
    .map(
      ([
        cohort,
        cohortInfo,
      ]) => {
        const cohortSize =
          cohortInfo.customers.size;

        const observableMonths =
          getMonthDifference(
            cohort,
            lastObservedMonth
          );

        const retention =
          Array.from(
            {
              length:
                maxMonthIndex + 1,
            },
            (_, monthIndex) => {
              if (
                monthIndex >
                observableMonths
              ) {
                return null;
              }

              const activeCustomers =
                cohortInfo.activity.get(
                  monthIndex
                );

              const activeCount =
                activeCustomers?.size ?? 0;

              return (
                activeCount /
                cohortSize
              ) * 100;
            }
          );

        return {
          cohort,
          cohortSize,
          retention,
        };
      }
    );
}

function getMonthDifference(
  startMonth: string,
  endMonth: string
): number {
  const [
    startYear,
    startMonthNumber,
  ] = startMonth
    .split("-")
    .map(Number);

  const [
    endYear,
    endMonthNumber,
  ] = endMonth
    .split("-")
    .map(Number);

  return (
    (endYear - startYear) * 12 +
    (
      endMonthNumber -
      startMonthNumber
    )
  );
}