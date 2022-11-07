import useMarvelCharacters from "hooks/useMarvelCharacters"

export default function Home() {
	const { data } = useMarvelCharacters()

	return (
		<div style={{ gridTemplateColumns: "1fr" }}>
			<h2>Cy.Marvel</h2>
			{!data.length && <>Waiting. . .</>}
			{
				data.length > 1 &&
				(
					<>
						<h3>The top 3 most awesome Marvel characters are...</h3>
						<img alt={data[1].heroName} src={data[1].img} width='30%' height='100%' />
						<img alt={data[0].heroName} src={data[0].img} width='43%' height='100%' />
						<img alt={data[2].heroName} src={data[2].img} width='22%' height='100%' />
					</>
				)
			}
		</div>
	)
}