import { useQuery } from "@tanstack/react-query";
import { fetchPageCode } from "../../api/products";
import PageContent from "./PageContent";

export default function CategoryPage({ code }) {
  const {
    data: pageInfo,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["pageInfo", code],
    queryFn: () => fetchPageCode({ code }),
    enabled: !!code,
    keepPreviousData: false,
  });

  if (isPending) {
  }
  if (isError) {
  }
  if (!pageInfo) return;

  const dataInfo = {
    code,
    navItems: pageInfo.nav_items,
    navItemsCode: pageInfo.nav_items_code,
    topNavItems: pageInfo.top_nav_items,
    isLastPage: pageInfo.is_last_page,
  };
  console.log(dataInfo);

  return <PageContent {...dataInfo} />;
}
