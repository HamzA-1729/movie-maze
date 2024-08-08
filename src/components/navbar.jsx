import Search from "./search";
import Logo from "./logo";
function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}
export default Navbar;
