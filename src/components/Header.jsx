import Logo from "./Logo";
import User from "./User";

const Header = (props) => {
  return (
    <header>
      <div className={props.className}>
        <Logo></Logo>
        <User username={props.username}></User>
      </div>
    </header>
  );
};

export default Header;
