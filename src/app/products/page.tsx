import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/product-reel";
import { PRODUCT_CATEGORIES } from "@/config";

type Param = string | string[] | undefined;

interface Props {
  searchParams: {
    [key: string]: Param;
  };
}

const parsed = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

const Page = async ({ searchParams }: Props) => {
  const sort = parsed(searchParams.sort);
  const category = parsed(searchParams.category);

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === category
  )?.label;

  return (
    <MaxWidthWrapper>
      <ProductReel
        title={label ?? "Browse high-quality assets"}
        query={{
          category,
          limit: 40,
          sort: sort === "desc" || sort === "asc" ? sort : undefined,
        }}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
