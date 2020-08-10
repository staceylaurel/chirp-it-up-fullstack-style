import * as React from "react";
import { useParams, Link } from "react-router-dom";
import type { IChirp } from "../utils/types";

const Details: React.FC<DetailsProps> = (props) => {
  const { id } = useParams();
  const [chirp, setChirp] = React.useState<IChirp>(null);

  React.useEffect(() => {
    fetch(`/api/chirps/${id}`)
      .then((res) => res.json())
      .then((chirp) => setChirp(chirp));
  }, []);

  return (
    <>
      <h1>{chirp?.username}</h1>
      <p>{chirp?.message}</p>
      <Link to="/">Go Back</Link>
      <Link to={`/${id}/chirpadmin`}>Admin</Link>
    </>
  );
};

interface DetailsProps {}

export default Details;
