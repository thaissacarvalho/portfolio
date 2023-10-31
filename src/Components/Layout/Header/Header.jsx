import Logo from "../../Logo/Logo";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar__container">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}
