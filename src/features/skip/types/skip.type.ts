export type SkipCardProps = {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  selected: boolean;
  onSelect: (id: number) => void;
};
