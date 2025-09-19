"use client";
import { useParams } from "next/navigation";
import ProductsListPage from "../../[segment]/page";

const AluminumCategoryPage = () => {
  const params = useParams();
  const aluminumCategory = params.aluminum_category as string;
  return <ProductsListPage aluminumCategory={aluminumCategory} />;
};

export default AluminumCategoryPage;
