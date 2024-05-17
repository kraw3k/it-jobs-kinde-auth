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
    return `${formatCurrency(min)} - ${formatCurrency(max)}`;
};


export const mapToSelectItems = (items: { id: number; name: string }[]) =>
    items.map((item) => ({
      value: item.id.toString(),
      label: item.name,
    }));