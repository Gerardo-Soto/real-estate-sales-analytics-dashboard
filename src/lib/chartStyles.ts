export function getRevenueBarColor(
  value: number,
  maxValue: number
): string {
  if (maxValue <= 0) {
    return "#D1D5DB";
  }

  const ratio = value / maxValue;

  if (ratio >= 0.9) {
    return "#111827";
  }

  if (ratio >= 0.75) {
    return "#4B5563";
  }

  if (ratio >= 0.55) {
    return "#6B7280";
  }

  if (ratio >= 0.35) {
    return "#9CA3AF";
  }

  return "#D1D5DB";
}