export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  validate(): boolean;
}

// Examples of using a type alias
type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
    };

let product: ProductAlias = 'Food';

// Using a type alias versus an enum
enum ProductType {
  Sporting,
  Home,
  Apparel,
}

type ProductTypeList = 'SPORTING' | 'HOME' | 'APPAREL';
let p: ProductTypeList = 'SPORTING';
