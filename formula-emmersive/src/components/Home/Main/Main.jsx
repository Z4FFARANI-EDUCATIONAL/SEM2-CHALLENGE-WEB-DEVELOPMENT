import { GlobalResponsive } from '../Media.jsx'
import Section1 from './Section1/Section1.jsx'
import Section2 from './Section2/Section2.jsx'
import Section3 from './Section3/Section3.jsx'

export default function Main() {
    return (
        <>
            <GlobalResponsive />
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    )
}