import React from "react";
import css from "./Spinner.css";

export default function Spinner() {
  return (
    <div className={css.loading}>
      <div className={css.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
