import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { ThreadList } from "./NewThread";
import { PostThread } from "./PostThread";
import { ThreadResponse } from "./ThreadResponse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  // スレッド一覧のAPI取得
  // const [boardApi, setBoardApi] = React.useState([]);

  // React.useEffect(() => {
  //   fetch(
  //     "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
  //   )
  //     .then((resp) => resp.json())
  //     .then((id) => {
  //       const list = id;
  //       console.log(list);
  //       setBoardApi(list);
  //     });
  // }, []);

  //

  //新規スレッドの作成
  // const [threadTitle, setThreadTitle] = React.useState("");
  // const onChangeThreadTitle = (event) => setThreadTitle(event.target.value);

  // const jumpNewThread = () => {
  //   const navigation = React.useNavigate();
  //   navigation("/");
  // };

  // const useThread = () => {
  //   if (threadTitle === "") return;
  //   const data = { title: threadTitle };
  //   fetch(
  //     "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     }
  //   ).then((resp) => resp.json());
    // .then((id) => {
    //   setBoardApi(id);
    //   console.log(id);
    // });

  //   setThreadTitle("");
  //   // jumpNewThread();
  // };

  return (
    <>
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<ThreadList />} />
            <Route path="/post" element={<PostThread />} />
            <Route path="/response" element={<ThreadResponse />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
