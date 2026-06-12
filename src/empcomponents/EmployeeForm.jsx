import { useEmployee } from "../context/EmployeeContext";
function EmployeeForm(){
    const { employee, setEmployee } =useEmployee();
    const handleChange=(e)=> {
        setEmployee({ ...employee,[e.target.name]:e.target.value});
    };
    return(
        <div className="card">
            <h2> emplloyee Form</h2>
            <input 
            name="name"
            placeholder="Enter Name"
            value={employee.name}
            onChange={handleChange}
            />
            <input 
            name="role"
            placeholder="Enter Role"
            value={employee.role}
            onChange={handleChange}
            />
        </div>
    );
}
export default EmployeeForm;