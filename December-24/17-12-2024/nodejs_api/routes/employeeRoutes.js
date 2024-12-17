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
  const newUser= req.body;
  newUser.id=employees.length+1;
  employees.push(newUser);
  res.status(201).json({
    status: 201,
    message: "Employee added successfully",
    data: newUser,
  });
});

export default employeeRouter;