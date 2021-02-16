import React from "react";
import { Link } from "gatsby";
import './Style.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  console.log(location.pathname)

  let pc = new RegExp("/physical-computing/a*")
  let vl = new RegExp("/visual-language/a*")
  let mol = new RegExp("/material-of-language/a*")

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          to={`/`}>
          {title}
        </Link>
      </h1>
    );
  } else if(location.pathname.match(pc)) {
    header = (
      <h3>
        <Link
          to={`/physical-computing`}
        >
          physical computing
        </Link>
      </h3>
    );
  } else if(location.pathname.match(vl)){
    header = (
      <h3>
        <Link
          to={`/visual-language`}
        >
          visual language
        </Link>
      </h3>
    );
  } else if(location.pathname.match(mol)){
    header = (
      <h3>
        <Link
          to={`/material-of-language`}
        >
          material of language
        </Link>
      </h3>
    );
    }
  else {
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
