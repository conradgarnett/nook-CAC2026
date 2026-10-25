import type { GroupId } from "@/types/business";

export interface Group {
  id: GroupId;
  label: string;
  /** Pin disc color (light map), validated pairwise with the dataviz checker 2026-10-15 */
  color: string;
  /** Pin disc color on the dark map */
  dark: string;
  /** Icon color on the disc: dark on the light amber and pink discs */
  icon: string;
}

/** The map's groups. Each business gets one in pipeline/filter/independent.py (GROUPS there). */
export const GROUPS: Group[] = [
  { id: "food", label: "Food & drink", color: "#eda100", dark: "#d99400", icon: "#2b2100" },
  { id: "groceries", label: "Groceries & essentials", color: "#008300", dark: "#2e9e3a", icon: "#ffffff" },
  { id: "personal_care", label: "Personal care", color: "#e87ba4", dark: "#e07ba1", icon: "#33101f" },
  { id: "services", label: "Services", color: "#2a78d6", dark: "#3b86e0", icon: "#ffffff" },
  { id: "shopping", label: "Shopping", color: "#b23f9a", dark: "#c052a8", icon: "#ffffff" },
];

/** "saved" is the tab for the visitor's saved spots */
export type GroupFilter = GroupId | "all" | "saved";

/** OSM type names that read oddly as-is */
const TYPE_LABELS: Record<string, string> = {
  general: "General store",
  convenience: "Convenience store",
  alcohol: "Beer, wine and liquor",
  doityourself: "Hardware store",
  fast_food: "Fast food",
  car_repair: "Car repair",
  tyres: "Tire shop",
  second_hand: "Thrift store",
  variety_store: "Variety store",
  e_cigarette: "Vape shop",
  funeral_directors: "Funeral home",
};

/** "shop=dry_cleaning" -> "Dry cleaning", "shop=general" -> "General store" */
export function categoryLabel(category: string): string {
  const value = category.split("=")[1] ?? category;
  if (TYPE_LABELS[value]) return TYPE_LABELS[value];
  const words = value.replace(/_/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}
