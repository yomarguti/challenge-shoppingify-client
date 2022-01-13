export interface Item {
  id: number;
  title: string;
  price: number;
  stock: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  items: Item[];
  createdAt: string;
  updatedAt: string;
}
