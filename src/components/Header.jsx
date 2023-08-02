import Hero from "./Hero";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Logo />
        <NavBar />
      </div>
      <Hero />
    </header>
  );
};

export default Header;
