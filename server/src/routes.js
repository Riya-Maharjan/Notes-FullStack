import { Router } from "express";

import * as noteController from "./controllers/note.js";
import * as apiController from "./controllers/api.js";
import * as userController from "./controllers/user.js";

import { validateBody, validateQueryParams } from "./middlewares/validation.js";

import addNoteSchema from "./schemas/addNote.js";
import updateNoteSchema from "./schemas/updateNote.js";
import addUserSchema from "./schemas/addUser.js";
import loginSchema from "./schemas/login.js";
import getNotesQuerySchema from "./schemas/getNoteQuery.js";
import getUserQuerySchema from "./schemas/getUsersQuery.js";

// import authenticate from './middlewares/authenticate.js';

import connection from "./knexfile.js";
import authenticate from "./middlewares/authenticate.js";

const router = Router();

router.get("/", apiController.getAPIDetails);

// get all
router.get(
  "/notes",
  validateQueryParams(getNotesQuerySchema),
  noteController.getNotes
);

router.get("/abcd", async (req, res, next) => {
  const data = await connection("note").select("*");

  res.json(data);
});


// get specific
router.get(
  "/notes/:noteIdentifier",
  noteController.getNote
);

// post
router.post(
  "/notes",
  validateBody(addNoteSchema),
  noteController.saveNote
);

// put
router.put(
  "/notes/:noteIdentifier",
  validateBody(updateNoteSchema),
  noteController.updateNote
);

// delete
router.delete(
  "/notes/:noteIdentifier",
  noteController.removeNote
);

router.post("/users", validateBody(addUserSchema), userController.addUser);
router.get("/users", userController.getUsers);
router.get("/profile", userController.getUser);

router.post("/login", validateBody(loginSchema), userController.login);

export default router;
