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

employeeRouter.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = employees.findIndex((user) => user.id == id);
  if (userIndex === -1) {
    return res.status(404).json({
      status: 404,
      message: "Employee not found",
    });
  }
  employees[userIndex] = { ...employees[userIndex], ...req.body };
  res.status(200).json({
    status: 200,
    message: "Employee updated successfully",
    data: employees[userIndex],
  });
});


employeeRouter.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = employees.findIndex((user) => user.id == id);
  if (userIndex === -1) {
    return res.status(404).json({
      status: 404,
      message: "Employee not found",
    });
  }
  employees.splice(userIndex, 1);
  res.status(200).json({
    status: 200,
    message: "Employee deleted successfully",
  });
});

export default employeeRouter;