import * as React from "react";
import { useParams, useHistory } from "react-router-dom";

const Admin: React.FC<AdminProps> = (props) => {
  const [username, setUsername] = React.useState("");
  const [message, setMessage] = React.useState("");

  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch(`/api/chirps/${id}`, {
      method: "DELETE",
    });
    history.push("/");
  };

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch(`/api/chirps/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cont: message }),
    });
    history.push("/");
  };

  React.useEffect(() => {
    fetch(`/api/chirps/${id}`)
      .then((res) => res.json())
      .then((chirp) => {
        setUsername(chirp.username);
        setMessage(chirp.message);
      });
  }, []);

  return (
    <>
      <h1>Editing Page</h1>
      <form>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleEdit}> Somebody Save Me! </button>
        <button onClick={handleDelete}> Destroy </button>
      </form>
    </>
  );
};

interface AdminProps {}

export default Admin;
