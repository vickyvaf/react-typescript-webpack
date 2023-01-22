interface ProductsState {
  tag: string;
  searchInputValue: string;
  products: [];
  errorMsg: string;
}

export const productsState: ProductsState = {
  tag: "idle",
  searchInputValue: "",
  products: [],
  errorMsg: "",
};
