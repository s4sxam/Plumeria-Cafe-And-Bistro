
export enum MenuCategory {
  CAFE = 'Cafe & Beverages',
  STARTERS = 'Starters & Sides',
  MAIN = 'Main Course & Pasta',
  BRUNCH = 'Burgers & Brunch',
  ICE_CREAM = "Pabrai's Ice Cream"
}

export interface MenuItem {
  name: string;
  price: number | string;
  description?: string;
  isVeg: boolean;
  isBestseller?: boolean;
  image?: string;
}

export interface MenuData {
  [key: string]: {
    subcategories: {
      title: string;
      items: MenuItem[];
    }[];
  };
}
