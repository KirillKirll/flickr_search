import "../styles.css";
import icon from "../icons/accountIcon.png";

export default function Header() {
  return (
    <header className="header">
      <p className="title">Image Finder</p>
      <div className="icon-container">
        <img className="account-icon" src={icon} alt="" />
      </div>
    </header>
  );
}
