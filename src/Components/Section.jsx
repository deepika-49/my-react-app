import Card from "./Card";
function  Section() {
return (
    <div style={{
        backgroundColor:"white",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
    }}>
        <Card
        name="Deepika"
        age="21"
        salary="22lpa"
        job="Full-Stack Developer"
        btn="check"
        />
        <Card
        name="Bhanu"
        age="19"
        salary="24lpa"
        job="Service Now Developer"
        btn="check"
        />
        <Card
        name="Bhavya"
        age="23"
        salary="24lpa"
        job="SAP Developer"
        btn="check"
        />
        <Card
        name="Vinoothna"
        age="23"
        salary="24lpa"
        job="ML Engineer"
        btn="check"
        />
        
    </div>
);
}

export  default Section;