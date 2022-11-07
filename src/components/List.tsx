import { Link } from "react-router-dom"
import { Character } from "types/data"

type Item<T> = T

interface IList{
	label: string
	array: Item<Character>[]
}


export default function List({ label, array }: IList) {
	return (
		<ul data-test={`list-${label}`}>
			{array.map((o: Character, i: number) => <li data-test={`${label}-listItem-${o.heroName}`} key={i}><Link to={`${o.id}`}>{o.heroName}</Link></li>)}
		</ul>
	)
}