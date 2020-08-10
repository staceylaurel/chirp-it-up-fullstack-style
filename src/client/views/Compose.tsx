import * as React from "react";
import { useHistory } from "react-router-dom";

const Compose: React.FC<ComposeProps> = (props) => {
  const [userid, setUserid] = React.useState("");
  const [cont, setCont] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch('/api/chirps', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userid, cont})
    })
    history.push("/");
  };

  return (
    <>
      <h1>Compose</h1>
      <form>
        <input value={userid} onChange={(e) => setUserid(e.target.value)} />
        <input value={cont} onChange={(e) => setCont(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

interface ComposeProps {}

export default Compose;
