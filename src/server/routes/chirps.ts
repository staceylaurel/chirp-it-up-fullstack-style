import { Router } from "express";
import db from "../db";

const router = Router();

//GET
router.get("/", async (req, res) => {
  try {
    const chirps = await db.chirps.all();
    res.json(chirps);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

//GET
router.get("/:id", async (req, res) => {
//try catch block
  const id = Number(req.params.id);
  const [chirp] = await db.chirps.one(id);
  res.json(chirp);
});

//POST body
router.post("/", async (req, res) => {
  try {
    const newChirp = req.body;
    const results = await db.chirps.insert(newChirp.userid, newChirp.cont);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

//PUT body
router.put("/:id", async (req, res) => {
//try catch block
  const id = Number(req.params.id);
  const editedChirp = req.body;
  const results = await db.chirps.update(editedChirp.cont, id);
  res.json(results);
});

//DELETE
router.delete("/:id", async (req, res) => {
//try catch block
  const id = Number(req.params.id);
  const results = await db.chirps.destroy(id);
  res.json(results);
});

export default router;


