"use client";
import { useParams, useSearchParams } from "next/navigation";
import ProductPage from "../../../[segment]/[product_id]/page";

const AluminumProductPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const aluminum_category_name = searchParams.get("name") as string;

  const aluminumCategory = params.aluminum_category as string;
  return (
    <ProductPage
      aluminumCategory={aluminumCategory}
      aluminumCategoryName={aluminum_category_name}
    />
  );
};

export default AluminumProductPage;
