import {useEmployee } from "../context/EmployeeContext";
function EmployeeControls(){
    const { employee,setEmployee } =useEmployee();
    const changeStatus=(status)=> {
        setEmployee((prev)=>({
            ...prev,
            status:status,
        }));
    };
    return (
        <div className="card">
            <h2> Controls</h2>
            <button onClick={()=> changeStatus("Active")}>
                Active
            </button>
            <button onClick={()=> changeStatus("Inactive")}>
                Inactive
            </button>
            <button onClick={()=> changeStatus("On Leave")}>
                On Leave
            </button>
        </div>
    );
}
export default EmployeeControls;