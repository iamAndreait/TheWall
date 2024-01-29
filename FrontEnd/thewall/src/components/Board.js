import { useCallback, useEffect, useState } from "react";
import Post from "./Post";

const Board = () => {
  let [postList, setPostList] = useState([]);
  const fetchData = useCallback(() => {
    fetch("https://localhost:7158/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(postList);
  return (
    <ul>
      {postList.map((post) => (
        <Post
          key={post.id}
          author={post.userId}
          text={post.description}
          title={post.title}
          date={post.date}
        />
      ))}
    </ul>
  );
};

export default Board;
