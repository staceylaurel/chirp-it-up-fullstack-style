import * as React from "react";
import type { IChirp } from "../utils/types";
import { Link } from "react-router-dom";

const Home: React.FC<HomeProps> = (props) => {
  const [chirps, setChirps] = React.useState<IChirp[]>([]);

  React.useEffect(() => {
    fetch("/api/chirps")
      .then((res) => res.json())
      .then((chirps) => setChirps(chirps));
  }, []);

  return (
    <>
      {chirps.map((chirp) => {
        return (
          <div key={chirp.id}>
            <h6>{chirp.username}</h6>
            <p>{chirp.message}</p>
            <Link to= {`/${chirp.id}/chirpdetails`} >Go To Details</Link>
          </div>
        );
      })}
    </>
  );
};

interface HomeProps {}

export default Home;
