import { useState } from "react";

import "./NewProducts.css";
import { useQuery } from "@tanstack/react-query";
import { fetchMainProducts } from "../../../api/products";
import NewProductsItem from "./NewProductsItem";

export default function NewProducts() {
  const [activeCode, setActiveCode] = useState("NIM02");

  const { data, isPending, isError } = useQuery({
    queryKey: ["products", "newProducts"],
    queryFn: () => fetchMainProducts({ address: "newitems" }),
    staleTime: 1000 * 60,
  });

  function handleTabClick(e) {
    e.preventDefault();

    const li = e.target.closest("li");

    if (!li) return;

    const code = li.dataset.code;

    if (!code) return;

    setActiveCode(code);
  }

  const products = data?.filter((item) => item.category === activeCode);

  return (
    <section id="new-items">
      <div className="new-items-center">
        <div>
          <h2>신상품</h2>
          <div className="new-tab-area">
            <div
              className="new-tab-nav"
              onClick={(e) => handleTabClick(e)}
              role="listbox"
            >
              <ul>
                <li data-code="NIW01" aria-selected={activeCode === "NIW01"}>
                  <a href="undefined">여성</a>
                </li>
                <li data-code="NIM02" aria-selected={activeCode === "NIM02"}>
                  <a href="undefined">남성</a>
                </li>
                <li data-code="NIB03" aria-selected={activeCode === "NIB03"}>
                  <a href="undefined">백 & 슈즈</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="new-items-wrap">
          <div className="new-items-box">
            {isPending && <p>로딩중.. 잠시만 기다려주세요.</p>}
            {data &&
              products.map((item) => (
                <NewProductsItem product={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
