import express from "express";
import employeeRouter from "./routes/employeeRoutes.js";

const app = express();
app.use(express.json());

const PORT = 5000;

app.use("/api/v1/employees", employeeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});