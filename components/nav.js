import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <h1>Navigation</h1>
        <p>
          <strong>
            Pages Router = <span style={{ color: "crimson" }}>Red</span>, App
            Router = <span style={{ color: "royalblue" }}>Blue</span>.
          </strong>
        </p>
        <ul>
          <li>
            Navigate to <Link href="/">pages router home page</Link>.
          </li>
          <li>
            Navigate to <Link href="/pages-router-1">pages router page 1</Link>.
          </li>
          <li>
            Navigate to <Link href="/pages-router-2">pages router page 2</Link>.
          </li>
          <li className="app-router-list-link">
            Navigate to <Link href="/app-router-1">app router page 1</Link>.
          </li>
          <li className="app-router-list-link">
            Navigate to <Link href="/app-router-2">app router page 2</Link>.
          </li>
        </ul>
      </nav>
    </>
  );
}
