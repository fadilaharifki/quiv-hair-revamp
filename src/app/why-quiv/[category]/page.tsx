import CategoryProductsPageModules from "@/modules/products/category-product";

interface Params {
  category: string;
}

export interface CategoryProductsPageInterface {
  params: Params;
}

const CategoryProductsPage = (params: CategoryProductsPageInterface) => {
  return (
    <CategoryProductsPageModules
      props={{
        ...params,
      }}
    />
  );
};

export default CategoryProductsPage;
