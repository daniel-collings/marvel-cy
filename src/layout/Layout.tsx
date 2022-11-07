import useMarvelCharacters from "hooks/useMarvelCharacters"
import { Link, Outlet } from "react-router-dom"
import List from "../components/List"

export default function Layout() {
	const { data } = useMarvelCharacters()

	return (
		<div className="App">
			<Link to='/'><h1>Cy.Marvel</h1></Link>
			<small>This simple React app was built for the purpose of running Cypress e2e testing.</small>
			<div>
				<div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
					{!data && <>Loading. . .</>}
					{data && <List label="Marvel" array={data} />}
				</div>
				<div style={{ textAlign: "center" }}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}