import express from "express";
import employeeRouter from "./routes/employeeRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors())

const PORT = 5000;

app.use("/api/v1/employees", employeeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${`http://localhost:${PORT}`}`);
});
