import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.webp";

import "./MainHeader.css";
import { useState } from "react";
import CartButton from "../Cart/CartButton";

export default function MainHeader() {
  const [isHovered, setIsHovered] = useState(null);
  const [anywayisHovered, anywaySetIsHovered] = useState(false);
  const [isBarhovered, setIsBarHovered] = useState(null);

  function handlecssClasses(isActive, link) {
    if (link === isHovered) return "active";
    if (anywayisHovered) return "inactive";
  }

  return (
    <header>
      <div className="header_center">
        <nav className="header_nav">
          <h2>
            <NavLink to="/" className="logoimg">
              <img src={logoImg} alt="8seconds-logo" />
            </NavLink>
          </h2>
          <div
            className="brand-nav"
            onMouseEnter={() => anywaySetIsHovered(true)}
            onMouseLeave={() => anywaySetIsHovered(false)}
          >
            <ul className="brandnav">
              <li
                onMouseEnter={() => {
                  setIsHovered("women");
                  setIsBarHovered("women");
                }}
                onMouseLeave={() => {
                  setIsHovered(null);
                  setIsBarHovered(null);
                }}
              >
                <NavLink
                  to="/women"
                  className={({ isActive }) =>
                    handlecssClasses(isActive, "women")
                  }
                >
                  #여성
                </NavLink>
                {isBarhovered === "women" && (
                  <div className="dropdown-layer">
                    <div className="nav-list" style={{ width: 400 + "px" }}>
                      <ul>
                        <li>
                          <Link to="/women">전체 상품</Link>
                        </li>
                        <li>
                          <Link to="/women/outer">아우터</Link>
                        </li>
                        <li>
                          <Link to="/women/jacket">재킷/베스트</Link>
                        </li>
                        <li>
                          <Link to="/women/neat">니트</Link>
                        </li>
                        <li>
                          <Link to="/women/sleeve">티셔츠</Link>
                        </li>
                        <li>
                          <Link to="/women/shbl">셔츠/블라우스</Link>
                        </li>
                        <li>
                          <Link to="/women/onepiece">원피스</Link>
                        </li>
                        <li>
                          <Link to="/women/pants">팬츠</Link>
                        </li>
                        <li>
                          <Link to="/women/skirt">스커트</Link>
                        </li>
                        <li>
                          <Link to="/women/lounge">라운지/언더웨어</Link>
                        </li>
                        <li>
                          <Link to="/women/beachwear">비치웨어</Link>
                        </li>
                        <li>
                          <Link to="/women/accessory">패션잡화</Link>
                        </li>
                        <li>
                          <Link to="/women/jewelry">쥬얼리/시계</Link>
                        </li>
                        <li>
                          <Link to="">Trending Now</Link>
                        </li>
                        <li>
                          <Link to="">EDITION 8</Link>
                        </li>
                        <li>
                          <Link to="">매일 슬랙스</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => {
                  setIsHovered("men");
                  setIsBarHovered("men");
                }}
                onMouseLeave={() => {
                  setIsHovered(null);
                  setIsBarHovered(null);
                }}
              >
                <NavLink
                  to="/men"
                  className={({ isActive }) =>
                    handlecssClasses(isActive, "men")
                  }
                >
                  #남성
                </NavLink>
                {isBarhovered === "men" && (
                  <div className="dropdown-layer">
                    <div className="nav-list" style={{ width: 200 + "px" }}>
                      <ul>
                        <li>
                          <Link to="/men">전체 상품</Link>
                        </li>
                        <li>
                          <Link to="/men/outer">아우터</Link>
                        </li>
                        <li>
                          <Link to="/men/jacket">재킷</Link>
                        </li>
                        <li>
                          <Link to="/men/neat">니트</Link>
                        </li>
                        <li>
                          <Link to="/men/sleeve">티셔츠</Link>
                        </li>
                        <li>
                          <Link to="/men/shirts">셔츠</Link>
                        </li>

                        <li>
                          <Link to="/men/pants">팬츠</Link>
                        </li>
                        <li>
                          <Link to="/men/accessory">패션잡화</Link>
                        </li>
                        <li>
                          <Link to="/men/jewelry">쥬얼리/시계</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to="/bag-shoes"
                  onMouseEnter={() => {
                    setIsHovered("bag-shoes");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(null);
                  }}
                  className={({ isActive }) =>
                    handlecssClasses(isActive, "bag-shoes")
                  }
                >
                  백 & 슈즈
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/outlet"
                  onMouseEnter={() => {
                    setIsHovered("outlet");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(null);
                  }}
                  className={({ isActive }) =>
                    handlecssClasses(isActive, "outlet")
                  }
                >
                  아울렛
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="subnav">
            <ul>
              <li>
                <NavLink to="/newitem">신상품</NavLink>
              </li>
            </ul>
          </div>
          <div
            className="subnav"
            onMouseEnter={() => anywaySetIsHovered(true)}
            onMouseLeave={() => anywaySetIsHovered(false)}
          >
            <ul>
              <li>
                <NavLink
                  to="/promotion"
                  onMouseEnter={() => {
                    setIsHovered("promotion");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(null);
                  }}
                  className={({ isActive }) =>
                    handlecssClasses(isActive, "promotion")
                  }
                >
                  기획전
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="right-nav">
          <ul>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
