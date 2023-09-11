import express from "express"
import { deleteTodo, getAllTodo, getTodoById, todoCreate, updateTodo } from "../controllers/todoController";

const router = express.Router();


router.post("/create", todoCreate)
router.get("/getalltodos", getAllTodo)
router.get("/gettodo/:id", getTodoById)
router.put("/updatetodo/:id", updateTodo)
router.delete("/deletetodo/:id",deleteTodo)

export  default router