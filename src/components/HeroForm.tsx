import useMarvelCharacters from "hooks/useMarvelCharacters"
import React from "react"
import { useLocation } from "react-router-dom"
import { Character } from "types/data"

export default function HeroForm() {
	const { pathname } = useLocation()
	const { data, deleteMarvel, updateMarvel } = useMarvelCharacters()

	const [form, setForm] = React.useState<Character>({} as Character)

	React.useEffect(() => {
		const marvel = data.find((f: Character) => `/${f.id}` === pathname)
		if (data.length > 0 && marvel) {
			setForm(marvel)
		}
		else {
			setForm({} as Character)
		}
	}, [data, pathname])

	const handleUpdate = (e: React.MouseEvent) => {
		e.preventDefault()
		updateMarvel(form)
	}

	const handleDelete = (e: React.MouseEvent) => {
		e.preventDefault()
		deleteMarvel(form.id)
	}

	return (
		<div style={{ display: "inline-flex" }}>
			<div className='awesome-meter' style={{ "--meter-score": `${100 - form.meter}%`, minHeight: "100px", display: "inline-grid" } as React.CSSProperties} >
				{form.meter}
				<img alt={form.heroName} src={form.img} width='100%' height='100%' />
			</div>
			<form>
				<div style={{ display: "grid", gap: "1em" }}>
					<label>Name
						<input type='text' name='name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
					</label>

					<label>Hero Name
						<input type='text' name='hero-name' value={form.heroName} onChange={(e) => setForm({ ...form, heroName: e.target.value })} />
					</label>

					<label>Awesome-o-meter
						<input type='range' name='meter' min={0} max={100} value={form.meter} onChange={(e) => setForm({ ...form, meter: parseInt(e.target.value) })} />
					</label>

				</div>



				<div style={{ display: "grid", gridTemplateColumns: "100px 100px 10px", textAlign: "center", gap: "4em", float: "right", paddingTop: "2em" }}>
					<button className='btn-warning' onClick={handleDelete}>
						Dust Hero
					</button>
					<button className='btn-process' onClick={handleUpdate}>
						Update Hero
					</button>
				</div>

			</form>

		</div>

	)
}