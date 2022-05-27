import express from "express";
import {
  getAllUsers,
  getUser,
  editUser,
  deleteAllUsers,
  deleteUser,
} from "../controllers/users.js";
import {
  checkAdmin,
  checkAuthentication,
  checkAuthorization,
} from "../utils/tokenAuth.js";

const router = express.Router();

router.get("/authenticate", checkAuthentication, (req, res, next) => {
  res.send("Hello user");
});

router.get("/auth/:id", checkAuthorization, (req, res, next) => {
  res.send("Hello user, you have editing priveledges");
});

router.get("/admin/:id", checkAdmin, (req, res, next) => {
  res.send("Hello user, you have admin priveledges");
});

// READ (All)
router.get("/all", getAllUsers);

// READ (Single)
router.get("/:id", getUser);

// UPDATE
router.put("/:id", editUser);

// DELETE (All)
router.delete("/all", deleteAllUsers);

// DELETE (Single)
router.delete("/:id", deleteUser);

export default router;
