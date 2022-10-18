import useMarvelCharacters from "hooks/useMarvelCharacters"

export default function Home() {
    const characters = useMarvelCharacters()

    if (!characters) return <>Loading...</>

    const bestMarvelCharacter = characters.sort((a: any, b: any) => b.meter - a.meter)

    return (
        <div style={{ gridTemplateColumns: '1fr' }}>
            <h2>Cy.Marvel</h2>
            <h3>The top 3 most awesome Marvel characters are...</h3>
            <img alt={bestMarvelCharacter[1].heroName} src={bestMarvelCharacter[1].img} width='30%' height='100%' />
            <img alt={bestMarvelCharacter[0].heroName} src={bestMarvelCharacter[0].img} width='43%' height='100%' />
            <img alt={bestMarvelCharacter[2].heroName} src={bestMarvelCharacter[2].img} width='22%' height='100%' />
        </div>
    )
}