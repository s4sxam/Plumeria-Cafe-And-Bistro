
import { MenuCategory, MenuData } from './types';

export const MENU_DATA: MenuData = {
  [MenuCategory.CAFE]: {
    subcategories: [
      {
        title: "Espresso & Hot Coffees",
        items: [
          { name: "Espresso", price: 120, isVeg: true, description: "Pure shot of dark-roasted intensity." },
          { name: "Cappuccino", price: 130, isVeg: true, description: "Classic espresso with thick microfoam." },
          { name: "Cafe Mocha", price: "150/160", isVeg: true, description: "Rich chocolate mixed with espresso." },
          { name: "Hazelnut Latte", price: "150/160", isVeg: true, description: "Creamy latte with aromatic hazelnut." },
          { name: "Irish Coffee", price: "140/150", isVeg: true, description: "Espresso with whiskey-infused flavor notes." }
        ]
      },
      {
        title: "Frappes & Shakes",
        items: [
          { name: "Dark Choco Explosion", price: 190, isVeg: true, isBestseller: true },
          { name: "Oreo with Kit-kat", price: 220, isVeg: true },
          { name: "Banana Peanut Butter", price: 190, isVeg: true }
        ]
      },
      {
        title: "Mocktails & Tea",
        items: [
          { name: "Virgin Mojito", price: 100, isVeg: true },
          { name: "Blue Lagoon", price: 100, isVeg: true },
          { name: "Aam Panna", price: 100, isVeg: true },
          { name: "Darjeeling Tea", price: 50, isVeg: true },
          { name: "Lemon Iced Tea", price: 150, isVeg: true }
        ]
      }
    ]
  },
  [MenuCategory.STARTERS]: {
    subcategories: [
      {
        title: "Crispy Starters",
        items: [
          { name: "French Fries", price: 89, isVeg: true },
          { name: "Peri Peri Fries", price: 99, isVeg: true },
          { name: "Chicken Lollipop", price: 180, isVeg: false, isBestseller: true },
          { name: "Crispy Chilli Baby Corn", price: 180, isVeg: true }
        ]
      },
      {
        title: "Sea Food (Vetki)",
        items: [
          { name: "Bengali Style Fish Fry", price: 310, isVeg: false },
          { name: "Fish & Chips", price: 350, isVeg: false },
          { name: "Golden Fried Prawn", price: 380, isVeg: false }
        ]
      },
      {
        title: "Chinese Sides",
        items: [
          { name: "Veg Manchurian", price: 170, isVeg: true },
          { name: "Chilli Chicken Gravy", price: 270, isVeg: false },
          { name: "Schezwan Prawn", price: 400, isVeg: false }
        ]
      }
    ]
  },
  [MenuCategory.MAIN]: {
    subcategories: [
      {
        title: "Artisanal Pasta",
        items: [
          { name: "Ravioli", price: 380, isVeg: true },
          { name: "Tortellini", price: 380, isVeg: true },
          { name: "Pink Sauce Pasta", price: "259/289", isVeg: true },
          { name: "Mac & Cheese", price: 249, isVeg: true, isBestseller: true }
        ]
      },
      {
        title: "Mains & Sizzlers",
        items: [
          { name: "Grilled Chicken", price: 380, isVeg: false },
          { name: "Green Thai Curry", price: 350, isVeg: true },
          { name: "Burnt Garlic Rice", price: "190-260", isVeg: true },
          { name: "Marry Me Chicken Sizzler", price: 380, isVeg: false }
        ]
      }
    ]
  },
  [MenuCategory.BRUNCH]: {
    subcategories: [
      {
        title: "Pizzas & Burgers",
        items: [
          { name: "Margherita Pizza", price: "185/250", isVeg: true },
          { name: "Plumeria Special Pizza", price: "280/390", isVeg: false, isBestseller: true },
          { name: "Plumeria Special Double Decker Burger", price: 280, isVeg: false }
        ]
      },
      {
        title: "Brunch Selection",
        items: [
          { name: "Blueberry Pancake", price: 149, isVeg: true },
          { name: "Plumeria Brunch Platter", price: 229, isVeg: true },
          { name: "Chicken Platter", price: 249, isVeg: false }
        ]
      }
    ]
  },
  [MenuCategory.ICE_CREAM]: {
    subcategories: [
      {
        title: "Pabrai's Signature Scoops",
        items: [
          { name: "Belgium Choco Praline", price: 155, isVeg: true },
          { name: "Mascarpone Cheese", price: 148, isVeg: true, isBestseller: true },
          { name: "Nalengur", price: 129, isVeg: true },
          { name: "Shahi Kesar Pista", price: 100, isVeg: true }
        ]
      },
      {
        title: "Indulgent Desserts",
        items: [
          { name: "Hot Choco Brownie with Ice Cream", price: 270, isVeg: true },
          { name: "Brownie with Fudge Sauce", price: 211, isVeg: true },
          { name: "Caramel Shake", price: 268, isVeg: true }
        ]
      }
    ]
  }
};

export const CONTACT_INFO = {
  phone: "+91 9734702727",
  address: "Near Deshbandhu Park, Habra, Beside Pabrai's ice cream parlour, West Bengal 743263",
  googleMaps: "https://maps.app.goo.gl/gK4Au38tUFGhQxGv8"
};

export const COLORS = {
  espresso: "#2C1810",
  latte: "#F5F5DC",
  gold: "#D4AF37",
  pink: "#FFB7C5"
};
