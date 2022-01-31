import { ShopList } from "./context/context";

export interface Item {
  id: number;
  name: string;
  note?: string;
  image?: string;
  categoryId: number;
  categoryName: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ShoplistItem extends Item {
  pieces: number;
}

export interface Category {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryWithItems extends Category {
  items: Item[];
}

export interface CategoryWithShopItems extends Category {
  items: ShoplistItem[];
}

export interface ShopListResponse extends ShopList {
  id: number;
}
