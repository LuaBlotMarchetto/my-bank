import Account from "./Account";
import data from "../assets/data.json";

const Accounts = (props) => {
  return data.map((elem) => {
    return (
      <section key={Date()} className={props.className}>
        <Account account={elem}></Account>
      </section>
    );
  });
};

export default Accounts;
