import { GlobalResponsive } from "../Media.jsx"
import Section1 from "../Main/Section1/Section1.jsx"
import Section2 from "../Main/Section2/Section2.jsx"
import Section3 from "../Main/Section3/Section3.jsx"
import Section4 from "../Main/Section4/Section4.jsx"

export default function Main() {
    return (
        <>
            <GlobalResponsive />
            <div className="divLive">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
        </>
    )
}   