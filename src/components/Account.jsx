import Button from "./Button";
const Account = (props) => {
  return (
    <div>
      <div style={{ backgroundColor: props.account.color }}>
        <h2>{props.account.name}</h2>
        <h2>{props.account.balance}</h2>
      </div>
      {props.account.operations.map((elem) => {
        return (
          <div key={Date()}>
            <p>{elem.date}</p>
            <h4>{elem.description}</h4>
            <p>{elem.amount}</p>
          </div>
        );
      })}
      <Button children="See More"></Button>
    </div>
  );
};

export default Account;
