"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const router = express_1.default.Router();
router.post("/create", todoController_1.todoCreate);
router.get("/getalltodos", todoController_1.getAllTodo);
router.get("/gettodo/:id", todoController_1.getTodoById);
router.put("/updatetodo/:id", todoController_1.updateTodo);
router.delete("/deletetodo/:id", todoController_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=todoRouter.js.map