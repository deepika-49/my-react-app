function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.heading}>
                Welcome to my Website
            </h1>
            <p style={styles.paragraph}>
                Create. Explore. Inspire
            </p>
            <button style={styles.button}>
                Get Started
            </button>
        </header>
    );
}
const styles={
    header:{
        backgroundColor:"#e5edf7",
        textAlign:"center",
        padding:"100px 20px"
    },
    heading: {
        color: "black"
    },
    paragraph: {
        color: "black",
        fontSize: "18px"
    },
    button: {
        marginTop: "20px",
        padding: "12px 25px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px"
    }
    
}
export default Header;