import { useStore } from "@nanostores/react";
import { user } from "../store/user";

function Header() {
  const loggedUser = useStore(user);
  return (
    <nav className="mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Blogger</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/blogs">Blog</a>
            </li>
            {loggedUser?.token ? (
              <li>
                <a href="/create-post">Create a Post</a>
              </li>
            ) : (
              <li>
                <a href="/auth">Sign in</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
