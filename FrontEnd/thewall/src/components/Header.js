import { GiBrickWall } from "react-icons/gi";

const Header = () => {
  return (
    <header className="text-center">
      <h1 className="mb-3 text-violet-500 text-6xl">
        <GiBrickWall className="inline-block text-violet-400 align-top " />
        The Wall
      </h1>
    </header>
  );
};

export default Header;
