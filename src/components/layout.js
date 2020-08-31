import React from "react";
import { Link } from "gatsby";
import './Style.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          to={`/`}>
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `40%`,
        padding: `${1.5} ${3 / 4}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
