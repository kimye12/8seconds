import { useLocation, useParams } from "react-router-dom";
import CategoryPage from "./CategoryPage";

export default function CategoryWrapper() {
  const location = useLocation();

  console.log(location.pathname);
  const code = location.pathname.slice(1);

  return <CategoryPage key={code} code={code} />;
}
