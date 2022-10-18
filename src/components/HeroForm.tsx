import React from "react"
import { useEffect } from "react"

export default function HeroForm({ data }: any) {
    const formRef = React.useRef(null)

    const [form, setForm] = React.useState<any>()
    useEffect(() => {
        setForm(data)
    }, [data])

    const updateMarvel = async (e: any) => {
        e.preventDefault()

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };

        await fetch(`http://localhost:8080/characters/${form.id}`, requestOptions)
            .then(res => console.log(res.json()))
    }

    const deleteMarvel = async (e: any) => {
        e.preventDefault()
        await fetch(`http://localhost:8080/characters/${form.id}`, { method: 'DELETE' })
            .then(res => console.log(res.json()))
    }

    if (!form) return <></>
    return (
        <div style={{ display: 'inline-flex' }}>
            <form ref={formRef}>
                <div style={{ display: 'grid', gap: '1em' }}>
                    <label>Name
                        <input type='text' name='name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </label>

                    <label>Hero Name
                        <input type='text' name='hero-name' value={form.heroName} onChange={(e) => setForm({ ...form, heroName: e.target.value })} />
                    </label>

                    <label>Awesome-o-meter
                        <input type='range' name='meter' min={0} max={100} value={form.meter} onChange={(e) => setForm({ ...form, meter: e.target.value })} />
                    </label>
                    <div className='awesome-meter' style={{ "--meter-score": `${100 - form.meter}%`, minHeight: '100px', display: 'inline-grid' } as React.CSSProperties} >
                        {form.meter}
                    </div>
                </div>


                <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 10px', textAlign: 'center', gap: '4em', float: 'right', paddingTop: '2em' }}>
                    <button className='btn-warning' onClick={deleteMarvel}>
                        Dust Hero
                    </button>
                    <button className='btn-process' onClick={updateMarvel}>
                        Update Hero
                    </button>
                </div>

            </form>

        </div>

    )
}