import * as React from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div className="header">
      <header>
        <h1>掲示板</h1>
        <Link to="/post">スレッドを立てる</Link>
      </header>
    </div>
  );
};
