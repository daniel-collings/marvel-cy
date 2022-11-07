import React from "react"
import { Character } from "types/data"

export default function useMarvelCharacters() {
	const [data, setData] = React.useState<Character[]>([] as Character[])

	const fetchData = async () => {
		const res = await fetch("http://localhost:8080/characters/", { method: "GET" })
			.then(res => res.json())
			.then(d => {
				const sorted = d.sort((a: Character, b: Character) => b.meter - a.meter)
				return sorted
			}).catch(() => {
				return []
			})

		setData(res)

	}

	const deleteMarvel = (id: string) => {
		fetch(`http://localhost:8080/characters/${id}`, { method: "DELETE" })
			.then(() => {
				setData(data.filter(f => f.id !== id))
			})
	}

	const updateMarvel = (marvel: Character) => {
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(marvel)
		}

		fetch(`http://localhost:8080/characters/${marvel.id}`, requestOptions)
			.then(() => {
				setData([...data.filter(f => f.id !== marvel.id), marvel])
			})

	}

	React.useEffect(() => {
		fetchData()
	}, [])

	return { data, deleteMarvel, updateMarvel, forceFetch: fetchData }
}