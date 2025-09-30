import CategoryPage from "./CategoryPage";

export default function CategoryWrapper() {
  const hash = window.location.hash;
  const code = hash.replace(/^#\/?/, "");

  return <CategoryPage key={code} code={code} />;
}
