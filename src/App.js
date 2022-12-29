import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { NewThread } from "./NewThread";
import { PostThread } from "./PostThread";
import { ThreadResponse } from "./ThreadResponse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  // スレッド一覧のAPI取得
  const [boardApi, setBoardApi] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/dfe6e106-d242-406a-88ac-bff3a986d5ee/posts"
    )
      .then((resp) => resp.json())
      .then((id) => {
        const list = id.posts;
        setBoardApi(list);
      });
  }, []);

  //新規スレッドの作成
  const [threadTitle, setThreadTitle] = React.useState("");
  const onChangeThreadTitle = (event) => setThreadTitle(event.target.value);
  const createThread = () => {
    if (threadTitle === "") return;
    const data = { post: threadTitle };
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/dfe6e106-d242-406a-88ac-bff3a986d5ee/posts",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((resp) => resp.json())
      .then((id) => {
        setBoardApi(id);
        console.log(id);
      });
    setThreadTitle("");
  };

  return (
    <>
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<NewThread boardApi={boardApi} />} />
            <Route
              path="/post"
              element={
                <PostThread
                  threadTitle={threadTitle}
                  onChangeThreadTitle={onChangeThreadTitle}
                  createThread={createThread}
                />
              }
            />
            <Route path="/" element={<ThreadResponse />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
