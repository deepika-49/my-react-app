function Navbar() {
    return (
        <nav
        style={{
        backgroundColor: "black",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        }}
        >
        <h2>Navbar</h2>
        <ul
        style={{
            display:"flex",
            gap:"20px",
            listStyle:"none",
        }}>
            <a href="#">Home</a>
            <a href="#">services</a>
            <a href="#">Contact</a>
        </ul>
        <button
        style={{
            padding: "10px 15px",
            backgroundColor: "orange",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >
        Login
        </button>
        </nav>
    );
}
export default Navbar;