import "./Header.css"

function Tip(props) {
    return <div id="Tip">
        <span style={{ color: "rgba(255,255,255,.6)" }}>/*&nbsp;</span>
        {props.text}
        <span style={{ color: "rgba(255,255,255,.6)" }}>&nbsp;*/</span>
    </div>
}

function ScrollDown() {
    return <span id="scrollDownIcon" onClick={() => {
        window.scrollTo({
            left: 0,
            top: document.querySelector("#header").offsetHeight + 5,
            behavior: "smooth"
    })
    }}></span>
}

export default function Header() {
    return <div id="header">
        <div id="title">苏沐橙の小站</div>
        <span id="divider"></span>
        <Tip text="Welcome to here." />
        <ScrollDown />
    </div>
}