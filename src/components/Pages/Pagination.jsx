import { useMemo } from "react";

export default function Pagination({ totalPages, currentPage, onChange }) {
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  );

  return (
    <div className="pagination">
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          className={p === currentPage ? "active" : ""}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
