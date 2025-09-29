import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMainProducts } from "../../../api/products";
import "./MainSlider.css";

export default function MainSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const [pauseClicked, setPauseClicked] = useState(false);
  const [curSlide, setCurSlide] = useState(0);
  const rollingRef = useRef(null);
  const sliderRef = useRef([]);

  const { data, isPending, isError } = useQuery({
    queryKey: ["products", "mainslider"],
    queryFn: () => fetchMainProducts({ address: "mainslider" }),
    staleTime: 1000 * 60,
  });

  const maxSlide = data?.length - 1;

  function gotoSlide(slideIndex) {
    sliderRef.current.forEach((slide, i) => {
      if (slide) {
        // const base = 100 * i;
        const offset = -100 * slideIndex;
        slide.style.transform = `translateX(${offset}%)`;
      }
    });
  }

  useEffect(() => {
    if (data?.length === 0) return;
    gotoSlide(curSlide);
  }, [curSlide]);

  function setAutoSlider() {
    rollingRef.current = setInterval(() => {
      setCurSlide((next) => (next === maxSlide ? 0 : next + 1));
      console.log(curSlide, maxSlide);
    }, 5000);
  }

  function stopSlider() {
    clearInterval(rollingRef.current);
    rollingRef.current = null;
  }

  function handlePrevSlide() {
    stopSlider();
    setCurSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
    setAutoSlider();
  }

  function handleNextSlide() {
    stopSlider();
    setCurSlide((next) => (next === maxSlide ? 0 : next + 1));
    setAutoSlider();
  }

  useEffect(() => {
    if (data?.length === 0) return;
    gotoSlide(0);
    setAutoSlider();

    return () => stopSlider();
  }, [maxSlide]);

  return (
    <section id="main-slider">
      <h2 className="screen_out">메인 이미지 슬라이더</h2>
      <div className="main-center">
        <div
          className="main-slider-wrap"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div className="main-slider-box">
            {data &&
              data.map((product, i) => (
                <div
                  key={product.id}
                  className=""
                  ref={(el) => (sliderRef.current[i] = el)}
                >
                  <div className="main-slider-image-box">
                    <img src={product.image} alt="mainslider image" />
                  </div>
                  <div className="main-slider-text-box">
                    <h3>{product.h2}</h3>
                    <p>{product.h3}</p>
                  </div>
                </div>
              ))}
          </div>
          <div
            type="button"
            className={`main-prev-btn ${isHovered ? "main-hovered" : ""}`}
            onClick={() => {
              handlePrevSlide();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M30 39.5861C29.74 39.5861 29.49 39.4861 29.29 39.2961L12 21.9961L29.29 4.70607C29.68 4.31607 30.31 4.31607 30.7 4.70607C31.09 5.09607 31.09 5.72607 30.7 6.11607L14.83 21.9961L30.71 37.8761C31.1 38.2661 31.1 38.8961 30.71 39.2861C30.51 39.4861 30.26 39.5761 30 39.5761V39.5861Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
          <div className={`main-btn-box ${isHovered ? "main-hovered" : ""}`}>
            <div
              className="main-next-btn"
              onClick={() => {
                handleNextSlide();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g opacity="0.4">
                  <path
                    d="M14.0001 4.41393C14.2601 4.41393 14.5101 4.51393 14.7101 4.70393L32.0001 22.0039L14.7101 39.2939C14.3201 39.6839 13.6901 39.6839 13.3001 39.2939C12.9101 38.9039 12.9101 38.2739 13.3001 37.8839L29.1801 22.0039L13.2901 6.12393C12.9001 5.73393 12.9001 5.10393 13.2901 4.71393C13.4901 4.51393 13.7401 4.42393 14.0001 4.42393V4.41393Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </div>
            <div
              className="main-pause-btn"
              onClick={() => {
                setPauseClicked((prev) => !prev);
                pauseClicked ? setAutoSlider() : stopSlider();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g opacity="0.4">
                  {pauseClicked ? (
                    <path
                      d="M11.3251 39.8982C10.7051 39.8982 10.0851 39.7482 9.50512 39.4282C8.24512 38.7482 7.49512 37.4982 7.49512 36.0682V7.92825C7.50512 6.49825 8.25512 5.23825 9.51512 4.56825C10.7751 3.88825 12.2351 3.95825 13.4251 4.73825L34.7851 18.8082C35.8651 19.5182 36.5051 20.7082 36.5051 21.9982C36.5051 23.2882 35.8651 24.4782 34.7851 25.1882L13.4251 39.2582C12.7851 39.6782 12.0551 39.8982 11.3351 39.8982H11.3251ZM11.3251 6.11825C11.0351 6.11825 10.7451 6.18825 10.4751 6.33825C9.88512 6.65825 9.53512 7.24825 9.53512 7.91825V36.0682C9.53512 36.7382 9.88512 37.3282 10.4751 37.6482C11.0651 37.9682 11.7551 37.9382 12.3151 37.5682L33.6851 23.4982C34.1951 23.1582 34.4951 22.6082 34.4951 21.9982C34.4951 21.3882 34.2051 20.8382 33.6851 20.4982L12.3151 6.41825C12.0151 6.21825 11.6751 6.11825 11.3251 6.11825Z"
                      fill="white"
                    ></path>
                  ) : (
                    <>
                      <path
                        d="M11.2998 6.9998C11.2998 6.3398 11.8398 5.7998 12.4998 5.7998C13.1598 5.7998 13.6998 6.3398 13.6998 6.9998V36.9998C13.6998 37.6598 13.1598 38.1998 12.4998 38.1998C11.8398 38.1998 11.2998 37.6598 11.2998 36.9998V6.9998Z"
                        fill="white"
                      ></path>
                      <path
                        d="M30.2998 6.9998C30.2998 6.3398 30.8398 5.7998 31.4998 5.7998C32.1598 5.7998 32.6998 6.3398 32.6998 6.9998V36.9998C32.6998 37.6598 32.1598 38.1998 31.4998 38.1998C30.8398 38.1998 30.2998 37.6598 30.2998 36.9998V6.9998Z"
                        fill="white"
                      ></path>
                    </>
                  )}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
