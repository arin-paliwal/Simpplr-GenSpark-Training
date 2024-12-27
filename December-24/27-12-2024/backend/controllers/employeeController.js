import { employees } from "../data/index.js";

export const getEmployees = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Employees fetched successfully",
    data: employees,
  });
};

export const getSpecificEmployees = (req, res) => {
  const id = parseInt(req.params.id);
  const user = employees.find((user) => user.id == id);
  if (!user) {
    return res.status(404).json({
      status: 404,
      message: "Employee not found",
    });
  }
  res.status(200).json({
    status: 200,
    message: "Employee fetched successfully",
    data: user,
  });
}

export const addEmployee = (req, res) => {
  const newUser = req.body;
  newUser.id = employees.length + 1;
  employees.push(newUser);
  res.status(201).json({
    status: 201,
    message: "Employee added successfully",
    data: newUser,
  });
};

export const updateEmployee = (req, res) => {
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
};

export const deleteEmployee = (req, res) => {
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
};
