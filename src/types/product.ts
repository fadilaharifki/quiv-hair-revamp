export interface ProductStep {
  title: string;
  desc: string;
}

export interface PriceDetail {
  currency: string | "IDR" | "USD";
  value: number;
}

export interface ProductInterface {
  id: string;
  slug: string;
  name: string;
  type: string;
  category: string;
  ability: string;
  pricing?: PriceDetail[];
  net: string;
  shortDesc: string;
  longDesc: string;
  gallery: string[];
  steps: ProductStep[];
  disable: boolean;
  thumbnail: string;
}
