const Post = ({ author, title, text, date }) => {
  return (
    <li
      className="px-3 py-3 my-5 w-4/5 mx-auto
    border-2 border-solid rounded-full border-cyan-800"
    >
      <div className="flex bg-cyan-400 text-white">
        <h2 className="font-bold mx-auto">{author}</h2>
        <h2 className="font-semibold mx-auto">{title}</h2>
        <h2 className="font-thin mx-auto">{date}</h2>
      </div>
      <div className="px-5">{text}</div>
    </li>
  );
};

export default Post;
