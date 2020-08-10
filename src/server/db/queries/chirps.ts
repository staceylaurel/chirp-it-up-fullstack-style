import { Query } from "../index";

const all = () =>
  Query(
    "SELECT chirps.id, chirps.userid, chirps.cont AS message, chirps.location, chirps.created_at, users.name AS  username FROM chirps JOIN users ON users.id = chirps.userid ORDER BY chirps.created_at DESC"
  );

const one = (id: number) =>
  Query(
    "SELECT chirps.id, chirps.userid, chirps.cont AS message, chirps.location, chirps.created_at, users.name AS  username FROM chirps JOIN users ON users.id = chirps.userid WHERE chirps.id =?",
    [id]
  );

const destroy = (id: number) => Query("DELETE FROM chirps WHERE id =?", [id]);

const insert = (userid: number, cont: string) =>
  Query("INSERT INTO chirps (userid, cont) VALUE (?, ?)", [userid, cont]);

const update = (cont: string, id: number) =>
  Query("UPDATE chirps SET cont = ? WHERE id =? ", [cont, id]);

export default {
  all,
  one,
  destroy,
  insert,
  update,
};
