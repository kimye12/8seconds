import CategoryNav from "./CategoryNav";
import CategoryTopNav from "./CategoryTopNav";
import Pagination from "./Pagination";
import "./PageContent.css";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPageProducts } from "../../api/products";
import PageContentItem from "./PageContentItem";

export default function PageContent({
  code, // ex) women/outer/coat
  navItems, // 메인 안쪽 nav에들어갈 항목
  navItemsCode, // 메인 안쪽 nav에 들어가는 항목의 Link to코드
  topNavItems, // 메인 바깥쪽 nav에들어갈 항목
  isLastPage, // 카테코리의 자식이 더이상없을경우 true
}) {
  const [currentPage, setCurrentPage] = useState(1); // 현재 상품 페이지 숫자
  const itemsPer = 24; // 1페이지 한도 수량
  const gender = code.split("/")[0]; // 성별

  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["products", code],
    queryFn: () => fetchPageProducts({ gender, code }),
  });

  function navitemClick(i) {
    code = navItemsCode[i];
  }

  const totalPages = Math.ceil(products?.length / itemsPer);
  // 아이템개수/ 한페이지 한도개수 = 페이지 개수

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPer;
    return products?.slice(start, start + itemsPer);
  }, [products, currentPage]);
  // 페이지마다 들어가는 아이템 배분

  return (
    <>
      <div className="current-page">
        <CategoryTopNav code={code} topNavItems={topNavItems} />
      </div>
      <main id="products-box">
        <div className="list-wrap">
          <div className="sub-nav">
            <h1>
              {topNavItems.slice(-1)[0]}{" "}
              <span>{products?.length + "개의 상품"}</span>
            </h1>
            <div className="sub-category">
              <CategoryNav
                code={code}
                navItems={navItems}
                navItemsCode={navItemsCode}
                navitemClick={navitemClick}
                isLastPage={isLastPage}
                topNavItems={topNavItems}
              />
            </div>
          </div>
          <div className="products-container">
            <div className="products">
              {currentItems?.map((item) => (
                <PageContentItem product={item} key={item.id} />
              ))}
            </div>
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onChange={(p) => {
              setCurrentPage(p);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </main>
    </>
  );
}
