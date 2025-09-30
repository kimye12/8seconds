import { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";

export default function CategoryWrapper() {
  const [hashcode, setHashCode] = useState(
    window.location.hash.replace(/^#\/?/, "")
  );

  useEffect(() => {
    const handleHashChange = () => {
      setHashCode(window.location.hash.replace(/^#\/?/, ""));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  });
  return <CategoryPage key={Date.now()} code={hashcode} />;
}
