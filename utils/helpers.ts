const nf = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  minimumFractionDigits: 0,
});

export const formatCurrency = (amount: number) => {
  return nf.format(amount);
};

export const formatSalary = (min: number, max: number) => {
  if (min === max) return formatCurrency(min);
  return nf.formatRange(min, max);
};
