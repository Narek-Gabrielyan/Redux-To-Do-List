// Libraries
import { NavLink } from "react-router-dom";
// CSS
import "./Header.css";

// Arr Navigate
const navigate = [
  {
    id: 1,
    url: "/",
    linkName: "Home",
  },
  {
    id: 2,
    url: "/albums",
    linkName: "Albums",
  },
  {
    id: 3,
    url: "/comments",
    linkName: "Comments",
  },
  {
    id: 4,
    url: "/photos",
    linkName: "Photos",
  },
  {
    id: 5,
    url: "/posts",
    linkName: "Posts",
  },
  {
    id: 6,
    url: "/todos",
    linkName: "ToDos",
  },
  {
    id: 7,
    url: "/users",
    linkName: "Users",
  },
];

export const Header = function () {
  return (
    <header className="Header">
      {navigate.map((el) => (
        <NavLink to={el.url} key={"nav" + el.id}>
          {el.linkName}
        </NavLink>
      ))}
    </header>
  );
};
