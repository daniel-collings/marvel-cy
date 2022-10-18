import { Link } from "react-router-dom";

export default function List({ label, array }: any) {
    return (
        <ul data-test={`list-${label}`}>
            {array.map((o: any, i: any) => <li data-test={`${label}-listItem-${o.heroName}`} key={i}><Link to={o.heroName.replaceAll(' ', '')}>{o.heroName}</Link></li>)}
        </ul>
    )
}