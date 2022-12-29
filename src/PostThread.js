import * as React from "react";

export const PostThread = (props) => {
  return (
    <div className="post-thread">
      <h1>スレッド新規作成</h1>
      <input
        placeholder="スレッドタイトル"
        value={props.threadTitle}
        onChange={props.onChangeThreadTitle}
      />
      <a href="../">スレッド一覧はこちら</a>
      <button onClick={props.createThread}>新規スレッド作成</button>
    </div>
  );
};
