import express from "express";

import {
    postContact,
    readAllContact,
    readSingleContact,
    putContactStatus,
    removeContact
} from "../controllers/contactController.js"

const router = express.Router();

router.post("/", postContact);
router.get("/", readAllContact);
router.get("/:id", readSingleContact);
router.put("/:id", putContactStatus);
router.delete("/id", removeContact);

export default router;