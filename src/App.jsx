import "./App.css";
import Header from "./components/Header";
import Accounts from "./components/Accounts";

function App() {
  const client = "Etienne";

  return (
    <>
      <body>
        <Header className="container" username={client}></Header>
        <Accounts className="container"></Accounts>
      </body>
    </>
  );
}

export default App;
