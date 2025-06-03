// ============ Props ============
export type SkipCardProps = {
  skip: Skip;
  selected: boolean;
  onSelect: (id: number) => void;
};

export type BottomBarProps = {
  skip?: Skip | null;
};

// ========== feature interfaces ===========

// Skip type definition: This type represents the structure of a skip object used in the application.
export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string | Date;
  updated_at: string | Date;
}
