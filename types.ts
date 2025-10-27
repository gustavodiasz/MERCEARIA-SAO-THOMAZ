export type Category = 'Essenciais' | 'Bebidas' | 'Mercearia' | 'Açougue' | 'Hortifruti';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  imagePrompt: string;
  imageUrl?: string;
  category: Category;
}

export interface CartItem extends Product {
  quantity: number;
}