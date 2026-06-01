function Card(props){
    return(
        <div
        style={{
            border: "1px solid black",
            padding: "20px",
            margin: "20px",
            width: "250px",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: props.bgColor,
            color: "white"
        }}
        >
        <h2 style={{color:"black"}}>{props.name}</h2>
        <p style={{color:"black"}}>{props.age}</p>
        <p style={{color:"black"}}>{props.salary}</p>
        <p style={{color:"black"}}>{props.job}</p>
        <button>{props.btn}</button>
        </div>
    )
}
export default Card;