import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUrl(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

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
