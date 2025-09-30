import CategoryPage from "./CategoryPage";
import { useLocation } from "react-router-dom";

export default function CategoryWrapper() {
  const location = useLocation();
  const code = location.pathname.slice(1); // '/' 제거
  console.log(code);
  return <CategoryPage key={code} code={code} />;
}
