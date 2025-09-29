import { Link } from "react-router-dom";

export default function CategoryTopNav({ code, topNavItems }) {
  const parts = code.split("/");

  return (
    <ol>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">8 seconds</Link>
      </li>
      {topNavItems.map((item, index) => {
        const path = parts.slice(0, index + 1).join("/");

        return (
          <li key={index}>
            <Link to={`/${path}`}>{item}</Link>
          </li>
        );
      })}
    </ol>
  );
}
