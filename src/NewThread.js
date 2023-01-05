import * as React from "react";
import { ThreadResponse } from "./ThreadResponse";
import { Link } from "react-router-dom";

export const ThreadList = () => {
  const [threads, setThreads] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setThreads(resp);
      });
  }, []);

  return (
    <>
      <div className="new-thread">
        <h1>新着スレッド</h1>
        <ul>
          {Object.values(threads).map((thread) => {
            return (
              <li key={thread.id}>
                <Link className="link"
                  to="/response" state={thread}      //クリックされたURLの{threadId}をstateで
                                                //ThreadResponseコンポーネントに渡している
                >
                  {thread.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
