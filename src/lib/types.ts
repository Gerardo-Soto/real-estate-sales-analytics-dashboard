export type Customer = {
  customerId: string;
  buyerSegment: string;
  country: string;
  city: string;
};

export type Property = {
  propertyId: string;
  propertyType: string;
  city: string;
  neighborhood: string;
  bedrooms: number;
  sizeM2: number;
  listingPrice: number;
  propertyCategory: string;
};

export type Sale = {
  saleId: string;
  saleDate: string;
  customerId: string;
  propertyId: string;
  salePrice: number;
  salesChannel: string;
  commissionRate: number;
  commissionAmount: number;
};

export type KPIs = {
  totalRevenue: number;
  totalSales: number;
  averageTicket: number;
  totalCommission: number;
};

export type MonthlyRevenue = {
  month: string;
  revenue: number;
};

export type RevenueByCity = {
  city: string;
  revenue: number;
  sales: number;
};

export type RevenueByChannel = {
  channel: string;
  revenue: number;
  sales: number;
};

export type RevenueByPropertyType = {
  propertyType: string;
  revenue: number;
  sales: number;
};