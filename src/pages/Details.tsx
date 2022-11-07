import HeroForm from "components/HeroForm"
import useMarvelCharacters from "hooks/useMarvelCharacters"
import { useLocation } from "react-router-dom"
import { Character } from "types/data"

export default function Details() {
	const { pathname } = useLocation()
	const { data } = useMarvelCharacters()

	const hero = data.find((f: Character) => `/${f.id}` === pathname)

	return (
		<div data-test={"marvel-container"}>
			<h2>{hero?.heroName}</h2>
			<div data-test={`marvel-${hero?.heroName}`} className='details-layout'>
				<HeroForm />
			</div>
		</div>
	)
}
