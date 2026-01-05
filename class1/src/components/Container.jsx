import NavBar from "./NavBar";
import Hero from "./Hero";

export function Container({ children }) {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <div className="hero-img-root">
        <div className="horizantal-line"></div>
        <img className="hero-img" src="/heroimg.webp" alt="" />
      </div>

      {children}
    </div>
  );
}
