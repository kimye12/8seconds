import { useState } from "react";
import { fetchMainProducts } from "../../../api/products";
import ClickRankingItem from "./ClickRankingItem";
import { useQuery } from "@tanstack/react-query";
import "./ClickRanking.css";

export default function ClickRanking() {
  const [isSelected, setIsSelected] = useState("CRW01");

  const { data, isPending, isError } = useQuery({
    queryKey: ["products", "clickranking"],
    queryFn: () => fetchMainProducts({ address: "clickranking" }),
    staleTime: 1000 * 60,
  });

  function handleSelected(e) {
    e.preventDefault();

    const li = e.target.closest("li");

    if (!li) return;

    const code = li.dataset.code;

    if (!code) return;

    setIsSelected(code);
  }

  const products = data?.filter((item) => item.category === isSelected);

  return (
    <section id="click-ranking">
      <div className="click-center">
        <h2>클릭 랭킹</h2>
        <div className="click-tab-area">
          <div
            className="click-tab-nav"
            role="listbox"
            onClick={(e) => handleSelected(e)}
          >
            <ul>
              <li data-code="CRW01" aria-selected={isSelected === "CRW01"}>
                <a href="#!">여성</a>
              </li>
              <li data-code="CRM02" aria-selected={isSelected === "CRM02"}>
                <a href="#!">남성</a>
              </li>
              <li data-code="CRB03" aria-selected={isSelected === "CRB03"}>
                <a href="#!">백 & 슈즈</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="click-items-wrap">
          <div className="click-items-box">
            {isPending && <p>로딩중... 잠시만 기다려주세요..</p>}
            {data &&
              products.map((item, i) => (
                <ClickRankingItem key={item.id} product={item} num={i} />
              ))}
          </div>
        </div>

        <a href="#" className="ranking_btn">
          랭킹 바로가기
        </a>
      </div>
    </section>
  );
}
