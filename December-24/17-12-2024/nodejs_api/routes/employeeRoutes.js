import { Router } from "express";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

const employeeRouter = Router();

employeeRouter.get("/", getEmployees);
employeeRouter.post("/add", addEmployee);
employeeRouter.put("/update/:id", updateEmployee);
employeeRouter.delete("/delete/:id", deleteEmployee);

export default employeeRouter;
