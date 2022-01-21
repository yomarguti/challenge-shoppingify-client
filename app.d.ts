export interface Item {
  id: number;
  name: string;
  note?: string;
  image?: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
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
