export function formatCurrency(
  amount: number | bigint,
  locale = "id-ID",
  currency = "IDR"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    currencyDisplay: "code",
  }).format(amount);
}
