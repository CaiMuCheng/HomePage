import "./Body.css"
import Card from "./Card"
import Picture_0 from "./assets/Picture_0.png"
import Picture_1 from "./assets/Picture_1.jpg"
import Picture_2 from "./assets/Picture_2.jpeg"
import Picture_3 from "./assets/Picture_3.jpg"
import Picture_4 from "./assets/Picture_4.jpeg"
import Picture_5 from "./assets/Picture_5.png"
import Picture_6 from "./assets/Picture_6.jpg"
import Picture_7 from "./assets/Picture_7.png"
import Picture_8 from "./assets/Picture_8.png"
import Picture_9 from "./assets/Picture_9.png"
import Picture_10 from "./assets/Picture_10.jpg"
import Picture_11 from "./assets/Picture_11.jpg"
import Picture_12 from "./assets/Picture_12.png"
import Picture_13 from "./assets/Picture_13.png"
import Picture_14 from "./assets/Picture_14.png"
import Picture_15 from "./assets/Picture_15.jpg"
import Picture_16 from "./assets/Picture_16.jpg"
import Picture_17 from "./assets/Picture_17.png"
import Picture_18 from "./assets/Picture_18.jpg"
import Picture_19 from "./assets/Picture_19.jpg"
import Picture_20 from "./assets/Picture_20.jpeg"

const ICONS = [
    Picture_0,
    Picture_1,
    Picture_2,
    Picture_3,
    Picture_4,
    Picture_5,
    Picture_6,
    Picture_7,
    Picture_8,
    Picture_9,
    Picture_10,
    Picture_11,
    Picture_12,
    Picture_13,
    Picture_14,
    Picture_15,
    Picture_16,
    Picture_17,
    Picture_18,
    Picture_19,
    Picture_20
]

const titles = []
const descriptions = []

export default function Body() {
    return <div id="content">
        <h3 id="contentTitle">图片壁纸</h3>
        <span id="contentDivider"></span>
        <div id="contentCards">
            {[].concat(ICONS).map((icon, index) => {
                return <Card key={index} title={titles[index]} icon={icon}>{descriptions[index]}</Card>
            })}
        </div>
        <h3 id="contentTitle">关于本站</h3>
        <span id="contentDivider"></span>
        <p>本站由苏沐橙 (SuMuCheng) 制作</p>
        <p>欢迎来关注我的 BiliBili <a href="https://space.bilibili.com/410063503">账号</a>，我的 QQ 号: 3578557729</p>
        <p>Copyright 2023 SuMuCheng All Rights Reserved.</p>
    </div>
}