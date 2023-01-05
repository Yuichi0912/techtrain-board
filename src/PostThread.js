import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const PostThread = () => {
  const [threadTitle, setThreadTitle] = React.useState("");
  const onChangeThreadTitle = (event) => setThreadTitle(event.target.value);

  const navigate = useNavigate();

  const createThread = () => {
    if (threadTitle === "") return;
    const data = { title: threadTitle };
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
    // .then((resp) => resp.json());
    // .then((id) => {
    //   setBoardApi(id);
    //   console.log(id);
    // });

    setThreadTitle("");
    navigate("/");
  };

  return (
    <div className="post-thread">
      <h1>スレッド新規作成</h1>
      <input
        placeholder="スレッドタイトル"
        value={threadTitle}
        onChange={onChangeThreadTitle}
      />
      <Link to="/" className="link">Topに戻る</Link>
      <button onClick={createThread}>作成</button>
    </div>
  );
};
