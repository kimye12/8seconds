import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryNav({
  isLastPage,
  navitemClick, //
  navItems, // nav 안에 항목
  navItemsCode, // nav안에 항목 to코드
  topNavItems,
}) {
  const [currentSelected, setCurrentSelected] = useState(
    isLastPage ? topNavItems[topNavItems.length - 1] : navItems[0]
  );

  return (
    <ul>
      {navItems.map((item, index) => (
        <li key={navItemsCode[index]}>
          <Link
            to={`/${navItemsCode[index]}`}
            onClick={() => {
              navitemClick(index);
              setCurrentSelected(item);
            }}
            className={currentSelected === item ? "active" : ""}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
