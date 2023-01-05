import * as React from "react";
import { useLocation, useRouteLoaderData } from "react-router-dom";
import { PostResponse } from "./PostResponse";

export const ThreadResponse = () => {
  //スレッド内のレス一覧表示
  const [threadTitle, setThreadTitle] = React.useState([]);
  const { state } = useLocation();
  const threadId = state;
  //   console.log(threadId);
  React.useEffect(() => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId.id}/posts?offset=0`
    )
      .then((resp) => resp.json())
      .then((id) => {
        const list = id.posts;
        // console.log(list);
        setThreadTitle(list);
      });
  }, []);

  return (
    <>
      <div className="thread-response">
        {console.log(threadId)}
        <h1>{threadId.title}</h1>
        {threadTitle == null ? (
          <h2>投稿は0件です</h2>
        ) : (
          <ul>
            {Object.values(threadTitle).map((i, index) => {
              return (
                <li key={index}>
                  <p>{i.post}</p>
                </li>
              );
            })}
          </ul>
        )}

        <PostResponse threadId={threadId} />
      </div>
    </>
  );
};
