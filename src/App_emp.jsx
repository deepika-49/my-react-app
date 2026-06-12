import { useState } from "react";
import { EmployeeContext } from "./context/EmployeeContext";
import EmployeeForm from "./empcomponents/EmployeeForm";
import EmployeeDetails from "./empcomponents/EmployeeDetails";
import EmployeeStatus from "./empcomponents/EmployeeStatus";
import EmployeeControls from "./empcomponents/EmployeeControls";
import "./empstyles.css";
function App_emp() {
    const [employee, setEmployee] = useState({
        name: "",
        role: "",
        status: "Inactive",
    });
    return (
        <EmployeeContext.Provider value={{ employee, setEmployee }}>
        <div className="app">
            <h1>Employee Dashboard</h1>
            <div className="grid">
            <EmployeeForm />
            <EmployeeDetails />
            <EmployeeStatus />
            <EmployeeControls />
            </div>
        </div>
        </EmployeeContext.Provider>
    );
}

export default App_emp;