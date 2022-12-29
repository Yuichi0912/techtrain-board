import * as React from "react";

export const NewThread = (props) => {
  return (
    <>
      <div className="new-thread">
        <h1>新着スレッド</h1>
        <ul>
          {Object.values(props.boardApi).map((i, index) => {
            return (
              <li key={index}>
                <a href="#">{i.post}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
