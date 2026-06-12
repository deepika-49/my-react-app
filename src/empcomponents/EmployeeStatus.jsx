import { useEmployee } from "../context/EmployeeContext";
function EmployeeStatus(){
    const { employee }=useEmployee();
    return (
        <div className="card">
            <h2>Status</h2>
            <h3>{employee.status}</h3>
        </div>
    );
}
export default EmployeeStatus;