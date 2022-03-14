import "./Header.css";

const Header = () => {
    return (
        <span onClick={() => window.scroll(0, 0)} className="header">
          🎬 AS Entertainment  🎥
        </span>
    );
};

export default Header;