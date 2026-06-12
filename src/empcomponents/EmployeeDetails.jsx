import { useEmployee } from "../context/EmployeeContext";
function EmployeeDetails(){
    const { employee }=useEmployee();
    return(
        <div className="card">
            <h2>Employee Details</h2>
            <p><b>Name:</b> {employee.name || "Not entered"}</p>
            <p><b>Role:</b> {employee.role || "Not entered"}</p>
        </div>
    );
}
export default EmployeeDetails;