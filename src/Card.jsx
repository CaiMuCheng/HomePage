import "./Card.css"

const HOSTNAME = "https://sumucheng.mucute.cn"

export default function Card(props) {
    const titleIsUndef = props.title == null;
    const descriptionIsUndef = props.description == null;
    return <div
        className="card"
        onClick={() => {
            window.open(`${HOSTNAME}${props.icon}`, "_blank");
        }}
        style={{
            minWidth: "300px",
            height: "auto",
            marginBottom: "40px",
            marginRight: "25px",
            marginLeft: "25px",
            userSelect: "none"
        }}>
        <img src={props.icon} style={{
            width: "300px",
            height: "190px",
            backgroundSize: "cover",
            objectFit: "cover"
        }}></img>
        <div style={{
            display: titleIsUndef && descriptionIsUndef ? "none" : "flex",
            flexDirection: "column",
            width: "290px",
            minHeight: "50px",
            paddingBottom: "10px",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            left: 5,
            right: 5,
            bottom: 5,
            top: 5,
            userSelect: "none"
        }}>
            <div className="cardTitle">{props.title}</div>
            <div className="cardDescription">{props.children}</div>
        </div>
    </div>
}