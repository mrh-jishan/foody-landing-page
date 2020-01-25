export interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
  gender?: string;
  email?: string;
  email_confirmed?: boolean;
  role?: string;
}

export interface KitchenAddress {
  address: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface Kitchen {
  id: number;
  user_id: number;
  name: string;
  title: string;
  description: string;
  tags: Tag[];
  kitchen_address: KitchenAddress;
  user: User;
}


export interface Tag {
  name: string;
}
