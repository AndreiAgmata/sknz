export type Product = {
  id: string;
  image: string;
  name: string;
  categoryId: string;
  price: number;
  rating: number;
  totalSales: number;
};

export type CartItem = {
  product: Product;
  coverSize: number;
  chipSize: number;
  quantity: number;
};
