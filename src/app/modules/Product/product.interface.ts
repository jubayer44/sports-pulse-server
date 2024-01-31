export type TProduct = {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  image?: string;
  sportType: string;
  brand: string;
  material: string;
  condition: 'New' | 'Used';
  isOutdoor: boolean;
  size?: string;
  color?: string;
  width?: string;
  style?: string;
};
