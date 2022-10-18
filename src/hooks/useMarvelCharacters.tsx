import React from 'react'

export default function useMarvelCharacters() {
    const [data, setData] = React.useState<any>(undefined)

    React.useEffect(() => {
        fetch(`http://localhost:8080/characters/`)
            .then(res => res.json())
            .then(jsonData => setData(jsonData))
    }, [])

    return data
}