import { FilterCamera, FilterCar, FilterEstate, FilterLaptop } from "./filters-type";

type SellerType = {
  fullname: string,
  rating: number,
};

type AddressType = {
  city: string,
  street: string,
  building: string,
};

export type ProductType = {
  name: string,
  price: number,
  coordinates: [number, number],
  seller: SellerType,
  description: string,
  address: AddressType,
  publish_date?: string,
  category: string,
  photos: string[],
  filters: FilterCamera | FilterCar | FilterEstate | FilterLaptop,
};

export type BackendResultsType = {
  products: ProductType[],
}

export type adaptedProductType = {
  name: string,
  price: number,
  coordinates: [number, number],
  seller: SellerType,
  description: string,
  address: AddressType,
  publishDate: string,
  category: string,
  photos: string[],
  filters: FilterCamera | FilterCar | FilterEstate | FilterLaptop,
};
