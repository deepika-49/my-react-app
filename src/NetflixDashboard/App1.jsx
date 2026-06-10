import { useState } from "react";
import "./App1.css";
function App1() {
  const[plan,setPlan]=useState("Basic");
  const[price,setPrice]=useState(199);
  const[isActive, setIsActive]=useState(true);
  const handleUpgrade=()=>{
    if(plan==="Basic"){
      setPlan("Standard");
      setPrice(499);
    }
    else if(plan==="Standard") {
      setPlan("Premium");
      setPrice(799);
    } else {
      alert("Already at Premium Plan");
    }
  };
  const handlePause = () => {
    setIsActive(false);
  };
  const handlesResume = () =>{
    setIsActive(true);
  };
  return (
    <div style={{ padding:"20px", fontFamily:"Arial"}}>
      <h1>Netflix Subscription Dashboard</h1>
      <h2>Plan:{plan}</h2>
      <h3>Price:₹{price}/month</h3>
      <h3>
        Status:{" "}
        {isActive ?"✅ Active" :"❌ Subscription Paused"}
      </h3>
      {plan==="Premium"&&(
        <p style={{color:"gold",fontWeight: "bold" }}>
          ⭐ Ultra HD Enabled
        </p>
      )}
      <button onClick={handleUpgrade}>Upgrade Plan</button>
      <button onClick={handlePause} style={{marginLeft:"10px"}}>Pause Subscription</button>
      <button onClick={handlesResume} style={{marginLeft:"10px"}}>Resume Subscription</button>
    </div>
  );
}
export default  App1;