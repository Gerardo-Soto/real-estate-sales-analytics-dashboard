import Papa from "papaparse";

import type {
  Customer,
  Property,
  Sale,
} from "./types";

type CsvRow = Record<string, string>;


async function loadCsv(
  path: string
): Promise<CsvRow[]> {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH || "";

  const response = await fetch(
    `${basePath}${path}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load ${path}: HTTP ${response.status}`
    );
  }

  const csv = await response.text();

  const result = Papa.parse<CsvRow>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return result.data;
}


export async function loadCustomers():
  Promise<Customer[]> {

  const rows = await loadCsv(
    "/data/processed/dim_clientes_clean.csv"
  );

  return rows.map((row) => ({
    customerId: row.id_cliente,
    buyerSegment: row.segmento_comprador,
    country: row.pais,
    city: row.ciudad,
  }));
}


export async function loadProperties():
  Promise<Property[]> {

  const rows = await loadCsv(
    "/data/processed/dim_propiedades_clean.csv"
  );

  return rows.map((row) => ({
    propertyId: row.id_propiedad,
    propertyType: row.tipo_propiedad,
    city: row.ciudad,
    neighborhood: row.barrio,
    bedrooms: Number(row.habitaciones),
    sizeM2: Number(row.tamano_m2),
    listingPrice: Number(row.precio_publicado),
    propertyCategory: row.categoria_propiedad,
  }));
}


export async function loadSales():
  Promise<Sale[]> {

  const rows = await loadCsv(
    "/data/processed/hechos_ventas_propiedades_clean.csv"
  );

  return rows.map((row) => ({
    saleId: row.id_venta,
    saleDate: row.fecha_venta,
    customerId: row.id_cliente,
    propertyId: row.id_propiedad,
    salePrice: Number(row.precio_venta),
    salesChannel: row.canal_venta,
    commissionRate:
      Number(row.porcentaje_comision),
    commissionAmount:
      Number(row.monto_comision),
  }));
}