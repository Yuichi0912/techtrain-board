import * as React from "react";

export const PostResponse = (props) => {
    //新規レス投稿
  const [postResponse, setPostResponse] = React.useState("");
  const onChangePostResponse = (event) => setPostResponse(event.target.value);
  const createResponse = () => {
    if (postResponse === "") return;
    const data = { post: postResponse };
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId.id}/posts`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    setPostResponse("");

    return window.location.reload();
  };

  return (
    <>
      <input
        placeholder="投稿しよう"
        value={postResponse}
        onChange={onChangePostResponse}
      />
      <button onClick={createResponse}>投稿</button>
    </>
  );
};
