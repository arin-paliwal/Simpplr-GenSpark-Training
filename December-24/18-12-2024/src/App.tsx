import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowEmployees from "./components/ShowEmployees";
import ShowSpecificEmployee from "./components/ShowSpecificEmployee";
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
    <Toaster />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShowEmployees />} />
      <Route path="/:id" element={<ShowSpecificEmployee />} />
      <Route path="/update/:id" element={<EditEmployee />} />
      <Route path="/add" element={<AddEmployee />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
