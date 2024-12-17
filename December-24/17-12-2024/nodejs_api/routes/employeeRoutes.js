import { Router } from "express";
import {employees} from "../data/index.js"
const employeeRouter = Router();

employeeRouter.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Employees fetched successfully",
    data: employees,
  });
});

employeeRouter.post("/add", (req, res) => {
    const { name, role, department, email } = req.body;
    console.log(name, role, department, email);
});

export default employeeRouter;