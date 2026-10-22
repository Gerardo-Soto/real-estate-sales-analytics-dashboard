import type {
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