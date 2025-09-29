import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMainProducts } from "../../../api/products";
import "./LookBook.css";

export default function LookBook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const { data, isPending, isError } = useQuery({
    queryKey: ["products", "lookbook"],
    queryFn: () => fetchMainProducts({ address: "lookbook" }),
    staleTime: 1000 * 60,
  });

  const max = data?.length / 2 - 1;
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.style.setProperty("--i", String(currentIndex));
  }, [currentIndex]);

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev === max ? max : prev + 1));
  }

  return (
    <section id="lookbook">
      <div className="lookbook-center">
        <h2>룩북</h2>
        <div className="lookbook-navs" role="listbox">
          <ul>
            <li aria-selected="true">
              <a href="#!">25 FALL 1</a>
            </li>
          </ul>
        </div>
        <div className="lookbook-slider-wrap">
          <div className="lookbook-slider-box" ref={sliderRef}>
            {data &&
              data.map((product) => (
                <div className="lookbook-item" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                    draggable={false}
                  />
                  <span className="title">{product.title}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="lookbook-pager-box">
          <span
            className={`lookbook-prev ${
              currentIndex === 0 ? "lookbook-prev-disabled" : ""
            }`}
            onClick={() => handlePrev()}
          ></span>
          <p>
            {currentIndex + 1} / {max + 1}
          </p>
          <span
            className={`lookbook-next ${
              currentIndex === max ? "lookbook-next-disabled" : ""
            }`}
            onClick={() => handleNext()}
          ></span>
        </div>
      </div>
    </section>
  );
}
